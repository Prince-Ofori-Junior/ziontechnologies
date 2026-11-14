"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function PagePreloader() {
  const pathname = usePathname();
  const isInitial = useRef(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Skip the first mount (initial page load) — only show on navigation
    if (isInitial.current) {
      isInitial.current = false;
      return;
    }

    setShow(true);

    // Keep the logo visible for at least 2000ms so it never flashes away
    const timer = setTimeout(() => setShow(false), 2000);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!show) return null;

  const pageLabel = pathname.split("/").pop()?.replace(/-/g, " ") || "page";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--paper, #ffffff)",
        color: "var(--ink, #3b3b3b)",
      }}
      aria-label="Loading"
      role="status"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <Image
          src="/logo.png"
          alt="Zion Technologies logo"
          width={200}
          height={200}
          priority
          loading="eager"
          style={{
            animation: "bounce 1s infinite",
          }}
        />
        {pathname !== "/" && (
          <p
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              color: "var(--muted, #5c5c5c)",
              margin: 0,
            }}
          >
            Loading {pageLabel}…
          </p>
        )}
      </div>
    </div>
  );
}
