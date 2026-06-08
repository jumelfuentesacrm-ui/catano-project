import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { j as Search, l as Building2, L as Landmark, F as Footprints, m as Bike, n as Sailboat, o as CalendarDays, p as Sparkles, X, q as Clock, r as Phone, N as Navigation } from "./_libs/lucide-react.mjs";
const layers = [{
  Icon: Building2,
  label: "Businesses"
}, {
  Icon: Landmark,
  label: "Landmarks"
}, {
  Icon: Footprints,
  label: "Walking"
}, {
  Icon: Bike,
  label: "Bike"
}, {
  Icon: Sailboat,
  label: "Ferry"
}, {
  Icon: CalendarDays,
  label: "Events"
}, {
  Icon: Sparkles,
  label: "Future"
}];
function ExploreScreen() {
  const [active, setActive] = reactExports.useState(["Businesses", "Landmarks"]);
  const [panel, setPanel] = reactExports.useState(true);
  const toggle = (l) => setActive((a) => a.includes(l) ? a.filter((x) => x !== l) : [...a, l]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[calc(100vh-2rem)] w-full overflow-hidden lg:h-screen", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=2000&q=85)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-ocean/30 via-transparent to-ocean/40 mix-blend-multiply" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-80", viewBox: "0 0 1000 700", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("defs", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "pin", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#F5A623", stopOpacity: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#F5A623", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "pin2", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#27AE60", stopOpacity: "0.9" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#27AE60", stopOpacity: "0" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("radialGradient", { id: "ghost", cx: "50%", cy: "50%", r: "50%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#ffffff", stopOpacity: "0.45" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#ffffff", stopOpacity: "0" })
        ] })
      ] }),
      [[180, 220], [280, 310], [400, 250], [520, 340], [660, 260], [760, 400]].map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "38", fill: "url(#pin)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "6", fill: "#F5A623" })
      ] }, i)),
      [[330, 460], [600, 520]].map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "42", fill: "url(#pin2)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "6", fill: "#27AE60" })
      ] }, `g${i}`)),
      [[120, 560], [850, 180]].map(([x, y], i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "36", fill: "url(#ghost)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: x, cy: y, r: "5", fill: "#ffffff", opacity: "0.8" })
      ] }, `f${i}`))
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-4 z-10 w-[min(92%,640px)] -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 rounded-full glass-nav border border-white/30 px-4 py-2.5 shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { size: 16, className: "text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "w-full bg-transparent text-sm outline-none placeholder:text-foreground/60", placeholder: "Find a place, business, or landmark..." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-20 z-10 w-[min(96%,720px)] -translate-x-1/2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-2 overflow-x-auto rounded-2xl glass-nav border border-white/30 p-2 shadow-warm", children: layers.map(({
      Icon,
      label
    }) => {
      const on = active.includes(label);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => toggle(label), className: `flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold whitespace-nowrap transition ${on ? "bg-primary text-primary-foreground" : "bg-white/70 text-foreground/75"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 13 }),
        label
      ] }, label);
    }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-4 top-36 z-10 rounded-2xl glass-nav border border-white/30 px-3 py-2 text-[11px] font-semibold shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-tropical", children: "EXPANDING 2026" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-foreground/80", children: "San Juan · Ponce · Mayagüez" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-32 left-4 z-10 rounded-2xl glass-nav border border-white/30 p-3 text-[11px] shadow-warm lg:bottom-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-accent text-[10px] text-muted-foreground", children: "LEGEND" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-sunset" }),
        " Businesses"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-tropical" }),
        " Landmarks"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-white/70" }),
        " Future"
      ] })
    ] }),
    panel && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-20 left-2 right-2 z-20 mx-auto max-w-xl lg:bottom-6 lg:left-auto lg:right-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-3xl bg-card shadow-glow animate-float-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-32", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=900&q=80", alt: "", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPanel(false), className: "absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 16 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute left-3 top-3 bg-sunset text-sunset-foreground", children: "Landmark" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold", children: "Isla de Cabras" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Historic island fort with panoramic views of San Juan Bay." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { size: 12 }),
            " 7am – 6pm"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { size: 12 }),
            " +1 787 555 0142"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex-1 rounded-full bg-primary py-2.5 text-xs font-semibold text-primary-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Navigation, { size: 12, className: "mr-1 inline" }),
            " Get Directions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "flex-1 rounded-full bg-sunset py-2.5 text-xs font-semibold text-sunset-foreground", children: "Book Experience Here" })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  ExploreScreen as component
};
