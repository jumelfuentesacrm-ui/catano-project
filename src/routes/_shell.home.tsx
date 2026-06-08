import { createFileRoute } from "@tanstack/react-router";
import { Play, MapPin, Star, ArrowRight, Car, Compass, Map, Calendar, Utensils, Clock, Users } from "lucide-react";

export const Route = createFileRoute("/_shell/home")({
  head: () => ({
    meta: [
      { title: "Home — Spirit of Puerto Rico" },
      { name: "description", content: "Discover stories, adventures, rides and community across Puerto Rico." },
    ],
  }),
  component: HomeScreen,
});

// ── Data ──────────────────────────────────────────────────────────
const quickActions = [
  { Icon: Car,      label: "Book a Ride",  color: "#0A3D62", bg: "#E8F0F8" },
  { Icon: Compass,  label: "Book a Tour",  color: "#1A6B3C", bg: "#E6F4EC" },
  { Icon: Map,      label: "3D Map",       color: "#C89A30", bg: "#F8F1E0" },
  { Icon: Calendar, label: "Events",       color: "#C0392B", bg: "#F8E8E6" },
  { Icon: Utensils, label: "Local Food",   color: "#6B3FA0", bg: "#F0EBF8" },
];

// Trending stories — mapped to Community Storytelling section
const trending = [
  {
    tag: "Oral History",
    title: "Voices of the Bay: fishermen of Cataño across three generations",
    img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&q=85",
  },
  {
    tag: "Local Business",
    title: "Panadería La Bahía: family-run since 1962, still baking mallorcas at sunrise",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=85",
  },
  {
    tag: "Culture",
    title: "Bomba y plena — the music that kept Cataño's identity alive",
    img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=85",
  },
];

// Real local events in the Cataño / PR area
const events = [
  {
    name: "Festival de la Bahía de Cataño",
    date: "Fri · Jun 13",
    loc: "Paseo Marítimo, Cataño",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
    price: "Free",
    tag: "Festival",
  },
  {
    name: "Noches de Bomba y Plena",
    date: "Sat · Jun 14",
    loc: "Plaza Central, Cataño",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
    price: "$15",
    tag: "Music",
  },
  {
    name: "Mercado Agrícola de Cataño",
    date: "Sun · Jun 15",
    loc: "Calle Marina, Cataño",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85",
    price: "Free",
    tag: "Market",
  },
];

