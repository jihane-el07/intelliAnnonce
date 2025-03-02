import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link from react-router-dom
import './Footer.css';
import foot from "../pics/footer.png"
const Footer = () => {
  return (
    <footer className="footer">
      <div id='floatf'>
        <div className="subscribe-section">
          <h3 id="textSub">Subscribe For Update</h3>
          <div className="input-group" id="input">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your mail address.."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              style={{ backgroundColor: '#BBB3B3' }}
            />
            <span className="input-group-text" style={{ color: '#FFF3F3', backgroundColor: '#E31616' }}>
              Subscribe
            </span>
          </div>
        </div>

        <div className="footer-links">
          <ul>
            <li className="footer-title">Company</li>
            <hr />
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/about" className="footer-link">About Us</Link></li>
            <li><Link to="/factories" className="footer-link">Our Factories</Link></li>
            <li><Link to="/mission" className="footer-link">Mission and Strategy</Link></li>
            <li><Link to="/actions" className="footer-link">Profitable Actions</Link></li>
          </ul>

          <ul>
            <li className="footer-title">How to Sell Fast</li>
            <hr />
            <li><Link to="/selling-tips" className="footer-link">Selling Tips</Link></li>
            <li><Link to="/buy-sell-quickly" className="footer-link">Buy and Sell Quickly</Link></li>
            <li><Link to="/membership" className="footer-link">Membership</Link></li>
            <li><Link to="/banner-advertising" className="footer-link">Banner Advertising</Link></li>
            <li><Link to="/promote-ad" className="footer-link">Promote Your Ad</Link></li>
          </ul>

          <ul>
            <li className="footer-title">Information</li>
            <hr />
            <li><Link to="/company-contact" className="footer-link">Company & Contact info</Link></li>
            <li><Link to="/block-article" className="footer-link">Block & Article</Link></li>
            <li><Link to="/sitemap" className="footer-link">Sitemap</Link></li>
            <li><Link to="/terms" className="footer-link">Terms of Service</Link></li>
            <li><Link to="/privacy-policy" className="footer-link">Privacy Policy</Link></li>
          </ul>

          <ul>
            <li className="footer-title">Help & Support</li>
            <hr />
            <li><Link to="/live-chat" className="footer-link">Live Chat</Link></li>
            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            <li><Link to="/how-to-stay-safe" className="footer-link">How to Stay Safe</Link></li>
            <li><Link to="/terms-conditions" className="footer-link">Terms & Conditions</Link></li>
            <li><Link to="/contact-us" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>
      </div>
      <img src={foot} id='imgfooter' alt="" />
    </footer>
  );
};

export default Footer;
