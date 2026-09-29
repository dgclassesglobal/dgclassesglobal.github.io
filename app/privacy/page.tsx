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
          This website is a static presentation of DG Classes Global. The enquiry form does not save your details on a server run by this site. When you submit it, your details are sent through Web3Forms, a third-party form service, which delivers them to DG Classes by email. You can also contact us directly on WhatsApp ({site.whatsappDisplay}) or by email ({site.email}).
        </p>
        <p>
          Please do not include sensitive documents in the form. For questions about information already held by the institute, write to {site.email} or use the phone numbers on the contact page.
        </p>
        <p>The official student portal remains at the DG Classes login. This site does not collect portal passwords.</p>
      </div>
    </article>
  );
}
