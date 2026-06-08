import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { k as Search, l as Building2, L as Landmark, F as Footprints, m as Bike, n as Sailboat, o as CalendarDays, p as Sparkles, f as Clock, X, N as Navigation, g as MapPin } from "./_libs/lucide-react.mjs";
const layers = [{
  Icon: Building2,
  label: "Businesses",
  active_color: "#0060A0"
}, {
  Icon: Landmark,
  label: "Landmarks",
  active_color: "#D4970A"
}, {
  Icon: Footprints,
  label: "Walking",
  active_color: "#1A6B3C"
}, {
  Icon: Bike,
  label: "Bike",
  active_color: "#C0392B"
}, {
  Icon: Sailboat,
  label: "Ferry",
  active_color: "#0060A0"
}, {
  Icon: CalendarDays,
  label: "Events",
  active_color: "#6B3FA0"
}, {
  Icon: Sparkles,
  label: "Future",
  active_color: "#8A7B6A"
}];
const places = [{
  name: "Cataño Ferry Terminal",
  cat: "Transportation",
  desc: "The public ferry connecting Cataño to Old San Juan runs every 30 minutes. Fare: $0.75.",
  hours: "6am – 10pm daily",
  phone: "+1 787 729-8714",
  img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
  x: "32%",
  y: "44%"
}, {
  name: "El Morro Fortress",
  cat: "Landmark · UNESCO",
  desc: "Castillo San Felipe del Morro, a 16th-century Spanish citadel guarding the entrance to San Juan Bay.",
  hours: "9am – 6pm daily",
  phone: "+1 787 729-6777",
  img: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=400&q=80",
  x: "52%",
  y: "30%"
}, {
  name: "Isla de Cabras",
  cat: "Nature · Hidden Gem",
  desc: "Small island accessible by car from Cataño with colonial ruins, a lighthouse, and swimming areas.",
  hours: "Open daily — dawn to dusk",
  phone: "—",
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
  x: "20%",
  y: "28%"
}, {
  name: "Panadería La Bahía",
  cat: "Business · Food",
  desc: "Family-run bakery since 1962, famous for mallorcas and pan de agua. A Cataño cultural institution.",
  hours: "6am – 2pm, Mon–Sat",
  phone: "+1 787 555-0112",
  img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80",
  x: "44%",
  y: "58%"
}];
const futureCities = ["San Juan", "Ponce", "Mayagüez", "Aguadilla", "Carolina"];
function ExploreScreen() {
  const [activeLayers, setActiveLayers] = reactExports.useState(["Businesses", "Landmarks"]);
  const [selectedPlace, setSelectedPlace] = reactExports.useState(places[0]);
  const toggle = (l) => setActiveLayers((a) => a.includes(l) ? a.filter((x) => x !== l) : [...a, l]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col lg:flex-row", style: {
    height: "calc(100vh - 64px)"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex-1 overflow-hidden", style: {
      minHeight: "50vh"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=1400&q=85", alt: "Aerial view Puerto Rico — Cataño Digital Twin", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "rgba(240,230,210,0.45)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 w-full h-full", style: {
        opacity: 0.08
      }, xmlns: "http://www.w3.org/2000/svg", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("pattern", { id: "mapgrid", width: "48", height: "48", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 48 0 L 0 0 0 48", fill: "none", stroke: "#0060A0", strokeWidth: "0.8" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100%", height: "100%", fill: "url(#mapgrid)" })
      ] }),
      places.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedPlace(p), className: "absolute flex flex-col items-center transition-transform hover:scale-110", style: {
        left: p.x,
        top: p.y,
        transform: "translateX(-50%)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full flex items-center justify-center shadow-md text-white text-xs font-bold", style: {
          background: selectedPlace?.name === p.name ? "#D4970A" : "#0060A0",
          border: "3px solid white"
        }, children: p.name[0] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 px-2 py-0.5 rounded-full whitespace-nowrap", style: {
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(6px)",
          fontFamily: "Barlow Condensed",
          fontSize: "0.58rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#0060A0"
        }, children: p.name })
      ] }, p.name)),
      futureCities.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute flex flex-col items-center", style: {
        left: `${14 + i * 15}%`,
        bottom: `${12 + i % 2 * 7}%`,
        opacity: 0.45
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full flex items-center justify-center", style: {
          border: "2px dashed #D4970A",
          background: "rgba(255,255,255,0.7)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-1.5 rounded-full", style: {
          background: "#D4970A"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "Barlow Condensed",
          fontSize: "0.55rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "#5A4A38",
          marginTop: 2
        }, children: c }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "Montserrat",
          fontSize: "0.5rem",
          color: "#D4970A"
        }, children: "2026" })
      ] }, c)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 right-4 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-2xl px-4 py-3 shadow-md", style: {
        background: "rgba(255,255,255,0.96)",
        backdropFilter: "blur(12px)",
        border: "1px solid #E5DDD0"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, color: "#D4970A" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
          fontFamily: "Montserrat",
          fontSize: "0.8rem",
          color: "#9A8A78"
        }, children: "Search Cataño — places, landmarks, businesses…" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-20 left-4 z-10 flex flex-col gap-1.5", children: layers.map(({
        Icon,
        label,
        active_color
      }) => {
        const on = activeLayers.includes(label);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle(label), className: "flex items-center gap-2 rounded-xl px-3 py-2 shadow-sm transition-all", style: on ? {
          background: active_color,
          color: "white",
          border: "none"
        } : {
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(8px)",
          border: "1px solid #E5DDD0",
          color: "#5A4A38"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block", style: {
            fontFamily: "Barlow Condensed",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase"
          }, children: label })
        ] }, label);
      }) }),
      selectedPlace && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 inset-x-0 lg:hidden z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mb-3 rounded-2xl overflow-hidden shadow-warm", style: {
        background: "rgba(255,255,255,0.97)",
        backdropFilter: "blur(16px)",
        border: "1px solid #E5DDD0"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: selectedPlace.img, alt: selectedPlace.name, className: "h-20 w-24 rounded-xl object-cover flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", children: selectedPlace.cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", style: {
              color: "#1A1612"
            }, children: selectedPlace.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 mt-1", style: {
              fontFamily: "Montserrat",
              fontSize: "0.65rem",
              color: "#8A7B6A"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
              selectedPlace.hours
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setSelectedPlace(null), className: "self-start", style: {
            color: "#C5B8A8"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 17 }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 px-4 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold flex-1 justify-center py-2.5 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 12 }),
            " Directions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-ocean flex-1 justify-center py-2.5 text-xs", children: "Book Experience" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:w-80 bg-white overflow-y-auto flex-shrink-0", style: {
      borderLeft: "1px solid #E5DDD0"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "3D Digital Twin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl font-light italic", style: {
          color: "#0060A0"
        }, children: [
          "Explore ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-semibold", children: "Cataño" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontFamily: "Montserrat",
          fontSize: "0.72rem",
          color: "#8A7B6A",
          marginTop: 4,
          lineHeight: 1.5
        }, children: "Interactive model of Cataño with businesses, landmarks, routes and future development." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        borderTop: "1px solid #F0EBE1"
      }, children: places.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelectedPlace(p), className: "w-full text-left flex gap-3 p-4 transition-all hover:bg-amber-50", style: selectedPlace?.name === p.name ? {
        background: "#FBF6EC",
        borderLeft: "3px solid #D4970A"
      } : {
        borderLeft: "3px solid transparent",
        borderBottom: "1px solid #F5F0E8"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.img, alt: p.name, className: "h-14 w-16 rounded-xl object-cover flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", children: p.cat }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-semibold", style: {
            color: "#1A1612",
            lineHeight: 1.2
          }, children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1 mt-1", style: {
            fontFamily: "Montserrat",
            fontSize: "0.62rem",
            color: "#9A8A78"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 9 }),
            p.hours
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 14, color: selectedPlace?.name === p.name ? "#D4970A" : "#C5B8A8", className: "flex-shrink-0 mt-1" })
      ] }, p.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-3", children: "Expanding to Puerto Rico" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: futureCities.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "chip", style: {
          background: "#F5F0E8",
          color: "#8A7B6A",
          border: "1px dashed #D4C4A0"
        }, children: [
          c,
          " · 2026"
        ] }, c)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
          fontFamily: "Montserrat",
          fontSize: "0.68rem",
          color: "#9A8A78",
          marginTop: 10,
          lineHeight: 1.5
        }, children: "The Digital Twin network will expand to municipalities across Puerto Rico, starting with San Juan, Ponce and Mayagüez." })
      ] })
    ] })
  ] });
}
export {
  ExploreScreen as component
};
