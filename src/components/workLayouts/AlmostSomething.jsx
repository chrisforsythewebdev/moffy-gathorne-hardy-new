import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../pdfExtracts/five-dollars-three-minutes.pdf";

// Import images (Make sure the paths match your file structure)
import img1 from "../../images/almostsomething/1.png";
import img2 from "../../images/almostsomething/2.png";
import img3 from "../../images/almostsomething/3.png";
import img4 from "../../images/almostsomething/4.png";
import img5 from "../../images/almostsomething/5.png";
import img6 from "../../images/almostsomething/6.png";
import img7 from "../../images/almostsomething/7.png";
import img8 from "../../images/almostsomething/8.png";



// Image gallery array
const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const AlmostSomething = () => {
  const [expanded, setExpanded] = useState(false);

  // The full text content
  const fullText = ``;

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2 className="py-2"><strong>Title:</strong> Almost Something</h2>
          <p><strong>Text:</strong> Moffy Gathorne-Hardy</p>
          <p><strong>Art Direction:</strong> Lords of DesignTM
          (Frédérique Bortolotti, Frédérique Stietel, Alizée Cormerais) and Patrick Remy</p>
          <p><strong>Design:</strong> Lords of DesignTM</p>
          <p><strong>Editing:</strong> Patrick Remy</p>     
          <p><strong>Colour Separation:</strong> Output</p>
          <p><strong>Proof Reading:</strong> Frédérique Destribats</p>
          <p><strong>Translation to Korean:</strong> Jaeyong Park and Blue Kim</p>

          {/* Image Gallery */}
          <div className="image-gallery my-4 text-center">
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Morena ${index + 1}`} className="img-fluid mb-3" />
            ))}
          </div>

          {/* Exhibition Overview with Toggle */}
          <p>
            {expanded ? fullText : fullText.slice(0, 500) + "..."} {/* Show preview text if collapsed */}
          </p>
          <button 
            className="btn btn-link p-0"
            onClick={() => setExpanded(!expanded)}
            style={{ fontSize: "1rem", textDecoration: "underline", color: "black" }}
          >
            {expanded ? "Read Less" : "Read More"}
          </button>

          {/* Download PDF Button */}
          <div className="text-center mt-4">
            <a href={pdf} download className="btn btn-outline-dark">
              Download Full Exhibition Text (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmostSomething;
