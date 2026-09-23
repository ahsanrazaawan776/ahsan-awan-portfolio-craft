import { BriefcaseBusiness, Code2, Database, Plane } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

const areas = [
  { icon: Plane, title: "Travel & Tours Experience", copy: "Passenger data, documentation and travel operations support." },
  { icon: Code2, title: "Digital & Web Projects", copy: "Practical websites and online presence for real businesses." },
  { icon: BriefcaseBusiness, title: "Business Experience", copy: "Hands-on e-commerce, customer and daily operations management." },
  { icon: Database, title: "Professional Skills", copy: "Structured data, coordination, design and digital capabilities." },
];

export default function About() {
  return <>
    <section id="about" className="section-shell bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
        <SectionHeading eyebrow="Professional introduction" title="Travel expertise, strengthened by digital capability." />
        <div className="space-y-5 text-base leading-8 text-muted-foreground md:text-lg">
          <p className="text-xl font-medium leading-8 text-foreground">I work at the intersection of organized travel operations, dependable data handling and thoughtful customer support.</p>
          <p>My primary professional direction is Travel & Tours, where I support passenger records, documentation, visa processing, reservations and operational coordination. Alongside this, I build practical digital skills through website development, marketing, e-commerce and business operations.</p>
          <p>This combination helps me understand both the detail behind a service and the digital experience customers see.</p>
        </div>
      </div>
    </section>
    <section className="border-y border-border bg-muted/35 py-10">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {areas.map(({ icon: Icon, title, copy }) => <div key={title} className="bg-background p-6"><Icon className="mb-5 h-6 w-6 text-primary" /><h3 className="font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy}</p></div>)}
      </div>
    </section>
  </>;
}