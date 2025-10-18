"use client";
import "./Footer.css";

import { useRef } from "react";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useViewTransition } from "@/hooks/useViewTransition";
import Copy from "../Copy/Copy";

import { RiLinkedinBoxLine } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import { RiDribbbleLine } from "react-icons/ri";
import { RiYoutubeLine } from "react-icons/ri";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { navigateWithTransition } = useViewTransition();
  const socialIconsRef = useRef(null);

  useGSAP(
    () => {
      if (!socialIconsRef.current) return;

      const icons = socialIconsRef.current.querySelectorAll(".icon");
      gsap.set(icons, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: socialIconsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(icons, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: -0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: socialIconsRef }
  );

  return (
    <div className="footer">
      <div className="footer-meta">
        <div className="container footer-meta-header">
          <div className="footer-meta-col">
            <div className="footer-meta-block">
              <div className="footer-meta-logo">
                <Copy delay={0.1}>
                  <h3 className="lg">Rajsera Labs</h3>
                </Copy>
              </div>
              <Copy delay={0.2}>
                <h2>Digital products crafted with precision and care.</h2>
              </Copy>
            </div>
          </div>
          <div className="footer-meta-col">
            <div className="footer-nav-links">
              <Copy delay={0.1}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/");
                  }}
                >
                  <h3>Index</h3>
                </a>
                {/* <a
                  href="/studio"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/studio");
                  }}
                >
                  <h3>Studio</h3>
                </a>
                <a
                  href="/spaces"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/spaces");
                  }}
                >
                  <h3>Our Spaces</h3>
                </a> */}
                <a
                  href="/services"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/services");
                  }}
                >
                  <h3>Services</h3>
                </a>
                {/* <a
                  href="/industries"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/industries");
                  }}
                >
                  <h3>Industries</h3>
                </a> */}
                <a
                  href="/case-studies"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/case-studies");
                  }}
                >
                  <h3>Case Studies</h3>
                </a>
                <a
                  href="/connect"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateWithTransition("/connect");
                  }}
                >
                  <h3>Contact</h3>
                </a>
              </Copy>
            </div>
          </div>
        </div>
        {/* <div className="container footer-socials">
          <div className="footer-meta-col">
            <div className="footer-socials-wrapper" ref={socialIconsRef}>
              <div className="icon">
                <RiLinkedinBoxLine />
              </div>
              <div className="icon">
                <RiInstagramLine />
              </div>
              <div className="icon">
                <RiDribbbleLine />
              </div>
              <div className="icon">
                <RiYoutubeLine />
              </div>
            </div>
          </div>
          <div className="footer-meta-col">
            <Copy delay={0.1}>
              <p>
                We believe great design is not just visual appeal, but the foundation 
                that shapes exceptional digital experiences.
              </p>
            </Copy>
          </div>
        </div> */}
      </div>
      <div className="footer-outro">
        <div className="container">
          <div className="footer-header" >
            <img src="/logos/rajsera-icon-light.svg" alt="Rajsera Labs" />
          </div>
          <div className="footer-copyright">
            <p>
              Developed by — <a href="https://www.linkedin.com/in/bharat-kasera/" target="_blank" rel="noopener noreferrer"><span>Bharat Kasera</span></a>
            </p>
            <p>All rights reserved &copy; 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
