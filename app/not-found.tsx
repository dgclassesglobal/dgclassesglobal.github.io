import Link from "next/link";

export default function NotFound() {
  return (
    <div className="wrap py-24">
      <p className="eyebrow">404</p>
      <h1 className="section-title mt-3">This page is not on the DG Classes site.</h1>
      <p className="lede mt-4">Try the courses, the journal, or the contact page.</p>
      <div className="mt-6 flex gap-3">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>
        <Link href="/contact/" className="btn btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  );
}
