import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ValleyOfTheDolls = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2><strong>Title:</strong> Valley of the Dolls</h2>
          <p><strong>Exhibition by:</strong> Julia Thompson</p>
          <p><strong>Location:</strong> Little House in Los Angeles</p>
          <p><strong>Dates:</strong> July 27th - September 21st, 2024</p>
          <p><strong>Photography by:</strong> Matthew Kavanagh and Santi Hurtado</p>
          
          <div className="image-gallery my-4 text-center">
            <img src={require("../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-A.jpg")} alt="Exhibition 1" className="img-fluid mb-3" />
            <img src={require("../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-B.jpg")} alt="Exhibition 2" className="img-fluid mb-3" />
            <img src={require("../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-C.jpg")} alt="Exhibition 3" className="img-fluid mb-3" />
            <img src={require("../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-D.jpg")} alt="Exhibition 4" className="img-fluid mb-3" />
            <img src={require("../../images/valley-of-the-dolls/JT-Valley-of-the-Dolls-E.jpg")} alt="Exhibition 5" className="img-fluid mb-3" />
          </div>
          
          <h3>Exhibition Overview</h3>
          <p>
            Julia Thompson’s solo show, <em>Valley of the Dolls</em>, explores themes of reliability and deixis, 
            questioning the intelligibility of lived experiences. She uses materials such as candy, syrup, soda, 
            perfume, and vodka, which are prone to slippage and degradation. These elements exist in porous spaces, 
            resisting definitive barriers.
          </p>
          <p>
            Her works incorporate synthetic and organic elements that invite interaction, yet simultaneously repel 
            and dissolve under physical contact. Thompson is interested in how we attribute meaning to objects, 
            words, and sensations—how certainty can be misplaced, and understanding remains elusive.
          </p>
          
          <h3>Artist Statement</h3>
          <blockquote>
            "There is something about viscosity, the way certain substances hold together while others separate. 
            I like to think of this tension when constructing a piece—where the layers hold but might eventually break apart."
          </blockquote>
          <p>
            By working with resin, latex, and found objects, Thompson creates sculptures that engage with transience, 
            drawing connections between personal history, societal narratives, and the fragility of memory.
          </p>
          
          <h3>Featured Works</h3>
          <ul>
            <li><strong>Sweet Nothings</strong> – A suspended installation of crystallized sugar sculptures, melting over time.</li>
            <li><strong>Plastic Devotion</strong> – A resin-cast mannequin infused with perfume and pigment, referencing beauty standards and artificiality.</li>
            <li><strong>Drip Feed</strong> – A series of hanging IV bags filled with neon-colored syrup, slowly releasing liquid onto a mirrored surface.</li>
            <li><strong>The Perfume Counter</strong> – An interactive display of vintage perfume bottles filled with unconventional, decaying scents.</li>
          </ul>
          
          <h3>Critical Reception</h3>
          <p>
            Critics have drawn comparisons between <em>Valley of the Dolls</em> and the 1966 novel by Jacqueline Susann, 
            noting the exhibition’s shared concerns with excess, illusion, and disintegration. Thompson's work is an 
            inquiry into both material and metaphorical instability—her sculptures seem to ask: what happens when the familiar starts to collapse?
          </p>
          
          <h3>Curator’s Note</h3>
          <p>
            "Thompson’s ability to balance attraction and repulsion in her materials creates an emotional and sensory push-pull. 
            The work invites audiences in, only to remind them of its impermanence." – Maria Levinson, Curator
          </p>
          
          <h3>Visiting Information</h3>
          <p><strong>Gallery Hours:</strong></p>
          <ul>
            <li>Tuesday – Saturday: 11 AM – 6 PM</li>
            <li>Sunday: 12 PM – 4 PM</li>
            <li>Closed Mondays</li>
          </ul>
          
          <p><strong>Address:</strong> Little House Gallery, 8498 Sunset Blvd, Los Angeles, CA 90069</p>
          <p><strong>For press inquiries:</strong> info@littlehousegallery.com</p>
        </div>
      </div>
    </div>
  );
};

export default ValleyOfTheDolls;
