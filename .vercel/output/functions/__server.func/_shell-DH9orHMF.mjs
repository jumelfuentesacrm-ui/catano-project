import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { O as Outlet, d as useRouterState, L as Link } from "./_libs/tanstack__react-router.mjs";
import { H as House, C as Clapperboard, a as Car, b as Compass, M as Map } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./_libs/isbot.mjs";
const tabs = [
  { to: "/home", label: "Home", Icon: House },
  { to: "/stories", label: "Stories", Icon: Clapperboard },
  { to: "/get-around", label: "Rides", Icon: Car },
  { to: "/adventures", label: "Adventures", Icon: Compass },
  { to: "/explore", label: "Explore", Icon: Map }
];
function AppNav({ children }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "min-h-screen",
      style: {
        background: "oklch(0.10 0.018 240)",
        backgroundImage: `url('https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=60')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "fixed inset-0 z-0 pointer-events-none",
            style: { background: "oklch(0.07 0.018 240 / 0.88)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "aside",
          {
            className: "sidebar-glass fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r lg:flex",
            style: { borderColor: "oklch(1 0 0 / 0.07)" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-40 overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=600&q=80",
                    alt: "El Morro",
                    className: "absolute inset-0 w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "linear-gradient(180deg, transparent 30%, oklch(0.10 0.018 240 / 0.95) 100%)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "absolute bottom-4 left-5 flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "eyebrow", style: { color: "oklch(0.80 0.16 72)" }, children: "Spirit of" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-light italic text-white leading-tight", children: "Puerto Rico" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-6 flex flex-col gap-1 px-4", children: tabs.map(({ to, label, Icon }) => {
                const active = pathname.startsWith(to);
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to,
                    className: `flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${active ? "text-[oklch(0.10_0.02_60)] shadow-glow" : "text-white/60 hover:text-white hover:bg-white/8"}`,
                    style: active ? { background: "var(--gradient-gold)" } : {},
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, strokeWidth: active ? 2.2 : 1.8 }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: active ? "font-semibold" : "", children: label })
                    ]
                  },
                  to
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto mx-4 mb-6 relative overflow-hidden rounded-2xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80",
                    alt: "Puerto Rico beach",
                    className: "absolute inset-0 w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0", style: { background: "oklch(0.08 0.02 240 / 0.72)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "eyebrow mb-1", children: "Plan Your Escape" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg italic text-white leading-snug", children: "Where will the island take you?" })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative z-10 lg:ml-64 pb-28 lg:pb-12", children }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-0 left-0 right-0 z-40 lg:hidden", style: { background: "var(--gradient-nav)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-nav flex items-center justify-around px-2 py-3 mx-3 mb-3 rounded-2xl", children: tabs.map(({ to, label, Icon }) => {
          const active = pathname.startsWith(to);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to,
              className: "flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all",
              style: active ? { color: "oklch(0.80 0.16 72)" } : { color: "oklch(0.55 0.02 260)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: active ? 2.2 : 1.8 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-[10px] font-600 tracking-wide uppercase", children: label })
              ]
            },
            to
          );
        }) }) })
      ]
    }
  );
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppNav, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
export {
  SplitComponent as component
};
