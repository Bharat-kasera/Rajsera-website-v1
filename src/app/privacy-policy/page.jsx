"use client";
import "./privacy-policy.css";

import Nav from "@/components/Nav/Nav";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Copy from "@/components/Copy/Copy";

const PrivacyPolicyPage = () => {
  return (
    <div key="privacy-policy-page-wrapper">
      <Nav />
      <div className="page privacy-policy-page">
        <section className="privacy-policy-hero">
          <div className="container">
            <div className="privacy-policy-header">
              <Copy delay={0.1}>
                <h1>Privacy Policy</h1>
              </Copy>
              <Copy delay={0.15}>
                <p className="lg">
                  Last Updated: January 2025
                </p>
              </Copy>
            </div>
          </div>
        </section>

        <section className="privacy-policy-content">
          <div className="container">
            <Copy delay={0.2}>
              <div className="privacy-section">
                <h2>Introduction</h2>
                <p>
                  At Rajsera Labs, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and services.
                </p>
              </div>
            </Copy>

            <Copy delay={0.25}>
              <div className="privacy-section">
                <h2>Information We Collect</h2>
                <p>
                  When ordering or registering on our site, as appropriate, you may be asked to enter your:
                </p>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Project details and requirements</li>
                </ul>
              </div>
            </Copy>

            <Copy delay={0.3}>
              <div className="privacy-section">
                <h2>When Do We Collect Information?</h2>
                <p>
                  We collect information from you when you:
                </p>
                <ul>
                  <li>Fill out a contact form or inquiry form</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a consultation or quote</li>
                  <li>Submit a project brief</li>
                  <li>Communicate with us via email or chat</li>
                </ul>
              </div>
            </Copy>

            <Copy delay={0.35}>
              <div className="privacy-section">
                <h2>How Do We Use Your Information?</h2>
                <p>
                  We may use the information we collect from you in the following ways:
                </p>
                <ul>
                  <li>To personalize your experience and deliver content and services that match your interests</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To process your service requests and manage project communications</li>
                  <li>To send periodic emails regarding your project, updates, or other relevant information</li>
                  <li>To improve our website and services based on your feedback</li>
                  <li>To follow up after correspondence (live chat, email, or phone)</li>
                </ul>
              </div>
            </Copy>

            <Copy delay={0.4}>
              <div className="privacy-section">
                <h2>How Do We Protect Your Information?</h2>
                <p>
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul>
                  <li>We use secure SSL encryption for data transmission</li>
                  <li>We do not store sensitive payment information on our servers</li>
                  <li>We limit access to personal information to authorized personnel only</li>
                  <li>We regularly review and update our security practices</li>
                  <li>We do not use vulnerability scanning or malware scanning as we do not store personal identifiable information on our servers</li>
                </ul>
              </div>
            </Copy>

            <Copy delay={0.45}>
              <div className="privacy-section">
                <h2>Do We Use Cookies?</h2>
                <p>
                  No, we do not use cookies or similar tracking technologies on our website. We respect your privacy and do not track your browsing behavior or collect data through cookies.
                </p>
              </div>
            </Copy>

            <Copy delay={0.5}>
              <div className="privacy-section">
                <h2>Third-Party Disclosure</h2>
                <p>
                  We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential.
                </p>
                <p>
                  We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.
                </p>
              </div>
            </Copy>

            <Copy delay={0.55}>
              <div className="privacy-section">
                <h2>Third-Party Links</h2>
                <p>
                  We do not include or offer third-party products or services on our website unless explicitly mentioned in our case studies or portfolio showcasing our work for clients.
                </p>
              </div>
            </Copy>

            <Copy delay={0.6}>
              <div className="privacy-section">
                <h2>Third-Party Trademarks</h2>
                <p>
                  Please note that any trademarked terms used in our content, case studies, or portfolio are used solely for descriptive and reference purposes. These trademarks belong to their respective owners. When we mention projects or platforms similar to existing brands (e.g., "like Uber," "like Netflix"), this is standard industry terminology for describing functionality and scope.
                </p>
                <p>
                  We certify that all code, design, and creative work showcased in our portfolio has been developed by our in-house team of developers and designers. Rajsera Labs is an independent agency and is not affiliated with any brands mentioned in our case studies unless explicitly stated as our clients.
                </p>
              </div>
            </Copy>

            <Copy delay={0.65}>
              <div className="privacy-section">
                <h2>Google Analytics</h2>
                <p>
                  We use Google Analytics to understand how visitors interact with our website. Google Analytics uses first-party cookies to compile data regarding user interactions. This helps us improve our website and services.
                </p>
                <p>
                  You can opt out of Google Analytics tracking by:
                </p>
                <ul>
                  <li>Using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
                  <li>Adjusting your preferences in the <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">Google Ad Settings</a> page</li>
                  <li>Visiting the <a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">Network Advertising Initiative opt-out page</a></li>
                </ul>
              </div>
            </Copy>

            <Copy delay={0.7}>
              <div className="privacy-section">
                <h2>Your Rights</h2>
                <p>
                  You have the right to:
                </p>
                <ul>
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of any inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Opt out of receiving marketing communications from us</li>
                  <li>Withdraw consent for data processing where applicable</li>
                </ul>
              </div>
            </Copy>

            <Copy delay={0.75}>
              <div className="privacy-section">
                <h2>Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
                </p>
              </div>
            </Copy>

            <Copy delay={0.8}>
              <div className="privacy-section">
                <h2>Contact Us</h2>
                <p>
                  If you have any questions regarding this Privacy Policy or how we handle your personal information, please contact us:
                </p>
                <div className="contact-info">
                  <p><strong>Rajsera Labs</strong></p>
                  <p>Email: <a href="mailto:rajseralabs@gmail.com">rajseralabs@gmail.com</a></p>
                  <p>Phone: <a href="https://wa.me/917425074114?text=" target="_blank" rel="noopener noreferrer">+91 74250 74114</a></p>
                  <p>Location: India</p>
                </div>
              </div>
            </Copy>
          </div>
        </section>
      </div>
      <ConditionalFooter />
    </div>
  );
};

export default PrivacyPolicyPage;

