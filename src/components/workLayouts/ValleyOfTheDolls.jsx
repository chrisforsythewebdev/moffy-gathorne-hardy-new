import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (Make sure the paths match your file structure)
import img1 from "../../images/soft-furnishings/JT-Soft-furnishing-A.jpg";
import img2 from "../../images/soft-furnishings/JT-Soft-furnishing-B.jpg";
import img3 from "../../images/soft-furnishings/JT-Soft-furnishing-C.jpg";
import img4 from "../../images/soft-furnishings/JT-Soft-furnishing-D.jpg";
import img5 from "../../images/soft-furnishings/JT-Soft-furnishing-E.jpg";

// Image gallery array (excluding first image)
const remainingImages = [img2, img3, img4, img5];

const ValleyOfTheDolls = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container py-5 mt-5 work-detail">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-start">

          {/* Title & Intro Text */}
          <h2 className="py-2">Valley of the Dolls</h2>
          <p className="lead">
            Exhibition text for Julia Thompson's solo show of the same name at Dries Van Noten's Little House, Los Angeles, July 27th - September 21st, 2024
          </p>

          {/* First Image (Standalone) */}
          <div className="text-center mb-4">
            <img src={img1} alt="Exhibition 1" className="img-fluid" />
          </div>

          {/* Expandable Text Section */}
          <div>
            <p>
              Julia Thompson’s work undermines the reliability of the deixis on which the intelligible lived 
              experience depends. She makes use of candy, syrup, soda, perfume and vodka: decomposing, 
              degradable materials that are prone to slippage, unfixed in space, porous. They lack the defence of a 
              definitive barrier to their environment, troubling the distinction between internal and external, while 
              the repetitive allusion to the mechanism of memory and its stimulants, smell and sound, engenders 
              another kind of porosity that transgresses even that most closely held human idea: that past and 
              present are distinct.
            </p>

            {expanded && (
              <>
                <p>
                  Here is a Valley wherein then is a past made ever-present via its exhumation, all time pregnant with 
                  the rest of itself. This mixed metaphor is intentional, and imagery which seems at first to be opposing 
                  is not so: the very business of remembering involves either a grave-digging or a bringing (back) to 
                  life of an experience whose bizarre status we lack the grammar to describe, that which has passed, 
                  which is not now — to use that word which pulls the rug from under one’s feet and leaves one 
                  breathless and grappling — and in other words, is closer in its condition to being dead.
                </p>

                <p>
                  Julia has referred to the obsessive nature of nostalgia, the affect which renders time a monolith, 
                  that makes the present concomitant with all its pasts, as a “memory disease”, and much of her work 
                  is a struggle against the impossibility of getting outside of a moment in time while existing in the 
                  shadow of this notion. 
                </p>

                <p>
                  Derrida expresses a similar sentiment in his <i>Archive Fever</i> (the original title of which is <i>Mal d’archive</i>, 
                  translatable as pain, sickness, or illness of the archive): that to engage with archives, containers for the 
                  material evidence of lived experience and of memory, is to fetishise them. This fetishisation seems to 
                  presuppose a subject-object relation in our favour, archive passive and we active, but he suggests, as 
                  does Julia in her own way, that what occurs is the obverse of this coin: that we are seduced by the 
                  archive.
                </p>

                <p>
                  The ensuing fever, characterised as the insatiable, endlessly regressive reaching back in time, is 
                  addictive, compulsive, engendering a spiralling through and ultimately past information. Derrida 
                  presents the inability to arrive at that which, temporally, would be an end point, in reverse: as a 
                  search for a beginning, an initial, elusive trace, an urtext that can never be located.
                </p>

                <p>
                  Speaking then of birth, death, burial and exhumation, this articulation of the end point of archival 
                  research (or of attempts at tracing a memory back to its genesis) as a beginning highlights the aporia 
                  inherent in the exercise itself, the detection of a trace always begetting a predecessor, inaccessibility 
                  inherent to notions of origin. What this reveals is the archive’s — and the memory’s — status as 
                  epistemological desert, unable to furnish us with that which it claims to provide, no instance of 
                  information, no feeling, no sense of the atmosphere of a moment in one’s life able to serve as point 
                  of arrival.
                </p>

                <p>
                  Julia of course knows this (in the sense that she feels it), and with this work is parsing it out, each 
                  sculpture an experiment in marking time. She is attempting to form an anatomy of memory, and that 
                  this is a doomed enterprise does not matter. She is not left empty-handed. The attempt itself constitutes 
                  the work, and its impossibility is pre-installed within her practice: it is only by building something 
                  concrete as a stand-in for the unreachable that she can make her own reaching visible.
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
              <img key={index} src={img} alt={`Exhibition ${index + 2}`} className="img-fluid mb-3" />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ValleyOfTheDolls;
