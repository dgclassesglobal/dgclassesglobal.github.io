import { MessageCircle } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";

export function FloatingContactButton() {
  return (
    <a
      className="float-wa"
      href={whatsappLink("Hello DG Classes Global, I would like to enquire about a course.")}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp DG Classes on ${site.whatsappDisplay}`}
    >
      <MessageCircle size={22} aria-hidden />
    </a>
  );
}
