import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <p>Get connected with us on social networks:</p>
        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-google"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-linkedin-in"></i>
          <i className="fab fa-github"></i>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-section">
        <div className="footer-section">
          <h4>CONTACT</h4>
          <ul>
            <li><i className="fas fa-home"></i> New York, NY 10012, US</li>
            <li><i className="fas fa-envelope"></i> info@example.com</li>
            <li><i className="fas fa-phone"></i> +01 234 567 88</li>
            <li><i className="fas fa-print"></i> +01 234 567 89</li>
          </ul>
        </div>
      </div>
      </div>

      <div className="footer-bottom">
        <p>© 2023 <strong>Dessert Dreams</strong></p>
      </div>
    </footer>
  );
}

export default Footer;
