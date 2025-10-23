"use client";
import "./service.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { servicesData } from "../service-data";
import { IoMdArrowForward, IoMdGlobe, IoMdCart, IoMdBusiness, IoMdPeople, IoMdDocument, IoMdCloud, IoMdBriefcase, IoMdSchool, IoMdTrendingUp, IoMdMedkit, IoMdHome, IoMdBuild, IoMdCode, IoLogoApple, IoLogoAndroid, IoMdPhonePortrait, IoMdWatch, IoLogoReact, IoMdApps, IoMdFlash, IoMdWifi, IoMdLink, IoMdEye, IoMdCamera, IoMdCreate, IoMdPerson, IoMdRefresh, IoMdChatbubbles, IoMdConstruct, IoMdSettings, IoMdCheckmarkCircle, IoMdText, IoMdMic, IoMdVolumeHigh, IoMdImage, IoMdAnalytics, IoMdLock, IoMdShield, IoMdPaper, IoMdStats, IoMdRocket, IoMdInfinite, IoMdHeadset, IoMdBulb, IoMdCube, IoMdSearch, IoMdMap, IoMdColorPalette, IoMdCheckmarkCircleOutline, IoMdDesktop, IoMdLaptop, IoMdGrid, IoMdHand, IoLogoGameControllerB, IoMdBrush } from "react-icons/io";
import gsap from "gsap";

// Icon mapping object
const iconMap = {
  IoMdGlobe, IoMdCart, IoMdBusiness, IoMdPeople, IoMdDocument, IoMdCloud, IoMdBriefcase, IoMdSchool, IoMdTrendingUp, IoMdMedkit, IoMdHome, IoMdBuild, IoMdCode, IoLogoApple, IoLogoAndroid, IoMdPhonePortrait, IoMdWatch, IoLogoReact, IoMdApps, IoMdFlash, IoMdWifi, IoMdLink, IoMdEye, IoMdCamera, IoMdCreate, IoMdPerson, IoMdRefresh, IoMdChatbubbles, IoMdConstruct, IoMdSettings, IoMdCheckmarkCircle, IoMdText, IoMdMic, IoMdVolumeHigh, IoMdImage, IoMdAnalytics, IoMdLock, IoMdShield, IoMdPaper, IoMdStats, IoMdRocket, IoMdInfinite, IoMdHeadset, IoMdBulb, IoMdCube, IoMdSearch, IoMdMap, IoMdColorPalette, IoMdCheckmarkCircleOutline, IoMdDesktop, IoMdLaptop, IoMdGrid, IoMdHand, IoLogoGameControllerB, IoMdBrush
};

const renderIcon = (iconName) => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent size={40} /> : null;
};

