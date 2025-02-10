import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container my-5 my-md-3 px-4 px-md-5 w-100 pb-5">
      {/* Introduction */}
      <div className="row">
        <div className="col-md-6 mt-5 ms-md-5 mt-md-5">
          <h2 className="fw-bold mb-4" style={{ fontSize: "1.6rem", lineHeight: "1.3", textAlign: "left" }}>
            Moffy Gathorne-Hardy is a London-born writer, art theorist, and cultural commentator with one
            foot in musicology and another in women’s studies.
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            Her undergraduate research focused on Eastern European literature, specifically the function of the
            chronotope in the short stories and drawings of Bruno Schulz.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            She wrote her master’s thesis on the role of male- and female-coded speech acts in The Beatles’
            <i> Rubber Soul</i>, which she is expanding into a book-length work.
          </p>
        </div>
      </div>

      {/* Additional Details */}
      <div className="row mt-3">
        <div className="col-md-5 ms-md-5">
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            Her thinking and writing are largely informed by the decade she spent working as a model that led
            her to interrogate the relationship between the image-making process and the resulting object. One
            of her primary areas of interest is the ontological status of the photograph, how it performs the
            narrativisation or obfuscation of reality, and the extent to which this narrativising force operates
            beyond the will of those involved in its creation.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            She enjoys working closely with artists to pull out the ideas from their work and develop means of
            discussing it, making visible in new ways through writing the layers of what is present and encoded
            in the object or image.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            She is actively involved in the estate of the late jazz photographer and feminist filmmaker Francine
            Winham, and is currently working towards compiling a book of her photographs.
          </p>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            She is features editor of <i>A Nice Magazine</i>.
          </p>
        </div>
      </div>

      {/* Education Section - Ensures it doesn't get hidden by footer */}
      <div className="row mt-5">
        <div className="col-md-8 ms-md-5 mb-5">
          <h4 className="fw-bold">Education</h4>
          <p style={{ fontSize: "1rem", lineHeight: "1.5", textAlign: "left" }}>
            <strong>MA History and Literature</strong>, Columbia University, 2023-2024
            <br />
            <strong>BA Comparative Literature</strong>, University College London, 2018-2021
          </p>
        </div>
      </div>

      {/* Responsive CSS for Mobile Fix */}
      <style>
        {`
          @media (max-width: 768px) {
            .container {
              padding-left: 15px;
              padding-right: 15px;
              text-align: left !important;
            }
            p {
              font-size: 1rem;
              line-height: 1.4;
              text-align: left !important;
            }
            h2 {
              font-size: 1.5rem;
              text-align: left !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
