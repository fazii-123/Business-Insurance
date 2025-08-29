import React, { useState } from "react";
import "./Agent1.css"; 
import { FaStar, FaGlobe, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import handshakeImg from "../assets/img/handshake.jpg"; 
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Agent5 = () => {
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
            <img src={handshakeImg} alt="Agent Leo" />
          </div>
        </div>

        <div className="profile-right">
          <h2>
            Agent Leo <span className="badge">Taxi Insurance</span>
          </h2>
          <p className="subtitle">Specialized coverage for taxi and rideshare fleets.</p>

          <div className="rating-row">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="star-icon" />
            ))}
            <span>(9) Leave a review</span>
          </div>

          <p className="location-text">
            <FaMapMarkerAlt /> Las Vegas, in 1966
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
            <h3>50</h3>
            <p>
              We were recommended to <br /> INSURANCE SHOPPERS in the past 30 days.
            </p>
          </div>

          <div className="location-box">
            <h4>Location</h4>
            <p>Agent Leo</p>
            <p>Las Vegas</p>
            <p>89101</p>
            <p>
              <FaPhone /> +1 (702) 555-1966
            </p>
            <button className="direction-btn">Get Directions</button>
            <div className="map-box">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Las%20Vegas&t=&z=13&ie=UTF8&iwloc=&output=embed"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="right-info">
          <h3>About Our Agent</h3>
          <p>
            Agent Leo specializes in taxi and rideshare fleet insurance in Las Vegas. With extensive experience, he provides tailored coverage to ensure your vehicles and drivers are fully protected.
          </p>

          <div className="features">
            <div className="feature-box">
              <h4>Fleet Protection</h4>
              <p>
                Comprehensive insurance plans to cover every vehicle in your fleet.
              </p>
            </div>
            <div className="feature-box">
              <h4>Expert Guidance</h4>
              <p>
                Agent Leo ensures compliance and risk management for all taxi and rideshare operations.
              </p>
            </div>
          </div>

          <div className="stats">
            <div>
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div>
              <h3>1K+</h3>
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

export default Agent5;
