import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [selectedNav, setSelectedNav] = useState(null);
  const navigate = useNavigate();

  const handleNavClick = (navItem) => {
    setSelectedNav(navItem);
    navigate(`/${navItem === "home" ? "" : navItem}`); // Navigate to selected page
  };

  const handleClose = () => {
    setSelectedNav(null);
    navigate("/"); // Navigate back to Home when "X" is clicked
  };

  return (
    <>
      {/* Navbar */}
      <nav className="position-fixed top-0 start-0 p-3 text-muted" style={{ fontSize: "0.9rem", fontFamily: "'Playfair Display', serif'" }}>
        <div className="d-flex flex-column">
          {/* Hide all nav items when a page is selected */}
          {!selectedNav && (
            <>
              <Link to="/" className="text-decoration-none text-muted mb-4 nav-link-custom" onClick={() => handleNavClick("home")}>
                Home
              </Link>
              <Link to="/about" className="text-decoration-none text-muted mb-4 nav-link-custom" onClick={() => handleNavClick("about")}>
                About
              </Link>
              <Link to="/work" className="text-decoration-none text-muted mb-4 nav-link-custom" onClick={() => handleNavClick("work")}>
                Work
              </Link>
              <Link to="/contact" className="text-decoration-none text-muted nav-link-custom" onClick={() => handleNavClick("contact")}>
                Contact
              </Link>
            </>
          )}

          {/* Show only selected nav item */}
          {selectedNav && (
            <Link to={`/${selectedNav === "home" ? "" : selectedNav}`} className="text-decoration-none text-muted mb-4 nav-link-custom">
              {selectedNav.charAt(0).toUpperCase() + selectedNav.slice(1)}
            </Link>
          )}
        </div>
      </nav>

      {/* 'X' Close Button in Top-Right (only appears when not on Home) */}
      {selectedNav && (
        <button
          onClick={handleClose}
          className="position-fixed top-0 end-0 m-3 border-0 bg-transparent text-muted fw-light"
          style={{ fontSize: "1rem", cursor: "pointer", fontFamily: "'Playfair Display', serif'" }}
        >
          ✕
        </button>
      )}
    </>
  );
};

export default Navbar;
