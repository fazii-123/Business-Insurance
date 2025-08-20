import React from "react";
import "./BusinessInsurance.css";
import { FaCheckCircle } from "react-icons/fa";
import taxiInsurance from "../assets/taxiInsurance.jpg";
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
  "Black Car Insurance",
  "Uber Insurance Livery",
  "Vehicle Insurance",
  "Green Taxi Insurance",
  "Yellow Taxicab Insurance",
  "NYC Rideshare Insurance",
];

const TaxiInsurance = () => {
  return (
    <div className="page-container">
      {/* Header */}
      <header className="header-section">
        <div className="header-content">
          <h1>Taxi Insurance</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> &gt; <span>Taxi Insurance</span>
          </nav>
        </div>
      </header>

      {/* Hero Image */}
      <main className="main-image-content">
        <div className="image-container">
          <img
            src={taxiInsurance}
            alt="A smiling insurance agent talking to a client."
          />
        </div>
      </main>


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
            <button className="send-message-btn">Send Message <span>&rarr;</span></button>
          </div>
        </aside>

        {/* Center Content */}
        <section className="center-content">
          <h2>Comprehensive Coverage and Support</h2>
          <p>
            At Business Insurance Exchange, we are committed to delivering Taxi Insurance solutions that meet the unique needs of for-hire drivers and vehicle owners in NYC. Our expert team combines deep industry knowledge with personalized service to ensure compliance with Taxi regulations and robust protection for your operations.
          </p>

          <h3>Black Car Insurance</h3>
          <p>
           Provides coverage for black car drivers, including liability and property damage, tailored for pre-arranged rides through dispatch services like Uber or Lyft, ensuring Taxi compliance.
           </p>
          <h3>Uber Insurance</h3>
          <p>
            Specialized coverage for Uber drivers, meeting Taxi requirements with liability, personal injury protection, and uninsured motorist coverage for all phases of rideshare driving.
          </p>
          <h3>Livery Vehicle Insurance</h3>
          <p>
           Protects livery vehicles offering pre-arranged rides, covering up to six passengers with liability and property damage coverage, compliant with Taxi standards.
          </p>

          <h3>Compliance and Operations</h3>
          <p>
            Stay on the road with confidence with Business Insurance Exchange’s Taxi Insurance. {" "}
            <a href="/Contact">Contact us today</a> to learn how we can help you meet Taxi requirements and protect your for-hire business with tailored coverage.
            confidence.
          </p>

          <h3>Green Taxi Insurance</h3>
          <p>
           Ensures coverage for Green Taxis operating in outer boroughs, meeting Taxi’s minimum liability requirements of $100,000 per person and $300,000 per accident, plus personal injury protection.
          </p>

          <h3>Yellow Taxicab Insurance</h3>
          <p>
           Provides comprehensive coverage for NYC’s iconic Yellow Taxis, including liability, personal injury protection, and workers’ compensation, meeting Taxi’s strict standards for street-hail services.
          </p>

          <h3>NYC Rideshare Insurance</h3>
          <p>
           Offers tailored coverage for rideshare drivers across platforms like Uber and Lyft, ensuring compliance with Taxi regulations and protection during all driving phases.
          </p>
          <hr />
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
          <div className="policy-grid-center">
            {policyList.map((policy, index) => (
              <div key={index} className="policy-item-center">
                <FaCheckCircle className="check-icon" />
                <span>{policy}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
      <Footer/>
    </div>
  );
};

export default TaxiInsurance;
