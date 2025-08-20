import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/biz-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="BIZ Business Insurance Exchange" />
        </Link>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/business-insurance" className="dropdown-link">
              <button className="dropdown-toggle">
                Business Insurance <span className="arrow">▾</span>
              </button>
            </Link>
            <div className="dropdown-menu">
              <div className="dropdown-inner">
                <div className="column">
                  <Link to="/commercial">Commercial and Auto insurance</Link>
                  <Link to="/professional">
                    Professional Liability Insurance
                  </Link>
                  <Link to="/workers-comp">
                    Workers' Compensation Insurance
                  </Link>
                </div>
                <div className="column">
                  <Link to="/small-business">Small Business Insurance</Link>
                  <Link to="/umbrella">Business Umbrella Insurance</Link>
                  <Link to="/bop">Business Owners Policy</Link>
                </div>
              </div>
              <div className="dropdown-footer">
                <p>Looking for Business Insurance?</p>
                <button className="quote-btn-small">Get Quote</button>
                <span className="phone">or call (012) 345-6789</span>
              </div>
            </div>
          </li>
          <li className="dropdown">
            <Link to="./taxi insurance" className="dropdown-link">
              <button className="dropdown-toggle">
                Taxi Insurance <span className="arrow">▾</span>
              </button>
            </Link>
            <div className="dropdown-menu">
              <div className="dropdown-inner">
                <div className="column">
                  <Link to="/black-car">Black Car Insurance</Link>
                  <Link to="/uber">Uber Insurance</Link>
                  <Link to="/livery">Livery Vehicle Insurance</Link>
                </div>
                <div className="column">
                  <Link to="/green-taxi">Green Taxi Insurance</Link>
                  <Link to="/yellow-taxi">Yellow Taxicab Insurance</Link>
                  <Link to="/rideshare">NYC Rideshare Insurance</Link>
                </div>
              </div>
              <div className="dropdown-footer">
                <p>Looking for Taxi Insurance?</p>
                <button className="quote-btn-small">Get Quote</button>
                <span className="phone">or call (012) 345-6789</span>
              </div>
            </div>
          </li>

          <li>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header-actions">
        <button className="login-btn">Log in</button>
        <button className="signup-btn">Sign up</button>
      </div>
    </header>
  );
};

export default Header;
