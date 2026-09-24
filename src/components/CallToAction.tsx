import { ArrowRight, BriefcaseBusiness, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CallToAction() {
  return <section className="border-y border-border bg-highlight py-14 text-highlight-foreground"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8"><div><p className="text-xs font-bold uppercase tracking-[0.16em] opacity-70">Open to professional opportunities</p><h2 className="mt-3 text-3xl font-semibold">Ready to work together?</h2></div><div className="flex flex-wrap gap-3"><Button asChild><a href="#contact"><BriefcaseBusiness />Contact Me</a></Button><Button variant="outline" asChild><a href="#projects"><Eye />View Projects</a></Button></div></div></section>;
}