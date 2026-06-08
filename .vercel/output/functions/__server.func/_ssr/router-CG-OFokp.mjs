import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as redirect } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-CDXDdEOs.css";
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
      { title: "Spirit of Puerto Rico" },
      { name: "description", content: "Discover the soul of the island — stories, adventures, rides and community across Puerto Rico." },
      { property: "og:title", content: "Spirit of Puerto Rico" },
      { property: "og:description", content: "Your gateway to authentic Puerto Rico." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/logo-original.jpg" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/logo-original.jpg", type: "image/jpeg" },
      { rel: "icon", href: "/favicon.ico" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Montserrat:wght@300;400;500;600;700&family=Barlow+Condensed:wght@400;500;600;700&display=swap" }
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
const $$splitComponentImporter$5 = () => import("../_shell-BRC92mZe.mjs");
const Route$6 = createFileRoute("/_shell")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const Route$5 = createFileRoute("/")({ beforeLoad: () => {
  throw redirect({ to: "/home" });
} });
const $$splitComponentImporter$4 = () => import("../_shell.stories-QsmaUVZ2.mjs");
const Route$4 = createFileRoute("/_shell/stories")({
  head: () => ({
    meta: [{
      title: "Stories — Spirit of Puerto Rico"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("../_shell.home-ChZvyTlK.mjs");
const Route$3 = createFileRoute("/_shell/home")({
  head: () => ({
    meta: [{
      title: "Home — Spirit of Puerto Rico"
    }, {
      name: "description",
      content: "Discover stories, adventures, rides and community across Puerto Rico."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("../_shell.get-around-BN9pc1_E.mjs");
const Route$2 = createFileRoute("/_shell/get-around")({
  head: () => ({
    meta: [{
      title: "Get Around — Spirit of Puerto Rico"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("../_shell.explore-DB30zHBs.mjs");
const Route$1 = createFileRoute("/_shell/explore")({
  head: () => ({
    meta: [{
      title: "Explore Cataño — Spirit of Puerto Rico 3D Map"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_shell.adventures-CzBzmsCr.mjs");
const Route = createFileRoute("/_shell/adventures")({
  head: () => ({
    meta: [{
      title: "Adventures — Spirit of Puerto Rico"
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
