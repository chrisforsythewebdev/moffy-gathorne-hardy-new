import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="position-fixed bottom-0 w-100 p-4 text-muted d-flex justify-content-between mt-5" 
      style={{ fontSize: "0.9rem", fontFamily: "'Playfair Display', serif", backgroundColor: "white" }}>
      
      {/* Left Side - Username */}
      <span className="ps-3">@Moffy Gathorne-Hardy</span>

      {/* Right Side - Links */}
      <div className="pe-3">
        <Link to="/contact" className="text-decoration-none text-muted">
          Contact
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
