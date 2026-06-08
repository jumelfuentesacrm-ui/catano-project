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
    <div className="min-h-screen" style={{ background: "#FAF8F3" }}>

      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col bg-white lg:flex"
        style={{ borderRight: "1px solid #E5DDD0" }}>

        {/* Logo area */}
        <div className="px-6 pt-7 pb-6" style={{ borderBottom: "1px solid #F0EBE1" }}>
          <Link to="/" className="flex flex-col gap-0.5">
            <span className="eyebrow">Spirit of</span>
            <span className="font-display text-2xl font-light italic" style={{ color: "#0A3D62" }}>
              Puerto Rico
            </span>
          </Link>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col gap-1 px-3 py-5 flex-1">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link key={to} to={to}
                className="flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all"
                style={active
                  ? { background: "#0A3D62", color: "#FAF8F3" }
                  : { color: "#5A4A38" }
                }
              >
                <Icon size={17} strokeWidth={active ? 2.2 : 1.8} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: active ? 600 : 400 }}>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar photo card — Cataño ferry */}
        <div className="mx-3 mb-5 overflow-hidden rounded-2xl relative" style={{ height: 140 }}>
          <img
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=600&q=85"
            alt="Puerto Rico coast"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 20%, rgba(10,61,98,0.88) 100%)" }} />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="eyebrow mb-0.5" style={{ color: "#D4A840" }}>Explore</p>
            <p className="font-display text-base italic text-white leading-tight">La Isla del Encanto</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-60 pb-24 lg:pb-10">{children}</main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-nav px-1 pt-2 pb-safe"
        style={{ paddingBottom: "max(0.6rem, env(safe-area-inset-bottom))" }}>
        <div className="flex items-center justify-around">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link key={to} to={to}
                className="flex flex-col items-center gap-1 px-3 py-1.5 rounded-xl transition-all"
                style={{ color: active ? "#0A3D62" : "#9A8A78" }}
              >
                <Icon size={19} strokeWidth={active ? 2.2 : 1.8} />
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "0.6rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
