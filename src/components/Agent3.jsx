import React, { useState } from "react";
import "./Agent1.css"; 
import { FaStar, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import agent3 from "../assets/img/agent3.jpg"; 
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Agent3 = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="agent1-container">

      <div className="agent1-header">
        <h1>Agent Detail</h1>
        <nav className="breadcrum">
          <Link to="/">Home</Link> &gt; <span>Agency Detail</span>
        </nav>
      </div>


      <div className="agent1-profile-card">
        <div className="profile-left">
          <span className="recommended-tag">RECOMMENDED LOCAL AGENT</span>
          <div className="agent-photo">
            <img src={agent3} alt="Agent Alex Lee" />
          </div>
        </div>

        <div className="profile-right">
          <h2>
            Alex Lee <span className="badge">Health and Benefits</span>
          </h2>
          <p className="subtitle">Custom health plans for your employees.</p>

          <div className="rating-row">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="star-icon"
                color={i < 4.8 ? "#FFD700" : "#ccc"}
              />
            ))}
            <span>(11) Leave a review</span>
          </div>

          <p className="location-text">
            <FaMapMarkerAlt /> Seattle, WA
          </p>

          <p className="website">
            <FaGlobe /> Agency website
          </p>

          <div className="tags">
            <span>Health Insurance | </span>
            <span>Dental Vision | </span>
            <span>Group Life</span>
          </div>

          <div className="tabs">
            {[
              "Overview",
              "Insurance Services",
              "Team Members",
              "Reviews (11)",
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
            <h3>44</h3>
            <p>
              We were recommended to <br /> INSURANCE SHOPPERS in the past 30
              days.
            </p>
          </div>

          <div className="location-box">
            <h4>Location</h4>
            <p>Alex Lee</p>
            <p>Seattle, WA</p>
            <p>98101</p>
            <p>
              <FaPhone /> +1 (206) 555-1966
            </p>
            <button className="direction-btn">Get Directions</button>
            <div className="map-box">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Seattle&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="right-info">
          <h3>About Our Agent</h3>
          <p>
            Alex Lee specializes in employee health and benefits. Providing
            custom health plans, dental, vision, and group life coverage,
            Alex ensures your team is well-protected and satisfied.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Customized Health Plans</h4>
              <p>
                Tailored solutions for your workforce to ensure maximum coverage
                and peace of mind.
              </p>
            </div>
            <div className="feature-box">
              <h4>Trusted Advisor</h4>
              <p>
                Alex guides you through insurance options to optimize benefits
                and minimize costs.
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

export default Agent3;
