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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-card/60 px-5 py-7 lg:flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-9 w-9 place-items-center rounded-xl bg-gradient-sunset font-display text-lg font-black text-sunset-foreground", children: "C" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-bold leading-none", children: "Cataño" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-accent text-muted-foreground", children: "PUERTO RICO" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "mt-10 flex flex-col gap-1", children: tabs.map(({ to, label, Icon }) => {
        const active = pathname.startsWith(to);
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to,
            className: `flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${active ? "bg-primary text-primary-foreground shadow-warm" : "text-foreground/70 hover:bg-accent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 }),
              label
            ]
          },
          to
        );
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto rounded-2xl bg-gradient-tropical p-4 text-tropical-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base font-bold", children: "¡Vive Cataño!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs opacity-90", children: "Discover stories from your neighbors." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "lg:ml-64 pb-28 lg:pb-12", children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "fixed bottom-3 left-1/2 z-40 -translate-x-1/2 lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-nav flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 shadow-warm", children: tabs.map(({ to, label, Icon }) => {
      const active = pathname.startsWith(to);
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Link,
        {
          to,
          className: `flex min-w-[58px] flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-semibold transition ${active ? "bg-primary text-primary-foreground" : "text-foreground/70"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18, strokeWidth: active ? 2.4 : 2 }),
            label
          ]
        },
        to
      );
    }) }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsxRuntimeExports.jsx(AppNav, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
export {
  SplitComponent as component
};
