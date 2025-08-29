import React, { useState } from "react";
import "./Agent1.css"; 
import { FaStar, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import agent2 from "../assets/img/agent2.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Agent2 = () => {
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
            <img src={agent2} alt="Agent James" />
          </div>
        </div>

        <div className="profile-right">
          <h2>
            Agent James <span className="badge">Financial Planning</span>
          </h2>
          <p className="subtitle">Infiltration & Espionage</p>

          <div className="rating-row">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span>(9) Leave a review</span>
          </div>

          <p className="location-text">
            <FaMapMarkerAlt /> New York, in 1966
          </p>

          <p className="website">
            <FaGlobe /> Agency website
          </p>

          <div className="tags">
            <span>NYC Rideshare Insurance | </span>
            <span>Yellow Taxicab Insurance | </span>
            <span>Black Car Insurance | </span>
            <span>Uber Insurance</span>
          </div>

          <div className="tabs">
            {[
              "Overview",
              "Insurance Services",
              "Team Members",
              "Reviews (9)",
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
            <p>Agent James</p>
            <p>New York</p>
            <p>10001</p>
            <p>
              <FaPhone /> +1 (212) 555-1966
            </p>
            <button className="direction-btn">Get Directions</button>
            <div className="map-box">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="right-info">
          <h3>About Our Agent</h3>
          <p>
            Welcome to James Financial Services, your trusted partner in New
            York since 1966. With decades of experience, we specialize in
            providing tailored financial and insurance planning to meet the
            unique needs of our clients.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Expert Financial Planning</h4>
              <p>
                From retirement planning to risk management, we help secure your
                financial future.
              </p>
            </div>
            <div className="feature-box">
              <h4>Trusted Advisory</h4>
              <p>
                Our team works closely with you to ensure long-term stability
                and success.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h3>59+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>8K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>97%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Agent2;
