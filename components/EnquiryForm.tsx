"use client";

import { useEffect, useState, type FormEvent } from "react";
import { courseOptions } from "@/lib/courses";
import { site, whatsappLink } from "@/lib/site";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
// Inlined at build time. In GitHub Actions it comes from the WEB3FORMS_ACCESS_KEY repository secret.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "";

type Fields = {
  name: string;
  email: string;
  mobile: string;
  course: string;
  subject: string;
  message: string;
};

const empty: Fields = { name: "", email: "", mobile: "", course: "", subject: "", message: "" };

function validate(values: Fields) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email address.";
  if (values.mobile.replace(/\D/g, "").length < 8) errors.mobile = "Enter a mobile number with at least 8 digits.";
  if (!values.course) errors.course = "Choose a course.";
  if (values.subject.trim().length < 2) errors.subject = "Add a subject.";
  if (values.message.trim().length < 10) errors.message = "Please write a short message.";
  return errors;
}

function enquiryFormData(values: Fields, asDemo: boolean) {
  const data = new FormData();
  data.append("access_key", WEB3FORMS_ACCESS_KEY);
  data.append("subject", `Website enquiry: ${values.subject.trim()} – ${values.course}`);
  data.append("from_name", `${site.name} website`);
  data.append("name", values.name.trim());
  data.append("email", values.email.trim());
  data.append("mobile", values.mobile.trim());
  data.append("course", values.course);
  data.append("enquiry_type", asDemo ? "Demo class" : "General enquiry");
  data.append("message", values.message.trim());
  data.append("page", window.location.href);
  return data;
}

export function EnquiryForm({
  heading = "Ready to take the next step?",
  text = "Tell us the course you have in mind. Your enquiry goes straight to the DG Classes team, who will get back to you by email or phone.",
  intent,
  defaultCourse = "",
}: {
  heading?: string;
  text?: string;
  intent?: string;
  defaultCourse?: string;
}) {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  // "error" = validation problems, "failed" = the enquiry could not be sent.
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error" | "failed">("idle");
  const [action, setAction] = useState<"enquire" | "demo">("enquire");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const demo = params.get("intent") === "demo" || intent === "demo";
    if (demo) {
      setValues((current) => ({
        ...current,
        subject: current.subject || "Demo Class",
        message: current.message || "I would like to book a demo class.",
      }));
    }
    const course = params.get("course") || defaultCourse;
    if (course && courseOptions.includes(course)) {
      setValues((current) => ({ ...current, course }));
    }
  }, [intent, defaultCourse]);

  function update(key: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus((current) => (current === "sending" ? current : "idle"));
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const asDemo = submitter?.value === "demo";
    const nextValues = asDemo
      ? {
          ...values,
          subject: values.subject.trim() || "Demo Class",
          message: values.message.trim() || "I would like to book a demo class.",
        }
      : values;
    if (asDemo) setValues(nextValues);
    const nextErrors = validate(nextValues);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus("error");
      return;
    }
    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("Web3Forms access key is missing. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY when building the site.");
      setStatus("failed");
      return;
    }

    setAction(asDemo ? "demo" : "enquire");
    setStatus("sending");
    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: enquiryFormData(nextValues, asDemo),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean; message?: string } | null;
      if (!response.ok || !result?.success) {
        throw new Error(result?.message || `Web3Forms responded with HTTP ${response.status}`);
      }
      setStatus("success");
    } catch (error) {
      console.error("Enquiry could not be sent:", error);
      setStatus("failed");
    }
  }

  function startAgain() {
    setValues((current) => ({ ...empty, course: current.course }));
    setErrors({});
    setStatus("idle");
  }

  const sending = status === "sending";

  return (
    <div id="enquire" className="panel scroll-mt-28 p-5 sm:p-8">
      <p className="eyebrow">Enquiry</p>
      <h2 className="section-title mt-3 text-[2rem]">{heading}</h2>
      <p className="lede mt-3">{text}</p>

      {status === "success" ? (
        <div className="mt-6 rounded-2xl border border-line bg-brand-light p-5 text-ink" role="status">
          <p className="font-semibold">Thank you. Your enquiry has been sent.</p>
          <p className="mt-2 text-sm">
            The DG Classes team will get back to you soon on the email address or mobile number you shared.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" className="btn btn-secondary" onClick={startAgain}>
              Send another enquiry
            </button>
          </div>
        </div>
      ) : (
        <form className="mt-6 grid gap-4" onSubmit={submit} noValidate aria-busy={sending}>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" value={values.name} error={errors.name} onChange={update} autoComplete="name" />
            <Field label="Email" name="email" type="email" value={values.email} error={errors.email} onChange={update} autoComplete="email" />
            <Field label="Mobile number" name="mobile" type="tel" value={values.mobile} error={errors.mobile} onChange={update} autoComplete="tel" />
            <label className="block text-sm font-semibold">
              Course
              <select
                className={`field mt-1.5 ${errors.course ? "field-error" : ""}`}
                value={values.course}
                onChange={(event) => update("course", event.target.value)}
                aria-invalid={Boolean(errors.course)}
                required
              >
                <option value="">Select a course</option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
              {errors.course ? <span className="error-text">{errors.course}</span> : null}
            </label>
          </div>
          <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={update} />
          <label className="block text-sm font-semibold">
            Message
            <textarea
              className={`field mt-1.5 min-h-32 ${errors.message ? "field-error" : ""}`}
              value={values.message}
              onChange={(event) => update("message", event.target.value)}
              aria-invalid={Boolean(errors.message)}
              required
            />
            {errors.message ? <span className="error-text">{errors.message}</span> : null}
          </label>
          {status === "error" ? (
            <p className="error-text" role="alert">
              Please correct the highlighted fields.
            </p>
          ) : null}
          {status === "failed" ? (
            <p className="error-text" role="alert">
              Sorry, your enquiry could not be sent. Please try again, or contact us on{" "}
              <a className="underline" href={whatsappLink("Hello DG Classes Global, I would like to enquire.")} target="_blank" rel="noreferrer">
                WhatsApp ({site.whatsappDisplay})
              </a>{" "}
              or at{" "}
              <a className="underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          ) : null}
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="btn btn-primary disabled:cursor-wait disabled:opacity-70" value="enquire" disabled={sending}>
              {sending && action === "enquire" ? "Sending…" : "Enquire Now"}
            </button>
            <button type="submit" className="btn btn-secondary disabled:cursor-wait disabled:opacity-70" value="demo" disabled={sending}>
              {sending && action === "demo" ? "Sending…" : "Book a Demo Class"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: keyof Fields;
  value: string;
  error?: string;
  onChange: (key: keyof Fields, value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <input
        className={`field mt-1.5 ${error ? "field-error" : ""}`}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(name, event.target.value)}
        aria-invalid={Boolean(error)}
        required
      />
      {error ? <span className="error-text">{error}</span> : null}
    </label>
  );
}