const ServicePage = () => {
  const params = useParams();
  const serviceId = params.id;
  const service = servicesData[serviceId];
  
  const [activeIndices, setActiveIndices] = useState([]);
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);

  if (!service) {
    return <div>Service not found</div>;
  }
  
  const toggleFAQ = (index) => {
    if (activeIndices.includes(index)) {
      gsap.to(iconRefs.current[index], {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(contentRefs.current[index], {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        paddingTop: 0,
        paddingBottom: 0,
      });

      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      gsap.to(iconRefs.current[index], {
        rotation: 90,
        duration: 0.3,
        ease: "power2.out",
      });

      const contentHeight = contentRefs.current[index].scrollHeight;

      gsap.to(contentRefs.current[index], {
        height: contentHeight + 24,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        paddingTop: "0.5em",
        paddingBottom: "0.5em",
      });

      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div key={`service-${serviceId}-wrapper`}>
      <Nav />
      <div className="page service-page">
        <section className="service-hero">
          <div className="service-hero-img">
            <img src={service.heroImage} alt={service.title} />
          </div>
          <div className="service-hero-overlay"></div>
          <div className="container">
            <div className="service-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>{service.title}</h1>
              </Copy>
            </div>
            <div className="service-content">
              <div className="service-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>{service.location}</p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>{service.region}</p>
                  </Copy>
                </div>
                <div className="service-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    {service.description.map((paragraph, index) => (
                      <h3 key={index}>{paragraph}</h3>
                    ))}
                  </Copy>
                </div>
                <div className="service-content-wrapper service-meta">
                  <div className="service-hero-row">
                    <div className="service-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Service Type</p>
                        {service.serviceType.map((type, index) => (
                          <p key={index}>{type}</p>
                        ))}
                      </Copy>
                    </div>
                    <div className="service-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Key Capabilities</p>
                        {service.capabilities.map((capability, index) => (
                          <p key={index}>{capability}</p>
                        ))}
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="service-content-wrapper service-meta">
                  <div className="service-hero-row">
                    <div className="service-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tools & Technologies</p>
                        {service.tools.map((tool, index) => (
                          <p key={index}>{tool}</p>
                        ))}
                      </Copy>
                    </div>
                    <div className="service-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Status</p>
                        <p>{service.dateCompleted}</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        {service.marketOverview && (
          <section className="service-details service-market-overview">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                  <span>&#9654;</span> Market Overview
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <h3>
                    In {service.marketOverview.year}, the global web development market was valued at {service.marketOverview.marketValue}. It is expected to grow to {service.marketOverview.projectedValue} by {service.marketOverview.projectedYear}, with a compound annual growth rate (CAGR) of {service.marketOverview.cagr} during the forecast period.
                  </h3>
                </Copy>
                <Copy delay={0.2}>
                  <p className="md">{service.marketOverview.description}</p>
                </Copy>
              </div>
            </div>
          </section>
        )}

        {/* Services Offered Section */}
        {service.servicesOffered && (
          <section className="service-details service-offerings">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Services We Offer
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-offerings-grid">
                  {service.servicesOffered.map((offering, index) => (
                    <Copy delay={0.1 + index * 0.05} key={offering.id}>
                      <div className="service-offering-card">
                        <div className="service-offering-icon">
                          {renderIcon(offering.icon)}
                        </div>
                        <h4>{offering.title}</h4>
                        <p>{offering.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Need Section */}
        {service.whyNeed && (
          <section className="service-details service-why-need">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                      <span>&#9654;</span> Why Choose This Service
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <h3>{service.whyNeed.title}</h3>
                </Copy>
                {service.whyNeed.content.map((paragraph, index) => (
                  <Copy delay={0.2 + index * 0.05} key={index}>
                    <p className="md">{paragraph}</p>
                  </Copy>
                ))}
                {service.whyNeed.statCallout && (
                  <div className="service-stat-callout">
                    <Copy delay={0.35}>
                      <p className="stat-text">{service.whyNeed.statCallout}</p>
                    </Copy>
                    <Link href="/connect" className="service-cta-button">
                      Talk to Us
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Technology Stack Section */}
        {service.technologyStack && (
          <section className="service-details service-tech-stack">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Technology Stack
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                {service.technologyStack.frontend && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Frontend</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.frontend.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.backend && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Backend</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.backend.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.database && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Database</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.database.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.uiux && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>UI/UX Design</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.uiux.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.deepLearning && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Deep Learning Frameworks</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.deepLearning.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.generativeModels && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Generative AI Models</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.generativeModels.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.toolkits && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Modules & Toolkits</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.toolkits.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
                {service.technologyStack.neuralNetworks && (
                  <div className="tech-stack-category">
                    <Copy delay={0.15}>
                      <h4>Neural Networks</h4>
                    </Copy>
                    <div className="tech-stack-items">
                      {service.technologyStack.neuralNetworks.map((tech, index) => (
                        <Copy delay={0.2 + index * 0.05} key={index}>
                          <div className="tech-stack-item">
                            <h5>{tech.name}</h5>
                            <p>{tech.description}</p>
                          </div>
                        </Copy>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Industries Section */}
        {service.industries && (
          <section className="service-details service-industries">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Industries We Serve
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-industries-grid">
                  {service.industries.map((industry, index) => (
                    <Copy delay={0.1 + index * 0.05} key={industry.id}>
                      <div className="service-industry-card">
                        <div className="service-industry-icon">
                          {renderIcon(industry.icon)}
                        </div>
                        <h4>{industry.title}</h4>
                        <p>{industry.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Solutions Section (UI/UX) */}
        {service.solutions && (
          <section className="service-details service-solutions">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                  <span>&#9654;</span> UI/UX Solutions
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-offerings-grid">
                  {service.solutions.map((solution, index) => (
                    <Copy delay={0.1 + index * 0.05} key={solution.id}>
                      <div className="service-offering-card">
                        <div className="service-offering-icon">
                          {renderIcon(solution.icon)}
                        </div>
                        <h4>{solution.title}</h4>
                        <p>{solution.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* UX Design Services */}
        {service.uxDesignServices && (
          <section className="service-details service-ux-services">
            <div className="container">
              <div className="service-col" style={{ marginBottom: '20px' }}>
                <Copy delay={0.1}>
                  <p className="mono">
                  <span>&#9654;</span> {service.uxDesignServices.title}
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <p className="md">{service.uxDesignServices.description}</p>
                </Copy>
                <div className="service-list">
                  {service.uxDesignServices.services.map((item, index) => (
                    <div className="service-list-item" key={index}>
                      <span className="list-bullet"><IoMdArrowForward /></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* UI Design Services */}
        {service.uiDesignServices && (
          <section className="service-details service-ui-services">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> {service.uiDesignServices.title}
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <p className="md">{service.uiDesignServices.description}</p>
                </Copy>
                <div className="service-list">
                  {service.uiDesignServices.services.map((item, index) => (
                    <div className="service-list-item" key={index}>
                      <span className="list-bullet"><IoMdArrowForward /></span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Human Factors */}
        {service.humanFactors && (
          <section className="service-details service-human-factors">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Human Factors
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <h3>{service.humanFactors.title}</h3>
                </Copy>
                <Copy delay={0.2}>
                  <p className="md">{service.humanFactors.description}</p>
                </Copy>
                <div className="service-offerings-grid">
                  {service.humanFactors.factors.map((factor, index) => (
                    <Copy delay={0.25 + index * 0.05} key={index}>
                      <div className="service-offering-card">
                        <h4>{factor.title}</h4>
                        <p>{factor.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* AI-Powered Features (UI/UX) */}
        {service.aiPoweredFeatures && (
          <section className="service-details service-ai-powered">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> AI-Powered Design
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <h3>{service.aiPoweredFeatures.title}</h3>
                </Copy>
                <Copy delay={0.2}>
                  <p className="md">{service.aiPoweredFeatures.description}</p>
                </Copy>
                <div className="service-offerings-grid">
                  {service.aiPoweredFeatures.features.map((feature, index) => (
                    <Copy delay={0.25 + index * 0.05} key={index}>
                      <div className="service-offering-card">
                        <div className="service-offering-icon">
                          {renderIcon(feature.icon)}
                        </div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* AI Models Section */}
        {service.aiModels && (
          <section className="service-details service-ai-models">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Innovative AI Models
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-offerings-grid">
                  {service.aiModels.map((model, index) => (
                    <Copy delay={0.1 + index * 0.05} key={model.id}>
                      <div className="service-offering-card">
                        <div className="service-offering-icon">
                          {renderIcon(model.icon)}
                        </div>
                        <h4>{model.title}</h4>
                        <p>{model.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Benefits Section */}
        {service.benefits && (
          <section className="service-details service-benefits">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Real-Time Benefits
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-offerings-grid">
                  {service.benefits.map((benefit, index) => (
                    <Copy delay={0.1 + index * 0.05} key={index}>
                      <div className="service-offering-card">
                        <div className="service-offering-icon">
                          {renderIcon(benefit.icon)}
                        </div>
                        <h4>{benefit.title}</h4>
                        <p>{benefit.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Process Section */}
        {service.process && (
          <section className="service-details service-process-section">
            <div className="container">
              <div className="service-process-header">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Our Process
                  </p>
                </Copy>
                <Copy delay={0.15}>
                  <p className="md process-subtitle">Powered by precision and built for impact</p>
                </Copy>
              </div>
            </div>
            <div className="process-cards-container">
              {service.process.map((step, index) => (
                <div className={`process-card process-card-${index + 1}`} key={index}>
                  <div className="process-card-wrapper">
                    <div className="process-card-inner">
                      <div className="process-card-title">
                        <p className="mono">{step.title}</p>
                        <p className="mono">{step.step}</p>
                      </div>
                      <div className="process-card-content">
                        <p>{step.description}</p>
                      </div>
                      <div className="process-card-title">
                        <p className="mono">{step.step}</p>
                        <p className="mono">{step.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="service-details service-details-1">
          <div className="container">
            <div className="service-col">
              <Copy delay={0.1}>
                <p>{service.storyTitle}</p>
              </Copy>
            </div>
            <div className="service-col">
              {service.story.map((paragraph, index) => (
                <Copy delay={0.1} key={index}>
                  <h3>{paragraph}</h3>
                </Copy>
              ))}
              <div className="service-details-img">
                <img src={service.detailImage} alt={service.title} />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {service.whyChooseUs && (
          <section className="service-details service-why-choose">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Why Choose Rajsera Labs
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <div className="service-why-choose-grid">
                  {service.whyChooseUs.map((reason, index) => (
                    <Copy delay={0.1 + index * 0.05} key={index}>
                      <div className="service-why-choose-item">
                        <h4>{reason.title}</h4>
                        <p>{reason.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="service-details service-details-2">
          <div className="container">
            <div className="service-col">
              <Copy delay={0.1}>
                <p>{service.qualitiesTitle}</p>
              </Copy>
            </div>
            <div className="service-col">
              <div className="service-content-wrapper service-meta">
                <div className="service-hero-row">
                  <div className="service-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>{Object.values(service.qualities)[0]?.title}</p>
                      {Object.values(service.qualities)[0]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                  <div className="service-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>{Object.values(service.qualities)[1]?.title}</p>
                      {Object.values(service.qualities)[1]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="service-content-wrapper service-meta">
                <div className="service-hero-row">
                  <div className="service-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>{Object.values(service.qualities)[2]?.title}</p>
                      {Object.values(service.qualities)[2]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                  <div className="service-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>{Object.values(service.qualities)[3]?.title}</p>
                      {Object.values(service.qualities)[3]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="service-details-img">
                <img
                  src={service.qualityImage}
                  alt={`${service.title} deliverables`}
                />
              </div>
              <Copy delay={0.2}>
                <h3>{service.qualityDescription}</h3>
              </Copy>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        {service.testimonial && (
          <section className="service-details service-testimonial">
            <div className="container">
              <div className="service-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span>&#9654;</span> Client Testimonial
                  </p>
                </Copy>
              </div>
              <div className="service-col">
                <Copy delay={0.15}>
                  <div className="service-testimonial-content">
                    <blockquote className="testimonial-quote">
                      <p className="lg">"{service.testimonial.quote}"</p>
                    </blockquote>
                    <div className="testimonial-author">
                      <p className="md">— {service.testimonial.author}</p>
                      {service.testimonial.role && (
                        <p className="sm">{service.testimonial.role}</p>
                      )}
                    </div>
                  </div>
                </Copy>
                <Copy delay={0.25}>
                  <div className="service-testimonial-cta">
                    <p className="lg">Want to connect with our team for your upcoming business project?</p>
                    <Link href="/connect" className="service-cta-button">
                      Talk to Us
                    </Link>
                  </div>
                </Copy>
              </div>
            </div>
          </section>
        )}
        
        {/* FAQs Section */}
        {service.faqs && (
          <section className="service-details service-faqs">
            <div className="faq-container">
              <div className="faq-wrapper contained">
                <div className="faq-title">
                  <Copy animateOnScroll={true} delay={0.1}>
                    <h2>
                      Frequently <br /> Asked Questions
                    </h2>
                  </Copy>
                </div>

                <div className="faq-items">
                  {service.faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                      <div className="faq-question" onClick={() => toggleFAQ(index)}>
                        <h3>{faq.question}</h3>
                        <span
                          className="faq-icon"
                          ref={(el) => (iconRefs.current[index] = el)}
                        >
                          <IoMdArrowForward size={20} />
                        </span>
                      </div>
                      <div
                        className="faq-answer"
                        ref={(el) => (contentRefs.current[index] = el)}
                        style={{ height: 0, opacity: 0, overflow: "hidden" }}
                      >
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        <Link href={`/services/${service.nextService.id}`} className="next-service-link">
          <section className="next-service">
            <div className="next-service-img">
              <img src={servicesData[service.nextService.id].heroImage} alt={service.nextService.title} />
            </div>
            <div className="next-service-overlay"></div>
            <div className="container">
              <div className="next-service-content">
                <div className="next-service-meta">
                  <p className="mono">
                      <span>&#9654;</span> Next Service
                  </p>
                  <p className="mono">/ {service.nextService.callout}</p>
                </div>
                <div className="next-service-title">
                  <h2>{service.nextService.title}</h2>
                </div>
                <div className="next-service-description">
                  <p className="lg">{service.nextService.description}</p>
                </div>
              </div>
            </div>
          </section>
        </Link>
      </div>
      <ConditionalFooter />
    </div>
  );
};

export default ServicePage;

