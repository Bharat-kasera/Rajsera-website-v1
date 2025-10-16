"use client";
import "./Services.css";

import { useRef } from "react";
import { useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useViewTransition } from "@/hooks/useViewTransition";

import Copy from "../Copy/Copy";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Building responsive, performant websites and web applications using modern frameworks and technologies. From landing pages to complex enterprise platforms.",
    icon: "/services/web-development-icon.svg",
    tags: ["React", "Next.js", "Node.js", "API Integration"],
  },
  {
    id: "mobile-app",
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless experiences on iOS and Android. Built for scale and performance.",
    icon: "/services/mobile-app-icon.svg",
    tags: ["React Native", "iOS", "Android", "SwiftUI","Kotlin"],
  },
  {
    id: "ai-development",
    title: "Generative AI Development",
    description:
      "Cutting-edge AI solutions leveraging GPT, Claude, and custom ML models. From chatbots to intelligent automation that transforms business processes.",
    icon: "/services/ai-icon.svg",
    tags: ["GPT Integration", "Claude AI", "LangChain", "AI Automation","Google Gemini"],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design that prioritizes intuition and delight. From wireframes to high-fidelity prototypes, we craft interfaces that users love.",
    icon: "/services/uiux-design-icon.svg",
    tags: ["Figma", "Prototyping", "User Testing", "Design Systems"],
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const servicesGridRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);
  const { navigateWithTransition } = useViewTransition();

  const handleServiceClick = (serviceId) => {
    navigateWithTransition(`/services/${serviceId}`);
  };

  useGSAP(
    () => {
      if (!servicesGridRef.current) return;

      const serviceCards =
        servicesGridRef.current.querySelectorAll(".service-card");
      
      gsap.set(serviceCards, { opacity: 0, y: 60 });

      serviceCards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 85%",
          once: true,
          animation: gsap.to(card, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: "power3.out",
          }),
        });
      });
    },
    { scope: servicesGridRef }
  );

  return (
    <section className="services" ref={containerRef}>
      <div className="container">
        <div className="services-header">
          <div className="services-header-callout">
            <Copy delay={0.1}>
              <p>Our Services</p>
            </Copy>
          </div>
          <div className="services-header-title">
            <Copy delay={0.15}>
              <h2>
                Comprehensive digital services designed to transform your ideas
                into exceptional products
              </h2>
            </Copy>
          </div>
          <div className="services-header-description">
            <Copy delay={0.2}>
              <p className="lg">
                From concept to launch, we provide end-to-end solutions that
                combine strategic thinking, beautiful design, and robust
                development. Each service is crafted to deliver measurable
                results and lasting value.
              </p>
            </Copy>
          </div>
        </div>

        <div className="services-grid" ref={servicesGridRef}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.id)}
              style={{ cursor: 'pointer' }}
            >
              <div className="service-card-content">
                <div className="service-card-icon">
                  {service.icon.startsWith('/') ? (
                    <img src={service.icon} alt={service.title} />
                  ) : (
                    <span>{service.icon}</span>
                  )}
                </div>
                <div className="service-card-header">
                  <h3>{service.title}</h3>
                </div>
                <div className="service-card-description">
                  <p className="md">{service.description}</p>
                </div>
                <div className="service-card-tags">
                  {service.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="service-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={`service-card-glow ${
                  hoveredService === index ? "active" : ""
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

