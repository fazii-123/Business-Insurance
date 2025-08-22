import React, { useState } from "react";
import "./HeroSection.css";
import { FaSearch } from "react-icons/fa";
import Modal from "./Modal";
import agent1 from "../assets/agent1.jpg";
import agent2 from "../assets/agent2.jpg";
import agent3 from "../assets/agent3.jpg";
import agent4 from "../assets/agent4.jpg";
import handshakeImg from "../assets/handshake.jpg";
import chartImg from "../assets/chart.jpg";

const agentData = {
  agent1: {
    name: "Eliana Wilson",
    title: "Business Insurance",
    description: "Voluptate veniam mo",
    rating: 4.5,
    reviews: 9,
    location: "Washington D.C. in 1966",
    website: "Agency website",
    services: "Business Owners Policy, Small Business Insurance, Commercial and Auto Insurance",
    image: agent1,
  },
  agent2: {
    name: "Agent James",
    title: "Financial Planning",
    description: "Infiltration & Espionage",
    rating: 5,
    reviews: 9,
    location: "New York, in 1966",
    website: "Agency website",
    services: "NYC Rideshare Insurance, Yellow Taxicab Insurance ,Black Car Insurance,Uber Insurance",
    image: agent2,
  },
  handshakeImg: {
    name: "Agent Leo",
    title: "Taxi Insurance",
    description: "Specialized coverage for taxi and rideshare fleets.",
    rating: 5,
    reviews: 9,
    location: "Las Vegas in 1966",
    website: "Agency website",
    services: "NYC Rideshare Insurance, Yellow Taxicab Insurance, Black Car Insurance, Uber Insurance",
    image: handshakeImg,
  },
  chartImg: {
    name: "Agent Chris",
    title: "Risk Analysis",
    description: "Analyzing risks to secure your business.",
    rating: 4.5,
    reviews: 15,
    location: "Chicago, IL",
    website: "Agency website",
    services: "Risk Management, Business Continuity, Compliance Audits",
    image: chartImg,
  },
  agent4: {
    name: "Jane Smith",
    title: "Commercial Property",
    description: "Protecting your commercial real estate.",
    rating: 4,
    reviews: 7,
    location: "Austin, TX",
    website: "Agency website",
    services: "Commercial Property, General Liability, Flood Insurance",
    image: agent4,
  },
  agent3: {
    name: "Alex Lee",
    title: "Health and Benefits",
    description: "Custom health plans for your employees.",
    rating: 4.8,
    reviews: 11,
    location: "Seattle, WA",
    website: "Agency website",
    services: "Health Insurance, Dental, Vision, Group Life",
    image: agent3,
  },
};

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState(null);

  const handleImageClick = (agentKey) => {
    setSelectedAgent(agentData[agentKey]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedAgent(null);
  };

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          Intelligent AI finds Your Perfect Business Insurance.
        </h1>
        <p className="hero-description">
          Type your questions below to get instant, intelligent answers and find
          the perfect coverage for your business.
        </p>
        <div className="hero-images">
          <div id="image1" className="image-card" onClick={() => handleImageClick("agent1")}><img src={agent1} alt="Person 1" /></div>
          <div id="image2" className="image-card" onClick={() => handleImageClick("agent2")}><img src={agent2} alt="Person 2" /></div>
          <div id="image3" className="image-card" onClick={() => handleImageClick("handshakeImg")}><img src={handshakeImg} alt="Handshake" /></div>
          <div id="image4" className="image-card" onClick={() => handleImageClick("chartImg")}><img src={chartImg} alt="Chart" /></div>
          <div id="image5" className="image-card" onClick={() => handleImageClick("agent4")}><img src={agent4} alt="Person 5" /></div>
          <div id="image6" className="image-card" onClick={() => handleImageClick("agent3")}><img src={agent3} alt="Person 6" /></div>
        </div>
        <div className=" hero-search-bar">
          <input
            type="text"
            placeholder="How much does TLC insurance cost for fleet?"
            className="search-input"
          />
          <button className="search-btn">
            <FaSearch />
          </button>
        </div>
        <div className="suggestion-buttons">
          <button className="suggestion-btn">General Liability →</button>
          <button className="suggestion-btn">Analyze Risk →</button>
          <button className="suggestion-btn">Commercial Auto →</button>
        </div>
      </div>
      {isModalOpen && <Modal agent={selectedAgent} onClose={closeModal} />}
    </section>
  );
};

export default HeroSection;