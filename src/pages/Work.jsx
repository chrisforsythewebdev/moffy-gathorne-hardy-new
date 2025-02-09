import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/five-dollars-three-minutes.png";
import img2 from "../images/autumn-cloud/Faye-Wei-Wei-D.JPG";
import img3 from "../images/soft-furnishings/JT-Soft-furnishing-B.jpg";
import img4 from "../images/almost-something.png";
import img5 from "../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-C.jpg";
import img6 from "../images/morena.png";

const works = [
  { title: "5 Dollars for 3 Minutes", image: img1 },
  { title: "秋雲, Autumn Cloud", image: img2 },
  { title: "Soft Furnishing", image: img3 },
  { title: "Almost Something", image: img4 },
  { title: "Valley of the Dolls", image: img5 },
  { title: "Morena", image: img6 },
];

const Work = () => {
  const [hoveredWork, setHoveredWork] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => window.innerWidth <= 768; 
    setIsMobile(checkMobile());

    window.addEventListener("resize", () => setIsMobile(checkMobile()));

    return () => {
      window.removeEventListener("resize", () => setIsMobile(checkMobile()));
    };
  }, []);

  const handleMouseEnter = (work, event) => {
    if (!isMobile) {
      setHoveredWork(work);
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseMove = (event) => {
    if (!isMobile) {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredWork(null);
    }
  };

  const handleClick = (work, event) => {
    if (isMobile) {
      if (hoveredWork === work) {
        navigate(`/work/${encodeURIComponent(work.title)}`);
      } else {
        setHoveredWork(work);
      }
    } else {
      navigate(`/work/${encodeURIComponent(work.title)}`);
    }
  };

  return (
    <div className="container d-flex flex-column justify-content-start vh-100" style={{ marginLeft: "10vw", marginTop: "10vh" }}>
      <h2 className="fw-bold mb-2" style={{ fontSize: "1.2rem" }}>Selected Works</h2>
      
      <div className="d-flex flex-column gap-1 position-relative">
        {works.map((work, index) => (
          <div
            key={index}
            className="work-item"
            onMouseEnter={(event) => handleMouseEnter(work, event)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={(event) => handleClick(work, event)}
            style={{
              fontSize: "1rem",
              fontWeight: 300,
              fontFamily: "'Playfair Display', serif",
              cursor: "pointer",
            }}
          >
            {work.title}
          </div>
        ))}
      </div>

      {/* Floating Image on Hover (Desktop) or Below Titles (Mobile) */}
      {hoveredWork && (
        <div
          className={isMobile ? "text-center mt-3" : ""}
          style={{
            position: isMobile ? "relative" : "fixed",
            top: isMobile ? "auto" : cursorPosition.y - 80 + "px",
            left: isMobile ? "auto" : cursorPosition.x + 40 + "px",
            width: isMobile ? "100%" : "500px",
            maxWidth: "600px",
            height: "auto",
            objectFit: "cover",
            zIndex: 1000,
            pointerEvents: "none",
            transition: "opacity 0.2s ease-in-out",
          }}
        >
          <img
            src={hoveredWork.image}
            alt="Work Preview"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Work;
