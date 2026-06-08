import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as Play, a as Car, b as Compass, M as Map, e as Calendar, U as UtensilsCrossed, A as ArrowRight, f as Clock, g as MapPin, h as Star } from "./_libs/lucide-react.mjs";
const quickActions = [{
  Icon: Car,
  label: "Book Ride",
  bg: "oklch(0.38 0.10 235)"
}, {
  Icon: Compass,
  label: "Tours",
  bg: "oklch(0.62 0.18 32)"
}, {
  Icon: Map,
  label: "Explore",
  bg: "oklch(0.52 0.14 148)"
}, {
  Icon: Calendar,
  label: "Events",
  bg: "oklch(0.80 0.16 72)"
}, {
  Icon: UtensilsCrossed,
  label: "Food",
  bg: "oklch(0.42 0.12 300)"
}];
const trending = [{
  tag: "History",
  title: "The old ferry crossings of San Juan Bay",
  img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=85"
}, {
  tag: "Food",
  title: "Where to find the real alcapurrias in Cataño",
  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85"
}, {
  tag: "Culture",
  title: "Bomba y plena — the heartbeat of the island",
  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=85"
}];
const events = [{
  name: "Festival de la Bahía",
  date: "Fri · Jun 13",
  loc: "Paseo Marítimo",
  img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=85",
  price: "Free"
}, {
  name: "Noches de Bomba",
  date: "Sat · Jun 14",
  loc: "Plaza Central",
  img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=85",
  price: "$15"
}, {
  name: "Mercado Agrícola",
  date: "Sun · Jun 15",
  loc: "Calle Marina",
  img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=85",
  price: "Free"
}];
const gems = [{
  name: "Isla de Cabras",
  dist: "3.1 km",
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=85"
}, {
  name: "El Morro Fort",
  dist: "4.2 km",
  img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=500&q=85"
}, {
  name: "Old San Juan",
  dist: "5.0 km",
  img: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=500&q=85"
}];
function HomeScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-0 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mx-4 lg:-mx-8 mb-8 overflow-hidden", style: {
      height: "68vh",
      minHeight: 420
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=90", alt: "Old San Juan, Puerto Rico", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(165deg, oklch(0.06 0.02 240 / 0.55) 0%, transparent 50%, oklch(0.06 0.02 240 / 0.92) 100%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 left-0 right-0 flex items-center justify-between px-6 pt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", children: "Spirit of" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-light italic text-white lg:text-4xl", children: "Puerto Rico" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-nav flex items-center gap-2 rounded-full px-3 py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full", style: {
            background: "oklch(0.80 0.16 72)"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs font-600 text-white/80 uppercase tracking-widest", children: "84° Sunny" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-6 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-2", children: "Featured Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-light italic text-white leading-tight lg:text-3xl", children: [
          "Voices of the Bay:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Three Generations of Fishermen" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 rounded-full px-5 py-2.5 font-sans text-xs font-700 uppercase tracking-wider transition-transform hover:scale-105", style: {
            background: "var(--gradient-gold)",
            color: "oklch(0.10 0.02 60)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 12, fill: "currentColor" }),
            "Watch Story"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-full overflow-hidden border-2", style: {
              borderColor: "oklch(0.80 0.16 72)"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&q=80", alt: "", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-white/75", children: "Doña Mariela · Local Elder" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-3 overflow-x-auto pb-2", children: quickActions.map(({
      Icon,
      label,
      bg
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "card-lift flex min-w-[88px] flex-col items-center gap-2.5 rounded-2xl py-4 px-3 transition-all", style: {
      background: "oklch(0.14 0.018 240)",
      border: "1px solid oklch(1 0 0 / 0.07)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl", style: {
        background: bg
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, color: "white", strokeWidth: 1.8 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[11px] font-600 uppercase tracking-wide text-white/70", children: label })
    ] }, label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-light italic text-white", children: [
          "Trending ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "This Week" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "eyebrow flex items-center gap-1", children: [
          "See all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 11 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: trending.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift relative overflow-hidden rounded-2xl", style: {
        height: 220
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 photo-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip text-white/90", style: {
          background: "oklch(1 0 0 / 0.15)",
          backdropFilter: "blur(8px)"
        }, children: s.tag }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold text-white leading-snug", children: s.title }) })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-light italic text-white", children: [
          "Local ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Events" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "eyebrow flex items-center gap-1", children: [
          "See all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 11 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-4 overflow-x-auto pb-2", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift min-w-[260px] overflow-hidden rounded-2xl", style: {
        background: "oklch(0.14 0.018 240)",
        border: "1px solid oklch(1 0 0 / 0.07)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-40 overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.name, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 photo-overlay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 chip", style: {
            background: "var(--gradient-gold)",
            color: "oklch(0.10 0.02 60)"
          }, children: e.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "eyebrow mb-1 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
            e.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-lg font-semibold text-white leading-tight", children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1 font-sans text-xs text-white/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 11 }),
            e.loc
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 w-full rounded-full py-2.5 font-sans text-xs font-700 uppercase tracking-wider transition-transform hover:scale-105", style: {
            background: "var(--gradient-gold)",
            color: "oklch(0.10 0.02 60)"
          }, children: "Get Tickets" })
        ] })
      ] }, e.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10 relative overflow-hidden rounded-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=85", alt: "Panadería La Bahía", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "oklch(0.06 0.02 240 / 0.80)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-7 lg:p-10 flex flex-col sm:flex-row sm:items-center gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-2", children: "Spotlight · Local Business" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl font-light italic text-white leading-tight", children: [
            "Panadería ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "La Bahía" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-sans text-sm text-white/70 max-w-sm", children: "Family-run since 1962. Try the mallorcas at sunrise — a Cataño rite of passage." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, fill: "oklch(0.80 0.16 72)", stroke: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm text-white/80", children: "4.9 · 312 reviews" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "self-start sm:self-center flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-700 uppercase tracking-wider whitespace-nowrap", style: {
          background: "var(--gradient-gold)",
          color: "oklch(0.10 0.02 60)"
        }, children: [
          "Visit ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-light italic text-white", children: [
          "Hidden ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Gems" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "eyebrow flex items-center gap-1", children: [
          "See all ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 11 })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-4 overflow-x-auto pb-2", children: gems.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift relative min-w-[180px] overflow-hidden rounded-2xl", style: {
        height: 260
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.img, alt: g.name, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 photo-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold text-white", children: g.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 font-sans text-xs text-white/55 mt-0.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
            g.dist,
            " away"
          ] })
        ] })
      ] }, g.name)) })
    ] })
  ] });
}
export {
  HomeScreen as component
};