// Hidden gems — real Cataño/PR attractions
const gems = [
  { name: "Isla de Cabras",        dist: "3.1 km", desc: "Historic island with colonial ruins and swimming",  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=85" },
  { name: "El Morro Fortress",     dist: "4.2 km", desc: "16th-century Spanish citadel, UNESCO heritage",      img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=600&q=85" },
  { name: "Old San Juan Streets",  dist: "5.0 km", desc: "Cobblestone streets, colorful colonial architecture", img: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=600&q=85" },
];

// ── Component ─────────────────────────────────────────────────────
function HomeScreen() {
  return (
    <div style={{ background: "#FAF8F3" }}>

      {/* ── HERO — Cataño Bay ── */}
      <section className="relative overflow-hidden" style={{ height: "65vh", minHeight: 400 }}>
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=90"
          alt="Old San Juan and the bay of Cataño, Puerto Rico"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 overlay-hero" />
        <div className="absolute inset-0 overlay-left" />

        {/* Header */}
        <div className="absolute top-0 inset-x-0 flex items-start justify-between px-5 pt-6 lg:px-8">
          <div>
            <p className="eyebrow mb-0.5" style={{ color: "#D4A840" }}>Spirit of</p>
            <h1 className="font-display text-3xl font-light italic text-white lg:text-4xl">Puerto Rico</h1>
          </div>
          <div className="flex items-center gap-2 rounded-full px-3 py-1.5"
            style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.2)" }}>
            <span style={{ fontSize: 10, fontFamily: "Barlow Condensed", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.85)" }}>Cataño · 84° Sunny</span>
          </div>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-0 inset-x-0 px-5 pb-8 lg:px-8">
          <span className="chip mb-3" style={{ background: "rgba(212,168,64,0.9)", color: "#1A0A00" }}>Featured Story</span>
          <h2 className="font-display text-2xl font-light text-white leading-tight lg:text-3xl" style={{ maxWidth: 480 }}>
            Voices of the Bay:<br />
            <span className="font-semibold not-italic">Three Generations of Cataño Fishermen</span>
          </h2>
          <div className="mt-4 flex items-center gap-3 flex-wrap">
            <button className="btn-gold">
              <Play size={12} fill="currentColor" strokeWidth={0} /> Watch Story
            </button>
            <div className="flex items-center gap-2">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=56&q=80"
                alt="Doña Mariela" className="h-7 w-7 rounded-full object-cover" style={{ border: "2px solid #D4A840" }} />
              <span style={{ fontFamily: "Montserrat", fontSize: "0.72rem", color: "rgba(255,255,255,0.80)" }}>Doña Mariela · Local Elder</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK ACTIONS ── */}
      <section className="px-4 py-6 lg:px-8">
        <p className="eyebrow mb-3">Quick Access</p>
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
          {quickActions.map(({ Icon, label, color, bg }) => (
            <button key={label} className="card-lift flex min-w-[96px] flex-col items-center gap-2.5 rounded-2xl py-4 px-3 bg-white shadow-sm"
              style={{ border: "1px solid #EDE7D9" }}>
              <span className="grid h-11 w-11 place-items-center rounded-xl" style={{ background: bg }}>
                <Icon size={19} color={color} strokeWidth={1.9} />
              </span>
              <span style={{ fontFamily: "Montserrat", fontSize: "0.65rem", fontWeight: 600, color: "#5A4A38", textAlign: "center", lineHeight: 1.2 }}>{label}</span>
            </button>
          ))}
        </div>
      </section>

      <hr className="section-sep mx-4 lg:mx-8" />

      {/* ── COMMUNITY STORIES — trending ── */}
      <section className="px-4 pb-8 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="eyebrow mb-1">Community Storytelling</p>
            <h2 className="section-title text-2xl">Trending <strong>This Week</strong></h2>
          </div>
          <button className="btn-ocean py-2 px-4 text-xs">See All</button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {trending.map((s) => (
            <article key={s.title} className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{ border: "1px solid #EDE7D9" }}>
              <div className="relative overflow-hidden" style={{ height: 180 }}>
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 overlay-card" />
                <span className="chip absolute top-3 left-3"
                  style={{ background: "rgba(255,255,255,0.92)", color: "#0A3D62" }}>{s.tag}</span>
              </div>
              <div className="p-4">
                <p style={{ fontFamily: "Cormorant Garamond", fontSize: "1rem", fontWeight: 600, color: "#1A1612", lineHeight: 1.3 }}>{s.title}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="section-sep mx-4 lg:mx-8" />

      {/* ── LOCAL EVENTS ── */}
      <section className="px-4 pb-8 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="eyebrow mb-1">Upcoming in Cataño</p>
            <h2 className="section-title text-2xl">Local <strong>Events</strong></h2>
          </div>
          <button className="btn-ocean py-2 px-4 text-xs">Calendar</button>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {events.map((e) => (
            <article key={e.name} className="card-lift min-w-[270px] overflow-hidden rounded-2xl bg-white shadow-sm"
              style={{ border: "1px solid #EDE7D9" }}>
              <div className="relative overflow-hidden" style={{ height: 150 }}>
                <img src={e.img} alt={e.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 overlay-card" />
                <span className="chip absolute top-3 left-3"
                  style={{ background: "rgba(212,168,64,0.92)", color: "#1A0A00" }}>{e.tag}</span>
                <span className="chip absolute top-3 right-3"
                  style={{ background: e.price === "Free" ? "rgba(26,107,60,0.9)" : "rgba(255,255,255,0.92)", color: e.price === "Free" ? "white" : "#0A3D62" }}>{e.price}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center gap-1.5 mb-1.5 eyebrow"><Clock size={10} />{e.date}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond", fontSize: "1.05rem", fontWeight: 600, color: "#1A1612", lineHeight: 1.25 }}>{e.name}</h3>
                <div className="flex items-center gap-1 mt-1.5" style={{ fontFamily: "Montserrat", fontSize: "0.68rem", color: "#8A7B6A" }}>
                  <MapPin size={10} />{e.loc}
                </div>
                <button className="btn-gold mt-3 w-full justify-center py-2.5 text-xs">Get Tickets</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="section-sep mx-4 lg:mx-8" />

      {/* ── LOCAL BUSINESS SPOTLIGHT ── */}
      <section className="px-4 pb-8 lg:px-8">
        <p className="eyebrow mb-3">Economic Development · Local Business</p>
        <div className="relative overflow-hidden rounded-3xl" style={{ minHeight: 200 }}>
          <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=85"
            alt="Panadería La Bahía interior" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, rgba(10,61,98,0.90) 0%, rgba(10,61,98,0.55) 60%, transparent 100%)" }} />
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7">
            <div className="flex-1">
              <span className="chip mb-3 inline-block" style={{ background: "rgba(212,168,64,0.9)", color: "#1A0A00" }}>Spotlight · Cataño</span>
              <h3 className="font-display text-3xl font-light italic text-white">Panadería <strong className="font-semibold not-italic">La Bahía</strong></h3>
              <p style={{ fontFamily: "Montserrat", fontSize: "0.8rem", color: "rgba(255,255,255,0.75)", marginTop: 8, maxWidth: 340 }}>
                Family-run since 1962. Famous for mallorcas at sunrise. A Cataño institution connecting locals and visitors every morning.
              </p>
              <div className="flex items-center gap-1.5 mt-3">
                <Star size={13} fill="#D4A840" color="#D4A840" />
                <span style={{ fontFamily: "Montserrat", fontSize: "0.75rem", color: "rgba(255,255,255,0.80)" }}>4.9 · 312 reviews</span>
              </div>
            </div>
            <button className="btn-gold whitespace-nowrap">Visit <ArrowRight size={13} /></button>
          </div>
        </div>
      </section>

      <hr className="section-sep mx-4 lg:mx-8" />

      {/* ── HIDDEN GEMS ── */}
      <section className="px-4 pb-10 lg:px-8">
        <div className="flex items-end justify-between mb-4">
          <div>
            <p className="eyebrow mb-1">Tourism Navigation</p>
            <h2 className="section-title text-2xl">Hidden <strong>Gems</strong></h2>
          </div>
          <button className="btn-ocean py-2 px-4 text-xs">Open Map</button>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {gems.map((g) => (
            <article key={g.name} className="card-lift relative min-w-[200px] overflow-hidden rounded-2xl"
              style={{ height: 280, border: "1px solid #EDE7D9" }}>
              <img src={g.img} alt={g.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 overlay-card" />
              <div className="absolute bottom-0 inset-x-0 p-4">
                <h4 style={{ fontFamily: "Cormorant Garamond", fontSize: "1.1rem", fontWeight: 600, color: "white", lineHeight: 1.2 }}>{g.name}</h4>
                <p style={{ fontFamily: "Montserrat", fontSize: "0.62rem", color: "rgba(255,255,255,0.70)", marginTop: 4, lineHeight: 1.4 }}>{g.desc}</p>
                <div className="flex items-center gap-1 mt-2" style={{ fontFamily: "Montserrat", fontSize: "0.62rem", color: "rgba(255,255,255,0.55)" }}>
                  <MapPin size={10} />{g.dist} from Cataño
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
