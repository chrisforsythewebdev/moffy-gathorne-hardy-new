import React from "react";
import img from "../images/homepage.jpg";

const Home = () => {
  return (
    <div className="position-relative vh-100" style={{ pointerEvents: "none" }}>
      {/* Name in Top-Right Corner */}
      <h1 
        className="position-absolute top-0 end-0 p-4 p-md-5"
        style={{ fontFamily: "'Playfair Display', serif", fontWeight: 100, fontSize: "1.5rem" }}
      >
        Moffy Gathorne-Hardy
      </h1>

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
            pointerEvents: "auto"
          }}
        />
      </div>
    </div>
  );
};

export default Home;
