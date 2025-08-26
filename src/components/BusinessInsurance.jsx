import React, { useState } from "react";
import "./BusinessInsurance.css";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import businessImage from "../assets/img/businessImage.png";
import phoneIcon from "../assets/img/phone-icon.png";
import Footer from "./Footer";

const insuranceTypes = [
  {
    title: "Professional Liability Insurance",
    description:
      "Safeguards your business against claims of negligence or errors in professional services, covering legal fees and settlements.",
  },
  {
    title: "Commercial and Auto Insurance",
    description:
      "Protects your business vehicles with coverage for accidents, theft, and liabilities, keeping your operations mobile and compliant.",
  },
  {
    title: "Small Business Insurance",
    description:
      "Offers tailored coverage for small businesses, combining liability, property, and other protections to suit your unique needs.",
  },
  {
    title: "Business Umbrella Insurance",
    description:
      "Extends coverage beyond standard policies, providing extra protection against large claims or lawsuits to safeguard your assets.",
  },
  {
    title: "Workers' Compensation Insurance",
    description:
      "Provides coverage for employee injuries or illnesses, covering medical costs and lost wages to ensure workplace safety and compliance.",
  },
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
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredPolicies = policyList.filter((policy) =>
    policy.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="page-container">
      <header className="header-section">
        <div className="header-content">
          <h1>Business Insurance</h1>
          <nav className="breadcrumb">
            <a href="/">Home</a> &gt; <span>Business Insurance</span>
          </nav>
        </div>
      </header>

      <main className="main-image-content">
        <div className="image-container">
          <img src={businessImage} alt="Business insurance illustration" />
        </div>
      </main>

      <div className="main-content-layout">
        <aside className="left-sidebar">
          <div className=" promo-box">
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
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your E-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                name="message"
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
            At Business Insurance Exchange, we are dedicated to delivering
            solutions that protect every aspect of your operations. Our expert
            team ensures robust protection and seamless support.
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

export default BusinessInsurance;
