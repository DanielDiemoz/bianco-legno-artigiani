import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ProgressBar() {
  const [mounted, setMounted] = useState(false);
  const isLoading = useRouterState({ select: (s) => s.status === "pending" });
  const visible = mounted && isLoading;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-0.5 w-full">
      <div
        className="h-full bg-wood transition-all duration-300 ease-out"
        style={{
          width: visible ? "60%" : "100%",
          opacity: visible ? 1 : 0,
          transition: visible
            ? "width 30s cubic-bezier(0.1, 0.05, 0, 1)"
            : "width 0.3s ease-out, opacity 0.3s ease-out",
        }}
      />
    </div>
  );
}
