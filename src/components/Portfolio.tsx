import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const filters = ["All", "Travel & Tours", "Web Development", "E-commerce", "Business Websites", "Digital Marketing", "Business", "Other"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.filters.includes(filter));
  return <section id="projects" className="section-shell bg-background"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionHeading eyebrow="Verified projects" title="Digital work for real businesses" copy="Selected web projects across travel, professional services and e-commerce." />
    <div className="mt-10 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Project filters">{filters.map((item) => <Button key={item} size="sm" variant={filter === item ? "default" : "outline"} onClick={() => setFilter(item)} className="shrink-0" role="tab" aria-selected={filter === item}>{item}</Button>)}</div>
    <div className="mt-8 grid gap-6 lg:grid-cols-2">{visible.map((project, index) => <article key={project.title} className={`group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-premium ${project.featured && filter === "All" ? "lg:col-span-2 lg:grid lg:grid-cols-[1.2fr_.8fr]" : ""}`}>
      <div className="relative min-h-64 overflow-hidden"><img src={project.image} alt={`${project.title} website project preview`} width={1200} height={760} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />{project.featured && <span className="absolute left-4 top-4 rounded-full bg-highlight px-3 py-1 text-xs font-bold text-highlight-foreground">Featured travel project</span>}</div>
      <div className="flex flex-col justify-center p-7 md:p-9"><p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{project.category}</p><h3 className="mt-3 text-2xl font-semibold">{project.title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{project.description}</p><div className="mt-5 flex flex-wrap gap-2">{project.technologies.map((tag) => <span key={tag} className="rounded-md bg-muted px-2.5 py-1.5 text-xs text-muted-foreground">{tag}</span>)}</div><div className="mt-7"><Button asChild><a href={project.url} target="_blank" rel="noopener noreferrer">View Live Website <ExternalLink /></a></Button></div></div>
    </article>)}</div>
    {visible.length === 0 && <div className="mt-8 rounded-lg border border-dashed border-border py-16 text-center text-sm text-muted-foreground">New work in this category can be added from the admin dashboard.</div>}
  </div></section>;
}