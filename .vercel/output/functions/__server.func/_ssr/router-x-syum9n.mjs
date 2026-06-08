import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
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
const appCss = "/assets/styles-DbtShABn.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-display font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Esta página no existe — let's get you back." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground", children: "Go home" })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  const router = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-display font-semibold", children: "Something went sideways" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Try again or head home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
        router.invalidate();
        reset();
      }, className: "rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground", children: "Try again" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-full border border-border px-5 py-2 text-sm font-semibold", children: "Home" })
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#0A3D62" },
      { title: "Cataño — Puerto Rico's Living Platform" },
      { name: "description", content: "Your gateway to authentic Puerto Rico. Stories, rides, adventures, and a living map of Cataño." },
      { property: "og:title", content: "Cataño — Puerto Rico's Living Platform" },
      { property: "og:description", content: "Your gateway to authentic Puerto Rico." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Barlow+Condensed:wght@500;600;700&display=swap" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$6 = () => import("../_shell-C9D1eMfk.mjs");
const Route$6 = createFileRoute("/_shell")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./index-BskOqtOi.mjs");
const Route$5 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Cataño — Bienvenido"
    }, {
      name: "description",
      content: "Your gateway to authentic Puerto Rico. Choose how you'll explore Cataño."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("../_shell.stories-DI0Qqs15.mjs");
const Route$4 = createFileRoute("/_shell/stories")({
  head: () => ({
    meta: [{
      title: "Stories — Cataño"
    }, {
      name: "description",
      content: "Community storytelling from Puerto Rico — elders, youth, business owners and culture keepers."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_shell.home-DOh8cUFH.mjs");
const Route$3 = createFileRoute("/_shell/home")({
  head: () => ({
    meta: [{
      title: "Home — Cataño"
    }, {
      name: "description",
      content: "Discover stories, events, food, and hidden gems in Cataño today."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_shell.get-around-C4gWfujn.mjs");
const Route$2 = createFileRoute("/_shell/get-around")({
  head: () => ({
    meta: [{
      title: "Get Around — Cataño"
    }, {
      name: "description",
      content: "Rideshare, taxis, scooters, water transport, shuttles and party buses across Puerto Rico."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_shell.explore-Cqj4oJya.mjs");
const Route$1 = createFileRoute("/_shell/explore")({
  head: () => ({
    meta: [{
      title: "Explore — Cataño 3D Map"
    }, {
      name: "description",
      content: "An interactive 3D digital twin of Cataño — businesses, landmarks, routes and events."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_shell.adventures-C5rAX8K5.mjs");
const Route = createFileRoute("/_shell/adventures")({
  head: () => ({
    meta: [{
      title: "Adventures — Cataño"
    }, {
      name: "description",
      content: "Tours, eco-adventures, wellness, fishing, food and culture experiences across Puerto Rico."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ShellRoute = Route$6.update({
  id: "/_shell",
  getParentRoute: () => Route$7
});
const IndexRoute = Route$5.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const ShellStoriesRoute = Route$4.update({
  id: "/stories",
  path: "/stories",
  getParentRoute: () => ShellRoute
});
const ShellHomeRoute = Route$3.update({
  id: "/home",
  path: "/home",
  getParentRoute: () => ShellRoute
});
const ShellGetAroundRoute = Route$2.update({
  id: "/get-around",
  path: "/get-around",
  getParentRoute: () => ShellRoute
});
const ShellExploreRoute = Route$1.update({
  id: "/explore",
  path: "/explore",
  getParentRoute: () => ShellRoute
});
const ShellAdventuresRoute = Route.update({
  id: "/adventures",
  path: "/adventures",
  getParentRoute: () => ShellRoute
});
const ShellRouteChildren = {
  ShellAdventuresRoute,
  ShellExploreRoute,
  ShellGetAroundRoute,
  ShellHomeRoute,
  ShellStoriesRoute
};
const ShellRouteWithChildren = ShellRoute._addFileChildren(ShellRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  ShellRoute: ShellRouteWithChildren
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
