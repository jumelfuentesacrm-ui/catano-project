import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as Play, c as Heart, S as Share2, B as Bookmark, d as Plus } from "./_libs/lucide-react.mjs";
const filters = ["All", "Elders", "History", "Business", "Youth", "Culture"];
const stories = [{
  title: "The day the ferry brought my abuelo home",
  desc: "A 90-year-old recounts returning from the Korean War through San Juan Bay.",
  creator: "Doña Mariela",
  badge: "Local Elder",
  tags: ["#FamilyHistory", "#CatañoProud"],
  img: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=85",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  likes: 847
}, {
  title: "Running my mother's panadería at 22",
  desc: "Why I came back from Orlando to keep the bakery and the family legacy alive.",
  creator: "Joseline Ramírez",
  badge: "Business Owner",
  tags: ["#LocalBusiness", "#Roots"],
  img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=85",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80",
  likes: 612
}, {
  title: "Bomba y plena — the pulse that never left",
  desc: "Three musicians explain why this rhythm is Puerto Rico's spiritual backbone.",
  creator: "DJ Yaniel",
  badge: "Youth Creator",
  tags: ["#Cultura", "#Música"],
  img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=85",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  likes: 1204
}, {
  title: "Kayaking through the bioluminescent bay at midnight",
  desc: "The eerie glow of Laguna Grande is something you never forget.",
  creator: "Eco Tours PR",
  badge: "Tour Guide",
  tags: ["#Adventure", "#Nature"],
  img: "https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800&q=85",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  likes: 2341
}];
function StoriesScreen() {
  const [active, setActive] = reactExports.useState("All");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative -mx-4 lg:-mx-8 mb-8 overflow-hidden rounded-b-3xl", style: {
      height: 220
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1200&q=85", alt: "Puerto Rico", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
        background: "linear-gradient(180deg, oklch(0.06 0.02 240 / 0.4) 0%, oklch(0.06 0.02 240 / 0.88) 100%)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 px-6 pb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "Community" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-light italic text-white", children: [
          "Stories of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "not-italic font-semibold", children: "Puerto Rico" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 relative overflow-hidden rounded-2xl", style: {
      background: "oklch(0.14 0.018 240)",
      border: "1px solid oklch(1 0 0 / 0.07)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=900&q=85", alt: "Collection", className: "absolute inset-0 w-full h-full object-cover opacity-30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "This Month's Collection" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-semibold italic text-white", children: "Oral Histories of the Bay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-white/60 mt-1", children: "18 stories · curated by Spirit of Puerto Rico" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-2 overflow-x-auto pb-3 mb-6", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(f), className: "chip whitespace-nowrap transition-all", style: active === f ? {
      background: "var(--gradient-gold)",
      color: "oklch(0.10 0.02 60)"
    } : {
      background: "oklch(0.18 0.02 240)",
      color: "oklch(0.65 0.02 260)",
      border: "1px solid oklch(1 0 0 / 0.08)"
    }, children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: stories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-2xl", style: {
      background: "oklch(0.14 0.018 240)",
      border: "1px solid oklch(1 0 0 / 0.07)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
        height: 220
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 photo-overlay" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-full transition-transform hover:scale-110", style: {
          background: "oklch(1 0 0 / 0.15)",
          backdropFilter: "blur(8px)",
          border: "1px solid oklch(1 0 0 / 0.25)"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 20, fill: "white", stroke: "none", className: "ml-0.5" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip absolute top-3 left-3 text-white", style: {
          background: "oklch(1 0 0 / 0.15)",
          backdropFilter: "blur(8px)"
        }, children: s.badge })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.avatar, alt: s.creator, className: "h-8 w-8 rounded-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm font-600 text-white", children: s.creator }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-[10px] uppercase tracking-wide text-white/45", children: s.badge })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold text-white leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-sans text-sm text-white/60 mt-1.5 leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-sans text-xs text-white/45", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 font-sans text-xs text-white/55 hover:text-white transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 15 }),
              " ",
              s.likes.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 font-sans text-xs text-white/55 hover:text-white transition-colors", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 14 }),
              " Share"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "text-white/40 hover:text-white transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 15 }) })
        ] })
      ] })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "fixed bottom-24 right-5 lg:bottom-8 flex items-center gap-2 rounded-full px-5 py-3 shadow-glow font-sans text-sm font-700 uppercase tracking-wider transition-transform hover:scale-105 z-30", style: {
      background: "var(--gradient-gold)",
      color: "oklch(0.10 0.02 60)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 16 }),
      " Share Story"
    ] })
  ] });
}
export {
  StoriesScreen as component
};
