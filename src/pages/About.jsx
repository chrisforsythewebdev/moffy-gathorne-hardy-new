import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div className="container my-5 my-md-3 px-4 px-md-5 w-100">
      {/* Introduction */}
      <div className="row">
        <div className="col-md-6 mt-5 ms-md-5 mt-md-5 text-center text-md-start">
          <h2 className="fw-bold mb-5 mb-md-2" style={{ fontSize: "1.8rem", lineHeight: "1.3" }}>
            Moffy Gathorne-Hardy is a London-born writer, art theorist, and cultural commentator.
          </h2>
          <p className="fst-italic" style={{ fontSize: "1rem", lineHeight: "1.5" }}>
            With one foot in musicology and another in women’s studies, her work blends feminist 
            literary theory, semiotics, and post-structuralist thought. She brings traditional 
            academic inquiry together with a passion for alternative narratives and non-mainstream voices.
          </p>
        </div>

        {/* Additional Details (Visible on Mobile, Hidden on Desktop) */}
        <div className="col-md-6 d-md-none mt-3">
          <p className="text-muted text-center" style={{ fontSize: "0.9rem", lineHeight: "1.4", wordBreak: "break-word" }}>
            <strong className="text-dark">Undergraduate research:</strong> Eastern European literature, focusing on 
            the chronotope in the short stories and drawings of Bruno Schulz.
            <br /><br />
            <strong className="text-dark">Thesis:</strong> The role of male-coded speech acts in The Beatles' <i>Rubber Soul</i>, 
            currently expanding into a book-length work.
            <br /><br />
            <strong className="text-dark">Research interests:</strong> The ontology of the photograph, image-making and process, 
            power structures in visibility, and photographic media as narrative tools.
            <br /><br />
            <strong className="text-dark">Ongoing projects:</strong> Working on jazz archives (Francine Winham) and editing for <i>A Nice Magazine</i>.
            <br /><br />
            <strong className="text-dark">Education:</strong> 
            <br />
            MA in History of Art, Columbia University (2023–2024) 
            <br />
            BA in Comparative Literature, University College London (2018)
          </p>
        </div>
      </div>

      {/* Additional Details (Hidden on Mobile, Pushed Down on Desktop) */}
      <div className="row mt-2 d-none d-md-block">
        <div className="col-md-6 ms-md-5 mt-md-3">
          <p className="text-muted" style={{ fontSize: "0.9rem", lineHeight: "1.4", wordBreak: "break-word" }}>
            <strong className="text-dark">Undergraduate research:</strong> Eastern European literature, focusing on 
            the chronotope in the short stories and drawings of Bruno Schulz.
            <br /><br />
            <strong className="text-dark">Thesis:</strong> The role of male-coded speech acts in The Beatles' <i>Rubber Soul</i>, 
            currently expanding into a book-length work.
            <br /><br />
            <strong className="text-dark">Research interests:</strong> The ontology of the photograph, image-making and process, 
            power structures in visibility, and photographic media as narrative tools.
            <br /><br />
            <strong className="text-dark">Ongoing projects:</strong> Working on jazz archives (Francine Winham) and editing for <i>A Nice Magazine</i>.
            <br /><br />
            <strong className="text-dark">Education:</strong> 
            <br />
            MA in History of Art, Columbia University (2023–2024) 
            <br />
            BA in Comparative Literature, University College London (2018)
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
            }
            p {
              font-size: 0.85rem;
              line-height: 1.4;
            }
          }
        `}
      </style>
    </div>
  );
};

export default About;
