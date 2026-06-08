import { createFileRoute } from "@tanstack/react-router";
import { Search, Building2, Landmark, Footprints, Bike, Sailboat, CalendarDays, Sparkles, X, Phone, Clock, Navigation, MapPin } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/explore")({
  head: () => ({ meta: [{ title: "Explore Cataño — Spirit of Puerto Rico 3D Map" }] }),
  component: ExploreScreen,
});

const layers = [
  { Icon: Building2,   label: "Businesses", active_color: "#0A3D62" },
  { Icon: Landmark,    label: "Landmarks",  active_color: "#C89A30" },
  { Icon: Footprints,  label: "Walking",    active_color: "#1A6B3C" },
  { Icon: Bike,        label: "Bike",       active_color: "#C0392B" },
  { Icon: Sailboat,    label: "Ferry",      active_color: "#0A3D62" },
  { Icon: CalendarDays,label: "Events",     active_color: "#6B3FA0" },
  { Icon: Sparkles,    label: "Future",     active_color: "#8A7B6A" },
];

// Real Cataño and nearby places
const places = [
  {
    name: "Cataño Ferry Terminal",
    cat: "Transportation",
    desc: "The public ferry connecting Cataño to Old San Juan runs every 30 minutes. Fare: $0.75.",
    hours: "6am – 10pm daily",
    phone: "+1 787 729-8714",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
    x: "32%", y: "44%",
  },
  {
    name: "El Morro Fortress",
    cat: "Landmark · UNESCO",
    desc: "Castillo San Felipe del Morro, a 16th-century Spanish citadel guarding the entrance to San Juan Bay.",
    hours: "9am – 6pm daily",
    phone: "+1 787 729-6777",
    img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=400&q=80",
    x: "52%", y: "30%",
  },
  {
    name: "Isla de Cabras",
    cat: "Nature · Hidden Gem",
    desc: "Small island accessible by car from Cataño with colonial ruins, a lighthouse, and swimming areas.",
    hours: "Open daily — dawn to dusk",
    phone: "—",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
    x: "20%", y: "28%",
  },
  {
    name: "Panadería La Bahía",
    cat: "Business · Food",
    desc: "Family-run bakery since 1962, famous for mallorcas and pan de agua. A Cataño cultural institution.",
    hours: "6am – 2pm, Mon–Sat",
    phone: "+1 787 555-0112",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
    x: "44%", y: "58%",
  },
];

const futureCities = ["San Juan", "Ponce", "Mayagüez", "Aguadilla", "Carolina"];

