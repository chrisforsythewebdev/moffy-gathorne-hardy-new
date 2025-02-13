import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (Make sure the paths match your file structure)
import img1 from "../../images/autumn-cloud/Faye-Wei-Wei-A.JPG";
import img2 from "../../images/autumn-cloud/Faye-Wei-Wei-B.JPG";
import img3 from "../../images/autumn-cloud/Faye-Wei-Wei-C.JPG";
import img4 from "../../images/autumn-cloud/Faye-Wei-Wei-D.JPG";
import img5 from "../../images/autumn-cloud/Faye-Wei-Wei-E.JPG";

// Image gallery array (excluding first image)
const remainingImages = [img2, img3, img4, img5];

const AutumnCloud = () => {

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
          秋雲, Autumn Cloud          
          </h2> 
          <p className="">
            Exhibition text for Faye Wei Wei's solo show of the same name at 74 Rue Saint-Georges, 1050 Ixelles, Belgium, 24th April - 12th May 2024
          </p>

          {/* First Image (Standalone) */}
          <div className="text-center mb-4">
            <img src={img1} alt="Exhibition 1" className="img-fluid" />
          </div>

          <div>
            <p>
              The lovers in Zamyatin’s novel <i>We</i> are “a twosome, a onesome.” So it is with Faye’s work, where
              even the horses are two, containing each other in some kind of unthought known—not here 
              Christopher Bollas’ conception of the stifled, unthinkable trauma (though in the same way 
              preverbal)—but its opposite: it is a love that knows no possibility of ending, of a state of being 
              other than what is, so it is not self-conscious. It is the being whole beside someone in an intimacy 
              untouched by ideation, feeling without thinking, in other words—innocence.
            </p>


                <p>(Then there is a girl alone, (or even a deer), the thinking subject, perceiving all creation around them)</p>

                <p>
                  The public imagination is so touched by this twosomeness, that as Lana Del Rey put it, in evocation 
                  of Eden, “they say that the world was built for two.” One small world is here made entire, has its 
                  borders shifted to erase an outside universe. This totality expresses itself through Faye’s trees and 
                  dandelions, which are themselves self-sufficient worlds, and the moons, that even in their multitude 
                  are each one an indivisible unit in their roundness and smoothness of surface.
                </p>

                <p>(Dandelions, mind you...)</p>

                <p>
                  Indeed, for the ‘I’ of the enunciation of "If You Go Away", the natural world itself is constructed by 
                  the love between two people; it disintegrates in the absence of this love, its crucial elements ceasing 
                  to be—the sun disappears and birds stop flying. The space inhabited is constituted, between two 
                  people, by its being shared. Most painfully, when they dare tentatively to hope, from “an empty 
                  room, full of empty space” that the object of their love will return, they promise to “make them a 
                  day,” to perform through love the (re)creation of a world. In this day where they’d sail on the sun, 
                  ride on the rain, talk to the trees, and worship the wind, it is the natural world that is offered as an 
                  analogue of their love.
                </p>

                <p>(Perhaps they could have wished, on a last remaining dandelion)</p>

                <p>
                  The soil of nature thus provides such fertile ground for romantic love, and when the love of another 
                  and the love of nature itself are brought into communion with each other, it is in this intervening 
                  space where each kind of love is elevated, has more made of it, is imbued with a sublimity engendered 
                  by their interaction. A scene of the most beautiful garden is only made more beautiful by the presence 
                  of two lovers within it. Nature is lent greater grace when imagined as an idea in the mind of the loved 
                  person; the moon possesses more of its mystical, moonlike beauty — <i>“they’re looking at the same moon 
                  as me”</i> — and the most loved person is made more wholly themselves, that is to say, more perfect, when 
                  set against a backdrop of untouched natural beauty.
                </p>

                <p>
                  Here we experience ourselves again as if before the moment of the great loss, in the garden made 
                  for two, indivisible and entire, before we had need of words to bring poetry into being. The 
                  performance of these two kinds of worship in one gesture is a salve spread across an internal abyss, 
                  is an attempt at regaining what we have lost, and it is this longing that Faye manages so quietly and 
                  so tenderly to articulate. Seldom in her pictures is a loving glance exchanged, an embrace shared, or 
                  a kiss given, without the nearness of a tree or two, a constellation of flowers (or dandelions), a 
                  moon, or a sea of stars.
                </p>

                <p>
                  The twosome-onesomeness of Zamyatin’s lovers is enabled by their escape into the wilderness, is 
                  made possible by their interaction with nature, the prelapsarian present where love can still occur. 
                  Here love is a revolutionary gesture, a subversion of the powers of the hideous cleanliness of the 
                  One State. Where all is blue, transparent, made of glass, their love is a scratch on its surface, grit in 
                  a body of clear water, the smell of sweat and skin penetrating purified air—and in many ways, it is 
                  worship at the temple of the present. Behind the wall, their reason for being was either contribution
                  to the future of the One State, or to its collapse — a contribution that stretched through time
                  eternally, each moment bearing the weight of its consciousness of the next: “The number of
                  numbers is infinite [...] there isn’t a final one. Final things are for children because infinity scares
                  children and it is important that children sleep peacefully at night”.
                </p>

                <p>
                  Nietzsche thought that it was the ability of animals to live, as he put it, unhistorically, that made the 
                  sight of them grazing in a field so moving to us. The animal exists perpetually and only in the 
                  present moment, such that there is no past, there is only one moment that constitutes the entirety of 
                  the world. We are reminded when we see them of what was lost with the acquisition of the phrase 
                  “it was,” before shame, fig leaves, and other silly accoutrements, before we carried with us our pain 
                  about yesterday.
                </p>

                <p>
                  Faye’s paintings are moving, too, in this way—they express a purity of moment, of instance, and 
                  thus gesture at the innocence of prelapsarian being. Her subjects seem to exist outside of any 
                  observable time. If there are no consequences, love is its own reward—much like the fish, which is 
                  not here expected to feed the five thousand but is manifest as its own small miracle. This fish,
                  seemingly submerged, held beneath a threshold, may suggest interment, but unlike in Goya’s “The
                  Burial of the Sardine”, does not serve to ritualise a death or an ending — but modelled on a balloon
                  fish, floating, held down by a lover of Faye’s — in a slippage of meaning, articulates the possibility
                  instead of life’s buoyancy, a performance of the transformative powers of love.
                </p>

                <p>
                  While we may exist outside of the portrayed scene, what Faye achieves through her depictions of 
                  tenderness engenders a closeness to it. Neither nakedness nor intimacy are the objects of shame, so 
                  no protection of modesty, no fig leaf is erected between us and the painting to inhibit our intimacy 
                  with it. She makes of us a twosome, a onesome, inviting us into this relation with her work.
                </p>

                <p>
                  (The dandelion is the trace, like an eyelash, of the wishing that made the contents of the world
                  disperse, like its seeds, bringing time into being with its desire for the future)
                </p>

                <p>
                  But Faye is a lover of dandelions, she has been known to rescue them from the park, keep them safe
                  like treasure in a glass of water, preserve the unity of a small world that would be scattered by ideas
                  about tomorrow, and suspend them in the moment eternal of the painting.
                </p>

          </div>


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

export default AutumnCloud;
