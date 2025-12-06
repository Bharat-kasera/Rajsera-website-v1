"use client";
import { useState } from "react";
import { useViewTransition } from "@/hooks/useViewTransition";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { IoMdArrowForward, IoLogoWhatsapp } from "react-icons/io";
import { RiExternalLinkLine } from "react-icons/ri";
import ClientReviews from "@/components/ClientReviews/ClientReviews";

const projectsData = [
  {
    id: "negative-films",
    title: "Negative Films",
    description: "A sleek and modern film production website showcasing cinematography portfolios with elegant animations and responsive design.",
    url: "https://negative-films-rajsera.vercel.app/",
    image: "/projects/negative-films.jpg",
    tags: ["React", "Next.js", "GSAP", "Video Production"],
    category: "Website"
  },
  {
    id: "lexend",
    title: "Lexend",
    description: "Modern and sleek website showcasing innovative design patterns with clean aesthetics and smooth user interactions.",
    url: "http://lexend-rajsera.vercel.app/",
    image: "/projects/lexend.jpg",
    tags: ["Modern Design", "React", "Clean UI", "Interactive"],
    category: "Website"
  },
  {
    id: "homely",
    title: "Homely - Real Estate",
    description: "Modern real estate platform featuring property listings, interactive maps, and seamless user experience for home buyers and sellers.",
    url: "https://homely-rajsera.vercel.app/",
    image: "/projects/homely.jpg",
    tags: ["Real Estate", "Next.js", "Property Listings", "Maps"],
    category: "Website"
  },
  {
    id: "rise-agency",
    title: "Rise Agency",
    description: "Creative digital agency website with stunning animations, portfolio showcase, and modern design principles that drive client engagement.",
    url: "https://rise-agency-website-rajsera.vercel.app/",
    image: "/projects/rise-agency.jpg",
    tags: ["Agency", "Portfolio", "GSAP", "Creative Design"],
    category: "Website"
  },
  {
    id: "crypgo",
    title: "CrypGo - Crypto Platform",
    description: "Comprehensive cryptocurrency trading platform with real-time data, advanced charting, and secure wallet integration for digital asset management.",
    url: "https://crypgo-rajsera-labs.vercel.app/",
    image: "/projects/crypgo.jpg",
    tags: ["Cryptocurrency", "Trading", "Blockchain", "Financial"],
    category: "Website"
  },
  {
    id: "origin",
    title: "Origin - Creative Studio",
    description: "Minimalist creative studio portfolio showcasing design work, interactive experiences, and innovative digital solutions with clean aesthetics.",
    url: "https://origin-rajsera-labs.vercel.app/",
    image: "/projects/origin.jpg",
    tags: ["Creative", "Portfolio", "Minimalist", "Design Studio"],
    category: "Website"
  },
  {
    id: "elementis",
    title: "Elementis",
    description: "Sophisticated website featuring modern design elements, interactive components, and engaging user experience with premium aesthetics.",
    url: "https://elementis-bharat-kasera-rajsera.vercel.app/",
    image: "/projects/elementis.jpg",
    tags: ["Premium Design", "Interactive", "Modern UI", "Sophisticated"],
    category: "Website"
  },
  {
    id: "ai-portal-algora",
    title: "AI Portal Algora",
    description: "Advanced AI-powered platform featuring intelligent algorithms and machine learning capabilities with intuitive user interface design.",
    url: "https://ai-portal-algora-rajsera.vercel.app/",
    image: "/projects/ai-portal.jpg",
    tags: ["AI Platform", "Machine Learning", "Advanced Tech", "Innovation"],
    category: "Website"
  },
  {
    id: "ochii",
    title: "Ochii",
    description: "Creative and visually stunning website with unique design approach, innovative layouts, and captivating visual storytelling elements.",
    url: "https://ochii-rajsera-labs.vercel.app/",
    image: "/projects/ochii.jpg",
    tags: ["Creative Design", "Visual Storytelling", "Unique Layout", "Innovative"],
    category: "Website"
  },
  {
    id: "studiova",
    title: "StudioVA",
    description: "Professional studio website showcasing creative services with elegant design, smooth animations, and modern visual presentation.",
    url: "https://studiova-rajsera-labs.vercel.app/",
    image: "/projects/studiova.jpg",
    tags: ["Studio Website", "Creative Services", "Professional", "Elegant"],
    category: "Website"
  },
];

const ProjectsClient = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const { navigateWithTransition } = useViewTransition();

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Nav />
      <div className="page projects-page">
        <section className="projects-page-hero">
          <div className="container">
            <div className="projects-page-header">
              <div className="projects-page-callout">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Our Projects
                  </p>
                </Copy>
              </div>
              <div className="projects-page-title">
                <Copy delay={0.15}>
                  <h1>Digital Solutions in Action</h1>
                </Copy>
              </div>
              <div className="projects-page-description">
                <Copy delay={0.2}>
                  <p className="lg">
                    Explore our portfolio of successful projects that demonstrate our expertise 
                    in creating innovative web and mobile applications. Each project showcases 
                    our commitment to quality, performance, and user experience.
                  </p>
                </Copy>
              </div>
            </div>

            <div className="projects-page-grid">
              {projectsData.map((project, index) => (
                <div
                  key={index}
                  className="project-page-card"
                  onMouseEnter={() => setHoveredProject(index)}
                  onMouseLeave={() => setHoveredProject(null)}
                  onClick={() => handleProjectClick(project.url)}
                >
                  <div className="project-page-card-image">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="project-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="project-image-placeholder" style={{display: 'none'}}>
                      <span className="project-placeholder-text">{project.title}</span>
                    </div>
                    <div className="project-page-card-overlay">
                      <div className="project-page-card-category">
                        <span>{project.category}</span>
                      </div>
                      <div className="project-page-card-action">
                        <span className="project-page-view-text">View Project</span>
                        <span className="project-page-arrow">
                          <RiExternalLinkLine />
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-page-card-content">
                    <div className="project-page-card-header">
                      <h3>{project.title}</h3>
                    </div>
                    <div className="project-page-card-description">
                      <p className="md">{project.description}</p>
                    </div>
                    <div className="project-page-card-tags">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="project-page-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div
                    className={`project-page-card-glow ${
                      hoveredProject === index ? "active" : ""
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="client-reviews-container">
          <div className="container">
            <ClientReviews/>
          </div>
        </section>

        <section className="projects-cta-section">
          <div className="container">
            <div className="projects-cta-content">
              <Copy delay={0.1}>
                <h2>Ready to Start Your Project?</h2>
              </Copy>
              <Copy delay={0.2}>
                <p className="lg">
                  Let's collaborate to create something extraordinary. Get in touch to discuss your next digital project.
                </p>
              </Copy>
              <Copy delay={0.3}>
                <div className="projects-cta-button">
                  <a 
                    href="https://wa.me/917425074114?text=Hi! I saw your projects portfolio and I'm interested in discussing a project." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="whatsapp-button"
                    aria-label="Chat on WhatsApp"
                  >
                    <span className="whatsapp-circle"></span>
                    <div className="whatsapp-icon-wrapper">
                      <IoLogoWhatsapp />
                    </div>
                    <span className="whatsapp-text">Chat on WhatsApp</span>
                  </a>
                </div>
              </Copy>
            </div>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </>
  );
};

export default ProjectsClient;
