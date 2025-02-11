import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import image from "../images/contact-page.jpg";

const Contact = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      {/* Image */}
      <img src={image} alt="Contact" className="img-fluid mb-3" style={{ maxWidth: "300px" }} />
      
      {/* Contact Information */}
      <div className="text-center" style={{ fontSize: "1rem", fontFamily: "'Playfair Display', serif" }}>
        <p className="m-0">
          <a href="mailto:info@moffygathornehardy.com" className="contact-link">
            info@moffygathornehardy.com
          </a>
        </p>
        <p className="m-0">
          <a href="tel:+442086388753" className="contact-link">
            +44 (0) 208 638 8753
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
