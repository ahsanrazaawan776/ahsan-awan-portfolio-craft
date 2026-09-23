import { useState } from "react";
import { z } from "zod";
import { Facebook, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/SectionHeading";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const messageSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Please enter a valid email.").max(255),
  phone: z.string().trim().max(40).optional(),
  subject: z.string().trim().min(2, "Please enter a subject.").max(160),
  message: z.string().trim().min(10, "Please add a little more detail.").max(2000),
});

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const parsed = messageSchema.safeParse(values);
    if (!parsed.success) { setError(parsed.error.issues[0]?.message ?? "Please check your details."); return; }
    setLoading(true);
    const { error: submitError } = await supabase.from("messages").insert({ ...parsed.data, phone: parsed.data.phone || null });
    setLoading(false);
    if (submitError) { setError("Your message could not be sent. Please try again."); return; }
    form.reset(); toast({ title: "Message received", description: "Thank you. Ahsan will get back to you soon." });
  }
  return <section id="contact" className="section-shell bg-muted/35"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[.8fr_1.2fr] lg:px-8"><div><SectionHeading eyebrow="Contact" title="Let’s discuss your next project" copy="For travel operations, data support, websites or digital business needs, send a clear message below." /><div className="mt-9 space-y-4"><a className="contact-link" href="mailto:b.ahsanraza@gmail.com"><Mail />b.ahsanraza@gmail.com</a><a className="contact-link" href="https://www.linkedin.com/in/ahsan-raza-awan-/" target="_blank" rel="noopener noreferrer"><Linkedin />LinkedIn</a><a className="contact-link" href="https://www.facebook.com/ahsanrazaawan6/" target="_blank" rel="noopener noreferrer"><Facebook />Facebook</a></div></div>
    <form onSubmit={submit} className="rounded-lg border border-border bg-card p-6 shadow-premium md:p-8" noValidate><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" name="name" placeholder="Your name" /><Field label="Email" name="email" type="email" placeholder="you@example.com" /><Field label="Phone" name="phone" placeholder="Optional" /><Field label="Subject" name="subject" placeholder="How can I help?" /></div><div className="mt-5 space-y-2"><Label htmlFor="message">Message</Label><Textarea id="message" name="message" rows={6} maxLength={2000} placeholder="Tell me about your project or requirement..." required /></div>{error && <p className="mt-4 text-sm text-destructive" role="alert">{error}</p>}<Button type="submit" size="lg" className="mt-6 w-full sm:w-auto" disabled={loading}>{loading ? <><Loader2 className="animate-spin" />Sending…</> : <>Send Message <Send /></>}</Button></form>
  </div></section>;
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder: string }) { return <div className="space-y-2"><Label htmlFor={name}>{label}</Label><Input id={name} name={name} type={type} placeholder={placeholder} maxLength={type === "email" ? 255 : 160} required={name !== "phone"} /></div>; }