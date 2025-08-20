import React from "react";
import "./Contact.css";
import supportIcon from "../assets/support-icon.png";
import phoneIcon from "../assets/phone-icon.png";
import briefcaseIcon from "../assets/cooperation.png";
import branchIcon from "../assets/branch-icon.png";
import Footer from "./footer"
import whyBizImage from "../assets/biz-image.jpg"; 

const Contact = () => {
 return (
    <div>
      <section className="contact-us-section">
        <div className="container">
          <div className="text-center">
            <h2 className="contact-heading">Contact Us</h2>
            <p className="contact-description">
              Ready to protect your business or TLC operations with tailored
              insurance solutions? At BIZ, we're here to help you find the
              perfect coverage. Reach out to our team today for personalized
              assistance, quick quotes, or answers to your insurance questions.
              Let's secure your future together.
            </p>
          </div>
          <div className="contact-methods">
            <div className="contact-card">
              <div className="icon-container">
                <img src={supportIcon} alt="Help & Support" />
                <span className="icon-label">SUPPORT</span>
              </div>
              <h3>Help & Support</h3>
              <p>
                Email{" "}
                <a href="mailto:support@alithemese.com">
                  support@alithemese.com
                </a>{" "}
                For help with a current product or service or refer to FAQs and
                developer tools.
              </p>
            </div>
            <div className="contact-card">
              <div className="icon-container">
                <img src={phoneIcon} alt="Call Us" />
              </div>
              <h3>Call Us</h3>
              <p>
                Call us to speak to a member of our team. (+01) 234 567 89 (+01)
                456 789 21
              </p>
            </div>
            <div className="contact-card">
              <div className="icon-container">
                <img src={briefcaseIcon} alt="Business Department" />
              </div>
              <h3>Business Department</h3>
              <p>
                Contact the sales department about cooperation projects (+01)
                789 456 23
              </p>
            </div>
            <div className="contact-card">
              <div className="icon-container">
                <img src={branchIcon} alt="Global branch" />
              </div>
              <h3>Global branch</h3>
              <p>
                Contact us to open our branches globally. (+01) 234 567 89 (+01)
                456 789 23
              </p>
            </div>
          </div>

          <div className="contact-form-row">
            <div className="contact-card form-card">
              <h2>Get in Touch</h2>
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Your Address" />
                <input type="tel" placeholder="Your Phone" />
              </div>
              <div className="form-row">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="form-row">
                <textarea placeholder="Write your message here"></textarea>
              </div>
              <button className="send-message-button">
                Send Message <span className="arrow-icon">→</span>
              </button>
            </div>

            <div className="contact-card info-card">
              <h2>Chat With Us</h2>
              <p className="contact-info-heading">Our Contact Information</p>
              <div className="contact-detail">
                <svg
                  className="icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -16 -16a2 2 0 0 1 2 -2"></path>
                </svg>
                <p>Phone: (123) 456-1234</p>
              </div>
              <div className="contact-detail">
                {/* Email SVG Icon */}
                <svg
                  className="icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
                <p>Email: example@gmail.com</p>
              </div>
              <div className="contact-detail">
                <svg
                  className="icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                  <path d="M17.657 16.657l-1.657 1.657l-1.657 -1.657a8 8 0 1 1 3.314 0z" />
                </svg>
                <p>Address: New York, USA</p>
              </div>
              <p className="contact-info-heading">Office Hours</p>
              <div className="office-hours">
                <p>Monday—Friday: 9:00 AM—5:00 PM</p>
                <p>Saturday: By Appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-biz-section">
        <div className="container why-biz-container">
          <div className="why-biz-content">
            <div className="why-biz-pill">
              <span>... WHY BIZ?</span>
            </div>
            <h2 className="why-biz-heading">
              Why Choose Business Insurance Exchange?
            </h2>
            <p className="why-biz-description">
              Our dedicated team is committed to providing exceptional service,
              transparent communication, and customized insurance solutions.
              Whether you're a small business owner or a TLC driver, we're here
              to guide you every step of the way. Contact us now to start your
              journey toward comprehensive protection.
            </p>
          </div>
          <div className="why-biz-image">
            <img 
              src={whyBizImage} 
              alt="People shaking hands over a table with a laptop" 
              className="rounded-image"
            />
          </div>
        </div>
        {/* <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.069146961683!2d74.26294437488542!3d31.439763274250943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919011903fb5d01%3A0x84223e5b8bcf419c!2sBitLogicx!5e0!3m2!1sen!2s!4v1755000395240!5m2!1sen!2s" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div> */}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;