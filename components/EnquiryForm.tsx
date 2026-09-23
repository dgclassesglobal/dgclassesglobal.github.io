"use client";

import { useEffect, useState, type FormEvent } from "react";
import { courseOptions } from "@/lib/courses";
import { mailtoLink, site, whatsappLink } from "@/lib/site";

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

function enquiryText(values: Fields) {
  return [
    "Hello DG Classes Global, I would like to enquire.",
    "",
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Mobile: ${values.mobile.trim()}`,
    `Course: ${values.course}`,
    `Subject: ${values.subject.trim()}`,
    `Message: ${values.message.trim()}`,
  ].join("\n");
}

export function EnquiryForm({
  heading = "Ready to take the next step?",
  text = "Tell us the course you have in mind. Your enquiry opens in WhatsApp or email so it reaches the DG Classes numbers already published on the website.",
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
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [prepared, setPrepared] = useState("");

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
    setStatus("idle");
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
    const body = enquiryText(nextValues);
    setPrepared(body);
    setStatus("success");
    window.open(whatsappLink(body), "_blank", "noopener,noreferrer");
  }

  return (
    <div id="enquire" className="panel scroll-mt-28 p-5 sm:p-8">
      <p className="eyebrow">Enquiry</p>
      <h2 className="section-title mt-3 text-[2rem]">{heading}</h2>
      <p className="lede mt-3">{text}</p>

      {status === "success" ? (
        <div className="mt-6 rounded-2xl border border-line bg-brand-light p-5 text-ink" role="status">
          <p className="font-semibold">Your enquiry is ready to send.</p>
          <p className="mt-2 text-sm">
            WhatsApp should have opened with your message to {site.whatsappDisplay}. If it did not, use the buttons below. This page does not store the form on a server.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a className="btn btn-primary" href={whatsappLink(prepared)} target="_blank" rel="noreferrer">
              Open WhatsApp
            </a>
            <a className="btn btn-secondary" href={mailtoLink(values.subject, prepared)}>
              Email instead
            </a>
            <button type="button" className="btn btn-ghost" onClick={() => setStatus("idle")}>
              Edit details
            </button>
          </div>
        </div>
      ) : (
        <form className="mt-6 grid gap-4" onSubmit={submit} noValidate>
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
          <div className="flex flex-wrap gap-3">
            <button type="submit" className="btn btn-primary" value="enquire">
              Enquire Now
            </button>
            <button type="submit" className="btn btn-secondary" value="demo">
              Book a Demo Class
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
