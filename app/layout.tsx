import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";
import { Navbar } from "@/components/Navbar";
import { media, site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s | DG Classes Global",
  },
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.name,
    images: [{ url: media.classroom, alt: "DG Classes students in class" }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [media.classroom],
  },
  icons: {
    icon: site.favicon,
    apple: site.appleIcon,
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('dg-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: ["+971569885170", "+96879077656", "+9177378880110"],
    foundingDate: "2012",
    founder: {
      "@type": "Person",
      name: "Divesh Gamnani",
    },
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "#405, Faisal 1 Building, King Faisal Road, Al Qasimia, Behind Nesto Market",
        addressLocality: "Sharjah",
        addressCountry: "AE",
      },
      {
        "@type": "PostalAddress",
        streetAddress: "Office #203, NBQ Building, Burjuman MS Exit 4, Bur Dubai",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    ],
    sameAs: [site.instagram, site.facebook, site.whatsappChannel, site.officialSite],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://dgclassesglobal.com" />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <div className="site-wrap">
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </div>
        <FloatingContactButton />
        <div className="mobile-cta md:hidden">
          <a className="btn btn-secondary flex-1" href="/contact/">
            Enquire Now
          </a>
          <a className="btn btn-primary flex-1" href="/contact/?intent=demo#enquire">
            Book a Demo
          </a>
        </div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      </body>
    </html>
  );
}
