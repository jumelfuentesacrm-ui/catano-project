import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { j as Search, i as Star, A as ArrowRight, q as Clock, k as Users } from "./_libs/lucide-react.mjs";
const cats = ["🏄 Water", "🌿 Eco", "🎨 Culture", "🧘 Wellness", "🎣 Fishing", "🍽️ Food", "🎭 Events", "🗺️ Custom"];
const experiences = [{
  title: "Bioluminescent Bay Kayak",
  img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=600&q=80",
  dur: "3 hr",
  grp: "8 max",
  price: "$72",
  rating: 4.9,
  group: true
}, {
  title: "Old San Juan Food Crawl",
  img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
  dur: "4 hr",
  grp: "10 max",
  price: "$58",
  rating: 4.8
}, {
  title: "El Yunque Rainforest Hike",
  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  dur: "6 hr",
  grp: "12 max",
  price: "$95",
  rating: 4.9,
  group: true
}, {
  title: "Sunset Snorkel at Icacos",
  img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=600&q=80",
  dur: "4 hr",
  grp: "10 max",
  price: "$88",
  rating: 4.7
}];
function AdventuresScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-muted-foreground", children: "EXPERIENCES" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl font-bold lg:text-4xl", children: "What do you want to experience?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 rounded-full bg-card px-5 py-3 shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 18, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent text-sm outline-none", placeholder: "Snorkeling, food tours, biolum kayak..." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground", children: "Search" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-5 flex gap-2 overflow-x-auto pb-1", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold whitespace-nowrap hover:bg-accent", children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift mt-6 grid gap-0 overflow-hidden rounded-3xl bg-card shadow-warm md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] md:aspect-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1000&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute left-4 top-4 bg-sunset text-sunset-foreground", children: "Featured" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-center p-6 lg:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[11px] text-tropical", children: "CULTURE · 5 HRS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-bold lg:text-3xl", children: "Bomba & Plena: A Saturday in Loíza" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Dance, drum, eat, and learn from the families who keep this Afro-Boricua tradition alive." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-4 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-sunset text-sunset" }),
            " 4.95 · 218"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-xl font-bold", children: [
            "$84",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal text-muted-foreground", children: " /person" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-warm", children: [
          "Book Now ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Popular experiences" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4", children: experiences.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-2xl bg-card shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, className: "h-full w-full object-cover" }),
          e.group && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute left-2 top-2 bg-tropical text-tropical-foreground", children: "Groups 8+ · 20% off" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm font-semibold leading-snug", children: e.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2 text-[11px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              e.dur
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
              e.grp
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold", children: e.price }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: "fill-sunset text-sunset" }),
              e.rating
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-2 w-full rounded-full bg-primary py-1.5 text-xs font-semibold text-primary-foreground", children: "Book" })
        ] })
      ] }, e.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8 flex flex-col gap-3 rounded-3xl bg-gradient-tropical p-6 text-tropical-foreground shadow-warm sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[11px] opacity-90", children: "CUSTOM" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl font-bold", children: "Build your itinerary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm opacity-90", children: "Stitch together a multi-day adventure with a local planner." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-tropical", children: "Start planning →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "card-lift mt-6 overflow-hidden rounded-3xl bg-card p-6 shadow-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-3", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gradient-sunset ring-4 ring-card" }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Want a dedicated local guide?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Tell us your interests — we'll match you in under 24 hrs." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-terracotta-foreground", children: "Request a Guide" })
    ] }) })
  ] });
}
export {
  AdventuresScreen as component
};
