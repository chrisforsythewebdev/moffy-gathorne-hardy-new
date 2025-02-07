import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
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
