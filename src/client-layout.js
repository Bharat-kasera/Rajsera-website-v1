"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { ReactLenis, useLenis } from "lenis/react";
import { ViewTransitions } from "next-view-transitions";

export default function ClientLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const lenis = useLenis();

  // Scroll to top on route change
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollSettings = isMobile
    ? {
        // Disable smooth scroll on mobile for better performance
        duration: 0.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: false, // Disable for native scroll performance
        smoothTouch: false, // Critical: disable to reduce CPU load
        touchMultiplier: 1,
        infinite: false,
        lerp: 0.05, // Reduced for lighter calculations
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: false, // Use native scrolling
        syncTouch: false, // Disable sync for better performance
      }
    : {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
        lerp: 0.1,
        wheelMultiplier: 1,
        orientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
      };

  return (
    <ViewTransitions>
      <ReactLenis root options={scrollSettings}>
        {children}
      </ReactLenis>
    </ViewTransitions>
  );
}
