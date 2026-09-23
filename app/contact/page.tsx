import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { EnquiryForm } from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact DG Classes Global in Sharjah, Dubai, Oman, and India. Phone, email, WhatsApp, and enquiry form.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <div className="wrap pt-12">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-4 max-w-3xl">Reach DG Classes.</h1>
        <p className="lede mt-5">Plan the next class, ask about a course, or book a demo. The details below match the live website.</p>
      </div>
      <ContactSection />
      <section className="wrap pb-16">
        <EnquiryForm />
      </section>
    </>
  );
}
