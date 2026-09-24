import { ArrowDown, ArrowRight, BriefcaseBusiness, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/travel-hero.jpg";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-hero pt-20 text-primary-foreground">
      <img src={heroImage} alt="Travel documents and airport operations setting" width={1600} height={1000} className="absolute inset-0 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative mx-auto grid min-h-[calc(92vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_.85fr] lg:px-8">
        <div className="animate-reveal">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-xs font-semibold backdrop-blur-md"><span className="h-2 w-2 rounded-full bg-highlight" /> Travel & Tours Professional</div>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[.95] md:text-7xl lg:text-[5.5rem]">Ahsan Raza</h1>
          <p className="mt-6 max-w-xl text-lg font-medium text-primary-foreground/85 md:text-xl">Travel operations, handled with clarity and care.</p>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-primary-foreground/65 md:text-base">Travel & Tours professional with hands-on experience in passenger data management, travel documentation, customer coordination and operational support—with additional experience in digital marketing, web development and e-commerce.</p>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-highlight">Digital Marketing · Web Development · Data Management · E-commerce</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button size="lg" asChild><a href="#experience">View My Experience <ArrowRight /></a></Button>
            <Button size="lg" variant="hero" asChild><a href="#projects">View My Projects</a></Button>
            <Button size="lg" variant="ghostLight" asChild><a href="#contact">Contact Me</a></Button>
          </div>
        </div>
        <div className="relative hidden min-h-[480px] lg:block">
          <div className="absolute right-2 top-8 w-72 animate-float rounded-lg border border-primary-foreground/15 bg-primary-foreground/10 p-5 shadow-glass backdrop-blur-xl">
            <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-md bg-highlight/15 text-highlight"><BriefcaseBusiness /></div><div><p className="text-xs text-primary-foreground/55">Current role</p><p className="text-sm font-semibold">Data Coordinator</p></div></div>
            <div className="mt-5 border-t border-primary-foreground/10 pt-4 text-xs text-primary-foreground/70"><MapPin className="mr-2 inline h-4 w-4 text-highlight" />Mohsin E Azam Travels & Tours</div>
          </div>
          <div className="absolute bottom-16 left-0 w-64 animate-float-delayed rounded-lg border border-primary-foreground/15 bg-background/90 p-5 text-foreground shadow-glass backdrop-blur-xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Operational focus</p>
            {["Passenger records", "Travel documentation", "Customer coordination"].map((item) => <div key={item} className="mt-3 flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</div>)}
          </div>
        </div>
      </div>
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary-foreground/60" aria-label="Scroll to about"><ArrowDown className="animate-bounce" /></a>
    </section>
  );
}