import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Contact Me</h4>
          <ul>
            <li>Email: <a href="mailto:adityakumargupta2101@gmail.com">adityakumargupta2101@gmail.com</a></li>
            <li>Phone: <a href="tel:+918112914153">(+91) 1234567890</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Follow Me</h4>
          <ul className="social-media">
            <li><a href="https://github.com/mraadig" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/aditya-kumar-gupta-73554921b/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Aditya Kumar Gupta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
