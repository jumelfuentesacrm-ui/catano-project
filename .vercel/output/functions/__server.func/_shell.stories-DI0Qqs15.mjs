import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as Play, B as BadgeCheck, c as Heart, S as Share2, d as Bookmark, e as Plus } from "./_libs/lucide-react.mjs";
const filters = ["All", "Elders", "History", "Business", "Youth", "Events", "Culture"];
const stories = [{
  title: "The day the ferry brought my abuelo home",
  desc: "A 90-year-old recounts returning from the Korean War.",
  creator: "Doña Mariela",
  badge: "Local Elder",
  tags: ["#FamilyHistory", "#CatañoProud"],
  img: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
}, {
  title: "Running my mother's panadería at 22",
  desc: "Why I came back from Orlando to keep the bakery alive.",
  creator: "Joseline Ramírez",
  badge: "Business Owner",
  tags: ["#NewGuard", "#CatañoEats"],
  img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80"
}, {
  title: "Bomba is not a performance, it's a conversation",
  desc: "Inside a Saturday night gathering at the plaza.",
  creator: "Tito Ayala",
  badge: "Culture Keeper",
  tags: ["#OralHistory", "#Bomba"],
  img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
}, {
  title: "We surf before school",
  desc: "Three teenagers, one longboard, and the sunrise.",
  creator: "Andrés & crew",
  badge: "Youth Creator",
  tags: ["#YouthVoices", "#Surf"],
  img: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&q=80"
}];
function StoriesScreen() {
  const [active, setActive] = reactExports.useState("All");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 py-6 lg:px-8 lg:py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-accent text-xs text-muted-foreground", children: "COMMUNITY STORYTELLING" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-1 font-display text-3xl font-bold lg:text-4xl", children: "Stories from the island" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 overflow-hidden rounded-3xl bg-gradient-sunset p-6 text-sunset-foreground shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[11px]", children: "THIS MONTH" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-1 font-display text-2xl font-bold leading-tight", children: "Oral Histories of Old San Juan" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-sm opacity-90", children: "12 elders. 7 streets. 500 years of memory." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "mt-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground", children: "Explore collection" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-2xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar mt-6 flex gap-2 overflow-x-auto pb-1", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(f), className: `rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap transition ${active === f ? "bg-primary text-primary-foreground shadow-warm" : "bg-card text-foreground/70 border border-border"}`, children: f }, f)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-5", children: stories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "card-lift overflow-hidden rounded-3xl bg-card shadow-warm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/5] sm:aspect-[16/10]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 20, fill: "currentColor", className: "ml-0.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4 right-4 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-full bg-sunset ring-2 ring-white" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-semibold leading-tight flex items-center gap-1", children: [
              s.creator,
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { size: 14, className: "text-sunset" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip bg-white/20 text-white text-[10px]", children: s.badge })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-1.5", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-semibold text-ocean", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center gap-5 text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 text-sm hover:text-terracotta", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 18 }),
            " 1.2k"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 text-sm hover:text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 18 }),
            " Share"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "ml-auto flex items-center gap-1.5 text-sm hover:text-sunset", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 18 }),
            " Save"
          ] })
        ] })
      ] })
    ] }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "fixed bottom-24 right-5 z-30 flex items-center gap-2 rounded-full bg-gradient-sunset px-5 py-3.5 font-semibold text-sunset-foreground shadow-glow lg:bottom-8 lg:right-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 18 }),
      " Upload Your Story"
    ] })
  ] });
}
export {
  StoriesScreen as component
};
