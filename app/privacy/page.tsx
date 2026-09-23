import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How enquiries on this DG Classes Global website are handled.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <article className="wrap max-w-3xl py-12">
      <h1 className="section-title">Privacy</h1>
      <div className="prose-dg mt-6">
        <p>
          This website is a static presentation of DG Classes Global. The enquiry form does not save your details on a server run by this site. When you submit, the message is prepared for WhatsApp ({site.whatsappDisplay}) or email ({site.email}), and you send it yourself.
        </p>
        <p>
          Please do not include sensitive documents in the form. For questions about information already held by the institute, write to {site.email} or use the phone numbers on the contact page.
        </p>
        <p>The official student portal remains at the DG Classes login. This site does not collect portal passwords.</p>
      </div>
    </article>
  );
}
