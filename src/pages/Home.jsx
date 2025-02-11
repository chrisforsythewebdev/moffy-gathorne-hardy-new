import React from "react";
import img from "../images/homepage.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="position-relative vh-100" style={{ pointerEvents: "none" }}>
      {/* Name in Top-Left Corner */}
      <Link 
        to="/" 
        className="position-absolute top-0 start-0 p-4 p-md-5 text-decoration-none"
        style={{ 
          fontFamily: "'Playfair Display', serif", 
          fontWeight: 100, 
          fontSize: "1.5rem", 
          cursor: "pointer", 
          pointerEvents: "auto"
        }}
      >
        Moffy Gathorne-Hardy
      </Link>

      {/* Centered Image */}
      <div 
        className="d-flex justify-content-center align-items-center vh-100"
        style={{ position: "absolute", top: 0, left: 0, width: "100%" }}
      >
        <img 
          src={img} 
          alt="Centered Image" 
          className="img-fluid"
          style={{ 
            maxWidth: "500px", 
            height: "auto",
            objectFit: "contain",
            pointerEvents: "auto" // Enable interactions for the image
          }}
        />
      </div>
    </div>
  );
};

export default Home;
