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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
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
          onClick={() => { setSelectedNav(null); setIsMobileMenuOpen(false); }} // RESET NAV SELECTION
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
              target="_blank"
              className={`text-decoration-none text-muted ${selectedNav ? "opacity-25" : ""}`}
            >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  width="24" 
                  height="24"
                  fill="currentColor" // Inherit text color
                  style={{ verticalAlign: "middle" }}
                >
                  <path d="M7.75 2C4.45 2 2 4.45 2 7.75v8.5C2 19.55 4.45 22 7.75 22h8.5c3.3 0 5.75-2.45 5.75-5.75v-8.5C22 4.45 19.55 2 16.25 2h-8.5zm0 1.5h8.5c2.45 0 4.25 1.8 4.25 4.25v8.5c0 2.45-1.8 4.25-4.25 4.25h-8.5c-2.45 0-4.25-1.8-4.25-4.25v-8.5C3.5 5.3 5.3 3.5 7.75 3.5zM18 5a1 1 0 100 2 1 1 0 000-2zm-6 3.25A5.75 5.75 0 006.25 14 5.75 5.75 0 0012 19.75 5.75 5.75 0 0017.75 14 5.75 5.75 0 0012 8.25zm0 1.5A4.25 4.25 0 0116.25 14 4.25 4.25 0 0112 18.25 4.25 4.25 0 017.75 14 4.25 4.25 0 0112 9.75z"></path>
                </svg>
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
