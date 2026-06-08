import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { h as Star, f as Clock, i as Users, A as ArrowRight } from "./_libs/lucide-react.mjs";
const cats = ["All", "🏄 Water", "🌿 Eco", "🎨 Culture", "🧘 Wellness", "🎣 Fishing", "🍽️ Food", "🎭 Events", "🗺️ Custom"];
const experiences = [{
  title: "Bioluminescent Bay Kayak",
  img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=700&q=85",
  dur: "3 hr",
  grp: "8 max",
  price: "$72",
  rating: 4.9,
  hot: true
}, {
  title: "Old San Juan Food Crawl",
  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85",
  dur: "4 hr",
  grp: "10 max",
  price: "$58",
  rating: 4.8,
  hot: false
}, {
  title: "El Yunque Rainforest Hike",
  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=700&q=85",
  dur: "6 hr",
  grp: "12 max",
  price: "$95",
  rating: 4.9,
  hot: true
}, {
  title: "Sunset Snorkel at Icacos",
  img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=700&q=85",
  dur: "4 hr",
  grp: "10 max",
  price: "$88",
  rating: 4.7,
  hot: false
}, {
  title: "Coffee Farm Sunrise Tour",
  img: "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?w=700&q=85",
  dur: "5 hr",
  grp: "8 max",
  price: "$65",
  rating: 4.8,
  hot: false
}, {
  title: "Deep Sea Fishing Charter",
  img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=700&q=85",
  dur: "8 hr",
  grp: "6 max",
  price: "$140",
  rating: 4.9,
  hot: true
}];
function AdventuresScreen() {
  const [activeCat, setActiveCat] = reactExports.useState("All");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 py-0 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mx-4 lg:-mx-8 mb-8 overflow-hidden", style: {
      height: 260
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1400&q=85", alt: "Adventures", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(180deg, oklch(0.06 0.02 240 / 0.3) 0%, oklch(0.06 0.02 240 / 0.94) 100%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-6 pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "Experiences" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-light italic text-white", children: [
          "Island ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Adventures" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-white/60 mt-1", children: "500+ curated experiences across Puerto Rico" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-2 overflow-x-auto pb-3 mb-8", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCat(c), className: "chip whitespace-nowrap transition-all", style: activeCat === c ? {
      background: "var(--gradient-gold)",
      color: "oklch(0.10 0.02 60)"
    } : {
      background: "oklch(0.14 0.018 240)",
      color: "oklch(0.60 0.02 260)",
      border: "1px solid oklch(1 0 0 / 0.08)"
    }, children: c }, c)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 relative overflow-hidden rounded-3xl card-lift", style: {
      height: 340
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1400&q=85", alt: "Featured", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(105deg, oklch(0.06 0.02 240 / 0.88) 0%, transparent 60%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col justify-end p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip mb-3 self-start", style: {
          background: "var(--gradient-gold)",
          color: "oklch(0.10 0.02 60)"
        }, children: "Featured Experience" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-light italic text-white max-w-sm leading-tight", children: [
          "Private El Morro ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Sunset Tour" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, fill: "oklch(0.80 0.16 72)", stroke: "none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm text-white/80", children: "4.9" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm", children: "3 hr" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 text-white/60", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm", children: "Private" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-light text-white", children: [
            "$120 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-sm text-white/50 font-normal", children: "/ person" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-2 rounded-full px-6 py-3 font-sans text-sm font-700 uppercase tracking-wider", style: {
            background: "var(--gradient-gold)",
            color: "oklch(0.10 0.02 60)"
          }, children: [
            "Book Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 14 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8", children: experiences.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-2xl", style: {
      background: "oklch(0.14 0.018 240)",
      border: "1px solid oklch(1 0 0 / 0.07)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
        height: 180
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 photo-overlay" }),
        e.hot && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute top-3 left-3", style: {
          background: "var(--gradient-gold)",
          color: "oklch(0.10 0.02 60)"
        }, children: "🔥 Hot" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-white leading-snug", children: e.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-2 text-white/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-sans text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, fill: "oklch(0.80 0.16 72)", stroke: "none" }),
            e.rating
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-sans text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
            e.dur
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 font-sans text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
            e.grp
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-light text-white", children: [
            e.price,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-white/45 font-normal", children: "/ person" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "chip", style: {
            background: "var(--gradient-gold)",
            color: "oklch(0.10 0.02 60)"
          }, children: "Book" })
        ] })
      ] })
    ] }, e.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 relative overflow-hidden rounded-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=85", alt: "Custom", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "oklch(0.06 0.02 240 / 0.82)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-7 flex flex-col sm:flex-row items-center gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "Build Your Journey" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-2xl font-light italic text-white", children: [
            "Custom ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Itinerary" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-white/60 mt-1", children: "We'll design a multi-day experience around you" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-full px-6 py-3 font-sans text-sm font-700 uppercase tracking-wider whitespace-nowrap", style: {
          background: "var(--gradient-gold)",
          color: "oklch(0.10 0.02 60)"
        }, children: "Start Planning →" })
      ] })
    ] })
  ] });
}
export {
  AdventuresScreen as component
};
