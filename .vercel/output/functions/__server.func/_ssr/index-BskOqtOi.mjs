import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
function Splash() {
  const [lang, setLang] = reactExports.useState("en");
  const t = {
    en: {
      sub: "Your gateway to authentic Puerto Rico",
      visitor: "I'm a Visitor",
      local: "I Live Here",
      tag: "PUERTO RICO · CATAÑO"
    },
    es: {
      sub: "Tu puerta a la verdadera experiencia boricua",
      visitor: "Soy Visitante",
      local: "Vivo Aquí",
      tag: "PUERTO RICO · CATAÑO"
    }
  }[lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative min-h-screen overflow-hidden text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
      backgroundImage: "url(https://images.unsplash.com/photo-1591375275624-c4f4ec7fc4f3?auto=format&fit=crop&w=1600&q=80)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-ocean opacity-80" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-hero" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-4 top-4 z-10 flex rounded-full glass-nav p-1 text-xs font-semibold", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLang("en"), className: `rounded-full px-3 py-1.5 ${lang === "en" ? "bg-white/95 text-primary" : "text-white/80"}`, children: "🇺🇸 EN" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLang("es"), className: `rounded-full px-3 py-1.5 ${lang === "es" ? "bg-white/95 text-primary" : "text-white/80"}`, children: "🇵🇷 ES" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-screen max-w-md flex-col justify-end px-6 pb-16 pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-float-up", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-accent text-xs text-sunset", children: t.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-6xl font-black leading-[0.95] tracking-tight", children: [
        "Bienvenido",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "a ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sunset", children: "Cataño" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-sm text-base text-white/85", children: t.sub }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "group flex items-center justify-between rounded-2xl bg-sunset px-5 py-4 text-sunset-foreground shadow-warm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t.visitor }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl transition-transform group-hover:translate-x-1", children: "→" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/home", className: "group flex items-center justify-between rounded-2xl border border-white/30 bg-white/10 px-5 py-4 backdrop-blur-md", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold", children: t.local }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl transition-transform group-hover:translate-x-1", children: "→" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-center text-[11px] uppercase tracking-[0.2em] text-white/50", children: "Hecho con orgullo · Made with pride" })
    ] }) })
  ] });
}
export {
  Splash as component
};
