import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as Play, a as Car, b as Compass, M as Map, e as Calendar, U as Utensils, f as Clock, g as MapPin, h as Star, A as ArrowRight } from "./_libs/lucide-react.mjs";
const quickActions = [{
  Icon: Car,
  label: "Book a Ride",
  color: "#0A3D62",
  bg: "#E8F0F8"
}, {
  Icon: Compass,
  label: "Book a Tour",
  color: "#1A6B3C",
  bg: "#E6F4EC"
}, {
  Icon: Map,
  label: "3D Map",
  color: "#C89A30",
  bg: "#F8F1E0"
}, {
  Icon: Calendar,
  label: "Events",
  color: "#C0392B",
  bg: "#F8E8E6"
}, {
  Icon: Utensils,
  label: "Local Food",
  color: "#6B3FA0",
  bg: "#F0EBF8"
}];
const trending = [{
  tag: "Oral History",
  title: "Voices of the Bay: fishermen of Cataño across three generations",
  img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=700&q=85"
}, {
  tag: "Local Business",
  title: "Panadería La Bahía: family-run since 1962, still baking mallorcas at sunrise",
  img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=85"
}, {
  tag: "Culture",
  title: "Bomba y plena — the music that kept Cataño's identity alive",
  img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=85"
}];
const events = [{
  name: "Festival de la Bahía de Cataño",
  date: "Fri · Jun 13",
  loc: "Paseo Marítimo, Cataño",
  img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=700&q=85",
  price: "Free",
  tag: "Festival"
}, {
  name: "Noches de Bomba y Plena",
  date: "Sat · Jun 14",
  loc: "Plaza Central, Cataño",
  img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=700&q=85",
  price: "$15",
  tag: "Music"
}, {
  name: "Mercado Agrícola de Cataño",
  date: "Sun · Jun 15",
  loc: "Calle Marina, Cataño",
  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=85",
  price: "Free",
  tag: "Market"
}];
const gems = [{
  name: "Isla de Cabras",
  dist: "3.1 km",
  desc: "Historic island with colonial ruins and swimming",
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=85"
}, {
  name: "El Morro Fortress",
  dist: "4.2 km",
  desc: "16th-century Spanish citadel, UNESCO heritage",
  img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=600&q=85"
}, {
  name: "Old San Juan Streets",
  dist: "5.0 km",
  desc: "Cobblestone streets, colorful colonial architecture",
  img: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=600&q=85"
}];
function HomeScreen() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#FAF8F3"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden", style: {
      height: "65vh",
      minHeight: 400
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1400&q=90", alt: "Old San Juan and the bay of Cataño, Puerto Rico", className: "absolute inset-0 w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-0 inset-x-0 flex items-start justify-between px-5 pt-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", style: {
            color: "#D4A840"
          }, children: "Spirit of" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl font-light italic text-white lg:text-4xl", children: "Puerto Rico" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2 rounded-full px-3 py-1.5", style: {
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.2)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontSize: 10,
          fontFamily: "Barlow Condensed",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.85)"
        }, children: "Cataño · 84° Sunny" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 px-5 pb-8 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip mb-3", style: {
          background: "rgba(212,168,64,0.9)",
          color: "#1A0A00"
        }, children: "Featured Story" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-light text-white leading-tight lg:text-3xl", style: {
          maxWidth: 480
        }, children: [
          "Voices of the Bay:",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold not-italic", children: "Three Generations of Cataño Fishermen" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-3 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 12, fill: "currentColor", strokeWidth: 0 }),
            " Watch Story"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=56&q=80", alt: "Doña Mariela", className: "h-7 w-7 rounded-full object-cover", style: {
              border: "2px solid #D4A840"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontFamily: "Montserrat",
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.80)"
            }, children: "Doña Mariela · Local Elder" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 py-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-3", children: "Quick Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-3 overflow-x-auto pb-1", children: quickActions.map(({
        Icon,
        label,
        color,
        bg
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "card-lift flex min-w-[96px] flex-col items-center gap-2.5 rounded-2xl py-4 px-3 bg-white shadow-sm", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl", style: {
          background: bg
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 19, color, strokeWidth: 1.9 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "Montserrat",
          fontSize: "0.65rem",
          fontWeight: 600,
          color: "#5A4A38",
          textAlign: "center",
          lineHeight: 1.2
        }, children: label })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "section-sep mx-4 lg:mx-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-8 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "Community Storytelling" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-2xl", children: [
            "Trending ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "This Week" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ocean py-2 px-4 text-xs", children: "See All" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-3", children: trending.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-2xl bg-white shadow-sm", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
          height: 180
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute top-3 left-3", style: {
            background: "rgba(255,255,255,0.92)",
            color: "#0A3D62"
          }, children: s.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontFamily: "Cormorant Garamond",
          fontSize: "1rem",
          fontWeight: 600,
          color: "#1A1612",
          lineHeight: 1.3
        }, children: s.title }) })
      ] }, s.title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "section-sep mx-4 lg:mx-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-8 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "Upcoming in Cataño" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-2xl", children: [
            "Local ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Events" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ocean py-2 px-4 text-xs", children: "Calendar" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-4 overflow-x-auto pb-2", children: events.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift min-w-[270px] overflow-hidden rounded-2xl bg-white shadow-sm", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
          height: 150
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: e.img, alt: e.name, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute top-3 left-3", style: {
            background: "rgba(212,168,64,0.92)",
            color: "#1A0A00"
          }, children: e.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute top-3 right-3", style: {
            background: e.price === "Free" ? "rgba(26,107,60,0.9)" : "rgba(255,255,255,0.92)",
            color: e.price === "Free" ? "white" : "#0A3D62"
          }, children: e.price })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mb-1.5 eyebrow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
            e.date
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: {
            fontFamily: "Cormorant Garamond",
            fontSize: "1.05rem",
            fontWeight: 600,
            color: "#1A1612",
            lineHeight: 1.25
          }, children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1.5", style: {
            fontFamily: "Montserrat",
            fontSize: "0.68rem",
            color: "#8A7B6A"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
            e.loc
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold mt-3 w-full justify-center py-2.5 text-xs", children: "Get Tickets" })
        ] })
      ] }, e.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "section-sep mx-4 lg:mx-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-8 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-3", children: "Economic Development · Local Business" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl", style: {
        minHeight: 200
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1200&q=85", alt: "Panadería La Bahía interior", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "linear-gradient(100deg, rgba(10,61,98,0.90) 0%, rgba(10,61,98,0.55) 60%, transparent 100%)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col sm:flex-row items-start sm:items-center gap-6 p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip mb-3 inline-block", style: {
              background: "rgba(212,168,64,0.9)",
              color: "#1A0A00"
            }, children: "Spotlight · Cataño" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-3xl font-light italic text-white", children: [
              "Panadería ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold not-italic", children: "La Bahía" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontFamily: "Montserrat",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.75)",
              marginTop: 8,
              maxWidth: 340
            }, children: "Family-run since 1962. Famous for mallorcas at sunrise. A Cataño institution connecting locals and visitors every morning." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 13, fill: "#D4A840", color: "#D4A840" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.80)"
              }, children: "4.9 · 312 reviews" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold whitespace-nowrap", children: [
            "Visit ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 13 })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("hr", { className: "section-sep mx-4 lg:mx-8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "px-4 pb-10 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "Tourism Navigation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "section-title text-2xl", children: [
            "Hidden ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Gems" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ocean py-2 px-4 text-xs", children: "Open Map" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-4 overflow-x-auto pb-2", children: gems.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift relative min-w-[200px] overflow-hidden rounded-2xl", style: {
        height: 280,
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: g.img, alt: g.name, className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-card" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { style: {
            fontFamily: "Cormorant Garamond",
            fontSize: "1.1rem",
            fontWeight: 600,
            color: "white",
            lineHeight: 1.2
          }, children: g.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.70)",
            marginTop: 4,
            lineHeight: 1.4
          }, children: g.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-2", style: {
            fontFamily: "Montserrat",
            fontSize: "0.62rem",
            color: "rgba(255,255,255,0.55)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 10 }),
            g.dist,
            " from Cataño"
          ] })
        ] })
      ] }, g.name)) })
    ] })
  ] });
}
export {
  HomeScreen as component
};
