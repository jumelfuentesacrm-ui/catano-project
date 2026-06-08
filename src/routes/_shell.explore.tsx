import { createFileRoute } from "@tanstack/react-router";
import { Search, Building2, Landmark, Footprints, Bike, Sailboat, CalendarDays, Sparkles, X, Phone, Clock, Navigation } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/explore")({
  head: () => ({ meta: [{ title: "Explore — Spirit of Puerto Rico 3D Map" }] }),
  component: ExploreScreen,
});

const layers = [
  { Icon: Building2,  label: "Businesses", color: "oklch(0.38 0.10 235)" },
  { Icon: Landmark,   label: "Landmarks",  color: "oklch(0.80 0.16 72)" },
  { Icon: Footprints, label: "Walking",    color: "oklch(0.52 0.14 148)" },
  { Icon: Bike,       label: "Bike",       color: "oklch(0.62 0.18 32)" },
  { Icon: Sailboat,   label: "Ferry",      color: "oklch(0.38 0.10 235)" },
  { Icon: CalendarDays,label:"Events",     color: "oklch(0.42 0.12 300)" },
  { Icon: Sparkles,   label: "Future",     color: "oklch(0.55 0.12 220)" },
];

const places = [
  { name: "El Morro", cat: "Landmark", hours: "9am–6pm", phone: "+1 787 729-6777", img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=400&q=80" },
  { name: "Panadería La Bahía", cat: "Business", hours: "6am–2pm", phone: "+1 787 555-0112", img: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&q=80" },
  { name: "Isla de Cabras", cat: "Nature", hours: "Open all day", phone: "—", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80" },
];

const futureCities = ["San Juan", "Ponce", "Mayagüez", "Aguadilla", "Carolina"];

function ExploreScreen() {
  const [active, setActive] = useState<string[]>(["Businesses", "Landmarks"]);
  const [panel, setPanel] = useState<typeof places[0] | null>(places[0]);

  const toggle = (l: string) =>
    setActive((a) => (a.includes(l) ? a.filter((x) => x !== l) : [...a, l]));

  return (
    <div className="relative" style={{ height: "calc(100vh - 80px)" }}>

      {/* Full-bleed map background using real PR aerial photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=1400&q=85"
          alt="Puerto Rico aerial"
          className="w-full h-full object-cover"
        />
        {/* Dark tint + grid overlay to simulate map */}
        <div className="absolute inset-0" style={{ background: "oklch(0.08 0.03 240 / 0.65)" }} />
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Map pins */}
        {places.map((p, i) => (
          <button key={p.name} onClick={() => setPanel(p)}
            className="absolute flex flex-col items-center transition-transform hover:scale-110"
            style={{ left: `${28 + i * 22}%`, top: `${30 + i * 12}%` }}
          >
            <div className="h-8 w-8 rounded-full flex items-center justify-center shadow-glow text-white font-bold text-xs"
              style={{ background: panel?.name === p.name ? "var(--gradient-gold)" : "oklch(0.38 0.10 235)" }}>
              {p.name[0]}
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full font-accent text-[9px] font-600 uppercase tracking-wide text-white"
              style={{ background: "oklch(0.08 0.02 240 / 0.85)", backdropFilter: "blur(8px)" }}>
              {p.name}
            </div>
          </button>
        ))}

        {/* Future city pins (ghosted) */}
        {futureCities.map((c, i) => (
          <div key={c} className="absolute flex flex-col items-center opacity-40"
            style={{ left: `${15 + i * 16}%`, top: `${65 + (i % 2) * 8}%` }}>
            <div className="h-6 w-6 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: "oklch(0.80 0.16 72)", background: "transparent" }}>
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: "oklch(0.80 0.16 72)" }} />
            </div>
            <span className="mt-1 font-accent text-[8px] uppercase tracking-widest text-white/60">{c}</span>
            <span className="font-accent text-[7px] uppercase tracking-wide" style={{ color: "oklch(0.80 0.16 72)" }}>2026</span>
          </div>
        ))}
      </div>

      {/* Search bar */}
      <div className="absolute top-4 left-4 right-4 z-20">
        <div className="glass-nav flex items-center gap-3 rounded-2xl px-4 py-3">
          <Search size={16} color="oklch(0.80 0.16 72)" />
          <span className="font-sans text-sm text-white/40">Search places, landmarks, businesses…</span>
        </div>
      </div>

      {/* Layer toggles */}
      <div className="absolute top-20 left-4 z-20 flex flex-col gap-2">
        {layers.map(({ Icon, label, color }) => {
          const on = active.includes(label);
          return (
            <button key={label} onClick={() => toggle(label)}
              className="flex items-center gap-2 rounded-xl px-3 py-2 transition-all"
              style={on
                ? { background: color, border: "none" }
                : { background: "oklch(0.10 0.018 240 / 0.85)", backdropFilter: "blur(12px)", border: "1px solid oklch(1 0 0 / 0.1)" }
              }
            >
              <Icon size={14} color={on ? "white" : "oklch(0.60 0.02 260)"} />
              <span className="font-accent text-[10px] font-600 uppercase tracking-wide hidden sm:block"
                style={{ color: on ? "white" : "oklch(0.55 0.02 260)" }}>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Info panel */}
      {panel && (
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="glass-nav mx-3 mb-3 rounded-2xl overflow-hidden">
            <div className="flex gap-4 p-4">
              <img src={panel.img} alt={panel.name} className="h-20 w-24 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="eyebrow mb-0.5">{panel.cat}</p>
                <h3 className="font-display text-xl font-semibold text-white">{panel.name}</h3>
                <div className="flex items-center gap-1.5 mt-1 text-white/50">
                  <Clock size={11} />
                  <span className="font-sans text-xs">{panel.hours}</span>
                </div>
                <div className="flex items-center gap-1.5 mt-0.5 text-white/50">
                  <Phone size={11} />
                  <span className="font-sans text-xs">{panel.phone}</span>
                </div>
              </div>
              <button onClick={() => setPanel(null)} className="self-start text-white/40 hover:text-white">
                <X size={18} />
              </button>
            </div>
            <div className="flex gap-2 px-4 pb-4">
              <button className="flex-1 flex items-center justify-center gap-2 rounded-full py-2.5 font-sans text-xs font-700 uppercase tracking-wider"
                style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>
                <Navigation size={13} /> Get Directions
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 rounded-full py-2.5 font-sans text-xs font-700 uppercase tracking-wider"
                style={{ background: "oklch(0.20 0.02 240)", color: "white", border: "1px solid oklch(1 0 0 / 0.12)" }}>
                Book Experience
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
