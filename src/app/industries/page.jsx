"use client";
import "./industries.css";
import { useState } from "react";
import { useViewTransition } from "@/hooks/useViewTransition";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { IoMdArrowForward } from "react-icons/io";

const industriesData = [
  {
    id: "real-estate",
    title: "Real Estate & Construction",
    description:
      "Drive property management, virtual tours, and customer engagement with customized digital solutions for the real estate sector.",
    icon: "/industries/real-estate-icon.svg",
    bgImage: "/industries/real-estate.jpg",
  },
  {
    id: "finance",
    title: "Banking & Finance",
    description:
      "Strengthen your financial services with secure, compliant, and innovative fintech solutions that enhance customer experience and operational efficiency.",
    icon: "/industries/finance-icon.svg",
    bgImage: "/industries/finance.jpg",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Transform patient care and healthcare operations with secure, scalable IT solutions, from telemedicine platforms to health data management systems.",
    icon: "/industries/healthcare-icon.svg",
    bgImage: "/industries/healthcare.jpg",
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    description:
      "Revolutionize how people explore the world with innovative IT solutions, from travel booking platforms to real-time itinerary and fleet management systems.",
    icon: "/industries/travel-icon.svg",
    bgImage: "/industries/travel.jpg",
  },
  {
    id: "media",
    title: "Media & Entertainment",
    description:
      "Deliver immersive, on-demand digital experiences with dynamic IT solutions, from streaming platforms to interactive content management systems.",
    icon: "/industries/media-icon.svg",
    bgImage: "/industries/media.jpg",
  },
  {
    id: "education",
    title: "Education",
    description:
      "Power up digital learning with custom e-learning platforms, student management systems, and technology-driven education solutions.",
    icon: "/industries/education-icon.svg",
    bgImage: "/industries/education.jpg",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    description:
      "Optimize online shopping experiences with scalable e-commerce platforms, inventory management, and secure payment integrations.",
    icon: "/industries/retail-icon.svg",
    bgImage: "/industries/retail.jpg",
  },
  {
    id: "on-demand",
    title: "On Demand Services",
    description:
      "Build robust on-demand apps and platforms that connect customers with services instantly, from delivery to booking systems.",
    icon: "/industries/on-demand-icon.svg",
    bgImage: "/industries/on-demand.jpg",
  },
];

const IndustriesPage = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(null);
  const { navigateWithTransition } = useViewTransition();

  const handleIndustryClick = (industryId) => {
    navigateWithTransition(`/industries/${industryId}`);
  };

  return (
    <div key="industries-page-wrapper">
      <Nav />
      <div className="page industries-page">
        <section className="industries-page-hero">
          <div className="container">
            <div className="industries-page-header">
              <div className="industries-page-callout">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Industries We Serve
                  </p>
                </Copy>
              </div>
              <div className="industries-page-title">
                <Copy delay={0.15}>
                  <h1>Empowering Industries with Digital Innovation</h1>
                </Copy>
              </div>
              <div className="industries-page-description">
                <Copy delay={0.2}>
                  <p className="lg">
                    We bring deep industry expertise and cutting-edge technology
                    to solve complex challenges across diverse sectors. Our
                    solutions are tailored to meet the unique needs of each
                    industry we serve.
                  </p>
                </Copy>
              </div>
            </div>

            <div className="industries-page-grid">
              {industriesData.map((industry, index) => (
                <div
                  key={index}
                  className="industry-page-card"
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  onClick={() => handleIndustryClick(industry.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="industry-page-card-bg">
                    <img src={industry.bgImage} alt={industry.title} />
                  </div>
                  <div className="industry-page-card-overlay"></div>
                  <div className="industry-page-card-content">
                    <div className="industry-page-card-icon">
                      <img src={industry.icon} alt={industry.title} />
                    </div>
                    <div className="industry-page-card-header">
                      <h3>{industry.title}</h3>
                    </div>
                    <div className="industry-page-card-description">
                      <p>{industry.description}</p>
                    </div>
                    <div className="industry-page-card-action">
                      <span className="industry-page-arrow">
                        <IoMdArrowForward />
                      </span>
                      <span className="industry-page-learn-more">Learn More</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </div>
  );
};

export default IndustriesPage;

