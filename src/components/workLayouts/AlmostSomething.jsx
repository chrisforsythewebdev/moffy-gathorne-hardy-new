import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (Make sure the paths match your file structure)
import img1 from "../../images/almostsomething/1.png";
import img2 from "../../images/almostsomething/2.png";
import img3 from "../../images/almostsomething/3.png";
import img4 from "../../images/almostsomething/4.png";
import img5 from "../../images/almostsomething/5.png";
import img6 from "../../images/almostsomething/6.png";
import img7 from "../../images/almostsomething/7.png";
import img8 from "../../images/almostsomething/8.png";

// Image gallery array (excluding first image for layout structure)
const remainingImages = [img2, img3, img4, img5, img6, img7, img8];

const AlmostSomething = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container py-5 mt-2 work-detail">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-start">

          {/* Title & Intro Text */}
          <h2 className="py-2">Almost Something</h2>
          <p className="lead">
            Introduction to Hanna Moon's book of the same title, published by Patrick Remy Studio
          </p>

          {/* First Image (Standalone) */}
          <div className="text-center mb-4">
            <img src={img1} alt="Almost Something 1" className="img-fluid" />
          </div>

          {/* Expandable Text Section */}
          <div>
            <p>
              In a room fit for business, smart top halves stand elegantly — blazers and shirts — below: trainers
              and loose-fitting trousers. One informs the meaning of the other, the corporate upper dignifying the
              jeans and relaxed shoes, while the bottom lends some welcome levity. This principle I believe is
              called ‘smart casual’ — whoever coined the term is surely due their prize for subtlety of thought.
              This is almost the entirety of the picture —
            </p>

            {expanded && (
              <>
                <p>
                  Separating the jackets and jeans, the shirts and tracksuits, is the cross section of a tabletop, which
                  viewed from the side acts as a barrier between what is above and below it, dismembering torsos and
                  legs. This barrier has one other function: it obscures from sight. Its area is small, but there is no
                  telling what it conceals, and what therefore is absent from the image that is present in the reality it
                  claims to represent.
                </p>

                <p>
                  The image is gone, now a 3D space, the room opens out of itself. Spread over the great obscuring
                  table are more images to replace it, photographs of young and old women, mothers, aunties, and
                  friends. There are depictions of the streets of Seoul, shopfronts soliciting the kind of intimacy that
                  allows for anonymity. The people in the photographs are eating, laughing, and crucially, being.
                </p>

                <p>
                  Agents of executive discernment, the jacket and jeans wearers come to life, moving their hands over
                  the photographs. Disembodied trainers shuffle about, cut off from their sleeved counterparts, these
                  two elements saying such different things. What bonds them remains hidden by the tabletop,
                  ensuring that in the world outside of the photographs they’re surveying, the world they inhabit, the
                  scene cannot be fully apprehended, its meaning cannot be closed.
                </p>

                <p>
                  What is under consideration is the identity of both the photographer and her subjects. How do these
                  identities inform the work? Are Hanna’s subjects relegated to referential objects of aesthetic and
                  symbolic significance, or do they remain photographs of people? If not, when does relegation
                  occur? When the photograph is taken, when it is hung in a gallery, when a text is written to
                  accompany it, or when a person views it with ideas of Asianness and femininity in mind?
                </p>

                <p>
                  Indeed, the photographs in this very book were taken over a period of time spanning more than a
                  decade, and have meant different things at different points. The work itself is a palimpsest alive
                  with innumerable points of view, many of which have belonged to Hanna when she was at times
                  closer and then further removed from her own Koreanness, less and then more critical of it.
                </p>
              </>
            )}
          </div>

          {/* Read More / Read Less Button */}
          <button
            className="btn btn-link p-0"
            onClick={() => setExpanded(!expanded)}
            style={{ fontSize: "1rem", textDecoration: "underline", color: "black" }}
          >
            {expanded ? "Collapse" : "Read More"}
          </button>

          {/* Remaining Images */}
          <div className="image-gallery my-4 text-center">
            {remainingImages.map((img, index) => (
              <img key={index} src={img} alt={`Almost Something ${index + 2}`} className="img-fluid mb-3" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlmostSomething;