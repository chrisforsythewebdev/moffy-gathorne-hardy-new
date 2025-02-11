import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Handle navigation click (desktop behavior)
  const handleNavClick = (navItem) => {
    if (navItem === "home") {
      setSelectedNav(null); // Show all nav items when on home
      navigate("/");
    } else {
      setSelectedNav(navItem);
      navigate(`/${navItem}`);
    }
  };

  // Close and reset on "X" click (desktop)
  const handleClose = () => {
    setSelectedNav(null);
    navigate("/");
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const handleMobileNavClick = (navItem) => {
    setIsMobileMenuOpen(false);
    navigate(`/${navItem === "home" ? "" : navItem}`);
  };

  return (
    <>
      {/* DESKTOP NAV */}
      <nav className="d-none d-md-block position-fixed top-0 end-0 p-5 text-muted"
        style={{ fontSize: "0.9rem", fontFamily: "'Playfair Display', serif'" }}>
        <div className="d-flex flex-row gap-3">
          {!selectedNav && (
            <>
              <Link to="/about" className="text-decoration-none text-muted mb-4 nav-link-custom" onClick={() => handleNavClick("about")}>
                About
              </Link>
              <Link to="/work" className="text-decoration-none text-muted mb-4 nav-link-custom" onClick={() => handleNavClick("work")}>
                Work
              </Link>
              <Link to="/contact" className="text-decoration-none text-muted mb-4 nav-link-custom" onClick={() => handleNavClick("contact")}>
                Contact
              </Link>
              <Link to="https://www.instagram.com/moffygathornehardy/?hl=en" className="text-decoration-none text-muted nav-link-custom">
                Instagram
              </Link>
            </>
          )}
          {selectedNav && selectedNav !== "home" && (
            <Link to={`/${selectedNav}`} className="text-decoration-none text-muted mb-4 nav-link-custom">
              {selectedNav.charAt(0).toUpperCase() + selectedNav.slice(1)}
            </Link>
          )}
        </div>
      </nav>

      {/* 'X' CLOSE BUTTON FOR DESKTOP (Hidden on Home) */}
      {selectedNav && selectedNav !== "home" && (
        <button
          onClick={handleClose}
          className="d-none d-md-block position-fixed top-0 end-0 m-3 border-0 bg-transparent text-muted fw-light"
          style={{ fontSize: "1rem", cursor: "pointer", fontFamily: "'Playfair Display', serif'" }}
        >
          ✕
        </button>
      )}

      {/* MOBILE NAVBAR */}
      <div className="d-md-none position-fixed top-0 start-0 p-3 z-3">
        {/* Burger Icon */}
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

        {/* MOBILE MENU OVERLAY */}
        {isMobileMenuOpen && (
        <div 
            className="position-fixed top-0 start-0 w-100 h-100 bg-white z-3 d-flex flex-column align-items-start  p-5"
            style={{ fontFamily: "'Playfair Display', serif'" }}
        >
            {/* Close Button */}
            <button
            onClick={toggleMobileMenu}
            className="position-absolute top-0 end-0 m-4 border-0 bg-transparent text-muted"
            style={{ fontSize: "1.8rem", cursor: "pointer" }}
            >
            ✕
            </button>

            {/* Mobile Menu Links */}
            <Link 
            to="/" 
            className="text-decoration-none text-muted mb-4 nav-link-custom fs-4"
            onClick={() => handleMobileNavClick("home")}
            >
            Home
            </Link>
            <Link 
            to="/about" 
            className="text-decoration-none text-muted mb-4 nav-link-custom fs-4"
            onClick={() => handleMobileNavClick("about")}
            >
            About
            </Link>
            <Link 
            to="/work" 
            className="text-decoration-none text-muted mb-4 nav-link-custom fs-4"
            onClick={() => handleMobileNavClick("work")}
            >
            Work
            </Link>
            <Link 
            to="/contact" 
            className="text-decoration-none text-muted mb-4 nav-link-custom fs-4"
            onClick={() => handleMobileNavClick("contact")}
            >
            Contact
            </Link>
            <Link 
            to="https://www.instagram.com/moffygathornehardy/?hl=en"
            className="text-decoration-none text-muted nav-link-custom fs-4"
            >
            Instagram
            </Link>
        </div>
        )}

    </>
  );
};

export default Navbar;
