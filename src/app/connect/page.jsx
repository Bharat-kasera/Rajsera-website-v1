"use client";
import "./contact.css";

import { useState } from "react";
import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";
import { IoMdArrowForward } from "react-icons/io";
import Lottie from "lottie-react";
import contactAnimation from "../../../public/lottie/contact-lottie.json";
import ClientReviews from "@/components/ClientReviews/ClientReviews";

const page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "",
    number: "",
    hasBudget: "",
    hasAuthority: "",
    hasNeed: "",
    timeline: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      // Fire conversion event only on successful submission
      if (typeof window !== 'undefined' && window.gtag) {
        console.log('🎯 Firing Google Ads conversion event: ads_conversion_submit_lead_form');
        window.gtag('event', 'ads_conversion_submit_lead_form');
        console.log('✅ Conversion event fired successfully');
      } else {
        console.warn('⚠️ gtag is not available. Make sure Google Tag Manager is installed.');
      }
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        countryCode: "",
        number: "",
        hasBudget: "",
        hasAuthority: "",
        hasNeed: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <div key="connect-page-wrapper">
      <Nav />
      <div className="page contact">
        <section className="contact-hero">
          <div className="container">
            <div className="contact-col">
              <div className="contact-trust-header">
                <Copy delay={0.85}>
                  <h1>What We Offer to Earn Your Trust, and Keep It.</h1>
                </Copy>
                <Copy delay={1}>
                  <p className="trust-subtitle">
                    Long-term collaboration starts with confidence. Here's how we prove ourselves from Day 1.
                  </p>
                </Copy>
              </div>

              <div className="trust-points">
                <Copy delay={1.1}>
                  <div className="trust-point">
                    <h3>NDA Before We Talk</h3>
                    <p>Your idea stays yours.</p>
                  </div>
                </Copy>

                <Copy delay={1.2}>
                  <div className="trust-point">
                    <h3>Full Code Ownership</h3>
                    <p>100% of the source code belongs to you.</p>
                  </div>
                </Copy>

                <Copy delay={1.3}>
                  <div className="trust-point">
                    <h3>Transparent Fixed Pricing</h3>
                    <p>No hidden costs or surprise bills.</p>
                  </div>
                </Copy>

                <Copy delay={1.4}>
                  <div className="trust-point">
                    <h3>Weekly Live Demos</h3>
                    <p>You see exactly what's being built.</p>
                  </div>
                </Copy>

                <Copy delay={1.5}>
                  <div className="trust-point">
                    <h3>110% Delivery Commitment</h3>
                    <p>We go beyond the promised scope.</p>
                  </div>
                </Copy>

                <Copy delay={1.6}>
                  <div className="trust-point">
                    <h3>30-Day Post-Launch Support</h3>
                    <p>Free bug fixes and adjustments after delivery.</p>
                  </div>
                </Copy>

                <Copy delay={1.7}>
                  <div className="trust-point">
                    <h3>Dedicated Project Manager</h3>
                    <p>One point of contact throughout the journey.</p>
                  </div>
                </Copy>

                <Copy delay={1.8}>
                  <div className="trust-point">
                    <h3>Scalable Architecture</h3>
                    <p>Built to grow with your business needs.</p>
                  </div>
                </Copy>
              </div>
            </div>
            <div className="contact-col">
              {/* <div className="contact-info">
                <div className="contact-info-block">
                  <Copy delay={0.85}>
                    <p>General Inquiries</p>
                    <p>rajseralabs@gmail.com</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1}>
                    <p>New Projects</p>
                    <p>rajseralabs@gmail.com</p>
                    <p>+91 74250 74114</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.15}>
                    <p>Studio Location</p>
                    <p>India</p>
                    <p>Available Worldwide</p>
                  </Copy>
                </div>
                <div className="contact-info-block">
                  <Copy delay={1.3}>
                    <p>Contact Us</p>
                    <p>Instagram</p>
                    <p>LinkedIn</p>
                    <p>Twitter</p>
                  </Copy>
                </div>
              </div> */}
              <div className="contact-img">
                <Lottie 
                  animationData={contactAnimation} 
                  loop={true}
                  autoplay={true}
                />
              </div>
            </div>
          </div>
        </section>



        <section className="contact-form-section">
          <div className="container">
            <div className="contact-form-header">
              <Copy delay={0.1}>
                <h2>Have a Project in Mind?</h2>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  Share a few details with us and we'll explore how we can help.
                </p>
              </Copy>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="number">Phone Number *</label>
                  <div className="phone-input-group">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="country-code-select"
                      required
                    >
                      <option value="">Select</option>
                      <option value="+1">+1 (US/CA)</option>
                      <option value="+44">+44 (UK)</option>
                      <option value="+91">+91 (IN)</option>
                      <option value="+61">+61 (AU)</option>
                      <option value="+86">+86 (CN)</option>
                      <option value="+81">+81 (JP)</option>
                      <option value="+82">+82 (KR)</option>
                      <option value="+49">+49 (DE)</option>
                      <option value="+33">+33 (FR)</option>
                      <option value="+971">+971 (AE)</option>
                      <option value="+65">+65 (SG)</option>
                      <option value="+7">+7 (RU)</option>
                    </select>
                    <input
                      type="tel"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      required
                      placeholder="00000 00000"
                      className="phone-number-input"
                    />
                  </div>
                </div>
              </div>

              <div className="form-divider"></div>

              <div className="form-section-header">
                <p className="mono">Project Qualification</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hasBudget">Do you have a budget? (in GBP) *</label>
                  <select
                    id="hasBudget"
                    name="hasBudget"
                    value={formData.hasBudget}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="0.5k-1k">£500 - £1,000</option>
                    <option value="1k-5k">£1,000 - £5,000</option>
                    <option value="5k-10k">£5,000 - £10,000</option>
                    <option value="10k-20k">£10,000 - £20,000</option>
                    <option value="20k-30k">£20,000 - £30,000</option>
                    <option value="30k-50k">£30,000 - £50,000</option>
                    <option value="50k+">Above £50,000</option>
                    <option value="flexible">Flexible / Depends on scope</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="hasAuthority">
                    Do you have the authority to make decisions? *
                  </label>
                  <select
                    id="hasAuthority"
                    name="hasAuthority"
                    value={formData.hasAuthority}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes, I'm the decision maker</option>
                    <option value="partial">Partial, need approval</option>
                    <option value="no">No, I'm gathering information</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="hasNeed">
                    Do you have a need for this service? *
                  </label>
                  <select
                    id="hasNeed"
                    name="hasNeed"
                    value={formData.hasNeed}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="urgent">Yes, urgent need</option>
                    <option value="yes">Yes, definite need</option>
                    <option value="maybe">Maybe, exploring options</option>
                    <option value="future">Future consideration</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="timeline">When do you need it? *</label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="asap">As soon as possible</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6+months">6+ months</option>
                    <option value="flexible">Timeline is flexible</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group form-group-full">
                  <label htmlFor="message">What's on your mind?</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals, or any questions you have..."
                    rows="5"
                  />
                </div>
              </div>

              <div className="form-submit">
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={isSubmitting}
                >
                  <span className="circle"></span>
                  <div className="icon">
                    <IoMdArrowForward />
                  </div>
                  <span className="button-text">
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </span>
                </button>
                
                {submitStatus === "success" && (
                  <div className="form-message success">
                    Thank you! We'll review your submission and get back to you soon.
                  </div>
                )}
                
                {submitStatus === "error" && (
                  <div className="form-message error">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </div>
            </form>
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

export default page;
