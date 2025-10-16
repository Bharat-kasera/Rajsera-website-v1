"use client";
import "./industry.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useRef } from "react";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { industriesData } from "../industry-data";
import { IoMdArrowForward } from "react-icons/io";
import gsap from "gsap";

const IndustryPage = () => {
  const params = useParams();
  const industryId = params.id;
  const industry = industriesData[industryId];
  
  const [activeIndices, setActiveIndices] = useState([]);
  const iconRefs = useRef([]);
  const contentRefs = useRef([]);

  if (!industry) {
    return <div>Industry not found</div>;
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
    <div key={`industry-${industryId}-wrapper`}>
      <Nav />
      <div className="page industry-page">
        <section className="industry-hero">
          <div className="industry-hero-img">
            <img src={industry.heroImage} alt={industry.title} />
          </div>
          <div className="industry-hero-overlay"></div>
          <div className="container">
            <div className="industry-hero-header">
              <Copy delay={1} animateOnScroll={false}>
                <h1>{industry.title}</h1>
              </Copy>
            </div>
            <div className="industry-content">
              <div className="industry-col">
                <Copy delay={1.05} animateOnScroll={false}>
                  <p>{industry.location}</p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-content-wrapper">
                  <Copy delay={1.1} animateOnScroll={false}>
                    <p>{industry.region}</p>
                  </Copy>
                </div>
                <div className="industry-content-wrapper">
                  <Copy delay={1.15} animateOnScroll={false}>
                    {industry.description.map((paragraph, index) => (
                      <h3 key={index}>{paragraph}</h3>
                    ))}
                  </Copy>
                </div>
                <div className="industry-content-wrapper industry-meta">
                  <div className="industry-hero-row">
                    <div className="industry-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Service Type</p>
                        {industry.serviceType.map((type, index) => (
                          <p key={index}>{type}</p>
                        ))}
                      </Copy>
                    </div>
                    <div className="industry-hero-sub-col">
                      <Copy delay={0.2}>
                        <p>Key Capabilities</p>
                        {industry.capabilities.map((capability, index) => (
                          <p key={index}>{capability}</p>
                        ))}
                      </Copy>
                    </div>
                  </div>
                </div>
                <div className="industry-content-wrapper industry-meta">
                  <div className="industry-hero-row">
                    <div className="industry-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Tools & Technologies</p>
                        {industry.tools.map((tool, index) => (
                          <p key={index}>{tool}</p>
                        ))}
                      </Copy>
                    </div>
                    <div className="industry-hero-sub-col">
                      <Copy delay={0.35}>
                        <p>Status</p>
                        <p>{industry.dateCompleted}</p>
                      </Copy>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Overview Section */}
        {industry.marketOverview && (
          <section className="industry-details industry-market-overview">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Tell us What Inspire Your Real Estate App Ideas
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <Copy delay={0.15}>
                  <p className="md">{industry.marketOverview.description}</p>
                </Copy>
              </div>
            </div>
          </section>
        )}

        {/* Inspirations Section */}
        {industry.inspirations && (
          <section className="industry-details industry-inspirations">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Inspired Applications
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-inspirations-list">
                  {industry.inspirations.map((inspiration, index) => (
                    <div className="industry-inspiration-item" key={index}>
                      <div className="inspiration-number">
                        <span className="mono">{inspiration.number}</span>
                      </div>
                      <div className="inspiration-content">
                        <Copy delay={0.1 + index * 0.05}>
                          <h4>{inspiration.title}</h4>
                        </Copy>
                        <Copy delay={0.15 + index * 0.05}>
                          <p>{inspiration.description}</p>
                        </Copy>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Sub Verticals Section */}
        {industry.subVerticals && (
          <section className="industry-details industry-sub-verticals">
            <div className="container-full">
              <div className="industry-section-header">
                <Copy delay={0.1}>
                  <h2>Real Estate App Development For Various Sub Verticals</h2>
                </Copy>
                <Copy delay={0.15}>
                  <p className="lg">We are well known as a leading real estate software development company. We deliver the best digital solutions tailored to every sector of the real estate industry.</p>
                </Copy>
              </div>
              <div className="industry-sub-verticals-grid">
                {industry.subVerticals.map((vertical, index) => (
                  <Copy delay={0.2 + index * 0.05} key={index}>
                    <div className="industry-sub-vertical-card">
                      <div className="sub-vertical-icon">
                        <img src={vertical.icon} alt={vertical.title} />
                      </div>
                      <h4>{vertical.title}</h4>
                      <ul>
                        {vertical.solutions.map((solution, idx) => (
                          <li key={idx}>{solution}</li>
                        ))}
                      </ul>
                    </div>
                  </Copy>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Offered Section */}
        {industry.servicesOffered && (
          <section className="industry-details industry-services">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Our Wide Range of Services
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-services-grid">
                  {industry.servicesOffered.map((service, index) => (
                    <Copy delay={0.1 + index * 0.05} key={service.id}>
                      <div className="industry-service-card">
                        <div className="industry-service-icon">
                          <img src={service.icon} alt={service.title} />
                        </div>
                        <h4>{service.title}</h4>
                        <p>{service.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Integration Solutions Section */}
        {industry.integrations && (
          <section className="industry-details industry-integrations">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Integration Solutions
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <Copy delay={0.15}>
                  <h3>{industry.integrations.title}</h3>
                </Copy>
                <Copy delay={0.2}>
                  <p className="md">{industry.integrations.description}</p>
                </Copy>
                <div className="industry-integrations-grid">
                  {industry.integrations.types.map((type, index) => (
                    <Copy delay={0.25 + index * 0.05} key={type.id}>
                      <div className="industry-integration-card">
                        <h4>{type.title}</h4>
                        <p>{type.description}</p>
                      </div>
                    </Copy>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Solutions Section */}
        {industry.solutions && (
          <section className="industry-details industry-solutions">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Business Solutions
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-services-grid">
                  {industry.solutions.map((solution, index) => (
                    <Copy delay={0.1 + index * 0.05} key={solution.id}>
                      <div className="industry-service-card">
                        <div className="industry-service-icon">
                          <img src={solution.icon} alt={solution.title} />
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

        {/* Features Section */}
        {industry.features && (
          <section className="industry-details industry-features">
            <div className="container-full">
              <div className="industry-section-header">
                <Copy delay={0.1}>
                  <h2>Developing Futuristic Real Estate Apps to Keep You Ahead</h2>
                </Copy>
                <Copy delay={0.15}>
                  <p className="lg">Accelerating Growth and Efficiency in the Real Estate Sector with Advanced Features That Make Your App One of Its Kind</p>
                </Copy>
              </div>
              <div className="industry-features-grid">
                {industry.features.map((feature, index) => (
                  <Copy delay={0.2 + index * 0.03} key={index}>
                    <div className="industry-feature-card">
                      <div className="feature-icon">
                        <img src={feature.icon} alt={feature.title} />
                      </div>
                      <h4>{feature.title}</h4>
                    </div>
                  </Copy>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Benefits Section */}
        {industry.benefits && (
          <section className="industry-details industry-benefits">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Benefits of Real Estate Mobile App Development
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-services-grid">
                  {industry.benefits.map((benefit, index) => (
                    <Copy delay={0.1 + index * 0.05} key={index}>
                      <div className="industry-service-card">
                        <div className="industry-service-icon">
                          <img src={benefit.icon} alt={benefit.title} />
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
        {industry.process && (
          <section className="industry-details industry-process">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Our Development Process
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-process-steps">
                  {industry.process.map((step, index) => (
                    <div className="industry-process-step" key={index}>
                      <div className="process-step-number">
                        <span className="mono">{step.step}</span>
                      </div>
                      <div className="process-step-content">
                        <Copy delay={0.1 + index * 0.05}>
                          <h4>{step.title}</h4>
                        </Copy>
                        <Copy delay={0.15 + index * 0.05}>
                          <p>{step.description}</p>
                        </Copy>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Why Create Portal Section */}
        {industry.whyCreatePortal && (
          <section className="industry-details industry-why-portal">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Why Create an Online Real Estate Portal?
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-why-choose-grid">
                  {industry.whyCreatePortal.map((reason, index) => (
                    <Copy delay={0.1 + index * 0.05} key={index}>
                      <div className="industry-why-choose-item">
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

        <section className="industry-details industry-details-1">
          <div className="container">
            <div className="industry-col">
              <Copy delay={0.1}>
                <p>{industry.storyTitle}</p>
              </Copy>
            </div>
            <div className="industry-col">
              {industry.story.map((paragraph, index) => (
                <Copy delay={0.1} key={index}>
                  <h3>{paragraph}</h3>
                </Copy>
              ))}
              <div className="industry-details-img">
                <img src={industry.detailImage} alt={industry.title} />
              </div>
            </div>
          </div>
        </section>
        <section className="industry-details industry-details-2">
          <div className="container">
            <div className="industry-col">
              <Copy delay={0.1}>
                <p>{industry.qualitiesTitle}</p>
              </Copy>
            </div>
            <div className="industry-col">
              <div className="industry-content-wrapper industry-meta">
                <div className="industry-hero-row">
                  <div className="industry-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>{Object.values(industry.qualities)[0]?.title}</p>
                      {Object.values(industry.qualities)[0]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                  <div className="industry-hero-sub-col">
                    <Copy delay={0.1}>
                      <p>{Object.values(industry.qualities)[1]?.title}</p>
                      {Object.values(industry.qualities)[1]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="industry-content-wrapper industry-meta">
                <div className="industry-hero-row">
                  <div className="industry-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>{Object.values(industry.qualities)[2]?.title}</p>
                      {Object.values(industry.qualities)[2]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                  <div className="industry-hero-sub-col">
                    <Copy delay={0.2}>
                      <p>{Object.values(industry.qualities)[3]?.title}</p>
                      {Object.values(industry.qualities)[3]?.items.map((item, idx) => (
                        <p key={idx}>{item}</p>
                      ))}
                    </Copy>
                  </div>
                </div>
              </div>
              <div className="industry-details-img">
                <img
                  src={industry.qualityImage}
                  alt={`${industry.title} deliverables`}
                />
              </div>
              <Copy delay={0.2}>
                <h3>{industry.qualityDescription}</h3>
              </Copy>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        {industry.whyChooseUs && (
          <section className="industry-details industry-why-choose">
            <div className="container">
              <div className="industry-col">
                <Copy delay={0.1}>
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Why Choose Rajsera Labs
                  </p>
                </Copy>
              </div>
              <div className="industry-col">
                <div className="industry-why-choose-grid">
                  {industry.whyChooseUs.map((reason, index) => (
                    <Copy delay={0.1 + index * 0.05} key={index}>
                      <div className="industry-why-choose-item">
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

        {/* FAQs Section */}
        {industry.faqs && (
          <section className="industry-details industry-faqs">
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
                  {industry.faqs.map((faq, index) => (
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

        <Link href={`/industries/${industry.nextIndustry.id}`} className="next-industry-link">
          <section className="next-industry">
            <div className="next-industry-img">
              <img src={industriesData[industry.nextIndustry.id].heroImage} alt={industry.nextIndustry.title} />
            </div>
            <div className="next-industry-overlay"></div>
            <div className="container">
              <div className="next-industry-content">
                <div className="next-industry-meta">
                  <p className="mono">
                    <span className="section-icon"><IoMdArrowForward /></span> Next Industry
                  </p>
                  <p className="mono">/ {industry.nextIndustry.callout}</p>
                </div>
                <div className="next-industry-title">
                  <h2>{industry.nextIndustry.title}</h2>
                </div>
                <div className="next-industry-description">
                  <p className="lg">{industry.nextIndustry.description}</p>
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

export default IndustryPage;

