import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { f as Cloud, P as Play, a as Car, b as Compass, M as Map, g as Calendar, U as UtensilsCrossed, h as MapPin, i as Star, A as ArrowRight } from "./_libs/lucide-react.mjs";
const trending = [{
  tag: "History",
  title: "The old ferry crossings of San Juan Bay",
  img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&q=80"
}, {
  tag: "Food",
  title: "Where to find the real alcapurrias",
  img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=600&q=80"
}, {
  tag: "Music",
  title: "Bomba y plena in the plaza",
  img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80"
}];
const events = [{
  name: "Festival de la Bahía",
  date: "Fri · Jun 13",
  loc: "Paseo Marítimo",
  img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80"
}, {
  name: "Noches de Bomba",
  date: "Sat · Jun 14",
  loc: "Plaza Central",
  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80"
}, {
  name: "Mercado Agrícola",
  date: "Sun · Jun 15",
  loc: "Calle Marina",
  img: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&q=80"
}];
const gems = [{
  name: "Mirador El Morro",
  dist: "2.4 km",
  img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=500&q=80"
}, {
  name: "Café Don Ruiz",
  dist: "0.8 km",
  img: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=500&q=80"
}, {
  name: "Isla de Cabras",
  dist: "3.1 km",
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80"
}];
const quickActions = [{
  Icon: Car,
  label: "Book Ride",
  color: "bg-ocean text-ocean-foreground"
}, {
  Icon: Compass,
  label: "Plan Tour",
  color: "bg-tropical text-tropical-foreground"
}, {
  Icon: Map,
  label: "Map",
  color: "bg-sunset text-sunset-foreground"
}, {
  Icon: Calendar,
  label: "Events",
  color: "bg-terracotta text-terracotta-foreground"
}, {
  Icon: UtensilsCrossed,
  label: "Food",
  color: "bg-primary text-primary-foreground"
}];
function HomeScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-6 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-start justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-muted-foreground", children: "SÁBADO · 8 JUNIO" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl font-bold lg:text-4xl", children: "¡Buenos días, Carlos!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Here's what's happening in Cataño today." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-2xl bg-card px-3 py-2 shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "text-ocean", size: 18 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-bold leading-none", children: "84°" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: "Sunny" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "card-lift mt-6 overflow-hidden rounded-3xl bg-card shadow-warm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/9] w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1200&q=80", alt: "Featured", className: "h-full w-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 22, fill: "currentColor", className: "ml-1" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5 text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip bg-sunset text-sunset-foreground", children: "Featured Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-bold lg:text-3xl", children: "Voices of the Bay: Three generations of fishermen" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-sunset ring-2 ring-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: "Doña Mariela · Local Elder" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "ml-auto rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary", children: "Watch" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Quick actions" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-3 flex gap-3 overflow-x-auto pb-2", children: quickActions.map(({
        Icon,
        label,
        color
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "card-lift flex min-w-[92px] flex-col items-center gap-2 rounded-2xl bg-card p-3 shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-12 w-12 place-items-center rounded-xl ${color}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold", children: label })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Trending this week" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-xs font-semibold text-primary", children: "See all →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: trending.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-2xl bg-card shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute left-3 top-3 bg-white/95 text-primary", children: s.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-semibold leading-snug", children: s.title }) })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Upcoming local events" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-3 flex gap-4 overflow-x-auto pb-2", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift min-w-[260px] overflow-hidden rounded-2xl bg-card shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-[11px] text-sunset", children: e.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mt-1 font-display text-base font-semibold", children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-1 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12 }),
            e.loc
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-3 w-full rounded-full bg-primary py-2 text-xs font-semibold text-primary-foreground", children: "Get Tickets" })
        ] })
      ] }, e.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-8 overflow-hidden rounded-3xl bg-gradient-ocean p-6 text-white shadow-warm lg:p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80", alt: "Business", className: "h-36 w-full rounded-2xl object-cover sm:h-32 sm:w-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs text-sunset", children: "SPOTLIGHT · LOCAL BUSINESS" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl font-bold", children: "Panadería La Bahía" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-white/85", children: "Family-run since 1962. Try the mallorcas at sunrise — they're a Cataño rite of passage." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 14, className: "fill-sunset text-sunset" }),
          " 4.9 · 312 reviews"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "rounded-full bg-sunset px-5 py-2.5 text-sm font-semibold text-sunset-foreground", children: [
        "Visit ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "ml-1 inline" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Hidden gems near you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-3 flex gap-4 overflow-x-auto pb-2", children: gems.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift relative min-w-[200px] overflow-hidden rounded-2xl shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.img, alt: g.name, className: "aspect-[3/4] w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-base font-bold", children: g.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs opacity-90", children: [
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
