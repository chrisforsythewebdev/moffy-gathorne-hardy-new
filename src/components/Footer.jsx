import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="fixed top-4 left-4 flex flex-col space-y-4 text-gray-700">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Footer;

