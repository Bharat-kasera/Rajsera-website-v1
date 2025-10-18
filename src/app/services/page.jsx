"use client";
import "./services.css";
import { useState } from "react";
import { useViewTransition } from "@/hooks/useViewTransition";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { IoMdArrowForward } from "react-icons/io";
import ClientReviews from "@/components/ClientReviews/ClientReviews";

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
    tags: ["React Native", "iOS", "Android", "SwiftUI", "Kotlin"],
  },
  {
    id: "ai-development",
    title: "Generative AI Development",
    description:
      "Cutting-edge AI solutions leveraging GPT, Claude, and custom ML models. From chatbots to intelligent automation that transforms business processes.",
    icon: "/services/ai-icon.svg",
    tags: ["GPT Integration", "Claude AI", "LangChain", "AI Automation", "Google Gemini"],
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

const ServicesPage = () => {
  const [hoveredService, setHoveredService] = useState(null);
  const { navigateWithTransition } = useViewTransition();

  const handleServiceClick = (serviceId) => {
    navigateWithTransition(`/services/${serviceId}`);
  };

  return (
    <div key="services-page-wrapper">
      <Nav />
      <div className="page services-page">
        <section className="services-page-hero">
          <div className="container">
            <div className="services-page-header">
              <div className="services-page-callout">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Our Services
                  </p>
                </Copy>
              </div>
              <div className="services-page-title">
                <Copy delay={0.15}>
                  <h1>Comprehensive Digital Services</h1>
                </Copy>
              </div>
              <div className="services-page-description">
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

            <div className="services-page-grid">
              {servicesData.map((service, index) => (
                <div
                  key={index}
                  className="service-page-card"
                  onMouseEnter={() => setHoveredService(index)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() => handleServiceClick(service.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="service-page-card-content">
                    <div className="service-page-card-icon">
                      {service.icon.startsWith('/') ? (
                        <img src={service.icon} alt={service.title} />
                      ) : (
                        <span>{service.icon}</span>
                      )}
                    </div>
                    <div className="service-page-card-header">
                      <h3>{service.title}</h3>
                    </div>
                    <div className="service-page-card-description">
                      <p className="md">{service.description}</p>
                    </div>
                    <div className="service-page-card-tags">
                      {service.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="service-page-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="service-page-card-action">
                      <span className="service-page-arrow">
                        <IoMdArrowForward />
                      </span>
                    </div>
                  </div>
                  <div
                    className={`service-page-card-glow ${
                      hoveredService === index ? "active" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="client-reviews-container">
          <div className="container">
            <ClientReviews />
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </div>
  );
};

export default ServicesPage;

