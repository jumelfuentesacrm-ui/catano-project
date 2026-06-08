import { r as reactExports, j as jsxRuntimeExports } from "./_libs/react.mjs";
import { P as Play, V as Video, c as Heart, S as Share2, B as Bookmark, d as Plus } from "./_libs/lucide-react.mjs";
const filters = ["All", "Elders", "History", "Business", "Youth", "Events", "Culture"];
const stories = [{
  title: "The day the ferry brought my abuelo home from the Korean War",
  desc: "A 90-year-old Cataño resident recounts standing on the docks as a child, watching the ship come into San Juan Bay. A family history story no textbook could tell.",
  creator: "Doña Mariela Rivera",
  badge: "Local Elder",
  category: "Elders",
  tags: ["#FamilyHistory", "#CatañoProud", "#OralHistory"],
  img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=900&q=85",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  likes: 847,
  duration: "8 min"
}, {
  title: "Running my mother's panadería at 22 — why I came back from Orlando",
  desc: "Joseline left Puerto Rico for college and a job in Florida. Then her mother got sick. She came home for two weeks and never left. This is how she kept a 60-year-old bakery alive.",
  creator: "Joseline Ramírez",
  badge: "Business Owner",
  category: "Business",
  tags: ["#LocalBusiness", "#Roots", "#Cataño"],
  img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&q=80",
  likes: 612,
  duration: "12 min"
}, {
  title: "Bomba y plena — the rhythm that kept Cataño's identity alive",
  desc: "Three musicians break down why bomba is not just music — it's a direct line to West African roots, to resistance, to who Puerto Ricans are.",
  creator: "Yaniel Ortiz",
  badge: "Youth Creator",
  category: "Culture",
  tags: ["#Cultura", "#Música", "#BombaYPlena"],
  img: "/photos/bomba-plena.png",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  likes: 1204,
  duration: "15 min"
}, {
  title: "Isla de Cabras — the hidden gem most Puerto Ricans have never visited",
  desc: "Just a short ferry ride from Cataño sits a small island with colonial ruins, a lighthouse, and some of the clearest water in the bay. We went to find out why it stays undiscovered.",
  creator: "Eco Tours PR",
  badge: "Tour Guide",
  category: "History",
  tags: ["#HiddenGem", "#IsladeCabras", "#Cataño"],
  img: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=85",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  likes: 2341,
  duration: "10 min"
}, {
  title: "Festival de la Bahía: how a community reclaimed its waterfront",
  desc: "Every summer, Cataño's Paseo Marítimo transforms into a celebration of food, music and community. This year's organizer explains what it means for the neighborhood.",
  creator: "Municipio de Cataño",
  badge: "Nonprofit",
  category: "Events",
  tags: ["#FestivalBahía", "#ComunidadCataño", "#Events"],
  img: "/photos/pr-festival.png",
  avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&q=80",
  likes: 558,
  duration: "6 min"
}];
function StoriesScreen() {
  const [active, setActive] = reactExports.useState("All");
  const shown = active === "All" ? stories : stories.filter((s) => s.category === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    background: "#FAF8F3"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
      height: 220
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=1200&q=85", alt: "El Morro fortress Puerto Rico", className: "absolute inset-0 w-full h-full object-cover" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-hero" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-left" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 px-5 pb-6 lg:px-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", style: {
          color: "#D4970A"
        }, children: "Community Storytelling Network" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-light italic text-white", children: [
          "Stories of ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "not-italic font-semibold", children: "Puerto Rico" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 overflow-hidden rounded-2xl bg-white shadow-sm flex", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&q=80", alt: "San Juan Bay oral history collection", className: "w-28 object-cover flex-shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-1", children: "This Month" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-semibold italic", style: {
            color: "#0060A0"
          }, children: "Oral Histories of Old San Juan Bay" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.7rem",
            color: "#8A7B6A",
            marginTop: 4
          }, children: "18 stories · curated by Spirit of Puerto Rico" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "no-scrollbar flex gap-2 overflow-x-auto pb-3 mb-6", children: filters.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActive(f), className: "chip whitespace-nowrap transition-all", style: active === f ? {
        background: "#0060A0",
        color: "#FAF8F3"
      } : {
        background: "white",
        color: "#5A4A38",
        border: "1px solid #E5DDD0"
      }, children: f }, f)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-5", children: shown.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-2xl bg-white shadow-sm", style: {
        border: "1px solid #EDE7D9"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", style: {
          height: 210
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.img, alt: s.title, className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 overlay-card" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-14 w-14 place-items-center rounded-full", style: {
            background: "rgba(255,255,255,0.18)",
            backdropFilter: "blur(8px)",
            border: "1.5px solid rgba(255,255,255,0.35)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { size: 20, fill: "white", strokeWidth: 0, className: "ml-0.5" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3 flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "chip", style: {
            background: "rgba(255,255,255,0.92)",
            color: "#0060A0"
          }, children: s.badge }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-3 right-3 flex items-center gap-1 chip", style: {
            background: "rgba(0,0,0,0.5)",
            color: "white",
            backdropFilter: "blur(4px)"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Video, { size: 10 }),
            " ",
            s.duration
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.avatar, alt: s.creator, className: "h-9 w-9 rounded-full object-cover flex-shrink-0", style: {
              border: "2px solid #EDE7D9"
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                fontFamily: "Montserrat",
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#1A1612"
              }, children: s.creator }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
                fontFamily: "Barlow Condensed",
                fontSize: "0.62rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#D4970A"
              }, children: s.badge })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", style: {
            color: "#1A1612",
            lineHeight: 1.25
          }, children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.77rem",
            color: "#6A5A48",
            marginTop: 8,
            lineHeight: 1.6
          }, children: s.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-3", children: s.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
            fontFamily: "Montserrat",
            fontSize: "0.65rem",
            color: "#9A8A78"
          }, children: t }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-4 pt-4", style: {
            borderTop: "1px solid #F0EBE1"
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 transition-colors hover:text-red-500", style: {
                fontFamily: "Montserrat",
                fontSize: "0.72rem",
                color: "#8A7B6A"
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { size: 14 }),
                " ",
                s.likes.toLocaleString()
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1.5 transition-colors", style: {
                fontFamily: "Montserrat",
                fontSize: "0.72rem",
                color: "#8A7B6A"
              }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { size: 13 }),
                " Share"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { style: {
              color: "#C5B8A8"
            }, className: "hover:text-gold transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bookmark, { size: 15 }) })
          ] })
        ] })
      ] }, s.title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 overflow-hidden rounded-2xl relative", style: {
        height: 120
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://images.unsplash.com/photo-1599413987323-2f7edc9c9c4d?w=900&q=80", alt: "Share your story", className: "absolute inset-0 w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: {
          background: "rgba(0,60,106,0.82)"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center justify-between h-full px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "eyebrow mb-0.5", style: {
              color: "#D4970A"
            }, children: "Your Turn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl italic text-white", children: "Share your Puerto Rico story" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn-gold flex-shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { size: 14 }),
            " Upload"
          ] })
        ] })
      ] })
    ] })
  ] });
}
export {
  StoriesScreen as component
};
