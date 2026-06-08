import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { h as MapPin, j as Search, i as Star, A as ArrowRight, k as Users } from "./_libs/lucide-react.mjs";
const vehicles = [{
  e: "🚗",
  l: "Rideshare"
}, {
  e: "🚕",
  l: "Taxi"
}, {
  e: "🛵",
  l: "Scooter"
}, {
  e: "🚲",
  l: "Bicycle"
}, {
  e: "⛵",
  l: "Water"
}, {
  e: "🚐",
  l: "Shuttle"
}, {
  e: "🚌",
  l: "Bus 15"
}, {
  e: "🚍",
  l: "Bus 45"
}, {
  e: "🎉",
  l: "Party Bus"
}, {
  e: "🏔️",
  l: "Adventure"
}, {
  e: "🧳",
  l: "Guide + Ride"
}];
const routes = [{
  from: "SJU Airport",
  to: "Cataño",
  price: "$28",
  img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80"
}, {
  from: "Cruise Port",
  to: "Old San Juan",
  price: "$18",
  img: "https://images.unsplash.com/photo-1545569310-26e7df1ccbc5?w=600&q=80"
}, {
  from: "Hotel District",
  to: "Escambrón Beach",
  price: "$14",
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80"
}];
function GetAroundScreen() {
  const [selected, setSelected] = reactExports.useState("Rideshare");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 py-6 lg:px-8 lg:py-10 pb-32 lg:pb-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-muted-foreground", children: "GET AROUND" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl font-bold lg:text-4xl", children: "Where are you going?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 overflow-hidden rounded-3xl bg-card p-5 shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-sunset/15 text-sunset", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground", placeholder: "From — current location", defaultValue: "Calle Marina 12, Cataño" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 ml-12 h-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-9 w-9 place-items-center rounded-full bg-terracotta/15 text-terracotta", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground", placeholder: "Where to?" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Choose how you ride" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-3 flex gap-2.5 overflow-x-auto pb-2", children: vehicles.map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(v.l), className: `flex min-w-[90px] flex-col items-center gap-1 rounded-2xl border px-3 py-3 text-xs font-semibold transition ${selected === v.l ? "border-transparent bg-primary text-primary-foreground shadow-warm" : "border-border bg-card text-foreground/70"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: v.e }),
        v.l
      ] }, v.l)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6 grid gap-4 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl shadow-warm lg:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] w-full bg-cover bg-center", style: {
          backgroundImage: "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/20" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold text-primary shadow", children: "Pickup in 4 min" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-4 left-4 rounded-2xl bg-white/95 px-3 py-2 text-xs text-primary shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: "Calle Marina · Pier 2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Driver heading north" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl bg-gradient-ocean p-6 text-white shadow-warm lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-accent text-[11px] text-sunset", children: [
          "ESTIMATED FARE · ",
          selected.toUpperCase()
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-4xl font-black", children: "$14 – $19" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm opacity-85", children: "ETA 4 min · 12 min ride" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-sunset ring-2 ring-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: "Luis Vega" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-xs opacity-90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 12, className: "fill-sunset text-sunset" }),
              " 4.94 · Toyota Corolla"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Popular routes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-3 flex gap-4 overflow-x-auto pb-2", children: routes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift min-w-[260px] overflow-hidden rounded-2xl bg-card shadow-warm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[5/3]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.img, alt: "", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-base font-semibold", children: [
            r.from,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14, className: "mx-1 inline text-muted-foreground" }),
            " ",
            r.to
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 text-sm text-muted-foreground", children: [
            "from ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: r.price })
          ] })
        ] })
      ] }, r.from)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-6 flex items-center gap-4 rounded-3xl bg-tropical p-5 text-tropical-foreground shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 28 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold", children: "Traveling with 6+ people?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-90", children: "Get group pricing on shuttles, buses and party buses." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full bg-white px-4 py-2 text-xs font-semibold text-tropical", children: "Book group →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-20 left-0 right-0 z-30 px-4 lg:static lg:mt-8 lg:px-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full rounded-full bg-gradient-sunset py-4 text-base font-bold text-sunset-foreground shadow-glow", children: [
      "Book Now — ",
      selected
    ] }) })
  ] });
}
export {
  GetAroundScreen as component
};
