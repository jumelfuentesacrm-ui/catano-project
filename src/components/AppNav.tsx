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
    <div
      className="min-h-screen"
      style={{
        background: "oklch(0.10 0.018 240)",
        backgroundImage: `url('https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=60')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Full-screen tint so content stays readable */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{ background: "oklch(0.07 0.018 240 / 0.88)" }}
      />

      {/* Desktop sidebar */}
      <aside className="sidebar-glass fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r lg:flex"
        style={{ borderColor: "oklch(1 0 0 / 0.07)" }}>

        {/* Hero photo in sidebar top */}
        <div className="relative h-40 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1583398701142-37bd2d3f9d49?w=600&q=80"
            alt="El Morro"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, oklch(0.10 0.018 240 / 0.95) 100%)" }} />
          <Link to="/" className="absolute bottom-4 left-5 flex flex-col">
            <span className="eyebrow" style={{ color: "oklch(0.80 0.16 72)" }}>Spirit of</span>
            <span className="font-display text-2xl font-light italic text-white leading-tight">Puerto Rico</span>
          </Link>
        </div>

        <nav className="mt-6 flex flex-col gap-1 px-4">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                  active
                    ? "text-[oklch(0.10_0.02_60)] shadow-glow"
                    : "text-white/60 hover:text-white hover:bg-white/8"
                }`}
                style={active ? { background: "var(--gradient-gold)" } : {}}
              >
                <Icon size={18} strokeWidth={active ? 2.2 : 1.8} />
                <span className={active ? "font-semibold" : ""}>{label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom sidebar card */}
        <div className="mt-auto mx-4 mb-6 relative overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=80"
            alt="Puerto Rico beach"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "oklch(0.08 0.02 240 / 0.72)" }} />
          <div className="relative p-4">
            <div className="eyebrow mb-1">Plan Your Escape</div>
            <p className="font-display text-lg italic text-white leading-snug">Where will the island take you?</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="relative z-10 lg:ml-64 pb-28 lg:pb-12">{children}</main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 lg:hidden" style={{ background: "var(--gradient-nav)" }}>
        <div className="glass-nav flex items-center justify-around px-2 py-3 mx-3 mb-3 rounded-2xl">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all"
                style={active ? { color: "oklch(0.80 0.16 72)" } : { color: "oklch(0.55 0.02 260)" }}
              >
                <Icon size={20} strokeWidth={active ? 2.2 : 1.8} />
                <span className="font-accent text-[10px] font-600 tracking-wide uppercase">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
