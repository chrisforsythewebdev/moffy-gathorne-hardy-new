import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images
import img1 from "../../images/morena/1.png";
import img2 from "../../images/morena/2.png";
import img3 from "../../images/morena/3.png";
import img4 from "../../images/morena/4.png";
import img5 from "../../images/morena/5.png";
import img6 from "../../images/morena/6.png";
import img7 from "../../images/morena/7.png";
import img8 from "../../images/morena/8.png";

// Image gallery array (excluding first image for layout structure)
const remainingImages = [img2, img3, img4, img5, img6, img7, img8];

const Morena = () => {
  const [expanded, setExpanded] = useState(false);

// Full text content
const fullText = `
I once dreamt about Japan before going there. Sultry gardens which weren’t mauve in colour but
somehow were in the impression they produced in me, pale flowers like paper growing up silky sexy
in cold blades of grass, a boundary between landscape and sky that seemed to invite transgression.

   It was one of those dreams that lingers, and on the basis of it I formed an idea about the place, less
 relating to conceptions of its physical reality than what this physicality suggested; what new notions
 were to be dawned upon in the passing of a little green leaf — romantic ideas of this nature of course
 encouraged by a ritualistic re-watching of Spirited Away; I didn’t jump but was pushed.
 
 With the vague expectation of disappointment attendant on poetics of this kind, I boarded the
 plane, pyjamas and vodka orange, neck pillow, duty free lipstick — accoutrements to distract while
 leaping into the vast but familiar void — and all such good fun.
 
 Two days of night, the green of Hakone, the rushing of trains, spiders of kana and kanji, steam from
 an onsen like that of hot soup, Hanna — perceived in no order — and two me’s on their 23rd
 birthday, a mirror between them, waving across the universe, universe.
 
 And I suppose, having heard I was coming, my dream arose from whence it rst emerged and came
 to meet me — a soft shapeless envelope, I slipping in — colouring the tracks that carried us to
 Tokyo, disappointment nowhere to be seen. Dissociation like Sisyphus begins again, as it is apt to
 do when observing, across the plane of a low wooden table, a crab still moving in a bowl of ice. And
 then on the street, just in time for evening drinks, one is reminded of the power of eyesight to
 overcome distance, gazing at the higher and then highest point of the buildings that loom above,
 transported through internal space.
 
 Having watched Lost in Translation and visited the Studio Ghibli museum, while life revealed itself
 as imitating art (as it so often does to those willing to play), we wondered through the meta-tropolis
 that we had created for ourselves in the spirit of anti-mimesis; and many cerebral games were to
 follow.
 
 But after all, there was work to be done, lm to be shot, locations to be found; poetic musings were
 to be left behind, it was time to step into my body and take action. A departure had already been
 made — Hanna, and as a result, I having been commissioned to shoot this story — felt that we had
 been given the gift of an invitation to come up with something new.
 
 The witless and boring spiritual laziness of many powerful white male photographers taking
 pictures of lithe, vulnerable, naked nymphets now has an advocate in the self-professed intelligent
 and artistic; images of this kind now being passed o as ‘ironic’, or as ‘remarks’ on those that came 
 before them, allowing for people to give free reign to their agendas of manipulation (and
 unoriginality) and dress it up as high art.
 
The line between empowerment and disempowerment has become so blurred, the line between
feminism and exploitation, that rehashed conversations about what it all means are now as mundane
and hackneyed as the photographs themselves; but it is this interface that me and Hanna’s pictures
inadvertently come into contact with.

Indeed, social activism isn’t something that occurs to either of us when taking a photograph, we
want to make something fun, visually interesting, maybe even beautiful, but which doesn’t take itself
too seriously; however due to the vast discourse on sexualised imagery and exploitation of models
that is occurring, whatever one creates necessarily becomes an addition to the discussion — and
although we make no conscious eort to subvert these photographers or the photographs they take
— it is a byproduct of the process.

So it seems to me amusing that, considering our leanings towards mucking about and having a
laugh, people may read this kind of meaning into the images, and in their attempt to nd a moral
behind them, take for social commentary pictures of me naked on the loo in a hotel room in Japan
(imagine the possibilities for analysis !)

What seems even more amusing is that at rst glance the pictures could almost be the very thing we
may seem to be subverting, could be taken by a white male photographer of a reticent young model,
but are actually by a Korean lesbian of her cross eyed mate getting pissed on holiday, who, herself
having a penchant for a bit of artistic porn — (or erotic art, depending on whether you’re explaining
what you do to your grandma or someone you just met in the long and degrading queue for a Dazed
and Confused party) — doesn’t need twice asking to get her kit off.

The idea, then, of these photographs being regarded in this light is both hilarious, and a solid
testament to the idea that all imagery invites interpretation. What a wonderful joke to play on those
who ponticate about the meaning behind things, who think they see what others cannot —
because, in fact, it isn’t there — although remaining constant is the joke itself, which unspoken and
barely even thought, is there between two people who are close to each other, and is a profound and
lovely business of its own. Of course, if this is seen and enjoyed by the spectator, we welcome their
addition to our club of two, and understand that there may be some unrecognised meaning,
witnessed by the audience, that is integral despite our lack of awareness — and in which case, the
joke is also on us. 

This is, after all, my area of expertise — having (again, accidentally) carved out a niche for myself as
nude model extraordinaire — whenever nakedness is required, my phone rings, and all because I’m
one of the very few who’s up for it. (I believe this is called winning by default !) The more
compromising the position the better, and just in case the fact of the subject (me) being quirky,
honest, and raw isn’t obvious enough for some viewers, perhaps a cigarette will be employed, or
some kind of makeup that suggests I’ve been crying. Of course if it funds my Hungarian rescue dog’s
anti-anxiety medication and my compulsive spending on stationary, cleaning products and
homeopathic remedies I am more than happy to oblige.

And then if I can use these photographs as some kind of reclaiming-my-own-body feminist
statement, then I am most certainly killing two birds with one stone; an unforeseen benet of taking
your clothes o for money (which you might call Feminism for the Tarty and Lazy/ Challenging the
Patriarchy for Dummies... I’ll come up with something catchier later.)

Indeed, if I were to have a ‘signature look’, to use the parlance of Fashion, it would be nudity (along
with a lazy eye, the industry has been very generous with me.)

Faced with the boredom of most other fashion shoots — the humourless, ruthless ambition of the
people around me, the pressure not to eat — what is wonderful about working with Hanna is that
all I’m required to do if get my unwaxed fanny out and shake my wig about like a stripper having a
nervous breakdown; it’s not much to ask ! And if I’ve just broken up with my boyfriend, dropped out
of university, am in the throes of stress-induced IBS and have plenty of my own pent up madness to
act out, so much the better. Perhaps I’m not a method actress as such, but I may well be a method
model, which is a noble pursuit in itself !

Indeed, a special kind of voyeurism is allowed for if the model and photographer are best friends,
and in between calling room service to take pictures of us in our halloween outts rinsing the
minibar, I can be as revolting and as absurd as I am capable of, which is pure joy and freedom.
However this is a dierent kind of freedom to the mental considerations that take place after the
fact, post-shoot, in the quiet of my own mind, following the unconscious acting out that took place,
where I attempt to make sense of what it actually means to photograph and be photographed.
Long considered is the idea that the experiencing of art results in the removal of oneself from the
body. As, in its unparalleled creativity, the unconscious mind uses metaphor and symbolism in its
construction of dreams — (a falling tooth that evaporates in one’s grasp, a moment of nakedness in a
dusty classroom of the past) — so we nd our template for the creation of art; the physical emblem 
being a mirror for the celestial, the ephemeral; the result of which is an elusive smoke that —
precisely not accessible to touch — can only be conceived of. Thus, this elevated ideation allows for
a transcendence of the self to a realm beyond the material.

This principle, of course, applies to all artistic mediums — but most importantly, for the purposes of
this conversation — photography; and the question is complicated vastly when the photograph one
is viewing is of oneself.

It was Sartre’s thesis that one becomes aware of oneself at the moment of becoming the object of the
‘Other’s’ regard; his famous example being the ‘Peeping Tom’, who hearing footsteps behind him as
he is caught at the keyhole, feels himself for the rst time most agonizingly and essentially in his own
being. And as Tom — in this way, experiences himself, across the corridor — so one is both bought
close to and distanced from that slippery ‘I’ at the moment of confronting its photographic
representation. Indeed, in this moment, that old internal universe again comes into being, the
universe that one may attempt to traverse, but which can only end in the cyclical self of both subject
and object — I see myself, and I see myself, and I see myself too. Though while my own fears of
disembodiment are both quelled and rearmed, I am lucky with Hanna that I recognise my own
body, because both knowing and loving me, she does not attempt to distort it; both of us safe in the
assumption of the shared language that through the years of photographic narrative has developed
between us, a correspondence of looks that only love can transform the meaning of – the joy of
shorthand!

And yet, art — in both its creation and its reception — is a thoroughly physical preoccupation.
Although a work of art may be considered by the mind, it is the eyes which perceive it, and allow it,
snake like, to insinuate itself into the consciousness of the viewer; it cannot be denied that our
experience of things beautiful or otherwise is rooted in sensory perception and is therefore a bodily
aair. Ultimately, then, despite a distaste for the corruption of the sublime by the literal, one cannot
bypass entirely the weighty and the actual, which despite their clumsiness, are comforting in that
they remind us of our humanity.

Since the body is integral to both the making and the viewing of photographs, a relationship is
forged — of its own volition — between my body (present in the picture), Hanna’s body (the hand
that holds the camera), and yours (the eyes that perceive the image); each of us contained in the
mind of the other, forming a kind of holy trinity, a circle which is both whole and complete.
Indeed, not only is it the physical aspect of our being which grants us access to art and the ideas it
embodies — but art, in return, is capable of eliciting a sensual response in us; as Cézanne observes: 
“A picture contains within itself even the smell of the landscape.” Those familiar with the madeleine
passage in Proust’s Swann’s Way (the dipping in tea of a sponge cake, which employing all the
senses, recalls to the narrator a life time of memories), will themselves have tasted the cake described, and in sympathy with him, had memories of their own recalled to them. Such is the
expectation of this process of recollection and recognition in the act of consuming art, that we send
an advanced party; projecting memories and ideas of our own onto that which resembles them in
the work, and in return nding exactly what we were searching for in it. And in this ability of a piece
of art to precipitate bodily sensations is one essential implication: that not only does the concrete
external give rise to ideas abstract, but that these ideas can conversely inuence the physical world
— an invisible hand moving a glass across a table — two planes of existence interacting.

Despite traditional theories of language — that the process of naming is a way of reconciling the
physical object with one’s internal conception of it, a way of bridging the gap between them — it is
my feeling that in the construction of a word, a third world is created, which refers neither to the
outer form nor the inner content, but which occupies a space all of its own; and has an essence
independent of the sense we intended for it. As the poet Mallarmé put it: “I say: a flower! And [...]
musically rises an idea itself and sweet, the one absent from every bouquet.”

This way of seeing language can be applied also to photography. Just as the word allows for the
world of the physical article and that of the internal representation to converge and form a third —
independent of the rst two — so the photograph distils life in such a way that the emergence of
new realities is an inevitability, making of the photograph an object of undecided meaning. All
interpretations of it, therefore, are left to the strange and beautiful workings of chance. And so,
photographs do not profess to tell the future, and nor in their assumed nality, do they place limits
on it; but instead invite innite association, giving all things the potential of the Proustian
Madeleine cake.

A Korean and English girl — bought together in an intimacy which dees the distance they have
travelled to nd each other — on the 36th oor of a strange hotel, while somewhere across Tokyo a
crab still moves in a bowl of ice; and a taste is recalled to the viewer of a piece of fruit they ate one
summer, from the colour of a cherry red stocking draped over a chair in the background. 
`;  

  return (
    <div className="container py-5 mt-2 work-detail">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-start">
          
          {/* Title & Intro Text */}
          <h2 className="py-2 text-center">Morena</h2>
          <p className="lead text-center">
            Introductory essay to the 6th issue of <i>Morena</i> magazine, photographed by Hanna Moon
          </p>
  
          {/* First Image (Standalone) */}
          <div className="text-center mb-4">
            <img src={img1} alt="Morena 1" className="img-fluid" style={{ maxWidth: "100%" }} />
          </div>
  
          {/* Expandable Text Section - Keeps width consistent */}
          <div className="mx-auto text-start" style={{ maxWidth: "700px", width: "100%" }}>
            <p style={{ whiteSpace: "pre-line" }}>
              {expanded ? fullText : fullText.slice(0, 500) + "..."}
            </p>
            <div className="text-center">
              <button
                className="btn btn-link p-0"
                onClick={() => setExpanded(!expanded)}
                style={{ fontSize: "1rem", textDecoration: "underline", color: "black" }}
              >
                {expanded ? "Collapse" : "Read More"}
              </button>
            </div>
          </div>
  
          {/* Remaining Images */}
          <div className="image-gallery my-4 text-center">
            {remainingImages.map((img, index) => (
              <img key={index} src={img} alt={`Morena ${index + 2}`} className="img-fluid mb-3" />
            ))}
          </div>
  
        </div>
      </div>
    </div>
  );
};

export default Morena;
