export function SectionHeading({ eyebrow, title, align = "left" }: { eyebrow: string; title: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl text-foreground md:text-5xl">{title}</h2>
    </div>
  );
}
