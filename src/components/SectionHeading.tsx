import { cn } from "@/lib/utils";

export function SectionHeading({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-primary">{eyebrow}</p>
      <h2 className={cn("text-3xl font-semibold leading-tight md:text-5xl", light ? "text-primary-foreground" : "text-foreground")}>{title}</h2>
      {copy && <p className={cn("mt-5 text-base leading-7 md:text-lg", light ? "text-primary-foreground/70" : "text-muted-foreground")}>{copy}</p>}
    </div>
  );
}