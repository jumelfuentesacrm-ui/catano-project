import { createFileRoute, Outlet } from "@tanstack/react-router";
import { AppNav } from "@/components/AppNav";

export const Route = createFileRoute("/_shell")({
  component: () => (
    <AppNav>
      <Outlet />
    </AppNav>
  ),
});
