"use client";
import "./ClientReviews.css";
import { useState, useEffect } from "react";
import Copy from "@/components/Copy/Copy";

const testimonials = [
  { id: 1, image: "/testimonials/t1.png" },
  { id: 2, image: "/testimonials/t2.png" },
  { id: 3, image: "/testimonials/t3.png" },
  { id: 4, image: "/testimonials/t4.png" },
  { id: 5, image: "/testimonials/t5.png" },
  { id: 6, image: "/testimonials/t6.png" },
  { id: 7, image: "/testimonials/t7.png" },
  { id: 8, image: "/testimonials/t8.png" },
  { id: 9, image: "/testimonials/t9.png" },
  { id: 10, image: "/testimonials/t10.png" },
  { id: 11, image: "/testimonials/t11.png" },
];

const ClientReviews = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fadeClass, setFadeClass] = useState("fade-in");

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setFadeClass("fade-out");
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setFadeClass("fade-in");
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrevious = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
      setFadeClass("fade-in");
    }, 300);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleNext = () => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setFadeClass("fade-in");
    }, 300);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  const handleIndicatorClick = (index) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      setActiveIndex(index);
      setFadeClass("fade-in");
    }, 300);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 3000);
  };

  return (
    <div className="client-reviews">
      <div className="testimonials-header">
        <div className="testimonials-header-callout">
          <Copy delay={0.1}>
            <p>Client Testimonials</p>
          </Copy>
        </div>
        <Copy delay={0.15}>
          <h2>Real Feedback from Real Clients</h2>
        </Copy>
        <Copy delay={0.2}>
          <p>Authentic conversations and payment confirmations that speak louder than words</p>
        </Copy>
      </div>

      <div className="testimonials-carousel">
        <button 
          className="carousel-arrow prev" 
          onClick={handlePrevious}
          aria-label="Previous testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="testimonial-display">
          <img 
            className={fadeClass}
            src={testimonials[activeIndex].image} 
            alt={`Client testimonial ${activeIndex + 1}`}
            loading="eager"
          />
        </div>

        <button 
          className="carousel-arrow next" 
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="carousel-indicators">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientReviews;
