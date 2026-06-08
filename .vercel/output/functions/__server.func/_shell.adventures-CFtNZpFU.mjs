import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { h as Star, f as Clock, i as Users, A as ArrowRight, q as Leaf } from "./_libs/lucide-react.mjs";
const cats = ["All", "🏄 Water", "🌿 Eco", "🎨 Culture", "🧘 Wellness", "🎣 Fishing", "🍽️ Food", "🎭 Events", "🗺️ Custom"];
const experiences = [{
  title: "Bioluminescent Bay Night Kayak",
  desc: "Paddle through Laguna Grande in Fajardo, where microorganisms glow neon blue in the water around your kayak.",
  img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800&q=85",
  dur: "3 hr",
  grp: "8 max",
  price: "$72",
  rating: 4.9,
  hot: true,
  cat: "🏄 Water"
}, {
  title: "Old San Juan Food & Culture Crawl",
  desc: "Walk the cobblestones of Old San Juan tasting mofongo, alcapurrias and fresh coconut with a local guide.",
  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85",
  dur: "4 hr",
  grp: "10 max",
  price: "$58",
  rating: 4.8,
  hot: false,
  cat: "🍽️ Food"
}, {
  title: "El Yunque Rainforest Hike & Waterfall",
  desc: "Explore the only tropical rainforest in the US National Forest system, ending at a natural swimming hole.",
  img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=85",
  dur: "6 hr",
  grp: "12 max",
  price: "$95",
  rating: 4.9,
  hot: true,
  cat: "🌿 Eco"
}, {
  title: "Sunset Snorkel at Cayo Icacos",
  desc: "Snorkel the clear blue waters off Puerto Rico's east coast, home to sea turtles, parrotfish, and vibrant coral.",
  img: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&q=85",
  dur: "4 hr",
  grp: "10 max",
  price: "$88",
  rating: 4.7,
  hot: false,
  cat: "🏄 Water"
}, {
  title: "Hacienda Coffee Farm Sunrise Tour",
  desc: "Visit a working Puerto Rican coffee farm in the mountains of Jayuya. Pick beans, roast, and taste single-origin PR coffee.",
  img: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800&q=85",
  dur: "5 hr",
  grp: "8 max",
  price: "$65",
  rating: 4.8,
  hot: false,
  cat: "🌿 Eco"
}, {
  title: "Deep Sea Fishing Charter",
  desc: "Head offshore with local captains for mahi-mahi, wahoo, and blue marlin. All gear included, catch kept or released.",
  img: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=85",
  dur: "8 hr",
  grp: "6 max",
  price: "$140",
  rating: 4.9,
  hot: true,
  cat: "🎣 Fishing"
}, {
  title: "Bomba y Plena Cultural Workshop",
  desc: "Learn the African-rooted rhythms of bomba with a master drummer in Cataño. Includes a short performance and dance session.",
  img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=85",
  dur: "2 hr",
  grp: "15 max",
  price: "$45",
  rating: 4.9,
  hot: false,
  cat: "🎨 Culture"
}, {
  title: "Beach Yoga & Wellness Retreat",
  desc: "Morning yoga on Isla Verde beach followed by meditation, breathwork, and a healthy local breakfast.",
  img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=85",
  dur: "3 hr",
  grp: "12 max",
  price: "$55",
  rating: 4.8,
  hot: false,
  cat: "🧘 Wellness"
}];
function AdventuresScreen() {
  const [activeCat, setActiveCat] = reactExports.useState("All");
  const shown = activeCat === "All" ? experiences : experiences.filter((e) => e.cat === activeCat);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#FAF8F3"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
      height: 240
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1400&q=85", alt: "Adventure kayaking Puerto Rico", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 px-5 pb-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", style: {
          color: "#D4970A"
        }, children: "Adventure & Experience Marketplace" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-light italic text-white", children: [
          "Island ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-semibold", children: "Adventures" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontFamily: "Montserrat",
          fontSize: "0.75rem",
          color: "rgba(255,255,255,0.70)",
          marginTop: 6
        }, children: "Book tours, guides, eco-adventures, wellness and cultural experiences" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-2 overflow-x-auto pb-3 mb-6", children: cats.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveCat(c), className: "chip whitespace-nowrap transition-all", style: activeCat === c ? {
        background: "#0060A0",
        color: "#FAF8F3"
      } : {
        background: "white",
        color: "#5A4A38",
        border: "1px solid #E5DDD0"
      }, children: c }, c)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-lift mb-8 relative overflow-hidden rounded-3xl", style: {
        height: 320
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1400&q=85", alt: "El Morro private guided tour", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-left" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip mb-3 inline-block", style: {
            background: "rgba(212,151,10,0.92)",
            color: "#1A0A00"
          }, children: "⭐ Featured Experience" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-3xl font-light italic text-white leading-tight", style: {
            maxWidth: 380
          }, children: [
            "Private El Morro ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-semibold", children: "Sunset Tour" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-3 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, fill: "#D4970A", color: "#D4970A" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.85)"
              }, children: "4.9" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", style: {
              color: "rgba(255,255,255,0.65)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.75rem"
              }, children: "3 hr" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", style: {
              color: "rgba(255,255,255,0.65)"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 13 }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.75rem"
              }, children: "Private" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-light text-white", children: [
              "$120 ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.55)",
                fontWeight: 400
              }, children: "/ person" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold", children: [
              "Book Now ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13 })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: shown.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-2xl bg-white shadow-sm", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
          height: 190
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.title, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-card" }),
          e.hot && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute top-3 left-3", style: {
            background: "rgba(192,57,43,0.9)",
            color: "white"
          }, children: "🔥 Popular" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 chip", style: {
            background: "rgba(255,255,255,0.92)",
            color: "#0060A0"
          }, children: e.cat.split(" ")[1] || e.cat })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", style: {
            color: "#1A1612",
            lineHeight: 1.25
          }, children: e.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.7rem",
            color: "#8A7B6A",
            marginTop: 6,
            lineHeight: 1.55
          }, children: e.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", style: {
              fontFamily: "Montserrat",
              fontSize: "0.68rem",
              color: "#8A7B6A"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 11, fill: "#D4970A", color: "#D4970A" }),
              " ",
              e.rating
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", style: {
              fontFamily: "Montserrat",
              fontSize: "0.68rem",
              color: "#8A7B6A"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 11 }),
              " ",
              e.dur
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", style: {
              fontFamily: "Montserrat",
              fontSize: "0.68rem",
              color: "#8A7B6A"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 11 }),
              " ",
              e.grp
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4 pt-4", style: {
            borderTop: "1px solid #F0EBE1"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-2xl font-light", style: {
              color: "#0060A0"
            }, children: [
              e.price,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.65rem",
                color: "#9A8A78",
                fontWeight: 400
              }, children: "/ person" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold py-2 px-4 text-xs", children: "Book" })
          ] })
        ] })
      ] }, e.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 overflow-hidden rounded-2xl bg-white shadow-sm flex flex-col sm:flex-row items-center gap-0", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1519671282429-b44b2802040e?w=400&q=80", alt: "Group experiences", className: "w-full sm:w-48 h-36 sm:h-full object-cover flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Leaf, { size: 13, color: "#1A6B3C" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow", children: "Group Pricing" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold italic", style: {
            color: "#0060A0"
          }, children: "Groups of 6+ save up to 20%" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.72rem",
            color: "#8A7B6A",
            marginTop: 4
          }, children: "Custom experiences, private guides, premium transport & exclusive activities automatically adjust for your group size." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 sm:pb-0 sm:pr-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold whitespace-nowrap", children: "Get Group Quote" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 overflow-hidden rounded-2xl relative", style: {
        height: 110
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=900&q=80", alt: "Build custom itinerary", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "rgba(0,60,106,0.82)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between h-full px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", style: {
              color: "#D4970A"
            }, children: "Build Your Journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl italic text-white", children: "Custom multi-day itinerary →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold flex-shrink-0", children: "Start Planning" })
        ] })
      ] })
    ] })
  ] });
}
export {
  AdventuresScreen as component
};
