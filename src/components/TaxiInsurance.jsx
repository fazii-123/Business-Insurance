import React, { useState } from "react";
import "./BusinessInsurance.css"; 
import { FaCheckCircle, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import taxiInsurance from "../assets/img/taxiInsurance.jpg";
import phoneIcon from "../assets/img/phone-icon.png";
import Footer from "./Footer";

const insuranceTypes = [
  {
    title: "Black Car Insurance",
    description:
      "Provides coverage for black car drivers, including liability and property damage, tailored for pre-arranged rides through services like Uber or Lyft.",
  },
  {
    title: "Uber Insurance",
    description:
      "Specialized coverage for Uber drivers, meeting TLC requirements with liability, personal injury protection, and uninsured motorist coverage.",
  },
  {
    title: "Livery Vehicle Insurance",
    description:
      "Protects livery vehicles offering pre-arranged rides, covering up to six passengers with liability and property damage coverage.",
  },
  {
    title: "Green Taxi Insurance",
    description:
      "Coverage for Green Taxis in NYC, meeting TLC's liability requirements of $100,000 per person and $300,000 per accident, plus PIP.",
  },
  {
    title: "Yellow Taxicab Insurance",
    description:
      "Comprehensive coverage for NYC Yellow Taxis, including liability, personal injury protection, and workers’ compensation.",
  },
  {
    title: "NYC Rideshare Insurance",
    description:
      "Tailored protection for rideshare drivers across platforms like Uber and Lyft, ensuring compliance during all driving phases.",
  },
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
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredPolicies = policyList.filter((policy) =>
    policy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("⚠️ Please fill in all fields.");
      return;
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
   
      <header className="header-section">
        <div className="header-content">
          <h1>Taxi Insurance</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> &gt; <span>Taxi Insurance</span>
          </nav>
        </div>
      </header>

      <main className="main-image-content">
        <div className="image-container">
          <img src={taxiInsurance} alt="Taxi Insurance in NYC" />
        </div>
      </main>

      <div className="main-content-layout">

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
            <h4>Speak to our Taxi Insurance Team</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="Write your message here"
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button className="send-message-btn">
                Send Message <span>&rarr;</span>
              </button>
            </form>
            {successMessage && <p className="success-msg">{successMessage}</p>}
          </div>
        </aside>

        <section className="center-content">
          <h2>Comprehensive Coverage and Support</h2>
          <p>
            At Business Insurance Exchange, we are committed to delivering Taxi
            Insurance solutions that meet the unique needs of for-hire drivers
            and vehicle owners in NYC. Our expert team ensures compliance with
            TLC regulations and robust protection for your operations.
          </p>

          <div className="accordion">
            {insuranceTypes.map((item, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-title ${
                    activeIndex === index ? "active" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  {item.title}
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {activeIndex === index && (
                  <div className="accordion-content">
                    <p>{item.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <aside className="right-sidebar">
          <div className="sidebar-menu-box">
            <h4>Find a Insurance</h4>
            <div className="search-bar">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search policy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="policy-grid-center">
              {filteredPolicies.length > 0 ? (
                filteredPolicies.map((policy, index) => (
                  <div key={index} className="policy-item-center">
                    <FaCheckCircle className="check-icon" />
                    <span>{policy}</span>
                  </div>
                ))
              ) : (
                <p className="no-results">No policies found.</p>
              )}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default TaxiInsurance;
