"use client";
import "./Copy.css";
import React, { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRefs = useRef([]);
  const splitRefs = useRef([]);
  const lines = useRef([]);
  const [isMobile, setIsMobile] = useState(null); // null initially to prevent double animation
  const [isReady, setIsReady] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsReady(true); // Mark as ready after first check
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const waitForFonts = async () => {
    try {
      await document.fonts.ready;

      const customFonts = ["Manrope"];
      const fontCheckPromises = customFonts.map((fontFamily) => {
        return document.fonts.check(`16px ${fontFamily}`);
      });

      await Promise.all(fontCheckPromises);
      await new Promise((resolve) => setTimeout(resolve, 100));

      return true;
    } catch (error) {
      await new Promise((resolve) => setTimeout(resolve, 200));
      return true;
    }
  };

  useGSAP(
    () => {
      if (!containerRef.current || !isReady) return; // Wait until device type is determined

      // On mobile, skip heavy SplitText animations for better performance
      if (isMobile) {
        const elements = containerRef.current.hasAttribute("data-copy-wrapper")
          ? Array.from(containerRef.current.children)
          : [containerRef.current];
        
        // Simple fade-in instead of complex text splitting
        gsap.set(elements, { opacity: 0, y: 20 });
        
        const animationProps = {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: delay,
        };

        if (animateOnScroll && containerRef.current) {
          gsap.to(elements, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              once: true,
            },
          });
        } else {
          gsap.to(elements, animationProps);
        }
        
        return;
      }

      // Desktop: Full SplitText animation
      const initializeSplitText = async () => {
        await waitForFonts();

        // Check again after async operation
        if (!containerRef.current) return;

        splitRefs.current = [];
        lines.current = [];
        elementRefs.current = [];

        let elements = [];
        if (containerRef.current.hasAttribute("data-copy-wrapper")) {
          elements = Array.from(containerRef.current.children);
        } else {
          elements = [containerRef.current];
        }

        elements.forEach((element) => {
          elementRefs.current.push(element);

          const split = SplitText.create(element, {
            type: "lines",
            mask: "lines",
            linesClass: "line++",
            lineThreshold: 0.1,
          });

          splitRefs.current.push(split);

          const computedStyle = window.getComputedStyle(element);
          const textIndent = computedStyle.textIndent;

          if (textIndent && textIndent !== "0px") {
            if (split.lines.length > 0) {
              split.lines[0].style.paddingLeft = textIndent;
            }
            element.style.textIndent = "0";
          }

          lines.current.push(...split.lines);
        });

        gsap.set(lines.current, { y: "100%" });

        const animationProps = {
          y: "0%",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: delay,
        };

        if (animateOnScroll && containerRef.current) {
          gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 90%",
              once: true,
            },
          });
        } else {
          gsap.to(lines.current, animationProps);
        }
      };

      initializeSplitText();

      return () => {
        // Kill any ongoing animations first
        gsap.killTweensOf(lines.current);
        
        // Then revert SplitText
        splitRefs.current.forEach((split) => {
          if (split && split.revert) {
            split.revert();
          }
        });
        
        // Clear refs
        splitRefs.current = [];
        lines.current = [];
        elementRefs.current = [];
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, isMobile, isReady] }
  );

  // Validate children before rendering
  if (!children) {
    return null;
  }

  // Hide content until device detection is complete to prevent flash
  const initialStyle = !isReady ? { opacity: 0 } : {};

  if (React.Children.count(children) === 1 && React.isValidElement(children)) {
    return React.cloneElement(children, { 
      ref: containerRef,
      style: { ...children.props.style, ...initialStyle }
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true" style={initialStyle}>
      {children}
    </div>
  );
}
