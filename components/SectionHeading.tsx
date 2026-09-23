export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? <p className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>{eyebrow}</p> : null}
      <h2 className="section-title mt-3">{title}</h2>
      {text ? <p className={`lede mt-4 ${align === "center" ? "mx-auto" : ""}`}>{text}</p> : null}
    </div>
  );
}
