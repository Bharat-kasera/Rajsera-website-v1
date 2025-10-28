"use client";
import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
import { IoMdArrowForward } from "react-icons/io";
import "./Industries.css";

gsap.registerPlugin(SplitText);

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const numberRef = useRef(null);
  const bgRef = useRef(null);
  const titleSplitRef = useRef(null);
  const descSplitRef = useRef(null);

  const industries = [
    {
      id: "01",
      slug: "real-estate",
      name: "Real Estate & Construction",
      icon: "/industries/real-estate-icon.svg",
      title: "Tech-Driven Solutions for Real Estate Growth",
      description: "Drive property management, virtual tours, and customer engagement with customized digital solutions for the real estate sector.",
      bgImage: "/industries/real-estate.jpg",
    },
    {
      id: "02",
      slug: "finance",
      name: "Banking & Finance",
      icon: "/industries/finance-icon.svg",
      title: "Secure & Scalable Solutions for Modern Finance",
      description: "Strengthen your financial services with secure, compliant, and innovative fintech solutions that enhance customer experience and operational efficiency.",
      bgImage: "/industries/finance.jpg",
    },
    {
      id: "03",
      slug: "healthcare",
      name: "Healthcare",
      icon: "/industries/healthcare-icon.svg",
      title: "Innovative IT Solutions for Smarter Healthcare",
      description: "Transform patient care and healthcare operations with secure, scalable IT solutions, from telemedicine platforms to health data management systems.",
      bgImage: "/industries/healthcare.jpg",
    },
    {
      id: "04",
      slug: "travel",
      name: "Travel & Hospitality",
      icon: "/industries/travel-icon.svg",
      title: "Smart IT Solutions for Seamless Travel Experiences",
      description: "Revolutionize how people explore the world with innovative IT solutions, from travel booking platforms to real-time itinerary and fleet management systems.",
      bgImage: "/industries/travel.jpg",
    },
    {
      id: "05",
      slug: "media",
      name: "Media & Entertainment",
      icon: "/industries/media-icon.svg",
      title: "Cutting-Edge IT Solutions for Next-Gen Entertainment",
      description: "Deliver immersive, on-demand digital experiences with dynamic IT solutions, from streaming platforms to interactive content management systems.",
      bgImage: "/industries/media.jpg",
    },
    {
      id: "06",
      slug: "education",
      name: "Education",
      icon: "/industries/education-icon.svg",
      title: "Driving Digital Transformation in Education",
      description: "Power up digital learning with custom e-learning platforms, student management systems, and technology-driven education solutions.",
      bgImage: "/industries/education.jpg",
    },
    {
      id: "07",
      slug: "retail",
      name: "Retail & E-Commerce",
      icon: "/industries/retail-icon.svg",
      title: "Future-Ready IT Solutions for Retail & E-commerce",
      description: "Optimize online shopping experiences with scalable e-commerce platforms, inventory management, and secure payment integrations.",
      bgImage: "/industries/retail.jpg",
    },
    {
      id: "08",
      slug: "on-demand",
      name: "On Demand",
      icon: "/industries/on-demand-icon.svg",
      title: "Building Seamless On-Demand Digital Experiences",
      description: "Build robust on-demand apps and platforms that connect customers with services instantly, from delivery to booking systems.",
      bgImage: "/industries/on-demand.jpg",
    }
  ];

  // Create SplitText on mount and when industry changes
  useEffect(() => {
    if (!titleRef.current || !descRef.current) return;

    // Clean up previous splits
    if (titleSplitRef.current) titleSplitRef.current.revert();
    if (descSplitRef.current) descSplitRef.current.revert();

    // Create new splits
    titleSplitRef.current = SplitText.create(titleRef.current, {
      type: "lines,words",
      linesClass: "line-mask",
      wordsClass: "word"
    });

    descSplitRef.current = SplitText.create(descRef.current, {
      type: "lines",
      linesClass: "line-mask",
    });

    // Set initial state - all use same pattern
    gsap.set(numberRef.current, { opacity: 0, y: 30 });
    gsap.set(titleSplitRef.current.words, { y: "100%", opacity: 0 });
    gsap.set(descSplitRef.current.lines, { y: "100%", opacity: 0 });

    // Animate in - smooth cascade
    const tl = gsap.timeline();
    
    tl.to(numberRef.current, {
      opacity: 0.8,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    });

    tl.to(titleSplitRef.current.words, {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      stagger: 0.03,
      ease: "power3.out"
    }, "-=0.4");

    tl.to(descSplitRef.current.lines, {
      y: "0%",
      opacity: 1,
      duration: 0.7,
      stagger: 0.03,
      ease: "power3.out"
    }, "-=0.5");

    return () => {
      if (titleSplitRef.current) titleSplitRef.current.revert();
      if (descSplitRef.current) descSplitRef.current.revert();
    };
  }, [activeIndustry]);

  const handleIndustryChange = (index) => {
    if (index === activeIndustry || isTransitioning) return;
    
    setIsTransitioning(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
      }
    });

    // Animate out - consistent smooth exit
    tl.to(numberRef.current, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: "power3.in"
    }, 0);

    if (titleSplitRef.current && titleSplitRef.current.words) {
      tl.to(titleSplitRef.current.words, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power3.in"
      }, 0.05);
    }

    if (descSplitRef.current && descSplitRef.current.lines) {
      tl.to(descSplitRef.current.lines, {
        y: "-100%",
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "power3.in"
      }, 0.1);
    }

    // Fade background
    tl.to(bgRef.current, {
      opacity: 0.4,
      duration: 0.4,
      ease: "power2.inOut"
    }, 0);

    // Change content
    tl.call(() => {
      setActiveIndustry(index);
    }, null, 0.4);

    // Fade background back
    tl.to(bgRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, 0.35);
  };

  const currentIndustry = industries[activeIndustry];

  return (
    <section className="industries">
      <div className="container">
        <div className="industries-header">
          <p className="mono">
            <span className="section-icon"><IoMdArrowForward /></span> Industries We Serve
          </p>
          <h2>Empowering Industries with Scalable Digital Innovation</h2>
        </div>

        <div className="industries-showcase">
          <div className="industries-display">
            <div 
              ref={bgRef}
              className="industries-display-bg"
              style={{ backgroundImage: `url(${currentIndustry.bgImage})` }}
            >
              <div className="industries-display-overlay"></div>
            </div>
            
            <div className="industries-display-content">
              <div className="industries-display-info">
                <p ref={numberRef} className="mono industries-number" key={`num-${activeIndustry}`}>{currentIndustry.id}</p>
                <h3 ref={titleRef} key={`title-${activeIndustry}`}>{currentIndustry.title}</h3>
                <p ref={descRef} className="industries-description" key={`desc-${activeIndustry}`}>
                  {currentIndustry.description}
                </p>
                {/* <AnimatedButton 
                  label="Know More"
                  route={`/industries/${currentIndustry.slug}`}
                  animate={false}
                  animateOnScroll={false}
                /> */}
              </div>
            </div>
          </div>

          <div className="industries-list">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className={`industry-item ${activeIndustry === index ? "active" : ""}`}
                onClick={() => handleIndustryChange(index)}
              >
                <span className="industry-item-icon">
                  <img src={industry.icon} alt={industry.name} />
                </span>
                <span className="industry-item-name">{industry.name}</span>
                <span className="industry-item-arrow"><IoMdArrowForward /></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

