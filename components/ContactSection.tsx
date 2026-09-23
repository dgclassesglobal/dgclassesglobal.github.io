import { Mail, MapPin, Phone } from "lucide-react";
import { offices, otherLocations, phones, site, whatsappLink } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="wrap py-16" id="contact">
      <p className="eyebrow">Contact</p>
      <h2 className="section-title mt-3">Talk to DG Classes.</h2>
      <p className="lede mt-4">The numbers, email, and offices below are the ones published on the current DG Classes website.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {phones.map((phone) => (
          <a key={phone.tel} href={`tel:${phone.tel}`} className="panel flex gap-3 p-5">
            <Phone size={18} className="mt-1 text-brand-dark" aria-hidden />
            <span>
              <span className="block text-sm text-muted">{phone.region}</span>
              <span className="font-semibold">{phone.number}</span>
            </span>
          </a>
        ))}
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <a href={`mailto:${site.email}`} className="panel flex gap-3 p-5">
          <Mail size={18} className="mt-1 text-brand-dark" aria-hidden />
          <span>
            <span className="block text-sm text-muted">Official email</span>
            <span className="font-semibold">{site.email}</span>
            <span className="mt-1 block text-sm text-muted">Also used on the site: {site.emailAlt}</span>
          </span>
        </a>
        <a href={whatsappLink("Hello DG Classes Global, I would like to enquire.")} className="panel flex gap-3 p-5" target="_blank" rel="noreferrer">
          <Phone size={18} className="mt-1 text-brand-dark" aria-hidden />
          <span>
            <span className="block text-sm text-muted">WhatsApp</span>
            <span className="font-semibold">{site.whatsappDisplay}</span>
          </span>
        </a>
        {offices.map((office) => (
          <div key={office.city} className="panel flex gap-3 p-5">
            <MapPin size={18} className="mt-1 text-brand-dark" aria-hidden />
            <span>
              <span className="block font-semibold">{office.label}</span>
              <span className="text-sm text-muted">{office.address}</span>
            </span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">Other locations listed on the site: {otherLocations.join(", ")}.</p>
    </section>
  );
}
