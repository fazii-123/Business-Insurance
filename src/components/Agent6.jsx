import React, { useState } from "react";
import "./Agent1.css"; 
import { FaStar, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import chartImg from "../assets/img/chart.jpg"; 
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Agent6 = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="agent1-container">
      {/* Header */}
      <div className="agent1-header">
        <h1>Agent Detail</h1>
        <nav className="breadcrum">
          <Link to="/">Home</Link> &gt; <span>Agency Detail</span>
        </nav>
      </div>

      {/* Profile Section */}
      <div className="agent1-profile-card">
        <div className="profile-left">
          <span className="recommended-tag">RECOMMENDED LOCAL AGENT</span>
          <div className="agent-photo">
            <img src={chartImg} alt="Agent Chris" />
          </div>
        </div>

        <div className="profile-right">
          <h2>
            Agent Chris <span className="badge">Risk Analysis</span>
          </h2>
          <p className="subtitle">Analyzing risks to secure your business.</p>

          <div className="rating-row">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className="star-icon"
                style={{ color: i < 4.5 ? "#FFD700" : "#ccc" }}
              />
            ))}
            <span>(15) Leave a review</span>
          </div>

          <p className="location-text">
            <FaMapMarkerAlt /> Chicago, IL
          </p>

          <p className="website">
            <FaGlobe /> Agency website
          </p>

          <div className="tags">
            <span>Risk Management | </span>
            <span>Business Continuity | </span>
            <span>Compliance Audits</span>
          </div>

          <div className="tabs">
            {[
              "Overview",
              "Insurance Services",
              "Team Members",
              "Reviews (15)",
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

      {/* About Section */}
      <div className="agent1-about-section">
        <div className="left-info">
          <div className="recommend-box">
            <h3>50</h3>
            <p>
              We were recommended to <br /> INSURANCE SHOPPERS in the past 30
              days.
            </p>
          </div>

          <div className="location-box">
            <h4>Location</h4>
            <p>Agent Chris</p>
            <p>Chicago</p>
            <p>60601</p>
            <p>
              <FaPhone /> +1 (312) 555-6061
            </p>
            <button className="direction-btn">Get Directions</button>
            <div className="map-box">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Chicago%20IL&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="right-info">
          <h3>About Our Agent</h3>
          <p>
            Agent Chris specializes in risk analysis, helping businesses
            identify, evaluate, and mitigate potential threats. With his
            expertise, clients achieve secure and compliant operations.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Expert Risk Management</h4>
              <p>
                From risk assessment to mitigation, we safeguard your business
                assets effectively.
              </p>
            </div>
            <div className="feature-box">
              <h4>Compliance & Continuity</h4>
              <p>
                Ensuring your business remains compliant and resilient in all
                situations.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>1K+</h3>
              <p>Satisfied Clients</p>
            </div>
            <div>
              <h3>96%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Agent6;
