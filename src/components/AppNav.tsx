import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Clapperboard, Car, Compass, Map } from "lucide-react";

const tabs = [
  { to: "/home", label: "Home", Icon: Home },
  { to: "/stories", label: "Stories", Icon: Clapperboard },
  { to: "/get-around", label: "Rides", Icon: Car },
  { to: "/adventures", label: "Adventures", Icon: Compass },
  { to: "/explore", label: "Explore", Icon: Map },
] as const;

export function AppNav({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-64 flex-col border-r border-border bg-card/60 px-5 py-7 lg:flex">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-sunset font-display text-lg font-black text-sunset-foreground">C</div>
          <div>
            <div className="font-display text-lg font-bold leading-none">Cataño</div>
            <div className="text-[10px] font-accent text-muted-foreground">PUERTO RICO</div>
          </div>
        </Link>

        <nav className="mt-10 flex flex-col gap-1">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition ${
                  active ? "bg-primary text-primary-foreground shadow-warm" : "text-foreground/70 hover:bg-accent"
                }`}
              >
                <Icon size={18} />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-2xl bg-gradient-tropical p-4 text-tropical-foreground">
          <div className="font-display text-base font-bold">¡Vive Cataño!</div>
          <p className="mt-1 text-xs opacity-90">Discover stories from your neighbors.</p>
        </div>
      </aside>

      {/* Main content */}
      <main className="lg:ml-64 pb-28 lg:pb-12">{children}</main>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-3 left-1/2 z-40 -translate-x-1/2 lg:hidden">
        <div className="glass-nav flex items-center gap-1 rounded-full border border-border/60 px-2 py-2 shadow-warm">
          {tabs.map(({ to, label, Icon }) => {
            const active = pathname.startsWith(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex min-w-[58px] flex-col items-center gap-0.5 rounded-full px-3 py-1.5 text-[10px] font-semibold transition ${
                  active ? "bg-primary text-primary-foreground" : "text-foreground/70"
                }`}
              >
                <Icon size={18} strokeWidth={active ? 2.4 : 2} />
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
