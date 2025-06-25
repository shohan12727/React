import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer); // cleanup
  }, []);

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <h2>Shohan</h2>
          <p>The king👑</p>
          <p>&copy; 2025 All rights reserved.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-socials">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><span>🔵</span> Facebook</a>
            <a href="#"><span>🐦</span> Twitter</a>
            <a href="#"><span>💼</span> LinkedIn</a>
          </div>
        </div>

        <div className="footer-timer">
          <h3>Current Time</h3>
          <p>{currentTime.toLocaleTimeString()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
