import React, { useState } from "react";
import "./AgencyDetails.css";
import { FaStar, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import agent1 from "../assets/img/agent1.jpg";
import Footer from "./Footer";

const AgencyDetails = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="agency-details-container">
      <div className="agency-header">
        <h2>Agency Details</h2>
        <nav className="breadcrumb">
          <a href="/">Home</a> &gt; <span>Agency</span>
        </nav>
      </div>

      <div className="profile-card">
        <div className="profile-left">
          <span className="recommended-tag">RECOMMENDED LOCAL AGENCY</span>
          <div className="agent-photo">
            <img src={agent1} alt="Person 1" />
          </div>
        </div>

        <div className="profile-right">
          <h2>
            Eliana Wilson <span className="badge">Business Insurance</span>
          </h2>
          <p className="subtitle">Voluptate veniam mo</p>

          <div className="rating-row">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span>(9) Leave a review</span>
          </div>

          <p className="location-text">
            <FaMapMarkerAlt /> Washington D.C. in 1966
          </p>

          <p className="website">
            <FaGlobe /> Agency website
          </p>

          <div className="tags">
            <span>Business Owners Policy</span>
            <span>Small Business Insurance</span>
            <span>Commercial and Auto Insurance</span>
          </div>

          <div className="tabs">
            {["Overview", "Insurance Services", "Team Members", "Reviews (9)"].map((tab) => (
              <span
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="about-section">
        <div className="left-info">
          <div className="recommend-box">
            <h3>44</h3>
            <p>
              We were recommended to <br /> INSURANCE SHOPPERS in the past 30
              days.
            </p>
          </div>

          <div className="location-box">
            <h4>Location</h4>
            <p>Eliana Wilson</p>
            <p>Washington D.C.</p>
            <p>20003</p>
            <p>
              <FaPhone /> +1 (458) 173-3073
            </p>
            <button className="direction-btn">Get Directions</button>
            <div className="map-box">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Washington%20DC&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="right-info">
          <h3>About Our Agency</h3>
          <p>
            Welcome to Raleigh Insurance Agency, your trusted insurance partner
            in Saint Albans since 1966. With over 55 years of experience, we've
            been providing comprehensive insurance solutions tailored to our
            community's needs.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Comprehensive Coverage</h4>
              <p>
                We offer a wide range of insurance products to protect what
                matters most to you.
              </p>
            </div>
            <div className="feature-box">
              <h4>Personal Service</h4>
              <p>
                Our dedicated team provides personalized attention to meet your
                unique insurance needs.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h3>55+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>10K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>98%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default AgencyDetails;
