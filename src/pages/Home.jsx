import React from "react";
import img from "../images/homepage.jpg";

const Home = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center">
      {/* Centered Image */}
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
  );
};

export default Home;
