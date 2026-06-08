import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Clapperboard, Car, Compass, Map } from "lucide-react";

const tabs = [
  { to: "/home",        label: "Home",       Icon: Home },
  { to: "/stories",    label: "Stories",    Icon: Clapperboard },
  { to: "/get-around", label: "Rides",      Icon: Car },
  { to: "/adventures", label: "Adventures", Icon: Compass },
  { to: "/explore",    label: "Explore",    Icon: Map },
] as const;

export function AppNav({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen" style={{ background: "#FAF8F2" }}>

      {/* ── Desktop sidebar ── */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-white lg:flex"
        style={{ borderRight: "1px solid #E2D8C4" }}>

        {/* Logo — centered, well-spaced */}
        <Link to="/" className="flex flex-col items-center px-6 py-7 gap-0"
          style={{ borderBottom: "1px solid #EDE6D4" }}>
          <img
            src="/logo.png"
            alt="Spirit of Puerto Rico"
            style={{ width: 88, height: "auto", display: "block" }}
          />
          <div style={{ textAlign: "center", marginTop: 6 }}>
            <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.28em", textTransform: "uppercase", color: "#D4970A" }}>Spirit of</div>
            <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", fontWeight: 600, color: "#0060A0", letterSpacing: "0.02em", lineHeight: 1.1 }}>Puerto Rico</div>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-3 py-5 flex-1">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link key={to} to={to}
                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 transition-all"
                style={active
                  ? { background: "#0060A0", color: "#FAF8F2" }
                  : { color: "#5A4030" }
                }
              >
                <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", fontWeight: active ? 600 : 400 }}>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom photo card */}
        <div className="mx-3 mb-5 overflow-hidden rounded-2xl relative" style={{ height: 130 }}>
          <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=85"
            alt="Puerto Rico coast" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, transparent 20%, rgba(0,60,106,0.90) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 p-3.5">
            <p style={{ fontFamily: "Barlow Condensed", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E0A800", marginBottom: 2 }}>Explore</p>
            <p style={{ fontFamily: "Cormorant Garamond", fontSize: "0.95rem", fontStyle: "italic", color: "white", lineHeight: 1.2 }}>La Isla del Encanto</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-60 pb-24 lg:pb-10">{children}</main>

      {/* ── Mobile bottom nav ── */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-nav"
        style={{ paddingBottom: "max(0.55rem, env(safe-area-inset-bottom))", paddingTop: "0.5rem" }}>
        <div className="flex items-center justify-around px-2">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link key={to} to={to}
                className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-xl transition-all"
                style={{ color: active ? "#0060A0" : "#9A8470" }}
              >
                <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
