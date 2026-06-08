import { createFileRoute } from "@tanstack/react-router";
import { Cloud, Play, Car, Map as MapIcon, Calendar, UtensilsCrossed, Compass, Star, ArrowRight, MapPin } from "lucide-react";

export const Route = createFileRoute("/_shell/home")({
  head: () => ({
    meta: [
      { title: "Home — Cataño" },
      { name: "description", content: "Discover stories, events, food, and hidden gems in Cataño today." },
    ],
  }),
  component: HomeScreen,
});

const trending = [
  { tag: "History", title: "The old ferry crossings of San Juan Bay", img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80" },
  { tag: "Food", title: "Where to find the real alcapurrias", img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80" },
  { tag: "Music", title: "Bomba y plena in the plaza", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80" },
];

const events = [
  { name: "Festival de la Bahía", date: "Fri · Jun 13", loc: "Paseo Marítimo", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80" },
  { name: "Noches de Bomba", date: "Sat · Jun 14", loc: "Plaza Central", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80" },
  { name: "Mercado Agrícola", date: "Sun · Jun 15", loc: "Calle Marina", img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80" },
];

const gems = [
  { name: "Mirador El Morro", dist: "2.4 km", img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=500&q=80" },
  { name: "Café Don Ruiz", dist: "0.8 km", img: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=500&q=80" },
  { name: "Isla de Cabras", dist: "3.1 km", img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80" },
];

const quickActions = [
  { Icon: Car, label: "Book Ride", color: "bg-ocean text-ocean-foreground" },
  { Icon: Compass, label: "Plan Tour", color: "bg-tropical text-tropical-foreground" },
  { Icon: MapIcon, label: "Map", color: "bg-sunset text-sunset-foreground" },
  { Icon: Calendar, label: "Events", color: "bg-terracotta text-terracotta-foreground" },
  { Icon: UtensilsCrossed, label: "Food", color: "bg-primary text-primary-foreground" },
];

function HomeScreen() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10">
      {/* Greeting + weather */}
      <header className="flex items-start justify-between gap-4">
        <div>
          <p className="font-accent text-xs text-muted-foreground">SÁBADO · 8 JUNIO</p>
          <h1 className="mt-1 font-display text-3xl font-bold lg:text-4xl">¡Buenos días, Carlos!</h1>
          <p className="mt-1 text-sm text-muted-foreground">Here's what's happening in Cataño today.</p>
        </div>
        <div className="flex items-center gap-2 rounded-2xl bg-card px-3 py-2 shadow-warm">
          <Cloud className="text-ocean" size={18} />
          <div>
            <div className="font-display text-xl font-bold leading-none">84°</div>
            <div className="text-[10px] text-muted-foreground">Sunny</div>
          </div>
        </div>
      </header>

      {/* Featured story */}
      <article className="card-lift mt-6 overflow-hidden rounded-3xl bg-card shadow-warm">
        <div className="relative aspect-[16/9] w-full">
          <img src="https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1200&q=80" alt="Featured" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-hero" />
          <button className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-primary shadow-glow">
            <Play size={22} fill="currentColor" className="ml-1" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
            <span className="chip bg-sunset text-sunset-foreground">Featured Story</span>
            <h2 className="mt-2 font-display text-2xl font-bold lg:text-3xl">Voices of the Bay: Three generations of fishermen</h2>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-sunset ring-2 ring-white" />
              <span className="text-sm">Doña Mariela · Local Elder</span>
              <button className="ml-auto rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary">Watch</button>
            </div>
          </div>
        </div>
      </article>

      {/* Quick actions */}
      <section className="mt-8">
        <h3 className="font-display text-lg font-bold">Quick actions</h3>
        <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2">
          {quickActions.map(({ Icon, label, color }) => (
            <button key={label} className="card-lift flex min-w-[92px] flex-col items-center gap-2 rounded-2xl bg-card p-3 shadow-warm">
              <span className={`grid h-12 w-12 place-items-center rounded-xl ${color}`}><Icon size={20} /></span>
              <span className="text-xs font-semibold">{label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="mt-8">
        <div className="flex items-end justify-between">
          <h3 className="font-display text-lg font-bold">Trending this week</h3>
          <button className="text-xs font-semibold text-primary">See all →</button>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((s) => (
            <article key={s.title} className="card-lift overflow-hidden rounded-2xl bg-card shadow-warm">
              <div className="relative aspect-[4/3]">
                <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
                <span className="chip absolute left-3 top-3 bg-white/95 text-primary">{s.tag}</span>
              </div>
              <div className="p-4">
                <h4 className="font-display text-base font-semibold leading-snug">{s.title}</h4>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Events */}
      <section className="mt-8">
        <h3 className="font-display text-lg font-bold">Upcoming local events</h3>
        <div className="no-scrollbar mt-3 flex gap-4 overflow-x-auto pb-2">
          {events.map((e) => (
            <article key={e.name} className="card-lift min-w-[260px] overflow-hidden rounded-2xl bg-card shadow-warm">
              <div className="aspect-[5/3]"><img src={e.img} alt={e.name} className="h-full w-full object-cover" /></div>
              <div className="p-4">
                <div className="font-accent text-[11px] text-sunset">{e.date}</div>
                <h4 className="mt-1 font-display text-base font-semibold">{e.name}</h4>
                <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground"><MapPin size={12}/>{e.loc}</div>
                <button className="mt-3 w-full rounded-full bg-primary py-2 text-xs font-semibold text-primary-foreground">Get Tickets</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Spotlight business */}
      <section className="mt-8 overflow-hidden rounded-3xl bg-gradient-ocean p-6 text-white shadow-warm lg:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80" alt="Business" className="h-36 w-full rounded-2xl object-cover sm:h-32 sm:w-40" />
          <div className="flex-1">
            <span className="font-accent text-xs text-sunset">SPOTLIGHT · LOCAL BUSINESS</span>
            <h3 className="mt-1 font-display text-2xl font-bold">Panadería La Bahía</h3>
            <p className="mt-1 text-sm text-white/85">Family-run since 1962. Try the mallorcas at sunrise — they're a Cataño rite of passage.</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-sm"><Star size={14} className="fill-sunset text-sunset" /> 4.9 · 312 reviews</div>
            </div>
          </div>
          <button className="rounded-full bg-sunset px-5 py-2.5 text-sm font-semibold text-sunset-foreground">Visit <ArrowRight size={14} className="ml-1 inline" /></button>
        </div>
      </section>

      {/* Hidden gems */}
      <section className="mt-8">
        <h3 className="font-display text-lg font-bold">Hidden gems near you</h3>
        <div className="no-scrollbar mt-3 flex gap-4 overflow-x-auto pb-2">
          {gems.map((g) => (
            <article key={g.name} className="card-lift relative min-w-[200px] overflow-hidden rounded-2xl shadow-warm">
              <img src={g.img} alt={g.name} className="aspect-[3/4] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-hero" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h4 className="font-display text-base font-bold">{g.name}</h4>
                <div className="text-xs opacity-90">{g.dist} away</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
