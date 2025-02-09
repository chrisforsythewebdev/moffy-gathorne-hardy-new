import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProjectNavigation = ({ prevWork, nextWork }) => {
  return (
    <div 
      className="d-flex justify-content-between align-items-center px-4 py-3 bg-white"
      style={{ zIndex: 10 }} 
    >
      {/* Previous Project */}
      {prevWork ? (
        <Link to={`/work/${prevWork.title}`} className="text-decoration-none text-success fw-bold d-flex align-items-center" style={{ cursor: "pointer" }}> 
          &#x276E; <span className="ms-2">{prevWork.title}</span>
        </Link>
      ) : <div /> }

      {/* Next Project */}
      {nextWork ? (
        <Link to={`/work/${nextWork.title}`} className="text-decoration-none text-success fw-bold d-flex align-items-center" style={{ cursor: "pointer" }}>
          <span className="me-2">{nextWork.title}</span> &#x276F;
        </Link>
      ) : <div /> }
    </div>
  );
};

export default ProjectNavigation;
