import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container my-5">
      {/* Introduction */}
      <div className="row">
        <div className="col-md-6">
          <h2 className="fw-bold">
            A London-based artist exploring the intersections of space, memory, and form.
          </h2>
          <p className="fst-italic">
            Through a mix of digital and physical media, my work examines themes of urban landscapes,
            identity, and the passage of time. With a background in fine art and digital design,
            I create immersive experiences that invite viewers into abstract narratives.
          </p>
        </div>

        {/* Achievements (Visible on Mobile, Hidden on Desktop) */}
        <div className="col-md-6 d-md-none">
          <pre className="text-muted" style={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}>
            Tate Modern Showcase 2024: Featured Artist
            Royal Academy Summer Exhibition 2023
            London Art Prize 2022: Emerging Artist of the Year
            Residency at The White Cube 2021
            Saatchi Young Artists 2020: Finalist
            Selected for the Serpentine Gallery Open Call 2019
          </pre>
        </div>
      </div>

      {/* Achievements (Hidden on Mobile, Pushed Down on Desktop) */}
      <div className="row mt-5 d-none d-md-block">
        <div className="col-md-6">
          <pre className="text-muted" style={{ whiteSpace: "pre-wrap", fontSize: "0.9rem" }}>
            Tate Modern Showcase 2024: Featured Artist
            Royal Academy Summer Exhibition 2023
            London Art Prize 2022: Emerging Artist of the Year
            Residency at The White Cube 2021
            Saatchi Young Artists 2020: Finalist
            Selected for the Serpentine Gallery Open Call 2019
          </pre>
        </div>
      </div>
    </div>
  );
};

export default About;
