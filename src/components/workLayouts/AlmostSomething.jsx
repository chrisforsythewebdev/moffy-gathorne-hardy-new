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

  return (
    <div className="container py-5 mt-2 work-detail">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-start">

          {/* Title & Intro Text */}
          <h2 
            className="py-2"
            style={{
              fontWeight: 100,
              fontSize: "1.5rem",  // Match Navbar
            }}
          >
            Almost Something
          </h2> 
         <p className="">
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

                <p>
                    It even makes room for the perceived Westernisation of the photographer herself, for the inbetweenness that has resulted from splitting her life between Korea and England.
                </p>

                <p>
                The thematisation of this same inbetweenness can be observed in the photographs she showed for a 2019 Somerset House duo exhibition entitled ‘English as a Second Language’. The photographs were of two of her female friends, one Korean and one English. The online description suggests that the show explores “the artists’ feelings of being lost in translation”, and looking at Hanna’s work, one might easily make an assumption that the relation between these two girls is one entirely of difference, of conflicting identities. What is actually occurring is more complicated: a kind of double-speak is at play that highlights both their difference and similarity, that seems almost to point to what they do not have in common but later reveals what is also almost shared.
                </p>

                <p>
                It is not that Hanna is apolitical, among the projects of her work is undoubtedly the amplification of marginalised voices, but never at the exclusion of other ideas, never in a sense that imposes fixed meaning, and never in the absence of humour. So it is not that anti-colonial readings, queer readings, or feminist readings might not lend insight into one aspect of a highly free and subversive work, but ultimately that they would also impoverish it. There is always in Hanna’s photographs more than one process of subversion occurring, more than one idea at play, and for the recognition of a multiplicity of meanings one idea cannot be given supremacy over another. Identities also evade taxonomy, and that is why this book is not about being Asian, Korean, female, or gay. Rather it is about the gap in the image created by the tabletop; it defers to the freedom in the marginalia, the uncertainty of potential meanings.
                </p>

                <p>
                Therefore anything I have to say about it is almost meaningless —
                </p>

                <p>
                Nietzsche was naughty, but he had a few ideas up his sleeve. Much has been made of his Will to Power, but with its colonial and patriarchal suggestion I am more interested in an adjusted, freer principle: the Will to Almost. Rather than straightforwardly attempting to assimilate what is external as part of oneself, the Will to Almost is to blur the boundary between what is and is not external, to render the border at the personal frontier porous, and in doing so make more of oneself too: to expand infinitely with the possibility enabled by a lack of over-identification, of fixed identity, to feel oneself capable of anything as an agent of endless ways of being, until finally the only statement we can make with certainty is that we are almost something, we are almost —
                </p>
          </div>


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