"use client";
import "./CTAWindow.css";
import Spline from "@splinetool/react-spline";
import { useRef, useState, useEffect } from "react";

import Copy from "../Copy/Copy";

const CTAWindow = ({ img, header, callout, description, useSpline = false }) => {
  const sectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isSplineLoaded, setIsSplineLoaded] = useState(false);

  useEffect(() => {
    if (!useSpline || !sectionRef.current) return;

    const currentSection = sectionRef.current; // Capture ref value

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        rootMargin: '1500px', // Start loading 1500px before to give more time to load
        threshold: 0,
      }
    );

    observer.observe(currentSection);

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
      observer.disconnect();
    };
  }, [useSpline]);

  return (
    <section className="cta-window" ref={sectionRef}>
      <div className="container">
        <div className="cta-window-img-wrapper">
          {useSpline ? (
            <div key="spline-wrapper">
              {isInView && (
                <div key="spline-content">
                  {!isSplineLoaded && (
                    <div style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      color: 'white',
                      fontSize: '1rem',
                      zIndex: 10
                    }}>
                      Loading 3D Scene...
                    </div>
                  )}
                  <Spline 
                    scene="/spline/dynamic_i_phone_mockup.spline"
                    onLoad={() => setIsSplineLoaded(true)}
                  />
                </div>
              )}
            </div>
          ) : (
            <img src={img} alt="" />
          )}
        </div>
        <div className="cta-window-img-overlay"></div>
        {useSpline && (
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            right: '1rem',
            zIndex: 1,
            pointerEvents: 'auto'
          }}>
            <div style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(8px)',
              padding: '1rem 1.25rem',
              borderRadius: '9999px',
              color: 'white',
              fontSize: '0.75rem',
              fontWeight: 500
            }}>
              Built with ❤️ by Rajsera Labs
            </div>
          </div>
        )}
        {/* <div className="cta-window-header">
          <Copy delay={0.1}>
            <h1>{header}</h1>
          </Copy>
        </div> */}
        <div className="cta-window-footer">
          <div className="cta-window-left-content">
            <div className="cta-window-callout">
              <Copy delay={0.1}>
                <h3>{callout}</h3>
              </Copy>
            </div>
            <div className="cta-window-description">
              <Copy delay={0.1}>
                <p>{description}</p>
              </Copy>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAWindow;
