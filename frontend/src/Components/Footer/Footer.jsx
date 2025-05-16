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
          <h4>CONTACT</h4>
          <ul>
            <li><i className="fas fa-home"></i> 330 Oracle RD, Wilmington DE</li>
            <li><i className="fas fa-envelope"></i> diksha66sharma78@gmail.com</li>
            <li><i className="fas fa-phone"></i> +01 234 567 88</li>
            <li><i className="fas fa-print"></i> +01 234 567 89</li>
          </ul>
        </div>

        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.3803244348833!2d-75.64804122341354!3d39.75356849573375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fe3de79e085f%3A0x80f8ee9014b13ba!2s330%20Oracle%20Rd%2C%20Wilmington%2C%20DE%2019808!5e0!3m2!1sen!2sus!4v1747357324160!5m2!1sen!2sus"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <strong>Dessert Dreams</strong></p>
      </div>
    </footer>
  );
}

export default Footer;