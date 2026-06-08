import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Users, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/get-around")({
  head: () => ({ meta: [{ title: "Get Around — Spirit of Puerto Rico" }] }),
  component: GetAroundScreen,
});

// All vehicle types from the concept document
const vehicles = [
  { e: "🚗", l: "Rideshare",    desc: "Standard cars" },
  { e: "🚕", l: "Taxi",         desc: "Licensed taxis" },
  { e: "🧳", l: "Tour + Ride",  desc: "Guide with transport" },
  { e: "🛵", l: "Scooter",      desc: "Scooter rental" },
  { e: "🚲", l: "Bicycle",      desc: "Bike rental" },
  { e: "⛵", l: "Water",         desc: "Ferry & boat" },
  { e: "🚐", l: "Shuttle Van",   desc: "Up to 8 people" },
  { e: "🚌", l: "Bus 15",        desc: "15-passenger" },
  { e: "🚍", l: "Bus 45",        desc: "45-passenger" },
  { e: "🎉", l: "Party Bus",     desc: "Events & groups" },
  { e: "🏔️", l: "Adventure",    desc: "Off-road vehicles" },
];

// Real popular routes: airport, cruise port, hotels
const popularRoutes = [
  {
    from: "Luis Muñoz Marín Airport (SJU)",
    to: "Cataño / San Juan",
    price: "$28",
    time: "35 min",
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    note: "All vehicle types available",
  },
  {
    from: "San Juan Cruise Port",
    to: "Old San Juan / Cataño",
    price: "$18",
    time: "20 min",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80",
    note: "Shuttle & water taxi options",
  },
  {
    from: "Cataño Ferry Terminal",
    to: "Old San Juan (Ferry)",
    price: "$0.75",
    time: "10 min",
    img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
    note: "Public ferry — runs every 30 min",
  },
  {
    from: "Isla Verde Hotel Zone",
    to: "Beaches / Attractions",
    price: "$12",
    time: "15 min",
    img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    note: "Scooter & bicycle rentals too",
  },
];

function GetAroundScreen() {
  const [selected, setSelected] = useState("Rideshare");
  const sel = vehicles.find((v) => v.l === selected)!;

  return (
    <div style={{ background: "#FAF8F3" }}>

      {/* Header */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=85"
          alt="Transportation Puerto Rico" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute inset-0 overlay-left" />
        <div className="absolute bottom-0 inset-x-0 px-5 pb-6 lg:px-8">
          <p className="eyebrow mb-1" style={{ color: "#D4A840" }}>Transportation Network</p>
          <h1 className="font-display text-3xl font-light italic text-white">Get <strong className="not-italic font-semibold">Around</strong></h1>
        </div>
      </div>

      <div className="px-4 py-6 lg:px-8">

        {/* Search */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm p-4 space-y-3" style={{ border: "1px solid #EDE7D9" }}>
          <p className="eyebrow mb-2">Plan Your Route</p>
          <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: "#F5F0E8" }}>
            <div className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: "#1A6B3C" }} />
            <span style={{ fontFamily: "Montserrat", fontSize: "0.8rem", color: "#9A8A78" }}>Your location or pickup point…</span>
          </div>
          <div className="flex items-center gap-3 rounded-xl p-3" style={{ background: "#F5F0E8" }}>
            <MapPin size={12} color="#C89A30" className="flex-shrink-0" />
            <span style={{ fontFamily: "Montserrat", fontSize: "0.8rem", color: "#9A8A78" }}>Where are you going?</span>
          </div>
        </div>

        {/* Vehicle type selector */}
        <div className="mb-6">
          <p className="eyebrow mb-3">Choose Vehicle Type</p>
          <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
            {vehicles.map(({ e, l, desc }) => (
              <button key={l} onClick={() => setSelected(l)}
                className="card-lift flex min-w-[88px] flex-col items-center gap-2 rounded-2xl py-3 px-2 transition-all bg-white"
                style={selected === l
                  ? { border: "2px solid #0A3D62", background: "#EEF4FA" }
                  : { border: "1px solid #E5DDD0" }
                }
              >
                <span className="text-2xl leading-none">{e}</span>
                <span style={{ fontFamily: "Barlow Condensed", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: selected === l ? "#0A3D62" : "#6A5A48", textAlign: "center" }}>{l}</span>
                <span style={{ fontFamily: "Montserrat", fontSize: "0.55rem", color: "#9A8A78", textAlign: "center" }}>{desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Fare estimate */}
        <div className="mb-6 overflow-hidden rounded-2xl bg-white shadow-sm" style={{ border: "1px solid #EDE7D9" }}>
          <div className="flex items-start justify-between p-5 pb-4">
            <div>
              <p className="eyebrow mb-1">{sel.e} {sel.l} · Estimated Fare</p>
              <div className="font-display text-4xl font-light" style={{ color: "#0A3D62" }}>$12–18</div>
              <p style={{ fontFamily: "Montserrat", fontSize: "0.7rem", color: "#8A7B6A", marginTop: 4 }}>~15 min arrival · Driver rated 4.9 ★</p>
            </div>
            <div className="flex items-center gap-1.5 rounded-full px-3 py-1.5" style={{ background: "#F0EBE1" }}>
              <Users size={12} color="#8A7B6A" />
              <span style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "#6A5A48" }}>1–4 people</span>
            </div>
          </div>
          <div className="px-5 pb-5">
            <button className="btn-gold w-full justify-center">Book {sel.e} {sel.l} Now</button>
          </div>
        </div>

        {/* Group discount banner */}
        <div className="mb-8 overflow-hidden rounded-2xl relative" style={{ height: 120 }}>
          <img src="https://images.unsplash.com/photo-1519671282429-b44b2802040e?w=900&q=80"
            alt="Group transport" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(26,107,60,0.82)" }} />
          <div className="relative flex items-center justify-between h-full px-5">
            <div>
              <p className="eyebrow mb-0.5" style={{ color: "#A8E0BC" }}>Traveling with 6+ people?</p>
              <p className="font-display text-xl italic text-white">Shuttle, bus & party bus packages</p>
              <p style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "rgba(255,255,255,0.70)", marginTop: 2 }}>Supports events, festivals, airport & cruise port transfers</p>
            </div>
            <button className="btn-gold flex-shrink-0">Get Quote</button>
          </div>
        </div>

        {/* Popular routes */}
        <p className="eyebrow mb-3">Popular Routes</p>
        <div className="flex flex-col gap-3">
          {popularRoutes.map((r) => (
            <div key={r.from} className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm flex" style={{ border: "1px solid #EDE7D9" }}>
              <img src={r.img} alt={r.to} className="w-24 object-cover flex-shrink-0" />
              <div className="flex-1 min-w-0 p-4">
                <p style={{ fontFamily: "Montserrat", fontSize: "0.65rem", color: "#9A8A78" }}>{r.from}</p>
                <p className="font-display text-base font-semibold" style={{ color: "#1A1612", marginTop: 1 }}>{r.to}</p>
                <div className="flex items-center gap-3 mt-1.5">
                  <span className="flex items-center gap-1" style={{ fontFamily: "Montserrat", fontSize: "0.65rem", color: "#8A7B6A" }}><Clock size={10} />{r.time}</span>
                  <span style={{ fontFamily: "Montserrat", fontSize: "0.62rem", color: "#9A8A78" }}>{r.note}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 pr-4 flex-shrink-0">
                <div className="font-display text-xl font-light" style={{ color: "#0A3D62" }}>{r.price}</div>
                <ChevronRight size={16} color="#C5B8A8" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
