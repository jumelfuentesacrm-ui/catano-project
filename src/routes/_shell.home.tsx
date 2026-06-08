import { createFileRoute } from "@tanstack/react-router";
import { Play, MapPin, Star, ArrowRight, Car, Compass, Map, Calendar, UtensilsCrossed, Clock } from "lucide-react";

export const Route = createFileRoute("/_shell/home")({
  head: () => ({
    meta: [
      { title: "Home — Spirit of Puerto Rico" },
      { name: "description", content: "Discover stories, events, food, and hidden gems across Puerto Rico." },
    ],
  }),
  component: HomeScreen,
});

const quickActions = [
  { Icon: Car,            label: "Book Ride",   bg: "oklch(0.38 0.10 235)" },
  { Icon: Compass,        label: "Tours",       bg: "oklch(0.62 0.18 32)" },
  { Icon: Map,            label: "Explore",     bg: "oklch(0.52 0.14 148)" },
  { Icon: Calendar,       label: "Events",      bg: "oklch(0.80 0.16 72)" },
  { Icon: UtensilsCrossed,label: "Food",        bg: "oklch(0.42 0.12 300)" },
];

const trending = [
  { tag: "History",  title: "The old ferry crossings of San Juan Bay",     img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=85" },
  { tag: "Food",     title: "Where to find the real alcapurrias in Cataño", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85" },
  { tag: "Culture",  title: "Bomba y plena — the heartbeat of the island",  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85" },
];

const events = [
  { name: "Festival de la Bahía",  date: "Fri · Jun 13",  loc: "Paseo Marítimo",  img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85",  price: "Free" },
  { name: "Noches de Bomba",       date: "Sat · Jun 14",  loc: "Plaza Central",   img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=85",  price: "$15" },
  { name: "Mercado Agrícola",      date: "Sun · Jun 15",  loc: "Calle Marina",    img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=85",  price: "Free" },
];

const gems = [
  { name: "Isla de Cabras",  dist: "3.1 km", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=85" },
  { name: "El Morro Fort",   dist: "4.2 km", img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=500&q=85" },
  { name: "Old San Juan",    dist: "5.0 km", img: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=500&q=85" },
];

function HomeScreen() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-0 lg:px-8">

      {/* ── Hero ── */}
      <section className="relative -mx-4 lg:-mx-8 mb-8 overflow-hidden" style={{ height: "68vh", minHeight: 420 }}>
        <img
          src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=90"
          alt="Old San Juan, Puerto Rico"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(165deg, oklch(0.06 0.02 240 / 0.55) 0%, transparent 50%, oklch(0.06 0.02 240 / 0.92) 100%)" }} />

        {/* Top bar */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-8">
          <div>
            <p className="eyebrow mb-0.5">Spirit of</p>
            <h1 className="font-display text-3xl font-light italic text-white lg:text-4xl">Puerto Rico</h1>
          </div>
          <div className="glass-nav flex items-center gap-2 rounded-full px-3 py-2">
            <div className="h-2 w-2 rounded-full" style={{ background: "oklch(0.80 0.16 72)" }} />
            <span className="font-accent text-xs font-600 text-white/80 uppercase tracking-widest">84° Sunny</span>
          </div>
        </div>

        {/* Bottom hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-8">
          <p className="eyebrow mb-2">Featured Story</p>
          <h2 className="font-display text-2xl font-light italic text-white leading-tight lg:text-3xl">
            Voices of the Bay:<br/>
            <span className="not-italic font-semibold">Three Generations of Fishermen</span>
          </h2>
          <div className="mt-3 flex items-center gap-3">
            <button
              className="flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-xs font-700 uppercase tracking-wider transition-transform hover:scale-105"
              style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}
            >
              <Play size={12} fill="currentColor" />
              Watch Story
            </button>
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full overflow-hidden border-2" style={{ borderColor: "oklch(0.80 0.16 72)" }}>
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80" alt="" className="w-full h-full object-cover" />
              </div>
              <span className="font-sans text-xs text-white/75">Doña Mariela · Local Elder</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Actions ── */}
      <section className="mb-10">
        <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
          {quickActions.map(({ Icon, label, bg }) => (
            <button key={label}
              className="card-lift flex min-w-[88px] flex-col items-center gap-2.5 rounded-2xl py-4 px-3 transition-all"
              style={{ background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }}
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl" style={{ background: bg }}>
                <Icon size={20} color="white" strokeWidth={1.8} />
              </span>
              <span className="font-accent text-[11px] font-600 uppercase tracking-wide text-white/70">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Trending ── */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4">
          <h3 className="font-display text-2xl font-light italic text-white">Trending <span className="not-italic font-semibold">This Week</span></h3>
          <button className="eyebrow flex items-center gap-1">See all <ArrowRight size={11} /></button>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {trending.map((s) => (
            <article key={s.title} className="card-lift relative overflow-hidden rounded-2xl" style={{ height: 220 }}>
              <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 photo-overlay" />
              <div className="absolute top-3 left-3">
                <span className="chip text-white/90" style={{ background: "oklch(1 0 0 / 0.15)", backdropFilter: "blur(8px)" }}>{s.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-display text-base font-semibold text-white leading-snug">{s.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Events ── */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4">
          <h3 className="font-display text-2xl font-light italic text-white">Local <span className="not-italic font-semibold">Events</span></h3>
          <button className="eyebrow flex items-center gap-1">See all <ArrowRight size={11} /></button>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {events.map((e) => (
            <article key={e.name} className="card-lift min-w-[260px] overflow-hidden rounded-2xl" style={{ background: "oklch(0.14 0.018 240)", border: "1px solid oklch(1 0 0 / 0.07)" }}>
              <div className="relative h-40 overflow-hidden">
                <img src={e.img} alt={e.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 photo-overlay" />
                <span className="absolute top-3 right-3 chip" style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}>{e.price}</span>
              </div>
              <div className="p-4">
                <div className="eyebrow mb-1 flex items-center gap-1.5"><Clock size={10} />{e.date}</div>
                <h4 className="font-display text-lg font-semibold text-white leading-tight">{e.name}</h4>
                <div className="mt-1 flex items-center gap-1 font-sans text-xs text-white/50"><MapPin size={11} />{e.loc}</div>
                <button
                  className="mt-3 w-full rounded-full py-2.5 font-sans text-xs font-700 uppercase tracking-wider transition-transform hover:scale-105"
                  style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}
                >
                  Get Tickets
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Business Spotlight ── */}
      <section className="mb-10 relative overflow-hidden rounded-3xl">
        <img
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=85"
          alt="Panadería La Bahía"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "oklch(0.06 0.02 240 / 0.80)" }} />
        <div className="relative p-7 lg:p-10 flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1">
            <p className="eyebrow mb-2">Spotlight · Local Business</p>
            <h3 className="font-display text-3xl font-light italic text-white leading-tight">
              Panadería <span className="not-italic font-semibold">La Bahía</span>
            </h3>
            <p className="mt-2 font-sans text-sm text-white/70 max-w-sm">Family-run since 1962. Try the mallorcas at sunrise — a Cataño rite of passage.</p>
            <div className="mt-3 flex items-center gap-1.5">
              <Star size={13} fill="oklch(0.80 0.16 72)" stroke="none" />
              <span className="font-sans text-sm text-white/80">4.9 · 312 reviews</span>
            </div>
          </div>
          <button
            className="self-start sm:self-center flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-700 uppercase tracking-wider whitespace-nowrap"
            style={{ background: "var(--gradient-gold)", color: "oklch(0.10 0.02 60)" }}
          >
            Visit <ArrowRight size={14} />
          </button>
        </div>
      </section>

      {/* ── Hidden Gems ── */}
      <section className="mb-10">
        <div className="flex items-end justify-between mb-4">
          <h3 className="font-display text-2xl font-light italic text-white">Hidden <span className="not-italic font-semibold">Gems</span></h3>
          <button className="eyebrow flex items-center gap-1">See all <ArrowRight size={11} /></button>
        </div>
        <div className="no-scrollbar flex gap-4 overflow-x-auto pb-2">
          {gems.map((g) => (
            <article key={g.name} className="card-lift relative min-w-[180px] overflow-hidden rounded-2xl" style={{ height: 260 }}>
              <img src={g.img} alt={g.name} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 photo-overlay" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-display text-base font-semibold text-white">{g.name}</h4>
                <div className="flex items-center gap-1 font-sans text-xs text-white/55 mt-0.5"><MapPin size={10} />{g.dist} away</div>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  );
}
