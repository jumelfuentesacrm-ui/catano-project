import { createFileRoute } from "@tanstack/react-router";
import { Heart, Share2, Bookmark, Play, Plus, BadgeCheck } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/_shell/stories")({
  head: () => ({
    meta: [
      { title: "Stories — Cataño" },
      { name: "description", content: "Community storytelling from Puerto Rico — elders, youth, business owners and culture keepers." },
    ],
  }),
  component: StoriesScreen,
});

const filters = ["All", "Elders", "History", "Business", "Youth", "Events", "Culture"] as const;

const stories = [
  {
    title: "The day the ferry brought my abuelo home",
    desc: "A 90-year-old recounts returning from the Korean War.",
    creator: "Doña Mariela",
    badge: "Local Elder",
    tags: ["#FamilyHistory", "#CatañoProud"],
    img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
  },
  {
    title: "Running my mother's panadería at 22",
    desc: "Why I came back from Orlando to keep the bakery alive.",
    creator: "Joseline Ramírez",
    badge: "Business Owner",
    tags: ["#NewGuard", "#CatañoEats"],
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    title: "Bomba is not a performance, it's a conversation",
    desc: "Inside a Saturday night gathering at the plaza.",
    creator: "Tito Ayala",
    badge: "Culture Keeper",
    tags: ["#OralHistory", "#Bomba"],
    img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
  },
  {
    title: "We surf before school",
    desc: "Three teenagers, one longboard, and the sunrise.",
    creator: "Andrés & crew",
    badge: "Youth Creator",
    tags: ["#YouthVoices", "#Surf"],
    img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80",
  },
];

function StoriesScreen() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  return (
    <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8 lg:py-10">
      <header>
        <p className="font-accent text-xs text-muted-foreground">COMMUNITY STORYTELLING</p>
        <h1 className="mt-1 font-display text-3xl font-bold lg:text-4xl">Stories from the island</h1>
      </header>

      {/* Featured collection banner */}
      <div className="relative mt-5 overflow-hidden rounded-3xl bg-gradient-sunset p-6 text-sunset-foreground shadow-warm">
        <span className="font-accent text-[11px]">THIS MONTH</span>
        <h2 className="mt-1 font-display text-2xl font-bold leading-tight">Oral Histories of Old San Juan</h2>
        <p className="mt-2 max-w-md text-sm opacity-90">12 elders. 7 streets. 500 years of memory.</p>
        <button className="mt-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Explore collection</button>
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
      </div>

      {/* Filters */}
      <div className="no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition ${
              active === f ? "bg-primary text-primary-foreground shadow-warm" : "bg-card text-foreground/70 border border-border"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Feed */}
      <div className="mt-5 space-y-5">
        {stories.map((s) => (
          <article key={s.title} className="card-lift overflow-hidden rounded-3xl bg-card shadow-warm">
            <div className="relative aspect-[4/5] sm:aspect-[16/10]">
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-hero" />
              <button className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary">
                <Play size={20} fill="currentColor" className="ml-0.5" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-full bg-sunset ring-2 ring-white" />
                  <div>
                    <div className="text-sm font-semibold leading-tight flex items-center gap-1">{s.creator} <BadgeCheck size={14} className="text-sunset" /></div>
                    <span className="chip bg-white/20 text-white text-[10px]">{s.badge}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display text-lg font-bold leading-snug">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[11px] font-semibold text-ocean">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-5 text-muted-foreground">
                <button className="flex items-center gap-1.5 text-sm hover:text-terracotta"><Heart size={18} /> 1.2k</button>
                <button className="flex items-center gap-1.5 text-sm hover:text-foreground"><Share2 size={18} /> Share</button>
                <button className="ml-auto flex items-center gap-1.5 text-sm hover:text-sunset"><Bookmark size={18} /> Save</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Floating upload */}
      <button className="fixed bottom-24 right-5 z-30 flex items-center gap-2 rounded-full bg-gradient-sunset px-5 py-3.5 font-semibold text-sunset-foreground shadow-glow lg:bottom-8 lg:right-8">
        <Plus size={18} /> Upload Your Story
      </button>
    </div>
  );
}
