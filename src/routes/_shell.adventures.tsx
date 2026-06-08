import { createFileRoute } from "@tanstack/react-router";
import { Star, Clock, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/adventures")({
  head: () => ({ meta: [{ title: "Adventures — Spirit of Puerto Rico" }] }),
  component: AdventuresScreen,
});

const cats = ["All","🏄 Water","🌿 Eco","🎨 Culture","🧘 Wellness","🎣 Fishing","🍽️ Food","🎭 Events","🗺️ Custom"];

const experiences = [
  { title: "Bioluminescent Bay Kayak",  img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=700&q=85", dur: "3 hr", grp: "8 max",  price: "$72",  rating: 4.9, hot: true },
  { title: "Old San Juan Food Crawl",    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85", dur: "4 hr", grp: "10 max", price: "$58",  rating: 4.8, hot: false },
  { title: "El Yunque Rainforest Hike",  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=85", dur: "6 hr", grp: "12 max", price: "$95",  rating: 4.9, hot: true },
  { title: "Sunset Snorkel at Icacos",   img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=700&q=85", dur: "4 hr", grp: "10 max", price: "$88",  rating: 4.7, hot: false },
  { title: "Coffee Farm Sunrise Tour",   img: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=700&q=85", dur: "5 hr", grp: "8 max",  price: "$65",  rating: 4.8, hot: false },
  { title: "Deep Sea Fishing Charter",   img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=85", dur: "8 hr", grp: "6 max",  price: "$140", rating: 4.9, hot: true },
];

function AdventuresScreen() {
  const [activeCat, setActiveCat] = useState("All");

  return (
    <div className="mx-auto max-w-6xl px-4 py-0 lg:px-8">

      {/* Hero */}
      <div className="relative -mx-4 lg:-mx-8 mb-8 overflow-hidden" style={{ height: 260 }}>
        <img src="https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1400&q=85" alt="Adventures" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.06 0.02 240 / 0.3) 0%, oklch(0.06 0.02 240 / 0.94) 100%)" }} />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-6">
          <p className="eyebrow mb-1">Experiences</p>
          <h1 className="font-display text-3xl font-light italic text-white">Island <span className="not-italic font-semibold">Adventures</span></h1>
          <p className="font-sans text-sm text-white/60 mt-1">500+ curated experiences across Puerto Rico</p>
        </div>
      </div>

      {/* Category filter */}
      <div className="no-scrollbar flex gap-2 overflow-x-auto pb-3 mb-8">
        {cats.map((c) => (
          <button key={c} onClick={() => setActiveCat(c)}
            className="chip whitespace-nowrap transition-all"
            style={activeCat === c
              ? { background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }
              : { background: "oklch(0.14 0.018 240)", color: "oklch(0.60 0.02 260)", border: "1px solid oklch(1 0 0 / 0.08)" }
            }
          >{c}</button>
        ))}
      </div>

      {/* Featured big card */}
      <div className="mb-8 relative overflow-hidden rounded-3xl card-lift" style={{ height: 340 }}>
        <img src="https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1400&q=85" alt="Featured" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, oklch(0.06 0.02 240 / 0.88) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-7">
          <span className="chip mb-3 self-start" style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>Featured Experience</span>
          <h2 className="font-display text-3xl font-light italic text-white max-w-sm leading-tight">
            Private El Morro <span className="not-italic font-semibold">Sunset Tour</span>
          </h2>
          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1"><Star size={13} fill="oklch(0.80 0.16 72)" stroke="none" /><span className="font-sans text-sm text-white/80">4.9</span></div>
            <div className="flex items-center gap-1 text-white/60"><Clock size={13} /><span className="font-sans text-sm">3 hr</span></div>
            <div className="flex items-center gap-1 text-white/60"><Users size={13} /><span className="font-sans text-sm">Private</span></div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="font-display text-3xl font-light text-white">$120 <span className="font-sans text-sm text-white/50 font-normal">/ person</span></div>
            <button className="flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-700 uppercase tracking-wider"
              style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>
              Book Now <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {experiences.map((e) => (
          <article key={e.title} className="card-lift overflow-hidden rounded-2xl" style={{ background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
            <div className="relative overflow-hidden" style={{ height: 180 }}>
              <img src={e.img} alt={e.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 photo-overlay" />
              {e.hot && <span className="chip absolute top-3 left-3" style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>🔥 Hot</span>}
            </div>
            <div className="p-4">
              <h3 className="font-display text-lg font-semibold text-white leading-snug">{e.title}</h3>
              <div className="flex items-center gap-3 mt-2 text-white/55">
                <span className="flex items-center gap-1 font-sans text-xs"><Star size={11} fill="oklch(0.80 0.16 72)" stroke="none" />{e.rating}</span>
                <span className="flex items-center gap-1 font-sans text-xs"><Clock size={11} />{e.dur}</span>
                <span className="flex items-center gap-1 font-sans text-xs"><Users size={11} />{e.grp}</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="font-display text-2xl font-light text-white">{e.price} <span className="font-sans text-xs text-white/45 font-normal">/ person</span></div>
                <button className="chip" style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>Book</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Custom itinerary banner */}
      <div className="mb-8 relative overflow-hidden rounded-3xl">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85" alt="Custom" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: "oklch(0.06 0.02 240 / 0.82)" }} />
        <div className="relative p-7 flex flex-col sm:flex-row items-center gap-5">
          <div className="flex-1">
            <p className="eyebrow mb-1">Build Your Journey</p>
            <h3 className="font-display text-2xl font-light italic text-white">Custom <span className="not-italic font-semibold">Itinerary</span></h3>
            <p className="font-sans text-sm text-white/60 mt-1">We'll design a multi-day experience around you</p>
          </div>
          <button className="rounded-full px-6 py-3 font-sans text-sm font-700 uppercase tracking-wider whitespace-nowrap"
            style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>
            Start Planning →
          </button>
        </div>
      </div>

    </div>
  );
}
