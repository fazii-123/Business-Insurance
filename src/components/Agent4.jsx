import React, { useState } from "react";
import "./Agent1.css"; 
import { FaStar, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import agent4 from "../assets/img/agent4.jpg"; 
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Agent4 = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="agent1-container">
      <div className="agent1-header">
        <h1>Agent Detail</h1>
        <nav className="breadcrum">
          <a to="/">Home</a> &gt; <span>Agency Detail</span>
        </nav>
      </div>

      <div className="agent1-profile-card">
        <div className="profile-left">
          <span className="recommended-tag">RECOMMENDED LOCAL AGENT</span>
          <div className="agent-photo">
            <img src={agent4} alt="Agent Jane Smith" />
          </div>
        </div>

        <div className="profile-right">
          <h2>
            Jane Smith <span className="badge">Commercial Property</span>
          </h2>
          <p className="subtitle">Protecting your commercial real estate.</p>

          <div className="rating-row">
            {[...Array(4)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span>(7) Leave a review</span>
          </div>

          <p className="location-text">
            <FaMapMarkerAlt /> Austin, TX
          </p>

          <p className="website">
            <FaGlobe /> Agency website
          </p>

          <div className="tags">
            <span>Commercial Property | </span>
            <span>General Liability | </span>
            <span>Flood Insurance</span>
          </div>

          <div className="tabs">
            {[
              "Overview",
              "Insurance Services",
              "Team Members",
              "Reviews (7)",
            ].map((tab) => (
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
      <div className="agent1-about-section">
        <div className="left-info">
          <div className="recommend-box">
            <h3>30</h3>
            <p>
              We were recommended to <br /> INSURANCE SHOPPERS in the past 30
              daa
            </p>
          </div>

          <div className="location-box">
            <h4>Location</h4>
            <p>Jane Smith</p>
            <p>Austin</p>
            <p>78701</p>
            <p>
              <FaPhone /> +1 (512) 555-2024
            </p>
            <button className="direction-btn">Get Directions</button>
            <div className="map-box">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Austin%20TX&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="right-info">
          <h3>About Our Agent</h3>
          <p>
            Jane Smith has been serving Austin, TX with expertise in commercial property protection. She ensures businesses and real estate are insured properly, providing peace of mind and reliable support for her clients.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Expert Commercial Coverage</h4>
              <p>
                Protect your business assets with customized insurance solutions.
              </p>
            </div>
            <div className="feature-box">
              <h4>Trusted Advisor</h4>
              <p>
                Jane works closely with clients to ensure long-term security and compliance.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h3>10+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>500+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>95%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Agent4;
