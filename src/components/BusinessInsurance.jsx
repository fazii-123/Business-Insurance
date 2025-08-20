import React from "react";
import "./BusinessInsurance.css";
import { FaCheckCircle } from "react-icons/fa";
import businessImage from "../assets/businessImage.png";
import phoneIcon from "../assets/phone-icon.png";
import Footer from "./footer"

const insuranceTypes = [
  "Professional Liability Insurance",
  "Commercial and Auto Insurance",
  "Small Business Insurance",
  "Business Umbrella Insurance",
  "Workers' Compensation Insurance",
];

const policyList = [
  "Business Owners Policy",
  "Professional Liability Insurance",
  "Business Umbrella Insurance",
  "Small Business Insurance",
  "Workers' Compensation Insurance",
  "Commercial and Auto Insurance",
];

const BusinessInsurance = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header-section">
        <div className="header-content">
          <h1>Business Insurance</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> &gt; <span>Business Insurance</span>
          </nav>
        </div>
      </header>

      {/* Hero Image */}
      <main className="main-image-content">
        <div className="image-container">
          <img
            src={businessImage}
            alt="A smiling insurance agent talking to a client."
          />
        </div>
      </main>

      {/* Layout: Left Sidebar | Center Content | Right Sidebar */}
      <div className="main-content-layout">
        {/* Left Sidebar */}
        <aside className="left-sidebar">
          <div className="promo-box">
            <h4>Providing the Ultimate Experience in Financial Services</h4>

            <div className="contact-info">
              <img src={phoneIcon} alt="Call Us" className="contact-icon" />
              <div>
                <p>Contact Us</p>
                <h5>+01 (24) 568 900</h5>
              </div>
            </div>

            <button className="free-trial-btn">
              Get 15 Days Free Trial &rarr;
            </button>
          </div>

          <div className="form-box">
            <h4>Speak to our Insurance Team</h4>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your E-mail" />
            <textarea placeholder="Write your message here" rows="4"></textarea>
            <button className="send-message-btn">Send Message &rarr;</button>
          </div>
        </aside>

        {/* Center Content */}
        <section className="center-content">
          <h2>Comprehensive Coverage and Support</h2>
          <p>
            At Business Insurance Exchange, we are dedicated to delivering
            Business Insurance solutions that protect every aspect of your
            operations. Our expert team combines industry knowledge with
            personalized service to address your specific risks, ensuring robust
            protection and seamless support.
          </p>

          <h3>Commercial and Auto Insurance</h3>
          <p>
            Protects your business vehicles with coverage for accidents, theft,
            and liabilities, keeping your operations mobile and compliant.
          </p>

          <h3>Professional Liability Insurance</h3>
          <p>
            Safeguards your business against claims of negligence or errors in
            professional services, covering legal fees and settlements.
          </p>

          <h3>Workers' Compensation Insurance</h3>
          <p>
            Provides coverage for employee injuries or illnesses, covering
            medical costs and lost wages to ensure workplace safety and
            compliance.
          </p>

          <h3>Protection and Peace of Mind</h3>
          <p>
            Keep your business secure with Business Insurance Exchange's
            comprehensive Business Insurance solutions.{" "}
            <a href="#">Contact us today</a> to learn how we can tailor coverage
            to protect your operations and support your growth with confidence.
          </p>

          <div className="policy-grid-center">
            {policyList.map((policy, index) => (
              <div key={index} className="policy-item-center">
                <FaCheckCircle className="check-icon" />
                <span>{policy}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="right-sidebar">
          <div className="sidebar-menu-box">
            {insuranceTypes.map((type, index) => (
              <button
                key={index}
                className={`menu-button ${
                  type === "Small Business Insurance" ? "active" : ""
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </aside>
      </div>
      <Footer/>
    </div>
    
  );
};

export default BusinessInsurance;
