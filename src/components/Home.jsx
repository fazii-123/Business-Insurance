import React, { useState } from "react";
import "./Home.css";
import { FaSearch, FaCheckCircle } from "react-icons/fa";
import handshakeImg from "../assets/handshake.jpg";
import chartImg from "../assets/chart.jpg";
import liabilityImg from "../assets/liability.png";
import autoImg from "../assets/auto.png";
import smallBizImg from "../assets/smallbiz.png";
import umbrellaImg from "../assets/umbrella.png";
import agent1 from "../assets/agent1.jpg";
import agent2 from "../assets/agent2.jpg";
import agent3 from "../assets/agent3.jpg";
import agent4 from "../assets/agent4.jpg";
import Footer from "./footer";
import HeroSection from "./HeroSection";

const Home = () => {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="home-container">
      <div className="hero-section">
        <HeroSection/>
      </div>
      <div className="info-section">
        <div className="info-left">
          <h5 className="info-heading">
            Your <b>Trusted Partner in Business & Transportation Insurance</b>
          </h5>
          <div className="image-container">
            <img src={handshakeImg} alt="Handshake" className="info-image" />
            <div className="stats-box">
              <h2>23k</h2>
              <p>Projects Completed</p>
              <h2>98k</h2>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>

        <div className="info-right">
          <div className="tabs">
            <button
              className={activeTab === "history" ? "active-tab" : ""}
              onClick={() => setActiveTab("history")}
            >
              Our History
            </button>
            <button
              className={activeTab === "mission" ? "active-tab" : ""}
              onClick={() => setActiveTab("mission")}
            >
              Our Mission
            </button>
            <button
              className={activeTab === "vision" ? "active-tab" : ""}
              onClick={() => setActiveTab("vision")}
            >
              Our Vision
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "history" && (
              <p>
                Founded in 2025, our mission is to simplify the process of
                purchasing and researching business and transportation
                insurance. We aim to make insurance decisions faster, smarter,
                and stress-free for businesses and professionals.
              </p>
            )}
            {activeTab === "mission" && (
              <p>
                Our mission is to provide tailored, efficient insurance
                solutions that help businesses save money, manage risks, and
                operate with peace of mind.
              </p>
            )}
            {activeTab === "vision" && (
              <p>
                We envision a future where every business has access to
                transparent, simple, and reliable insurance options, backed by
                innovative AI technology.
              </p>
            )}
          </div>

          <ul className="info-points">
            <li>
              <FaCheckCircle className="check-icon" /> Best for Business &
              Transport
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Tailored Solutions
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Save Money & Time
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> Expert Team
            </li>
          </ul>

          <img src={chartImg} alt="Chart" className="side-image" />

          <hr />

          <button className="learn-btn">Learn More About us →</button>
        </div>
      </div>

      <div className="offer-section">
        <p className="offer-label">... WHAT WE OFFER</p>
        <h1 className="offer-heading">
          Building <span className="highlight">Enduring Value</span> through{" "}
          <span className="highlight">Bold</span> strategies
        </h1>

        <div className="offer-grid">
          <div className="offer-card">
            <img
              src={liabilityImg}
              alt="Liability"
              className="offer-card-img"
            />
            <h3>Professional Liability Insurance</h3>
            <p>
              Secure Errors and Omissions (E&O) coverage to protect New York
              professionals like consultants and lawyers from negligence claims.
            </p>
            <button className="quote-btn">Get a Free Quote →</button>
          </div>

          <div className="offer-card">
            <img src={autoImg} alt="Auto" className="offer-card-img" />
            <h3>Commercial & Auto Insurance</h3>
            <p>
              Protect your New York business vehicles and operations with
              commercial auto insurance. Covers company cars, delivery vans, and
              more.
            </p>
            <button className="quote-btn">Get a Free Quote →</button>
          </div>

          <div className="offer-card">
            <img
              src={smallBizImg}
              alt="Small Business"
              className="offer-card-img"
            />
            <h3>Small Business Insurance</h3>
            <p>
              Designed for startups and small businesses with 1–50 employees,
              this plan offers affordable, essential coverage.
            </p>
            <button className="quote-btn">Get a Free Quote →</button>
          </div>

          <div className="offer-card">
            <img src={umbrellaImg} alt="Umbrella" className="offer-card-img" />
            <h3>Business Umbrella Insurance</h3>
            <p>
              Provides additional liability coverage beyond standard policies,
              protecting businesses from catastrophic claims.
            </p>
            <button className="quote-btn">Get a Free Quote →</button>
          </div>
        </div>
      </div>

      <div className="agents-section">
        <div className="agents-content">
          <p className="agents-label">... OUR AGENTS</p>
          <h1 className="agents-heading">
            Join Our <span className="highlight">Network</span> of Trusted
            Insurance <span className="highlight">Agents</span>
          </h1>
          <p className="agents-subtext">
            We connect business owners and taxi drivers with the right insurance
            solutions, and we need expert agents like you to be part of our
            growing network.
          </p>

          <h3 className="why-join-heading">Why Join us</h3>
          <ul className="why-join-list">
            <li>
              <FaCheckCircle className="check-icon" /> <b>Exclusive Leads</b> —
              We provide high-quality leads directly to you.
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> <b>Expand Your Reach</b>{" "}
              — Get connected with businesses and professionals seeking
              coverage.
            </li>
            <li>
              <FaCheckCircle className="check-icon" />{" "}
              <b>No Direct Contact from Users</b> — We manage all inquiries and
              forward the right leads to you.
            </li>
            <li>
              <FaCheckCircle className="check-icon" /> <b>Seamless Process</b> —
              Focus on selling insurance while we handle the rest.
            </li>
          </ul>

          <p className="grow-clients">Grow your client base effortlessly!</p>
          <button className="join-btn">Join as an Agent →</button>
        </div>

        <div className="agents-grid">
          <div className="agent-card">
            <img src={agent1} alt="Agent 1" />
            <div className="agent-info">
              <p>Eliana Wilson</p>
              <span>→</span>
            </div>
          </div>
          <div className="agent-card">
            <img src={agent2} alt="Agent 2" />
            <div className="agent-info">
              <p>Agent Aria</p>
              <span>→</span>
            </div>
          </div>
          <div className="agent-card">
            <img src={agent3} alt="Agent 3" />
            <div className="agent-info">
              <p>Agent Nova</p>
              <span>→</span>
            </div>
          </div>
          <div className="agent-card">
            <img src={agent4} alt="Agent 4" />
            <div className="agent-info">
              <p>Agent Leo</p>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pricing-page">
        <div className="pricing-header">
          <p className="offer-label">... OUR PRICING</p>
          <h1 className="pricing-title">
            Boost Your Insurance Business with High-Quality Leads
          </h1>
          <p className="pricing-description">
            We help insurance agents and companies grow by providing exclusive,
            high-intent leads. No complicated tools, no dashboards, just real,
            verified leads delivered directly to you. Let us handle the
            marketing and lead generation so you can focus on closing deals and
            growing your business.
          </p>
        </div>

        <div className="pricing-toggle">
          <button className="toggle-button active">Monthly</button>
          <button className="toggle-button">Yearly</button>
        </div>

        <div className="pricing-cards-container">
          <div className="pricing-card free-plan">
            <div className="card-header">
              <h3 className="plan-name">Trial Plan</h3>
              <p className="plan-leads">5 Leads / Month</p>
              <p className="plan-price">
                Free <span className="price-term">/ Monthly</span>
              </p>
            </div>
            <p className="plan-description">
              Experience our lead generation service risk-free! Perfect for
              agents looking to test our system before committing.
            </p>
            <button className="get-started-button">Get Started →</button>
            <ul className="plan-features">
              <li>5 Exclusive Leads Per Month (Business & TAXI Insurance)</li>
              <li>Verified & Pre-Screened Leads</li>
              <li>Trial Access - No Commitment Required</li>
              <li>Upgrade Anytime for More Leads</li>
            </ul>
          </div>

          <div className="pricing-card growth-plan">
            <div className="card-header">
              <h3 className="plan-name">Growth Plan</h3>
              <p className="plan-leads">50 Leads / Month</p>
              <p className="plan-price">
                $49 <span className="price-term">/ Monthly</span>
              </p>
            </div>
            <p className="plan-description">
              A great option for agents and companies looking to increase their
              client base with a steady stream of high-quality leads.
            </p>
            <button className="get-started-button">Get Started →</button>
            <ul className="plan">
              <li>50 Exclusive Leads Per Month (Directly Sent to You)</li>
              <li>Verified & Industry-Specific Leads</li>
              <li>Leads Matched to Your Location & Services</li>
              <li>Priority Access to High-Intent Clients</li>
              <li>More Leads = More Conversions & Business Growth</li>
              <li>24/7 Support (Email, Chat)</li>
            </ul>
          </div>

          <div className="pricing-card premium-plan">
            <div className="card-header">
              <h3 className="plan-name">Premium Plan</h3>
              <p className="plan-leads">100 Leads / Month</p>
              <p className="plan-price">
                $89 <span className="price-term">/ Monthly</span>
              </p>
            </div>
            <p className="plan-description">
              For agents and companies that want to maximize their reach and
              secure more clients.
            </p>
            <button className="get-started-button">Get Started →</button>
            <ul className="plan-features">
              <li>100 Exclusive Leads Per Month (Directly Sent to You)</li>
              <li>Verified & Industry-Specific Leads</li>
              <li>Leads Matched to Your Location & Services</li>
              <li>Expand Your Client Base with More Opportunities</li>
              <li>24/7 Support (Email, Chat)</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
