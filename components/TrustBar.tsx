const facts = [
  { label: "Founded", value: "2012", text: "Mumbai and Rajasthan" },
  { label: "Students mentored", value: "5,000+", text: "By Sir Divesh Gamnani" },
  { label: "Experience", value: "10+ years", text: "More than a decade" },
  { label: "How students learn", value: "Hybrid", text: "Online and offline" },
];

export function TrustBar() {
  return (
    <section className="wrap pb-6" aria-label="DG Classes at a glance">
      <div className="trust-grid">
        {facts.map((fact) => (
          <div key={fact.label} className="trust-item">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted">{fact.label}</p>
            <p className="mt-1 text-3xl font-semibold tracking-tight">{fact.value}</p>
            <p className="text-sm text-muted">{fact.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
