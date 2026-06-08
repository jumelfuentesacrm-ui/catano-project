import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Star, MapPin, Search, Users } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/get-around")({
  head: () => ({
    meta: [
      { title: "Get Around — Cataño" },
      { name: "description", content: "Rideshare, taxis, scooters, water transport, shuttles and party buses across Puerto Rico." },
    ],
  }),
  component: GetAroundScreen,
});

const vehicles = [
  { e: "🚗", l: "Rideshare" },
  { e: "🚕", l: "Taxi" },
  { e: "🛵", l: "Scooter" },
  { e: "🚲", l: "Bicycle" },
  { e: "⛵", l: "Water" },
  { e: "🚐", l: "Shuttle" },
  { e: "🚌", l: "Bus 15" },
  { e: "🚍", l: "Bus 45" },
  { e: "🎉", l: "Party Bus" },
  { e: "🏔️", l: "Adventure" },
  { e: "🧳", l: "Guide + Ride" },
];

const routes = [
  { from: "SJU Airport", to: "Cataño", price: "$28", img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80" },
  { from: "Cruise Port", to: "Old San Juan", price: "$18", img: "https://images.unsplash.com/photo-1545569310-26e7df1ccbc5?w=600&q=80" },
  { from: "Hotel District", to: "Escambrón Beach", price: "$14", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80" },
];

function GetAroundScreen() {
  const [selected, setSelected] = useState("Rideshare");

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-10 pb-32 lg:pb-12">
      <header>
        <p className="font-accent text-xs text-muted-foreground">GET AROUND</p>
        <h1 className="mt-1 font-display text-3xl font-bold lg:text-4xl">Where are you going?</h1>
      </header>

      {/* Search */}
      <div className="mt-5 overflow-hidden rounded-3xl bg-card p-5 shadow-warm">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-sunset/15 text-sunset"><MapPin size={16}/></span>
          <input className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="From — current location" defaultValue="Calle Marina 12, Cataño" />
        </div>
        <div className="my-3 ml-12 h-px bg-border" />
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-terracotta/15 text-terracotta"><Search size={16}/></span>
          <input className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground" placeholder="Where to?" />
        </div>
      </div>

      {/* Vehicle selector */}
      <section className="mt-7">
        <h3 className="font-display text-lg font-bold">Choose how you ride</h3>
        <div className="no-scrollbar mt-3 flex gap-2.5 overflow-x-auto pb-2">
          {vehicles.map((v) => (
            <button
              key={v.l}
              onClick={() => setSelected(v.l)}
              className={`flex min-w-[90px] flex-col items-center gap-1 rounded-2xl border px-3 py-3 text-xs font-semibold transition ${
                selected === v.l ? "border-transparent bg-primary text-primary-foreground shadow-warm" : "border-border bg-card text-foreground/70"
              }`}
            >
              <span className="text-2xl">{v.e}</span>
              {v.l}
            </button>
          ))}
        </div>
      </section>

      {/* Map preview + fare */}
      <section className="mt-6 grid gap-4 lg:grid-cols-5">
        <div className="relative overflow-hidden rounded-3xl shadow-warm lg:col-span-3">
          <div
            className="aspect-[16/10] w-full bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80)" }}
          />
          <div className="absolute inset-0 bg-primary/20" />
          <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-primary shadow">Pickup in 4 min</div>
          <div className="absolute bottom-4 left-4 rounded-2xl bg-white/95 px-3 py-2 text-xs text-primary shadow">
            <div className="font-display font-bold">Calle Marina · Pier 2</div>
            <div className="text-[11px] text-muted-foreground">Driver heading north</div>
          </div>
        </div>

        <div className="rounded-3xl bg-gradient-ocean p-6 text-white shadow-warm lg:col-span-2">
          <span className="font-accent text-[11px] text-sunset">ESTIMATED FARE · {selected.toUpperCase()}</span>
          <div className="mt-2 font-display text-4xl font-black">$14 – $19</div>
          <div className="mt-1 text-sm opacity-85">ETA 4 min · 12 min ride</div>
          <div className="mt-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-sunset ring-2 ring-white" />
            <div>
              <div className="text-sm font-semibold">Luis Vega</div>
              <div className="flex items-center gap-1 text-xs opacity-90"><Star size={12} className="fill-sunset text-sunset" /> 4.94 · Toyota Corolla</div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular routes */}
      <section className="mt-8">
        <h3 className="font-display text-lg font-bold">Popular routes</h3>
        <div className="no-scrollbar mt-3 flex gap-4 overflow-x-auto pb-2">
          {routes.map((r) => (
            <article key={r.from} className="card-lift min-w-[260px] overflow-hidden rounded-2xl bg-card shadow-warm">
              <div className="aspect-[5/3]"><img src={r.img} alt="" className="h-full w-full object-cover" /></div>
              <div className="p-4">
                <div className="font-display text-base font-semibold">{r.from} <ArrowRight size={14} className="mx-1 inline text-muted-foreground" /> {r.to}</div>
                <div className="mt-1 text-sm text-muted-foreground">from <span className="font-bold text-foreground">{r.price}</span></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Group booking */}
      <section className="mt-6 flex items-center gap-4 rounded-3xl bg-tropical p-5 text-tropical-foreground shadow-warm">
        <Users size={28} />
        <div className="flex-1">
          <div className="font-display text-base font-bold">Traveling with 6+ people?</div>
          <div className="text-xs opacity-90">Get group pricing on shuttles, buses and party buses.</div>
        </div>
        <button className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-tropical">Book group →</button>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-20 left-0 right-0 z-30 px-4 lg:static lg:mt-8 lg:px-0">
        <button className="w-full rounded-full bg-gradient-sunset py-4 text-base font-bold text-sunset-foreground shadow-glow">
          Book Now — {selected}
        </button>
      </div>
    </div>
  );
}
