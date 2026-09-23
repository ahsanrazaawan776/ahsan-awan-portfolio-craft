import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 border-b border-transparent transition-all", scrolled && "border-border/70 bg-background/90 shadow-sm backdrop-blur-xl")}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Ahsan Raza home">
          <span className="grid h-10 w-10 place-items-center rounded-md bg-primary font-display text-sm font-bold text-primary-foreground">AR</span>
          <span className={cn("hidden text-sm font-semibold sm:block", scrolled ? "text-foreground" : "text-primary-foreground")}>Ahsan Raza</span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={cn("text-xs font-semibold transition-colors hover:text-primary", scrolled ? "text-muted-foreground" : "text-primary-foreground/75")}>{item}</a>)}
        </nav>
        <div className="hidden lg:block"><Button asChild size="sm"><a href="#contact">Let's Work Together</a></Button></div>
        <Button variant="ghost" size="icon" className={cn("lg:hidden", !scrolled && "text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground")} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</Button>
      </div>
      {open && <nav className="border-t border-border bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-7xl gap-1">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded-md px-3 py-3 text-sm font-medium hover:bg-muted">{item}</a>)}<Button className="mt-3" asChild><a href="#contact" onClick={() => setOpen(false)}>Let's Work Together</a></Button></div></nav>}
    </header>
  );
}