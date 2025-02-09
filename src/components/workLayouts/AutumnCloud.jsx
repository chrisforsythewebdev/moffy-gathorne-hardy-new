import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AutumnCloud = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2><strong>Title:</strong> 秋雲, Autumn Cloud</h2>
          <p><strong>Exhibition by:</strong> Faye Wei Wei</p>
          <p><strong>Location:</strong> The Rosewood Gallery, London</p>
          <p><strong>Dates:</strong> March 10th - April 22nd, 2024</p>
          <p><strong>Photography by:</strong> Luca Morelli and Hannah Li</p>
          
          <div className="image-gallery my-4 text-center">
            <img src={require("../../images/autumn-cloud/Faye-Wei-Wei-A.JPG")} alt="Exhibition 1" className="img-fluid mb-3" />
            <img src={require("../../images/autumn-cloud/Faye-Wei-Wei-B.JPG")} alt="Exhibition 2" className="img-fluid mb-3" />
            <img src={require("../../images/autumn-cloud/Faye-Wei-Wei-C.JPG")} alt="Exhibition 3" className="img-fluid mb-3" />
            <img src={require("../../images/autumn-cloud/Faye-Wei-Wei-D.JPG")} alt="Exhibition 4" className="img-fluid mb-3" />
            <img src={require("../../images/autumn-cloud/Faye-Wei-Wei-E.JPG")} alt="Exhibition 5" className="img-fluid mb-3" />
          </div>
          
          <h3>Exhibition Overview</h3>
          <p>
            Faye Wei Wei’s latest exhibition, <em>Autumn Cloud</em>, is a poetic exploration of fleeting emotions, mythologies, and 
            the delicate balance between past and present. Her large-scale paintings, rich in allegory and movement, embrace themes of 
            nostalgia, longing, and transformation.
          </p>
          <p>
            Wei Wei’s practice is deeply rooted in storytelling, drawing from literary, historical, and dreamlike imagery. The works in 
            <em>Autumn Cloud</em> layer classical motifs with contemporary flourishes—figures suspended in moments of quiet tension, 
            animals imbued with symbolic weight, and landscapes dissolving into soft abstraction.
          </p>
          
          <h3>Artist Statement</h3>
          <blockquote>
            "Painting is my way of writing poetry. I want my brush to capture the warmth of an embrace, the weight of a memory, the 
            softness of a sigh. Each piece is a whisper from another time, another world."
          </blockquote>
          <p>
            With her signature expressive strokes and lyrical compositions, Wei Wei invites viewers into a deeply personal yet universal 
            space—one that is both intimate and expansive, evoking a sense of longing that lingers beyond the canvas.
          </p>
          
          <h3>Featured Works</h3>
          <ul>
            <li><strong>Autumn’s Breath</strong> – A large-scale oil painting featuring intertwined figures dissolving into golden hues.</li>
            <li><strong>The Weeping Moon</strong> – A melancholic yet radiant composition of a solitary figure gazing at the sky, layered with celestial motifs.</li>
            <li><strong>Between the Waves</strong> – A dreamlike seascape where mythological creatures emerge from shifting tides.</li>
            <li><strong>Chamber of Echoes</strong> – An immersive installation pairing painting with an ambient soundscape, evoking whispers of past conversations.</li>
          </ul>
          
          <h3>Critical Reception</h3>
          <p>
            Critics have hailed <em>Autumn Cloud</em> as Wei Wei’s most introspective body of work to date, praising its balance of precision and fluidity. 
            Art historian Isabel Carter describes the show as "a luminous meditation on memory and the passage of time, where each brushstroke reads 
            like a stanza in an unwritten poem."
          </p>
          <p>
            Wei Wei’s ability to create a dialogue between form, color, and movement has been compared to the lyrical qualities of Renaissance 
            frescoes, reimagined through a contemporary lens.
          </p>
          
          <h3>Curator’s Note</h3>
          <p>
            "Wei Wei paints with the urgency of someone trying to hold onto something ephemeral. Her canvases breathe, hum, and linger—imbued 
            with a sense of quiet magic that only reveals itself fully with time." – Jonathan Leclair, Curator
          </p>
          
          <h3>Visiting Information</h3>
          <p><strong>Gallery Hours:</strong></p>
          <ul>
            <li>Tuesday – Saturday: 11 AM – 7 PM</li>
            <li>Sunday: 12 PM – 5 PM</li>
            <li>Closed Mondays</li>
          </ul>
          
          <p><strong>Address:</strong> The Rosewood Gallery, 25 Kensington High Street, London, W8 5NP</p>
          <p><strong>For press inquiries:</strong> press@rosewoodgallery.com</p>
        </div>
      </div>
    </div>
  );
};

export default AutumnCloud;