function ExploreScreen() {
  const [activeLayers, setActiveLayers] = useState<string[]>(["Businesses", "Landmarks"]);
  const [selectedPlace, setSelectedPlace] = useState<typeof places[0] | null>(places[0]);

  const toggle = (l: string) =>
    setActiveLayers((a) => (a.includes(l) ? a.filter((x) => x !== l) : [...a, l]));

  return (
    <div className="relative flex flex-col lg:flex-row" style={{ height: "calc(100vh - 64px)" }}>

      {/* ── MAP AREA ── */}
      <div className="relative flex-1 overflow-hidden" style={{ minHeight: "50vh" }}>
        {/* PR aerial photo as map base */}
        <img
          src="https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=1400&q=85"
          alt="Aerial view Puerto Rico — Cataño Digital Twin"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Warm cream tint to feel more like a real map */}
        <div className="absolute inset-0" style={{ background: "rgba(240,230,210,0.45)" }} />
        {/* Subtle grid overlay */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }} xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mapgrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#0A3D62" strokeWidth="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapgrid)" />
        </svg>

        {/* Place pins */}
        {places.map((p) => (
          <button key={p.name} onClick={() => setSelectedPlace(p)}
            className="absolute flex flex-col items-center transition-transform hover:scale-110"
            style={{ left: p.x, top: p.y, transform: "translateX(-50%)" }}
          >
            <div className="h-9 w-9 rounded-full flex items-center justify-center shadow-md text-white text-xs font-bold"
              style={{ background: selectedPlace?.name === p.name ? "#C89A30" : "#0A3D62", border: "3px solid white" }}>
              {p.name[0]}
            </div>
            <div className="mt-1 px-2 py-0.5 rounded-full whitespace-nowrap"
              style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)", fontFamily: "Barlow Condensed", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#0A3D62" }}>
              {p.name}
            </div>
          </button>
        ))}

        {/* Future city pins */}
        {futureCities.map((c, i) => (
          <div key={c} className="absolute flex flex-col items-center"
            style={{ left: `${14 + i * 15}%`, bottom: `${12 + (i % 2) * 7}%`, opacity: 0.45 }}>
            <div className="h-6 w-6 rounded-full flex items-center justify-center"
              style={{ border: "2px dashed #C89A30", background: "rgba(255,255,255,0.7)" }}>
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#C89A30" }} />
            </div>
            <span style={{ fontFamily: "Barlow Condensed", fontSize: "0.55rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#5A4A38", marginTop: 2 }}>{c}</span>
            <span style={{ fontFamily: "Montserrat", fontSize: "0.5rem", color: "#C89A30" }}>2026</span>
          </div>
        ))}

        {/* Search bar */}
        <div className="absolute top-4 left-4 right-4 z-10">
          <div className="flex items-center gap-3 rounded-2xl px-4 py-3 shadow-md"
            style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(12px)", border: "1px solid #E5DDD0" }}>
            <Search size={16} color="#C89A30" />
            <span style={{ fontFamily: "Montserrat", fontSize: "0.8rem", color: "#9A8A78" }}>Search Cataño — places, landmarks, businesses…</span>
          </div>
        </div>

        {/* Layer toggle sidebar */}
        <div className="absolute top-20 left-4 z-10 flex flex-col gap-1.5">
          {layers.map(({ Icon, label, active_color }) => {
            const on = activeLayers.includes(label);
            return (
              <button key={label} onClick={() => toggle(label)}
                className="flex items-center gap-2 rounded-xl px-3 py-2 shadow-sm transition-all"
                style={on
                  ? { background: active_color, color: "white", border: "none" }
                  : { background: "rgba(255,255,255,0.94)", backdropFilter: "blur(8px)", border: "1px solid #E5DDD0", color: "#5A4A38" }
                }
              >
                <Icon size={13} />
                <span className="hidden sm:block" style={{ fontFamily: "Barlow Condensed", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile info panel (bottom sheet) */}
        {selectedPlace && (
          <div className="absolute bottom-0 inset-x-0 lg:hidden z-10">
            <div className="mx-3 mb-3 rounded-2xl overflow-hidden shadow-warm"
              style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(16px)", border: "1px solid #E5DDD0" }}>
              <div className="flex gap-4 p-4">
                <img src={selectedPlace.img} alt={selectedPlace.name}
                  className="h-20 w-24 rounded-xl object-cover flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="eyebrow mb-0.5">{selectedPlace.cat}</p>
                  <h3 className="font-display text-lg font-semibold" style={{ color: "#1A1612" }}>{selectedPlace.name}</h3>
                  <div className="flex items-center gap-1.5 mt-1" style={{ fontFamily: "Montserrat", fontSize: "0.65rem", color: "#8A7B6A" }}>
                    <Clock size={10} />{selectedPlace.hours}
                  </div>
                </div>
                <button onClick={() => setSelectedPlace(null)} className="self-start" style={{ color: "#C5B8A8" }}>
                  <X size={17} />
                </button>
              </div>
              <div className="flex gap-2 px-4 pb-4">
                <button className="btn-gold flex-1 justify-center py-2.5 text-xs"><Navigation size={12} /> Directions</button>
                <button className="btn-ocean flex-1 justify-center py-2.5 text-xs">Book Experience</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ── SIDEBAR (desktop) ── */}
      <div className="lg:w-80 bg-white overflow-y-auto flex-shrink-0" style={{ borderLeft: "1px solid #E5DDD0" }}>
        <div className="p-5">
          <p className="eyebrow mb-1">3D Digital Twin</p>
          <h2 className="font-display text-2xl font-light italic" style={{ color: "#0A3D62" }}>Explore <strong className="not-italic font-semibold">Cataño</strong></h2>
          <p style={{ fontFamily: "Montserrat", fontSize: "0.72rem", color: "#8A7B6A", marginTop: 4, lineHeight: 1.5 }}>
            Interactive model of Cataño with businesses, landmarks, routes and future development.
          </p>
        </div>

        <div style={{ borderTop: "1px solid #F0EBE1" }}>
          {places.map((p) => (
            <button key={p.name} onClick={() => setSelectedPlace(p)}
              className="w-full text-left flex gap-3 p-4 transition-all hover:bg-amber-50"
              style={selectedPlace?.name === p.name ? { background: "#FBF6EC", borderLeft: "3px solid #C89A30" } : { borderLeft: "3px solid transparent", borderBottom: "1px solid #F5F0E8" }}>
              <img src={p.img} alt={p.name} className="h-14 w-16 rounded-xl object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="eyebrow mb-0.5">{p.cat}</p>
                <p className="font-display text-base font-semibold" style={{ color: "#1A1612", lineHeight: 1.2 }}>{p.name}</p>
                <div className="flex items-center gap-1 mt-1" style={{ fontFamily: "Montserrat", fontSize: "0.62rem", color: "#9A8A78" }}>
                  <Clock size={9} />{p.hours}
                </div>
              </div>
              <MapPin size={14} color={selectedPlace?.name === p.name ? "#C89A30" : "#C5B8A8"} className="flex-shrink-0 mt-1" />
            </button>
          ))}
        </div>

        {/* Expanding cities */}
        <div className="p-5">
          <p className="eyebrow mb-3">Expanding to Puerto Rico</p>
          <div className="flex flex-wrap gap-2">
            {futureCities.map((c) => (
              <span key={c} className="chip" style={{ background: "#F5F0E8", color: "#8A7B6A", border: "1px dashed #D4C4A0" }}>
                {c} · 2026
              </span>
            ))}
          </div>
          <p style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "#9A8A78", marginTop: 10, lineHeight: 1.5 }}>
            The Digital Twin network will expand to municipalities across Puerto Rico, starting with San Juan, Ponce and Mayagüez.
          </p>
        </div>
      </div>
    </div>
  );
}
