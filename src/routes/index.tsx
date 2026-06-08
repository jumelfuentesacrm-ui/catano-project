import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cataño — Bienvenido" },
      { name: "description", content: "Your gateway to authentic Puerto Rico. Choose how you'll explore Cataño." },
    ],
  }),
  component: Splash,
});

function Splash() {
  const [lang, setLang] = useState<"en" | "es">("en");
  const t = {
    en: { sub: "Your gateway to authentic Puerto Rico", visitor: "I'm a Visitor", local: "I Live Here", tag: "PUERTO RICO · CATAÑO" },
    es: { sub: "Tu puerta a la verdadera experiencia boricua", visitor: "Soy Visitante", local: "Vivo Aquí", tag: "PUERTO RICO · CATAÑO" },
  }[lang];

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1591375275624-c4f4ec7fc4f3?auto=format&fit=crop&w=1600&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-ocean opacity-80" />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Language toggle */}
      <div className="absolute right-4 top-4 z-10 flex rounded-full glass-nav p-1 text-xs font-semibold">
        <button onClick={() => setLang("en")} className={`rounded-full px-3 py-1.5 ${lang === "en" ? "bg-white/95 text-primary" : "text-white/80"}`}>🇺🇸 EN</button>
        <button onClick={() => setLang("es")} className={`rounded-full px-3 py-1.5 ${lang === "es" ? "bg-white/95 text-primary" : "text-white/80"}`}>🇵🇷 ES</button>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-md flex-col justify-end px-6 pb-16 pt-24">
        <div className="animate-float-up">
          <span className="font-accent text-xs text-sunset">{t.tag}</span>
          <h1 className="mt-3 font-display text-6xl font-black leading-[0.95] tracking-tight">
            Bienvenido<br/>a <span className="text-sunset">Cataño</span>
          </h1>
          <p className="mt-4 max-w-sm text-base text-white/85">{t.sub}</p>

          <div className="mt-10 flex flex-col gap-3">
            <Link to="/home" className="group flex items-center justify-between rounded-2xl bg-sunset px-5 py-4 text-sunset-foreground shadow-warm">
              <span className="font-semibold">{t.visitor}</span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link to="/home" className="group flex items-center justify-between rounded-2xl border border-white/30 bg-white/10 px-5 py-4 backdrop-blur-md">
              <span className="font-semibold">{t.local}</span>
              <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          <p className="mt-8 text-center text-[11px] uppercase tracking-[0.2em] text-white/50">
            Hecho con orgullo · Made with pride
          </p>
        </div>
      </div>
    </main>
  );
}
