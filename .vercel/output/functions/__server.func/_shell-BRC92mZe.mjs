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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen", style: { background: "#FAF8F2" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: "fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-white lg:flex",
        style: { borderRight: "1px solid #E2D8C4" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              className: "flex flex-col items-center px-6 py-7 gap-0",
              style: { borderBottom: "1px solid #EDE6D4" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/logo.png",
                    alt: "Spirit of Puerto Rico",
                    style: { width: 88, height: "auto", display: "block" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", marginTop: 6 }, children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#D4970A" }, children: "Spirit of" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 600, color: "#0060A0", letterSpacing: "0.02em", lineHeight: 1.1 }, children: "Puerto Rico" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "flex flex-col gap-1 px-3 py-5 flex-1", children: tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to,
                className: "flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-all",
                style: active ? { background: "#0060A0", color: "#FAF8F2" } : { color: "#5A4030" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 17, strokeWidth: active ? 2.2 : 1.8 }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", fontWeight: active ? 600 : 400 }, children: label })
                ]
              },
              to
            );
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-3 mb-5 overflow-hidden rounded-2xl relative", style: { height: 130 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=85",
                alt: "Puerto Rico coast",
                className: "absolute inset-0 w-full h-full object-cover"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "absolute inset-0",
                style: { background: "linear-gradient(180deg, transparent 20%, rgba(0,60,106,0.90) 100%)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-3.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "Barlow Condensed", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E0A800", marginBottom: 2 }, children: "Explore" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontFamily: "Cormorant Garamond", fontSize: "0.95rem", fontStyle: "italic", color: "white", lineHeight: 1.2 }, children: "La Isla del Encanto" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "lg:ml-60 pb-24 lg:pb-10", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "nav",
      {
        className: "fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-nav",
        style: { paddingBottom: "max(0.55rem, env(safe-area-inset-bottom))", paddingTop: "0.5rem" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-around px-2", children: tabs.map(({ to, label, Icon }) => {
          const active = pathname.startsWith(to);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to,
              className: "flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all",
              style: { color: active ? "#0060A0" : "#9A8470" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20, strokeWidth: active ? 2.2 : 1.8 }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }, children: label })
              ]
            },
            to
          );
        }) })
      }
    )
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppNav, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
export {
  SplitComponent as component
};
