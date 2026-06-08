import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { g as MapPin, i as Users, f as Clock, j as ChevronRight } from "./_libs/lucide-react.mjs";
const vehicles = [{
  e: "🚗",
  l: "Rideshare",
  desc: "Standard cars"
}, {
  e: "🚕",
  l: "Taxi",
  desc: "Licensed taxis"
}, {
  e: "🧳",
  l: "Tour + Ride",
  desc: "Guide with transport"
}, {
  e: "🛵",
  l: "Scooter",
  desc: "Scooter rental"
}, {
  e: "🚲",
  l: "Bicycle",
  desc: "Bike rental"
}, {
  e: "⛵",
  l: "Water",
  desc: "Ferry & boat"
}, {
  e: "🚐",
  l: "Shuttle Van",
  desc: "Up to 8 people"
}, {
  e: "🚌",
  l: "Bus 15",
  desc: "15-passenger"
}, {
  e: "🚍",
  l: "Bus 45",
  desc: "45-passenger"
}, {
  e: "🎉",
  l: "Party Bus",
  desc: "Events & groups"
}, {
  e: "🏔️",
  l: "Adventure",
  desc: "Off-road vehicles"
}];
const popularRoutes = [{
  from: "Luis Muñoz Marín Airport (SJU)",
  to: "Cataño / San Juan",
  price: "$28",
  time: "35 min",
  img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
  note: "All vehicle types available"
}, {
  from: "San Juan Cruise Port",
  to: "Old San Juan / Cataño",
  price: "$18",
  time: "20 min",
  img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=80",
  note: "Shuttle & water taxi options"
}, {
  from: "Cataño Ferry Terminal",
  to: "Old San Juan (Ferry)",
  price: "$0.75",
  time: "10 min",
  img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&q=80",
  note: "Public ferry — runs every 30 min"
}, {
  from: "Isla Verde Hotel Zone",
  to: "Beaches / Attractions",
  price: "$12",
  time: "15 min",
  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
  note: "Scooter & bicycle rentals too"
}];
function GetAroundScreen() {
  const [selected, setSelected] = reactExports.useState("Rideshare");
  const sel = vehicles.find((v) => v.l === selected);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#FAF8F3"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
      height: 200
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=85", alt: "Transportation Puerto Rico", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 px-5 pb-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", style: {
          color: "#D4970A"
        }, children: "Transportation Network" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-light italic text-white", children: [
          "Get ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-semibold", children: "Around" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 overflow-hidden rounded-2xl bg-white shadow-sm p-4 space-y-3", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-2", children: "Plan Your Route" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl p-3", style: {
          background: "#F5F0E8"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2.5 w-2.5 rounded-full flex-shrink-0", style: {
            background: "#1A6B3C"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.8rem",
            color: "#9A8A78"
          }, children: "Your location or pickup point…" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl p-3", style: {
          background: "#F5F0E8"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { size: 12, color: "#D4970A", className: "flex-shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.8rem",
            color: "#9A8A78"
          }, children: "Where are you going?" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-3", children: "Choose Vehicle Type" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-3 overflow-x-auto pb-2", children: vehicles.map(({
          e,
          l,
          desc
        }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setSelected(l), className: "card-lift flex min-w-[88px] flex-col items-center gap-2 rounded-2xl py-3 px-2 transition-all bg-white", style: selected === l ? {
          border: "2px solid #0060A0",
          background: "#EEF4FA"
        } : {
          border: "1px solid #E5DDD0"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl leading-none", children: e }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontFamily: "Barlow Condensed",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: selected === l ? "#0060A0" : "#6A5A48",
            textAlign: "center"
          }, children: l }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.55rem",
            color: "#9A8A78",
            textAlign: "center"
          }, children: desc })
        ] }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 overflow-hidden rounded-2xl bg-white shadow-sm", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between p-5 pb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "eyebrow mb-1", children: [
              sel.e,
              " ",
              sel.l,
              " · Estimated Fare"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-light", style: {
              color: "#0060A0"
            }, children: "$12–18" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontFamily: "Montserrat",
              fontSize: "0.7rem",
              color: "#8A7B6A",
              marginTop: 4
            }, children: "~15 min arrival · Driver rated 4.9 ★" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 rounded-full px-3 py-1.5", style: {
            background: "#F0EBE1"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { size: 12, color: "#8A7B6A" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontFamily: "Montserrat",
              fontSize: "0.68rem",
              color: "#6A5A48"
            }, children: "1–4 people" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold w-full justify-center", children: [
          "Book ",
          sel.e,
          " ",
          sel.l,
          " Now"
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 overflow-hidden rounded-2xl relative", style: {
        height: 120
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1519671282429-b44b2802040e?w=900&q=80", alt: "Group transport", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "rgba(26,107,60,0.82)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between h-full px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", style: {
              color: "#A8E0BC"
            }, children: "Traveling with 6+ people?" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl italic text-white", children: "Shuttle, bus & party bus packages" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
              fontFamily: "Montserrat",
              fontSize: "0.68rem",
              color: "rgba(255,255,255,0.70)",
              marginTop: 2
            }, children: "Supports events, festivals, airport & cruise port transfers" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn-gold flex-shrink-0", children: "Get Quote" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-3", children: "Popular Routes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: popularRoutes.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-lift overflow-hidden rounded-2xl bg-white shadow-sm flex", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: r.img, alt: r.to, className: "w-24 object-cover flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.65rem",
            color: "#9A8A78"
          }, children: r.from }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-base font-semibold", style: {
            color: "#1A1612",
            marginTop: 1
          }, children: r.to }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", style: {
              fontFamily: "Montserrat",
              fontSize: "0.65rem",
              color: "#8A7B6A"
            }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 10 }),
              r.time
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
              fontFamily: "Montserrat",
              fontSize: "0.62rem",
              color: "#9A8A78"
            }, children: r.note })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pr-4 flex-shrink-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xl font-light", style: {
            color: "#0060A0"
          }, children: r.price }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { size: 16, color: "#C5B8A8" })
        ] })
      ] }, r.from)) })
    ] })
  ] });
}
export {
  GetAroundScreen as component
};
