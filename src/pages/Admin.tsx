import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Award, BriefcaseBusiness, FolderKanban, GraduationCap, LayoutDashboard, Loader2, LogOut, Mail, Settings, Sparkles, Wrench } from "lucide-react";
import type { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import DataManager from "@/components/admin/DataManager";

const sections = [
  { label: "Dashboard", icon: LayoutDashboard }, { label: "Projects", icon: FolderKanban }, { label: "Experience", icon: BriefcaseBusiness },
  { label: "Skills", icon: Sparkles }, { label: "Services", icon: Wrench }, { label: "Education", icon: GraduationCap },
  { label: "Certifications", icon: Award }, { label: "Messages", icon: Mail }, { label: "Site Settings", icon: Settings },
];

export default function Admin() {
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [active, setActive] = useState("Dashboard");
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => { setUser(data.user); if (data.user) { const { data: role } = await supabase.rpc("has_role", { _user_id: data.user.id, _role: "admin" }); setIsAdmin(Boolean(role)); } setChecking(false); });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setUser(session?.user ?? null));
    return () => data.subscription.unsubscribe();
  }, []);
  if (checking) return <div className="grid min-h-screen place-items-center bg-muted"><Loader2 className="animate-spin text-primary" /></div>;
  if (!user) return <AdminLogin />;
  if (!isAdmin) return <main className="grid min-h-screen place-items-center bg-primary px-5 text-primary-foreground"><div className="max-w-lg text-center"><p className="text-xs font-bold uppercase tracking-[0.16em] text-highlight">Protected access</p><h1 className="mt-4 text-4xl font-semibold">Administrator approval required</h1><p className="mt-4 text-sm leading-7 text-primary-foreground/60">Your account is signed in, but it has not been assigned portfolio management access.</p><div className="mt-8 flex justify-center gap-3"><Button onClick={() => navigate("/")}>Return home</Button><Button variant="ghostLight" onClick={() => supabase.auth.signOut()}>Sign out</Button></div></div></main>;
  return <div className="min-h-screen bg-muted/40 lg:grid lg:grid-cols-[260px_1fr]">
    <aside className="border-b border-border bg-primary p-6 text-primary-foreground lg:min-h-screen lg:border-b-0"><a href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-highlight font-bold text-highlight-foreground">AR</span><div><p className="font-semibold">Portfolio Admin</p><p className="text-xs text-primary-foreground/50">Ahsan Raza</p></div></a><nav className="mt-8 grid grid-cols-2 gap-1 sm:grid-cols-3 lg:grid-cols-1">{sections.map(({ label, icon: Icon }) => <Button key={label} variant="ghostLight" className={`justify-start ${active === label ? "bg-primary-foreground/10" : ""}`} onClick={() => setActive(label)}><Icon />{label}</Button>)}</nav><Button variant="ghostLight" className="mt-8 w-full justify-start" onClick={async () => { await supabase.auth.signOut(); navigate("/"); }}><LogOut />Sign out</Button></aside>
    <main className="p-5 md:p-10"><div className="mx-auto max-w-6xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Secure workspace</p><h1 className="mt-2 text-3xl font-semibold">{active}</h1><p className="mt-2 text-sm text-muted-foreground">Manage verified portfolio content without editing the public site.</p>{active === "Dashboard" ? <Dashboard /> : <DataManager section={active} />}</div></main>
  </div>;
}

function Dashboard() { return <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{sections.slice(1).map(({ label, icon: Icon }) => <article key={label} className="rounded-lg border border-border bg-card p-6 shadow-sm"><Icon className="h-6 w-6 text-primary" /><h2 className="mt-5 font-semibold">{label}</h2><p className="mt-2 text-xs leading-6 text-muted-foreground">Securely add, edit, search and remove portfolio records.</p></article>)}</div>; }

function AdminLogin() {
  const [email, setEmail] = useState(""); const [password, setPassword] = useState(""); const [mode, setMode] = useState<"signin" | "signup">("signin"); const [loading, setLoading] = useState(false); const [message, setMessage] = useState("");
  async function emailAuth(event: React.FormEvent) { event.preventDefault(); setLoading(true); setMessage(""); const result = mode === "signin" ? await supabase.auth.signInWithPassword({ email, password }) : await supabase.auth.signUp({ email, password, options: { emailRedirectTo: window.location.origin + "/admin" } }); setLoading(false); if (result.error) setMessage(result.error.message); else if (mode === "signup" && !result.data.session) setMessage("Check your email to confirm your account, then return here to sign in."); }
  async function googleAuth() { setLoading(true); const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin }); if (result.error) { setMessage(result.error.message); setLoading(false); } }
  return <main className="grid min-h-screen place-items-center bg-primary px-5 py-12"><div className="w-full max-w-md rounded-lg border border-primary-foreground/10 bg-background p-7 shadow-glass"><a href="/" className="inline-flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-md bg-primary font-bold text-primary-foreground">AR</span><span className="font-semibold">Portfolio Admin</span></a><h1 className="mt-8 text-3xl font-semibold">{mode === "signin" ? "Welcome back" : "Create your account"}</h1><p className="mt-2 text-sm text-muted-foreground">Secure access for portfolio management.</p><Button variant="outline" className="mt-7 w-full" onClick={googleAuth} disabled={loading}>Continue with Google</Button><div className="my-6 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />or use email<span className="h-px flex-1 bg-border" /></div><form onSubmit={emailAuth} className="space-y-4"><div className="space-y-2"><Label htmlFor="admin-email">Email</Label><Input id="admin-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></div><div className="space-y-2"><Label htmlFor="admin-password">Password</Label><Input id="admin-password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} required /></div>{message && <p className="text-sm text-muted-foreground" role="status">{message}</p>}<Button className="w-full" disabled={loading}>{loading && <Loader2 className="animate-spin" />}{mode === "signin" ? "Sign in" : "Create account"}</Button></form><button type="button" className="mt-5 w-full text-center text-sm text-primary hover:underline" onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setMessage(""); }}>{mode === "signin" ? "Need an account? Sign up" : "Already have an account? Sign in"}</button><a href="/" className="mt-6 block text-center text-xs text-muted-foreground hover:text-foreground">Return to portfolio</a></div></main>;
}