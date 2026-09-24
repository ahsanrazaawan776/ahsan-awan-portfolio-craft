import { Button } from "@/components/ui/button";

export default function NotFound() {
  return <main className="grid min-h-screen place-items-center bg-primary px-5 text-primary-foreground"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-highlight">404</p><h1 className="mt-4 text-5xl font-semibold">Page not found</h1><p className="mt-4 text-primary-foreground/60">The page you requested does not exist.</p><Button className="mt-8" asChild><a href="/">Return home</a></Button></div></main>;
}