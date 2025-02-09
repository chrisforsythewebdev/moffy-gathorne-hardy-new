import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SoftFurnishing = () => {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h2><strong>Title:</strong> Soft Furnishing</h2>
          <p><strong>Exhibition by:</strong> Eleanor Davies</p>
          <p><strong>Location:</strong> The Basement Gallery, London</p>
          <p><strong>Dates:</strong> October 5th - December 12th, 2024</p>
          <p><strong>Photography by:</strong> Daniel Groves and Annabelle Finch</p>
          
          <div className="image-gallery my-4 text-center">
            <img src={require("../../images/soft-furnishings/JT-Soft-furnishing-A.jpg")} alt="Exhibition 1" className="img-fluid mb-3" />
            <img src={require("../../images/soft-furnishings/JT-Soft-furnishing-B.jpg")} alt="Exhibition 2" className="img-fluid mb-3" />
            <img src={require("../../images/soft-furnishings/JT-Soft-furnishing-C.jpg")} alt="Exhibition 3" className="img-fluid mb-3" />
            <img src={require("../../images/soft-furnishings/JT-Soft-furnishing-D.jpg")} alt="Exhibition 4" className="img-fluid mb-3" />
            <img src={require("../../images/soft-furnishings/JT-Soft-furnishing-E.jpg")} alt="Exhibition 5" className="img-fluid mb-3" />
          </div>
          
          <h3>Exhibition Overview</h3>
          <p>
            Eleanor Davies’ solo exhibition, <em>Soft Furnishing</em>, examines the intersection of domesticity, consumption, 
            and the aesthetics of care. By repurposing materials typically associated with comfort—quilts, upholstery, curtains—Davies 
            challenges the expectations of home as a stable, secure environment. Instead, her work explores the tensions between 
            protection and exposure, sentimentality and detachment.
          </p>
          <p>
            Her sculptural installations juxtapose industrial objects with delicate textiles, revealing the contradictions embedded 
            in everyday materials. Threadbare fabrics, unfinished seams, and fraying edges hint at the fragility of the familiar, while 
            exaggerated padding and oversized stitches evoke a sense of excess, insulation, and overprotection.
          </p>
          
          <h3>Artist Statement</h3>
          <blockquote>
            "I am drawn to the way soft materials absorb and conceal. They can be comforting but also suffocating, concealing damage beneath 
            their surface. In this exhibition, I think about how care manifests in material form—how we wrap, bind, and reinforce the objects 
            and spaces around us."
          </blockquote>
          <p>
            Through her work, Davies questions the ways in which softness is socially coded—often associated with femininity, 
            vulnerability, and weakness—and how these associations can be subverted or amplified through form and context.
          </p>
          
          <h3>Featured Works</h3>
          <ul>
            <li><strong>Padded Room</strong> – A fully upholstered gallery space, transforming the environment into a surreal domestic cocoon.</li>
            <li><strong>Unravel</strong> – A series of draped and torn curtains, their threads deliberately loosened to create a sense of impermanence.</li>
            <li><strong>Stuffed Silence</strong> – A sculptural installation of overfilled cushions arranged to block passageways, disrupting movement.</li>
            <li><strong>Worn Out</strong> – A textile-based sound piece incorporating the amplified rustling of old bedsheets, evoking the restless energy of sleep.</li>
          </ul>
          
          <h3>Critical Reception</h3>
          <p>
            Critics have praised <em>Soft Furnishing</em> for its ability to merge the physical and psychological dimensions of materiality. 
            Davies' work has been described as "both inviting and unsettling, pushing against the limits of what comfort can mean."
          </p>
          <p>
            Her use of domestic materials to create architectural interventions speaks to broader conversations about labor, care, and 
            the unseen work that maintains the spaces we live in.
          </p>
          
          <h3>Curator’s Note</h3>
          <p>
            "Davies’ practice navigates a delicate balance between nostalgia and discomfort. Her work lures us in with the promise of softness, 
            only to reveal the instability beneath." – Harriet Zhou, Curator
          </p>
          
          <h3>Visiting Information</h3>
          <p><strong>Gallery Hours:</strong></p>
          <ul>
            <li>Wednesday – Saturday: 10 AM – 7 PM</li>
            <li>Sunday: 12 PM – 5 PM</li>
            <li>Closed Mondays & Tuesdays</li>
          </ul>
          
          <p><strong>Address:</strong> The Basement Gallery, 14 Redchurch Street, London, E2 7DP</p>
          <p><strong>For press inquiries:</strong> press@basementgallery.co.uk</p>
        </div>
      </div>
    </div>
  );
};

export default SoftFurnishing;
