export const site = {
  name: "DG Classes Global",
  shortName: "DG Classes",
  url: "https://dgclassesglobal.github.io",
  title: "DG Classes Global | Commerce Education",
  description:
    "DG Classes Global is a commerce education institute founded in 2012 by Sir Divesh Gamnani. Online and offline coaching for Grade 11 and 12 Commerce, undergraduate and postgraduate programmes, CA, CS, ACCA, and British & IB courses across India and the Middle East.",
  email: "dgclassesglobal@gmail.com",
  emailAlt: "dgclassesjodhpur@gmail.com",
  whatsapp: "96879077656",
  whatsappDisplay: "+968-7907-7656",
  whatsappChannel: "https://whatsapp.com/channel/0029Vb4hGlDL7UVXVaCG0z38",
  instagram: "https://www.instagram.com/dgclassesglobal/",
  facebook: "https://www.facebook.com/people/DG-Classes-Global/61565968990538/",
  studentPortal: "https://dgclassesglobal.com/student-portal/",
  officialSite: "https://dgclassesglobal.com/",
  logo: "https://dgclassesglobal.com/wp-content/uploads/2024/11/D.g.-clases-logo.webp",
  logoMark: "https://dgclassesglobal.com/wp-content/uploads/2024/11/cropped-D.g.-clases-logo.webp",
  favicon: "https://dgclassesglobal.com/wp-content/uploads/2024/11/cropped-D.g.-clases-logo-32x32.webp",
  appleIcon: "https://dgclassesglobal.com/wp-content/uploads/2024/11/cropped-D.g.-clases-logo-180x180.webp",
  founderPhoto:
    "https://dgclassesglobal.com/wp-content/uploads/2025/02/devesh-removebg-preview-e1750104070371.png",
  founderSignature:
    "https://dgclassesglobal.com/wp-content/uploads/2025/02/sirsign-removebg-preview.png",
  welcomeVideo:
    "https://dgclassesglobal.com/wp-content/uploads/2025/02/WELCOME-TO-D.G.-CLASSES-DG-CLASSES-720p-h264-online-video-cutter.com_.mp4",
  founded: 2012,
  studentsMentored: "5,000+",
} as const;

export const phones = [
  { region: "United Arab Emirates", flag: "AE", number: "+971-56988-5170", tel: "+971569885170" },
  { region: "Oman", flag: "OM", number: "+968-7907-7656", tel: "+96879077656" },
  { region: "India", flag: "IN", number: "+91-77378-880-110", tel: "+9177378880110" },
] as const;

export const offices = [
  {
    city: "Sharjah",
    label: "Sharjah Office",
    address: "#405, Faisal 1 Building, King Faisal Road, Al Qasimia, Behind Nesto Market, Sharjah",
  },
  {
    city: "Dubai",
    label: "Dubai Office",
    address: "Office #203, NBQ Building, Burjuman MS Exit 4, Bur Dubai, Dubai",
  },
] as const;

export const otherLocations = ["United Arab Emirates", "Oman", "Qatar", "Kuwait", "Saudi Arabia"] as const;

export const media = {
  classroom: "/images/hero/classroom-session.jpg",
  founderLocal: "/images/faculty/divesh-gamnani.png",
  seminar: "https://dgclassesglobal.com/wp-content/uploads/2025/01/seminar.jpeg",
  slideClass: "https://dgclassesglobal.com/wp-content/uploads/slider4/DSC00829.jpeg",
  slideGroup: "https://dgclassesglobal.com/wp-content/uploads/slider4/20190602_173409.jpeg",
  slideHall: "https://dgclassesglobal.com/wp-content/uploads/slider4/1560225817444.jpeg",
  sessionA: "https://dgclassesglobal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-7.03.27-PM-3.jpeg",
  sessionB: "https://dgclassesglobal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-7.37.28-PM-scaled.jpeg",
  sessionC: "https://dgclassesglobal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-7.31.56-PM-1.jpeg",
  sessionD: "https://dgclassesglobal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-7.37.16-PM.jpeg",
  sessionE: "https://dgclassesglobal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-7.37.00-PM-scaled.jpeg",
  sessionF: "https://dgclassesglobal.com/wp-content/uploads/2026/02/WhatsApp-Image-2026-02-18-at-7.51.22-PM-scaled.jpeg",
  boardA: "https://dgclassesglobal.com/wp-content/uploads/2025/01/IMG_20180126_235427_630.jpg",
  boardB: "https://dgclassesglobal.com/wp-content/uploads/2025/01/IMG_20180126_234222_396-2.jpg",
  fh: "https://dgclassesglobal.com/wp-content/uploads/2025/01/fh-scaled.jpeg",
} as const;

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject: string, body: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
