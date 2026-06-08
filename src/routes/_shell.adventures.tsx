import { createFileRoute } from "@tanstack/react-router";
import { Search, Star, Users, Clock, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/_shell/adventures")({
  head: () => ({
    meta: [
      { title: "Adventures — Cataño" },
      { name: "description", content: "Tours, eco-adventures, wellness, fishing, food and culture experiences across Puerto Rico." },
    ],
  }),
  component: AdventuresScreen,
});

const cats = ["🏄 Water","🌿 Eco","🎨 Culture","🧘 Wellness","🎣 Fishing","🍽️ Food","🎭 Events","🗺️ Custom"];

const experiences = [
  { title: "Bioluminescent Bay Kayak", img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80", dur: "3 hr", grp: "8 max", price: "$72", rating: 4.9, group: true },
  { title: "Old San Juan Food Crawl", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80", dur: "4 hr", grp: "10 max", price: "$58", rating: 4.8 },
  { title: "El Yunque Rainforest Hike", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80", dur: "6 hr", grp: "12 max", price: "$95", rating: 4.9, group: true },
  { title: "Sunset Snorkel at Icacos", img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80", dur: "4 hr", grp: "10 max", price: "$88", rating: 4.7 },
];

function AdventuresScreen() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10">
      <header>
        <p className="font-accent text-xs text-muted-foreground">EXPERIENCES</p>
        <h1 className="mt-1 font-display text-3xl font-bold lg:text-4xl">What do you want to experience?</h1>
      </header>

      <div className="mt-5 flex items-center gap-2 rounded-full bg-card px-5 py-3 shadow-warm">
        <Search size={18} className="text-muted-foreground" />
        <input className="w-full bg-transparent text-sm outline-none" placeholder="Snorkeling, food tours, biolum kayak..." />
        <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">Search</button>
      </div>

      <div className="no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1">
        {cats.map((c) => (
          <button key={c} className="rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold whitespace-nowrap hover:bg-accent">{c}</button>
        ))}
      </div>

      {/* Featured experience */}
      <article className="card-lift mt-6 grid gap-0 overflow-hidden rounded-3xl bg-card shadow-warm md:grid-cols-2">
        <div className="relative aspect-[4/3] md:aspect-auto">
          <img src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1000&q=80" alt="" className="h-full w-full object-cover" />
          <span className="chip absolute left-4 top-4 bg-sunset text-sunset-foreground">Featured</span>
        </div>
        <div className="flex flex-col justify-center p-6 lg:p-8">
          <span className="font-accent text-[11px] text-tropical">CULTURE · 5 HRS</span>
          <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">Bomba & Plena: A Saturday in Loíza</h2>
          <p className="mt-2 text-sm text-muted-foreground">Dance, drum, eat, and learn from the families who keep this Afro-Boricua tradition alive.</p>
          <div className="mt-4 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1"><Star size={14} className="fill-sunset text-sunset" /> 4.95 · 218</span>
            <span className="text-muted-foreground">·</span>
            <span className="font-display text-xl font-bold">$84<span className="text-sm font-normal text-muted-foreground"> /person</span></span>
          </div>
          <button className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm">Book Now <ArrowRight size={14} /></button>
        </div>
      </article>

      {/* Grid */}
      <section className="mt-8">
        <h3 className="font-display text-lg font-bold">Popular experiences</h3>
        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {experiences.map((e) => (
            <article key={e.title} className="card-lift overflow-hidden rounded-2xl bg-card shadow-warm">
              <div className="relative aspect-[4/5]">
                <img src={e.img} alt={e.title} className="h-full w-full object-cover" />
                {e.group && <span className="chip absolute left-2 top-2 bg-tropical text-tropical-foreground">Groups 8+ · 20% off</span>}
              </div>
              <div className="p-3">
                <h4 className="font-display text-sm font-semibold leading-snug">{e.title}</h4>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock size={11}/>{e.dur}</span>
                  <span className="flex items-center gap-1"><Users size={11}/>{e.grp}</span>
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="font-display text-base font-bold">{e.price}</div>
                  <div className="flex items-center gap-1 text-xs"><Star size={12} className="fill-sunset text-sunset" />{e.rating}</div>
                </div>
                <button className="mt-2 w-full rounded-full bg-primary py-1.5 text-xs font-semibold text-primary-foreground">Book</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Build itinerary banner */}
      <section className="mt-8 flex flex-col gap-3 rounded-3xl bg-gradient-tropical p-6 text-tropical-foreground shadow-warm sm:flex-row sm:items-center">
        <div className="flex-1">
          <span className="font-accent text-[11px] opacity-90">CUSTOM</span>
          <h3 className="mt-1 font-display text-2xl font-bold">Build your itinerary</h3>
          <p className="mt-1 text-sm opacity-90">Stitch together a multi-day adventure with a local planner.</p>
        </div>
        <button className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-tropical">Start planning →</button>
      </section>

      {/* Private guides */}
      <section className="card-lift mt-6 overflow-hidden rounded-3xl bg-card p-6 shadow-warm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="flex -space-x-3">
            {[1,2,3,4].map((i) => (
              <div key={i} className="h-12 w-12 rounded-full bg-gradient-sunset ring-4 ring-card" />
            ))}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-xl font-bold">Want a dedicated local guide?</h3>
            <p className="text-sm text-muted-foreground">Tell us your interests — we'll match you in under 24 hrs.</p>
          </div>
          <button className="rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta-foreground">Request a Guide</button>
        </div>
      </section>
    </div>
  );
}
