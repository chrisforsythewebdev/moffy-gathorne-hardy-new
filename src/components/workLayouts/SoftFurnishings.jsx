import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (Make sure the paths match your file structure)
import img1 from "../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-B.jpg";
import img2 from "../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-C.jpg";
import img3 from "../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-D.jpg";
import img4 from "../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-E.jpg";

// Image gallery array (excluding first image)
const remainingImages = [img2, img3, img4];

const SoftFurnishing = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container py-5 mt-5 work-detail">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-start">

          {/* Title & Intro Text */}
          <h2 className="py-2">Soft Furnishing</h2>
          <p className="lead">
            Exhibition text for Julia Thompson’s solo show of the same name at Incubator, London, September 20th - October 5th, 2023
          </p>

          {/* First Image (Standalone) */}
          <div className="text-center mb-4">
            <img src={img1} alt="Exhibition 1" className="img-fluid" />
          </div>

          {/* Expandable Text Section */}
          <div>
            <p>
              A Julia Thompson sculpture is the thing itself. Its primary referent is the site of its own 
              decaying, transforming physicality. Her works are not just analogues for the human — specifically 
              female, wounded — body, but are subject to the same effects imposed by the environment they 
              inhabit, enacting in their own way the mechanisms of the living organism. They are not a discussion 
              of, not a reference to, but the very thing.
            </p>

            {expanded && (
              <>
                <p>
                  Composed largely of edible materials, sweets, syrups, fizzy drinks, they undergo the 
                  processes of degradation and disintegration experienced both by the mortal body, and by the food 
                  that is needed for its survival. Owing to the porosity of their own frail borders, they are absorbent to 
                  what is around them, and in this way, the slippage, the oozing, the falling apart, simulates both the 
                  digestion of such food by the body, and its alternative: decomposition by the elements of heat, light, 
                  bacteria, and the insistence of time that occurs when it is rejected by the subject of disordered 
                  eating.
                </p>

                <p>
                  The consensus is that food, before its consumption, can be beautiful. The existence of food 
                  dyes would suggest it. The old masters were certainly keen on it. Yet it is rendered offensive upon 
                  its entrance to a body, its status altered both immediately and irrevocably. It is a post-state that, like 
                  death, is irreversible. Doubly true when it has been purged or excreted, matter that has made these 
                  two journeys of ingestion and expulsion is elevated to the stuff of obscenity.
                </p>

                <p>
                  The culmination of our anxieties surrounding embodiment, here is the material evidence of our 
                  human wretchedness, the shadow self, made solid, as if contained within the gesture of defecation is 
                  some essential truth about the shameful nature of our existence; the secret we cannot keep and are 
                  fated to reveal again and again as the body wills it.
                </p>

                <p>
                  The feminine love object, having been abandoned, Roland Barthes suggests, must remain 
                  motionless at the location of her heartbreak, for therein lies her femininity: “Woman is sedentary, 
                  Man hunts, journeys; Woman is faithful (she waits). It is Woman who gives shape to absence 
                  [...] for she has time to do so [...] expressing immobility [...] the man who waits and suffers from his 
                  waiting is miraculously feminised.” Hence, much like the food so admired before it is displaced, 
                  swallowed and digested, so too the symbol of Woman is the focus of admiration only in the state of 
                  inertia that female palatability consists in. Movement is not feminine, and even in pain, inaction is 
                  expected of her.
                </p>

                <p>
                  “He that has eyes to see and ears to hear may convince himself that no mortal can keep a 
                  secret. If his lips are silent, he chatters with his fingertips; betrayal oozes out of him at every pore,” 
                  says Freud. The oozing of Julia’s sculptures then - specifically her teeth, which wrenched from the 
                  comfort of the shared space of the mouth, stacked atop each other, abstracted and thus devoiced — 
                  has consequences for their status as containers.
                </p>

                <p>
                  While they absorb particles from their environment, so too their particles permeate the space 
                  around them. Try as they might, their attempts at containment ultimately fail; and their smell is an 
                  embodied, experiential reminder of this mechanism to the visitor, of the penetration of their own 
                  animal boundary.
                </p>

                <p>
                  Julia’s teeth may not be able to arrange themselves in rows so as to scream, but they find 
                  other modes of communication, oozing with the secret that insists on its own revelation. By use of 
                  the materials, the artist has given them this liberty. While bottles that hold perfume traditionally act 
                  as barriers, revealing the essence of their contents only upon the breaking of a seal, Julia’s function 
                  to announce both their visible presence and their smell concomitantly.
                </p>

                <p>
                  Artemisia so loved Mausolus that after his death she regularly imbibed his ashes, rendering 
                  herself living tomb by the repetitive gesture of swallowing her grief. These sculptures, then, enact a 
                  kind of reversal: a dispersal in all directions of the despair experienced by the subject of oppressive 
                  male expectation, of the female body that grieves its freedom.
                </p>

                <p>
                  These objects, detached torsos, breasts and stomachs, teeth, perfume bottles - not 
                  undomesticated but de-domesticated, defamiliarised — are made useless. These teeth do not enable 
                  speaking or eating, these breasts fail to transform into tits for another’s arousal, these bottles, 
                  emblematic accoutrements of female social and sexual existence, are unable to perfume the body. 
                </p>

                <p>
                  We are dealing ultimately with questions of inside and outside, of here and there, deixis of location 
                  that have implications for identity, that differentiate between beauty and obscenity. But Julia’s 
                  sculptures are neither an in nor an out — instead, inscribed on their surface is a sustained tension 
                  between these two states of being, a troubling of their mutual exclusion.
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

export default SoftFurnishing;
