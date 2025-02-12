import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle navigation click
  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
    navigate(`/${navItem}`);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <div 
        className="position-fixed top-0 start-0 w-100 d-flex justify-content-between align-items-center px-4 mt-2 px-md-5 py-3"
        style={{ background: "transparent", zIndex: 1000 }}
      >
        {/* TITLE - Clicking resets navigation */}
        <Link 
          to="/" 
          className="text-decoration-none"
          onClick={() => setSelectedNav(null)} // RESET NAV SELECTION
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            fontWeight: 100, 
            fontSize: "1.5rem", 
            cursor: "pointer",
            color: "#9A8C0A"
          }}
        >
          Moffy Gathorne-Hardy
        </Link>

        {/* DESKTOP NAV */}
        <nav className="d-none d-md-block">
          <div className="d-flex flex-row gap-3">
            <Link 
              to="/about" 
              className={`text-decoration-none text-muted ${selectedNav && selectedNav !== "about" ? "opacity-25" : ""}`} 
              onClick={() => handleNavClick("about")}
            >
              About
            </Link>
            <Link 
              to="/work" 
              className={`text-decoration-none text-muted ${selectedNav && selectedNav !== "work" ? "opacity-25" : ""}`} 
              onClick={() => handleNavClick("work")}
            >
              Work
            </Link>
            <Link 
              to="/contact" 
              className={`text-decoration-none text-muted ${selectedNav && selectedNav !== "contact" ? "opacity-25" : ""}`} 
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Link>
            <Link 
              to="https://www.instagram.com/moffygathornehardy/?hl=en" 
              className={`text-decoration-none text-muted ${selectedNav ? "opacity-25" : ""}`}
            >
              Instagram
            </Link>
          </div>
        </nav>

        {/* MOBILE BURGER MENU BUTTON */}
        <div className="d-md-none position-fixed top-0 end-0 p-3">
          {!isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="border-0 bg-transparent text-muted"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            >
              ☰
            </button>
          )}
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {isMobileMenuOpen && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 z-3 d-flex flex-column justify-content-center align-items-center"
          style={{ 
            fontFamily: "'Playfair Display', serif", 
            backgroundColor: "#FEF6DC"
          }}
        >
          {/* Close Button for Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="position-absolute top-0 end-0 m-4 border-0 bg-transparent text-muted"
            style={{ fontSize: "1.8rem", cursor: "pointer" }}
          >
            ✕
          </button>

          {/* Mobile Menu Links */}
          <div className="text-center">
            <Link 
              to="/about" 
              className={`d-block text-decoration-none text-muted mb-4 fs-4 ${selectedNav && selectedNav !== "about" ? "opacity-25" : ""}`} 
              onClick={() => handleNavClick("about")}
            >
              About
            </Link>
            <Link 
              to="/work" 
              className={`d-block text-decoration-none text-muted mb-4 fs-4 ${selectedNav && selectedNav !== "work" ? "opacity-25" : ""}`} 
              onClick={() => handleNavClick("work")}
            >
              Work
            </Link>
            <Link 
              to="/contact" 
              className={`d-block text-decoration-none text-muted mb-4 fs-4 ${selectedNav && selectedNav !== "contact" ? "opacity-25" : ""}`} 
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Link>
            <Link 
              to="https://www.instagram.com/moffygathornehardy/?hl=en" 
              className={`d-block text-decoration-none text-muted fs-4 ${selectedNav ? "opacity-25" : ""}`}
            >
              Instagram
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
