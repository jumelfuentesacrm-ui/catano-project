import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Star, Users } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/get-around")({
  head: () => ({ meta: [{ title: "Get Around — Spirit of Puerto Rico" }] }),
  component: GetAroundScreen,
});

const vehicles = [
  { e: "🚗", l: "Rideshare" }, { e: "🚕", l: "Taxi" }, { e: "🛵", l: "Scooter" },
  { e: "🚲", l: "Bicycle" },  { e: "⛵", l: "Water" },  { e: "🚐", l: "Shuttle" },
  { e: "🚌", l: "Bus 15" },   { e: "🚍", l: "Bus 45" }, { e: "🎉", l: "Party Bus" },
  { e: "🏔️", l: "Adventure" }, { e: "🧳", l: "Guide + Ride" },
];

const popularRoutes = [
  { from: "SJU Airport", to: "Cataño", price: "$28", time: "35 min", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
  { from: "Cruise Port", to: "Old San Juan", price: "$18", time: "20 min", img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80" },
  { from: "Hotel Zone", to: "Isla Verde Beach", price: "$12", time: "15 min", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
];

function GetAroundScreen() {
  const [selected, setSelected] = useState("Rideshare");

  return (
    <div className="mx-auto max-w-3xl px-4 py-0 lg:px-8">

      {/* Hero */}
      <div className="relative -mx-4 lg:-mx-8 mb-8 overflow-hidden" style={{ height: 200 }}>
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=85" alt="Transportation" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.06 0.02 240 / 0.5) 0%, oklch(0.06 0.02 240 / 0.92) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <p className="eyebrow mb-1">Transportation</p>
          <h1 className="font-display text-3xl font-light italic text-white">Get <span className="not-italic font-semibold">Around</span></h1>
        </div>
      </div>

      {/* Search */}
      <div className="mb-6 rounded-2xl p-4 space-y-3" style={{ background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
        <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: "oklch(0.18 0.02 240)" }}>
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: "oklch(0.52 0.14 148)" }} />
          <span className="font-sans text-sm text-white/50">Your location…</span>
        </div>
        <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: "oklch(0.18 0.02 240)" }}>
          <MapPin size={12} color="oklch(0.80 0.16 72)" />
          <span className="font-sans text-sm text-white/50">Where to?</span>
        </div>
      </div>

      {/* Vehicle types */}
      <h2 className="font-display text-xl italic font-light text-white mb-4">Choose <span className="not-italic font-semibold">Your Ride</span></h2>
      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-3 mb-8">
        {vehicles.map(({ e, l }) => (
          <button key={l} onClick={() => setSelected(l)}
            className="card-lift flex min-w-[80px] flex-col items-center gap-2 rounded-2xl py-3 px-2 transition-all"
            style={selected === l
              ? { background: "var(--gradient-gold)", border: "1px solid transparent" }
              : { background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }
            }
          >
            <span className="text-2xl leading-none">{e}</span>
            <span className="font-accent text-[10px] font-600 uppercase tracking-wide whitespace-nowrap"
              style={{ color: selected === l ? "oklch(0.10 0.02 60)" : "oklch(0.60 0.02 260)" }}
            >{l}</span>
          </button>
        ))}
      </div>

      {/* Fare estimate */}
      <div className="mb-8 relative overflow-hidden rounded-2xl p-5" style={{ background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="eyebrow mb-1">{selected} · Estimated Fare</p>
            <div className="font-display text-4xl font-light text-white">$12–18</div>
            <p className="font-sans text-xs text-white/50 mt-1">~15 min arrival · 4.9 ★</p>
          </div>
          <div className="flex items-center gap-1.5 font-sans text-sm text-white/60">
            <Users size={15} />
            <span>1–4 people</span>
          </div>
        </div>
        <button
          className="w-full rounded-full py-3.5 font-sans text-sm font-700 uppercase tracking-wider transition-transform hover:scale-[1.02]"
          style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}
        >
          Book Now
        </button>
      </div>

      {/* Group banner */}
      <div className="mb-8 relative overflow-hidden rounded-2xl">
        <img src="https://images.unsplash.com/photo-1519671282429-b44b2802040e?w=900&q=80" alt="Group transport" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "oklch(0.06 0.02 240 / 0.80)" }} />
        <div className="relative flex items-center justify-between p-5">
          <div>
            <p className="eyebrow mb-1">Groups of 6+</p>
            <h3 className="font-display text-xl font-semibold italic text-white">Save up to 20%</h3>
            <p className="font-sans text-sm text-white/60">Shuttle, bus & party bus packages</p>
          </div>
          <button className="rounded-full px-5 py-2.5 font-sans text-xs font-700 uppercase tracking-wider whitespace-nowrap"
            style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>
            Get Quote
          </button>
        </div>
      </div>

      {/* Popular routes */}
      <h2 className="font-display text-xl italic font-light text-white mb-4">Popular <span className="not-italic font-semibold">Routes</span></h2>
      <div className="flex flex-col gap-3 mb-8">
        {popularRoutes.map((r) => (
          <div key={r.from} className="card-lift flex items-center gap-4 rounded-2xl p-3"
            style={{ background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
            <img src={r.img} alt={r.to} className="h-14 w-20 rounded-xl object-cover flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="font-sans text-sm text-white/50 truncate">{r.from}</p>
              <p className="font-display text-base font-semibold text-white">{r.to}</p>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="font-accent text-xs text-white/50 uppercase tracking-wide">{r.time}</span>
              </div>
            </div>
            <div className="font-display text-xl font-semibold text-white flex-shrink-0">{r.price}</div>
          </div>
        ))}
      </div>

    </div>
  );
}
