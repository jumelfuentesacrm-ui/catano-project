import { createFileRoute } from "@tanstack/react-router";
import { Search, Building2, Landmark, Footprints, Bike, Sailboat, CalendarDays, Sparkles, X, Phone, Clock, Navigation } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/explore")({
  head: () => ({
    meta: [
      { title: "Explore — Cataño 3D Map" },
      { name: "description", content: "An interactive 3D digital twin of Cataño — businesses, landmarks, routes and events." },
    ],
  }),
  component: ExploreScreen,
});

const layers = [
  { Icon: Building2, label: "Businesses" },
  { Icon: Landmark, label: "Landmarks" },
  { Icon: Footprints, label: "Walking" },
  { Icon: Bike, label: "Bike" },
  { Icon: Sailboat, label: "Ferry" },
  { Icon: CalendarDays, label: "Events" },
  { Icon: Sparkles, label: "Future" },
];

function ExploreScreen() {
  const [active, setActive] = useState<string[]>(["Businesses", "Landmarks"]);
  const [panel, setPanel] = useState(true);

  const toggle = (l: string) =>
    setActive((a) => (a.includes(l) ? a.filter((x) => x !== l) : [...a, l]));

  return (
    <div className="relative h-[calc(100vh-2rem)] w-full overflow-hidden lg:h-screen">
      {/* 3D map placeholder */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=2000&q=85)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ocean/30 via-transparent to-ocean/40 mix-blend-multiply" />
      {/* Faux 3D building dots */}
      <svg className="absolute inset-0 h-full w-full opacity-80" viewBox="0 0 1000 700" preserveAspectRatio="none">
        <defs>
          <radialGradient id="pin" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5A623" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#F5A623" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="pin2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#27AE60" stopOpacity="0.9"/>
            <stop offset="100%" stopColor="#27AE60" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="ghost" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45"/>
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"/>
          </radialGradient>
        </defs>
        {[[180,220],[280,310],[400,250],[520,340],[660,260],[760,400]].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="38" fill="url(#pin)" />
            <circle cx={x} cy={y} r="6" fill="#F5A623" />
          </g>
        ))}
        {[[330,460],[600,520]].map(([x,y],i)=>(
          <g key={`g${i}`}>
            <circle cx={x} cy={y} r="42" fill="url(#pin2)" />
            <circle cx={x} cy={y} r="6" fill="#27AE60" />
          </g>
        ))}
        {/* Ghost future pins */}
        {[[120,560],[850,180]].map(([x,y],i)=>(
          <g key={`f${i}`}>
            <circle cx={x} cy={y} r="36" fill="url(#ghost)" />
            <circle cx={x} cy={y} r="5" fill="#ffffff" opacity="0.8" />
          </g>
        ))}
      </svg>

      {/* Search bar */}
      <div className="absolute left-1/2 top-4 z-10 w-[min(92%,640px)] -translate-x-1/2">
        <div className="flex items-center gap-2 rounded-full glass-nav border border-white/30 px-4 py-2.5 shadow-warm">
          <Search size={16} className="text-primary" />
          <input className="w-full bg-transparent text-sm outline-none placeholder:text-foreground/60" placeholder="Find a place, business, or landmark..." />
        </div>
      </div>

      {/* Layer toggle */}
      <div className="absolute left-1/2 top-20 z-10 w-[min(96%,720px)] -translate-x-1/2">
        <div className="no-scrollbar flex gap-2 overflow-x-auto rounded-2xl glass-nav border border-white/30 p-2 shadow-warm">
          {layers.map(({ Icon, label }) => {
            const on = active.includes(label);
            return (
              <button
                key={label}
                onClick={() => toggle(label)}
                className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap transition ${
                  on ? "bg-primary text-primary-foreground" : "bg-white/70 text-foreground/75"
                }`}
              >
                <Icon size={13} />
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Coming soon overlay */}
      <div className="absolute right-4 top-36 z-10 rounded-2xl glass-nav border border-white/30 px-3 py-2 text-[11px] font-semibold shadow-warm">
        <span className="font-accent text-tropical">EXPANDING 2026</span>
        <div className="text-foreground/80">San Juan · Ponce · Mayagüez</div>
      </div>

      {/* Mini legend */}
      <div className="absolute bottom-32 left-4 z-10 rounded-2xl glass-nav border border-white/30 p-3 text-[11px] shadow-warm lg:bottom-6">
        <div className="font-accent text-[10px] text-muted-foreground">LEGEND</div>
        <div className="mt-1 flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sunset" /> Businesses</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-tropical" /> Landmarks</div>
        <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-white/70" /> Future</div>
      </div>

      {/* Info panel */}
      {panel && (
        <div className="absolute bottom-20 left-2 right-2 z-20 mx-auto max-w-xl lg:bottom-6 lg:left-auto lg:right-6">
          <div className="overflow-hidden rounded-3xl bg-card shadow-glow animate-float-up">
            <div className="relative h-32">
              <img src="https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=900&q=80" alt="" className="h-full w-full object-cover" />
              <button onClick={() => setPanel(false)} className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-primary"><X size={16} /></button>
              <span className="chip absolute left-3 top-3 bg-sunset text-sunset-foreground">Landmark</span>
            </div>
            <div className="p-5">
              <h3 className="font-display text-xl font-bold">Isla de Cabras</h3>
              <p className="mt-1 text-sm text-muted-foreground">Historic island fort with panoramic views of San Juan Bay.</p>
              <div className="mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={12}/> 7am – 6pm</span>
                <span className="flex items-center gap-1"><Phone size={12}/> +1 787 555 0142</span>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 rounded-full bg-primary py-2.5 text-xs font-semibold text-primary-foreground"><Navigation size={12} className="mr-1 inline" /> Get Directions</button>
                <button className="flex-1 rounded-full bg-sunset py-2.5 text-xs font-semibold text-sunset-foreground">Book Experience Here</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
