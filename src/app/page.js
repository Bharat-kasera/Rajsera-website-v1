"use client";
import "./index.css";
import "./preloader.css";
import { useRef, useState, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomEase from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { useLenis } from "lenis/react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import AnimatedButton from "@/components/AnimatedButton/AnimatedButton";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import ClientReviews from "@/components/ClientReviews/ClientReviews";
import CTAWindow from "@/components/CTAWindow/CTAWindow";
import Copy from "@/components/Copy/Copy";
import Services from "@/components/Services/Services";
import HomeAbout from "@/components/HomeAbout/HomeAbout";
import HomeServices from "@/components/HomeServices/HomeServices";
import Industries from "@/components/Industries/Industries";

let isInitialLoad = true;
gsap.registerPlugin(ScrollTrigger, CustomEase);
CustomEase.create("hop", "0.9, 0, 0.1, 1");

export default function Home() {
  const tagsRef = useRef(null);
  const [showPreloader, setShowPreloader] = useState(isInitialLoad);
  const [loaderAnimating, setLoaderAnimating] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    return () => {
      isInitialLoad = false;
    };
  }, []);

  useEffect(() => {
    if (lenis) {
      if (loaderAnimating) {
        lenis.stop();
      } else {
        lenis.start();
      }
    }
  }, [lenis, loaderAnimating]);

  useGSAP(() => {
    const tl = gsap.timeline({
      delay: 0.3,
      defaults: {
        ease: "hop",
      },
    });

    if (showPreloader) {
      setLoaderAnimating(true);

      tl.to(
        ".word h1",
        {
          y: "0%",
          duration: 1,
          delay: 0.5,
        }
      );

      tl.to(
        ".intro-logo .divider",
        {
          opacity: 1,
          scaleY: 1,
          duration: 0.8,
        },
        "<0.3"
      );

      tl.to(".spinner", {
        opacity: 0,
        duration: 0.3,
        delay: 0.5,
      });

      tl.to("#word-1 h1", {
        y: "100%",
        duration: 1,
        delay: 0.3,
      });

      tl.to(
        "#word-2 h1",
        {
          y: "-100%",
          duration: 1,
        },
        "<"
      );

      tl.to(
        ".intro-logo .divider",
        {
          opacity: 0,
          scaleY: 0,
          duration: 0.5,
        },
        "<"
      );

      tl.to(
        ".block",
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          stagger: 0.1,
          delay: 0.5,
          onStart: () => {
            // Spline scene will be visible after loader
          },
          onComplete: () => {
            gsap.set(".loader", { pointerEvents: "none" });
            setLoaderAnimating(false);
          },
        },
        "<"
      );
    }
  }, [showPreloader]);

  useGSAP(
    () => {
      if (!tagsRef.current) return;

      const tags = tagsRef.current.querySelectorAll(".what-we-do-tag");
      gsap.set(tags, { opacity: 0, x: -40 });

      ScrollTrigger.create({
        trigger: tagsRef.current,
        start: "top 90%",
        once: true,
        animation: gsap.to(tags, {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }),
      });
    },
    { scope: tagsRef }
  );

  return (
    <div key="home-page-wrapper">
      {showPreloader && (
        <div className="loader">
          <div className="overlay">
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="intro-logo">
            <div className="word" id="word-1">
              <h1>
                <span>Rajsera</span>
              </h1>
            </div>
            <div className="divider"></div>
            <div className="word" id="word-2">
              <h1>Labs</h1>
            </div>
          </div>
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        </div>
      )}
      <Nav />
      <section className="hero">
        <div className="hero-bg">
          <video
            className="hero-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/spline/legendary-waves.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hero-gradient"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-header">
              <Copy animateOnScroll={false} delay={showPreloader ? 4 : 0.85}>
                <h1>Stop Losing Money to Bad Tech. We Build Solutions That Actually Work.</h1>
              </Copy>
            </div>
            <div className="hero-tagline">
              <Copy animateOnScroll={false} delay={showPreloader ? 4.15 : 1}>
                <p>
                We build custom apps and websites that drive real business results. Increase revenue, boost efficiency, and scale faster with expert development.
                </p>
              </Copy>
            </div>
            
            <div className="hero-cta">
              
              
              <AnimatedButton
                label="Free Consultation"
                route="/connect"
                animateOnScroll={false}
                delay={showPreloader ? 4.45 : 1.3}
              />
              
              <div className="hero-trust-indicators">
                <Copy animateOnScroll={false} delay={showPreloader ? 4.6 : 1.45}>
                  <div className="trust-item">
                    <IoMdCheckmark />
                    <span>Fast 2-4 week delivery</span>
                  </div>
                </Copy>
                <Copy animateOnScroll={false} delay={showPreloader ? 4.65 : 1.5}>
                  <div className="trust-item">
                    <IoMdCheckmark />
                    <span>Fixed pricing, no surprises</span>
                  </div>
                </Copy>
                <Copy animateOnScroll={false} delay={showPreloader ? 4.7 : 1.55}>
                  <div className="trust-item">
                    <IoMdCheckmark />
                    <span>30-day support guarantee</span>
                  </div>
                </Copy>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="container">
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.1}>
                  <h2>40+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.15}>
                  <p>Projects delivered</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.2}>
                  <h2>30+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.25}>
                  <p>Happy clients worldwide</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.3}>
                  <h2>5+</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.35}>
                  <p>Years of experience</p>
                </Copy>
              </div>
            </div>
            <div className="stat">
              <div className="stat-count">
                <Copy delay={0.4}>
                  <h2>98%</h2>
                </Copy>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-info">
                <Copy delay={0.45}>
                  <p>Client satisfaction rate</p>
                </Copy>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="what-we-do">
        <div className="container">
          <div className="what-we-do-header">
            <Copy delay={0.1}>
              <h1>
                <span className="spacer">&nbsp;</span>
                At Rajsera Labs, we develop with purpose and precision, creating digital 
                products that combine stunning UI/UX design with powerful functionality 
                and seamless user experiences.
              </h1>
            </Copy>
          </div>
          <div className="what-we-do-content">
            <div className="what-we-do-col">
              <Copy delay={0.1}>
                <p>How we work</p>
              </Copy>

              <Copy delay={0.15}>
                <p className="lg">
                  We approach each project with strategic thinking and technical excellence. 
                  Every solution is crafted through user research, iterative design, and 
                  clean code. What remains is a product built to scale and designed to delight.
                </p>
              </Copy>
            </div>
            <div className="what-we-do-col">
              <div className="what-we-do-tags" ref={tagsRef}>
                <div className="what-we-do-tag">
                  <h3>Mobile Apps</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Web Development</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>UI/UX Design</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>User Research</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Prototyping</h3>
                </div>
                <div className="what-we-do-tag">
                  <h3>Brand Identity</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <section className="client-reviews-container">
        <div className="container">
          <ClientReviews />
        </div>
      </section>
      <HomeAbout />
      <HomeServices />
      {/* <section className="featured-projects-container">
        <div className="container">
          <div className="featured-projects-header-callout">
            <Copy delay={0.1}>
              <p>Featured work</p>
            </Copy>
          </div>
          <div className="featured-projects-header">
            <Copy delay={0.15}>
              <h2>A selection of our recent apps and web projects</h2>
            </Copy>
          </div>
        </div>
        <FeaturedProjects />
      </section> */}
      <Industries />
      <section className="gallery-callout">
        <div className="container">
          <div className="gallery-callout-col">
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-1">
                <img src="/gallery-callout/gallery-callout-1.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-2">
                <img src="/gallery-callout/gallery-callout-2.jpg" alt="" />
                <div className="gallery-callout-img-content">
                  <h3>500+</h3>
                  <p>Design Assets</p>
                </div>
              </div>
            </div>
            <div className="gallery-callout-row">
              <div className="gallery-callout-img gallery-callout-img-3">
                <img src="/gallery-callout/gallery-callout-3.jpg" alt="" />
              </div>
              <div className="gallery-callout-img gallery-callout-img-4">
                <img src="/gallery-callout/gallery-callout-4.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="gallery-callout-col">
            <div className="gallery-callout-copy">
              <Copy delay={0.1}>
                <h3>
                  Explore the projects that showcase our expertise.
                  From mobile apps to enterprise web platforms, each project
                  demonstrates our commitment to exceptional design and development
                  that might inspire your next digital product.
                </h3>
              </Copy>
              <AnimatedButton label="View Portfolio" route="case-studies" />
            </div>
          </div>
        </div>
      </section>
      {/* <CTAWindow
        useSpline={true}
        header="Rajsera Labs"
        callout="Rajsera Labs"
        description="Our approach is guided by user needs, scalable architecture, and beautiful design, creating products that grow more valuable as they're used."
      /> */}
      <ConditionalFooter />
    </div>
  );
}
