
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../assets/img/biz-logo-white.png"; 
import { FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa"; 
import { FaXTwitter } from "react-icons/fa6"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <img src={logo} alt="BIZ Business Insurance Exchange" className="footer-logo" />
          <p>
            You may also realize cost savings from your energy efficient choices
            in your custom home. Federal tax credits for some green materials can
            allow you to deduct as much.
          </p>
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaXTwitter /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <h4>Business Insurance</h4>
            <Link to="./commercial">Commercial and Auto insurance</Link>
            <Link to="./professional">Professional Liability Insurance</Link>
            <Link to="./small-business">Small Business Insurance</Link>
            <Link to="./umbrella">Business Umbrella Insurance</Link>
            <Link to="./workers-comp">Workers' Compensation Insurance</Link>
            <Link to="./bop">Business Owners Policy</Link>
          </div>
          <div>
            <h4>TLC Insurance</h4>
            <Link to="./black-car">Black Car Insurance</Link>
            <Link to="./uber">Uber Insurance</Link>
            <Link to="./livery">Livery Vehicle Insurance</Link>
            <Link to="./green-taxi">Green Taxi Insurance</Link>
            <Link to="./yellow-taxi">Yellow Taxicab Insurance</Link>
            <Link to="./rideshare">NYC Rideshare Insurance</Link>
          </div>
          <div>
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="./about">About us</Link>
            <Link to="./blog">Blog</Link>
            <Link to="./contact">Contact</Link>
            <Link to="./login">Log In</Link>
            <Link to="./signup">Sign Up</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <button className="footer-btn">JOIN AS AGENT / AGENCY</button>
      </div>
    </footer>
  );
};


export default Footer;