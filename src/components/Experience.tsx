import { Check, Plane } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  const primary = experiences[0];
  return <section id="experience" className="section-shell bg-background">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <SectionHeading eyebrow="Primary experience" title="Travel & Tours operations" copy="Accurate information, clear documentation and reliable coordination sit at the center of my current work." />
      <div className="mt-12 grid overflow-hidden rounded-lg border border-border bg-card shadow-premium lg:grid-cols-[.8fr_1.2fr]">
        <div className="bg-primary p-8 text-primary-foreground md:p-10"><Plane className="h-10 w-10 text-highlight" /><p className="mt-10 text-xs font-bold uppercase tracking-[0.16em] text-highlight">{primary.period}</p><h3 className="mt-3 text-3xl font-semibold">{primary.role}</h3><p className="mt-2 text-primary-foreground/65">{primary.company}</p><p className="mt-8 leading-7 text-primary-foreground/75">{primary.summary}</p></div>
        <div className="p-8 md:p-10"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Core responsibilities</p><div className="mt-6 grid gap-4 sm:grid-cols-2">{primary.responsibilities.map((item) => <div key={item} className="flex gap-3 text-sm leading-6"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary"><Check className="h-3 w-3" /></span>{item}</div>)}</div></div>
      </div>
      <div className="mt-20 grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
        <SectionHeading eyebrow="Career path" title="Professional experience timeline" />
        <div>{experiences.map((item, index) => <article key={item.company} className="relative border-l border-border pb-12 pl-8 last:pb-0"><span className={`absolute -left-[7px] top-1 h-3 w-3 rounded-full ring-4 ring-background ${index === 0 ? "bg-primary" : "bg-muted-foreground"}`} /><div className="flex flex-wrap items-start justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{item.period}</p><h3 className="mt-2 text-xl font-semibold">{item.role}</h3><p className="mt-1 text-sm text-muted-foreground">{item.company}</p></div>{item.featured && <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">Current focus</span>}</div><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{item.summary}</p></article>)}</div>
      </div>
    </div>
  </section>;
}