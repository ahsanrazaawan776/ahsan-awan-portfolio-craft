import { BarChart3, Code2, ShoppingBag } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const areas = [
  { id: "digital-marketing", icon: BarChart3, label: "Digital Marketing", title: "A practical approach to online visibility", copy: "Supporting businesses through SEO awareness, social content, online promotion and clear digital strategy." },
  { id: "web-development", icon: Code2, label: "Web Development", title: "Websites grounded in business needs", copy: "Building responsive business and e-commerce experiences with modern frontend tools and database integration." },
  { id: "business", icon: ShoppingBag, label: "Business & E-commerce", title: "Hands-on online business operations", copy: "Managing products, customers, website activity, online sales and day-to-day workflows through NaturalSaltLamp.Shop." },
];

export default function ProfessionalAreas() {
  return <section className="section-shell bg-muted/35"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Secondary expertise" title="Digital capability that supports the bigger picture" /><div className="mt-12 grid gap-6 lg:grid-cols-3">{areas.map(({ id, icon: Icon, label, title, copy }) => <article id={id} key={id} className="rounded-lg border border-border bg-card p-7"><Icon className="h-7 w-7 text-primary" /><p className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-primary">{label}</p><h3 className="mt-3 text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{copy}</p></article>)}</div></div></section>;
}