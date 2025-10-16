"use client";
import "./faq.css";

import FAQContainer from "@/components/FAQContainer/FAQContainer";
import ConditionalFooter from "@/components/ConditionalFooter/ConditionalFooter";
import Nav from "@/components/Nav/Nav";

const FAQ = () => {
  return (
    <div key="faq-page-wrapper">
      <Nav />
      <div className="page faq">
        <FAQContainer />
      </div>
      <ConditionalFooter />
    </div>
  );
};

export default FAQ;

