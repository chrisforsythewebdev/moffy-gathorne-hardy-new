import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import images (Make sure the paths match your file structure)
import img1 from "../../images/5dollars3minutes/1.png";
import img2 from "../../images/5dollars3minutes/2.png";
import img3 from "../../images/5dollars3minutes/3.png";
import img4 from "../../images/5dollars3minutes/4.png";
import img5 from "../../images/5dollars3minutes/5.png";
import img6 from "../../images/5dollars3minutes/6.png";
import img7 from "../../images/5dollars3minutes/7.png";
import img8 from "../../images/5dollars3minutes/8.png";
import img9 from "../../images/5dollars3minutes/9.png";
import img10 from "../../images/5dollars3minutes/10.png";

// Image gallery array (excluding first image)
const remainingImages = [img2, img3, img4, img5, img6, img7, img8, img9, img10];

const FiveDollarsThreeMinutes = () => {
  const [expanded, setExpanded] = useState(false);
   // The full text content
 const fullText = `Hanna and I discovered Cammie Toloui’s work when we came across her book, “5 Dollars for 3
 minutes” at Arles photography festival. Having lamented the slightly slim pickings that year, we
 were excited by our nding, and sat hunched together reading her essay at the back of the display
 copy. We both read it again, separately, when we got home. Hanna got in touch and asked if she
 could publish some of her photographs here, and we decided we would do a kind of interview to go
 with them, a conversation between me and Cammie.
 
 Cammie is warm, funny, and generous with her time. When we speak, she is at home in Portland,
 Oregon. Originally from San Francisco, and after years of living all over the place — Brighton,
 Lewes, Iowa, Russia — she has moved back to the West Coast. She has done this, she tells me,
 because “it’s more friendly to people like me”. As our conversation continues, I get a sense of what
 she is referring to, and perceive what strikes me as the skill of someone who knows how to make do
 with the objects of identication that are available to them, however disparate or incongruous, and
 use them to construct and assert self-hood, a kind of patch-working of identity. Having read her
 account of growing up with a strict, religious Iranian father in what she lovingly describes to me as
 her “subculture paradise” of San Francisco, I ask her how Iranian she feels, and how American. The
 answer is that she inhabits a “limbo state, where I grew up in America, but culturally at home it was
 so dierent, that it set me apart from my friends and they knew I was dierent, and yet my Iranian
 family didn’t see me as Iranian”. In England she felt American due to “the contrast of living there”,
 regarded by people not as English and therefore as American. Now back in the US she feels more
 European, and “the through-line through all of it is the Iranian thing, which is always a heartbeat
 within me”.
 
 During lockdown her and her husband started learning Farsi together over Zoom, an endeavour
 that she designates as an attempt to “shore up that Persian part of me”. Cooking Iranian food is
 another “connection to being Persian”. Alluding to the death of Mahsa Amini and the ensuing
 protests, she says “I am not from Iran, but when I see what’s going on there I feel like I am part of
 those women’s struggles, it’s a funny thing, cultural identity, where it lives in your life, and in your
 body”. She had been attending some of these protests, and found that in a crowd of thousands of
 Iranians, she felt she couldn’t “meet them” due to her lack of language, a “missing piece”, which made
 her feel lonely. She pauses, and then seems to conclude: “you get it where you can nd it, so for me
 it’s in the cooking, and in the learning of the language”.
 
 Having been given a little insight into what seemed to me a kind of bricolage practice, what
 Cammie calls getting it where you can nd it, several things occurred to me. The rst was the extent
 to which her identity seems not only uid, context-dependant, but often dened in negative terms, in 
 relation to an opposite. Again invoking the signicance of language for cultural identity, she talks
 about being “read as foreign” in many of the spaces she occupies, where her status as an outsider —
 an other — seems to persist despite changing landscapes and subjection to diering perceptions.
 The second thing that struck me was that this patch-working was a testament to both her creativity
 and determination in the face of struggle — that the learning of Farsi over an app on her computer
 in the middle of a pandemic, the ability to cook Iranian food in her home — these were the tools at
 her disposal, and she was going to utilise them. The use of food (and I learn later, her camera) as
 means of communion with self and communication with others, available when a uency in Farsi
 and many other things are not, seemed to me to be a salve for internal absence and yearning, a
 mechanism for bridging gaps in communication, and to reect both the catalyst for and approach
 towards much of the creative and artistic output of someone who identies, she tells me, as a
 “storyteller”. There is then a two-fold element of opposition inherent to Cammie’s practice, the
 opposition of being othered, and the opposition involved in the struggle against one’s
 circumstances, which seem to intersect at their point of origin: not being in possession of certain
 identifying markers or modes of assimilation engenders the necessity for particular kinds of action.
 In the essay at the back her book, Cammie writes “I always felt like I was the weird, perverted kid in
 my family and eventually I proudly took this on as part of my identity”, experiencing outsiderdom
 within her own family of origin and making something of it that would be all her own. Her sexual
 and creative awakenings both seem to have been borne out of struggle against parental (and
 religious) gures. Having been told by her father that God could hear all of her thoughts and saw
 everything that she did, she writes, “as I was masturbating in bed, I thought about how God knew
 what I was doing with my ngers and in my mind I said, “Fuck you,” to him (since he was listening)
 and had an instant orgasm from the excitement of breaking that scary taboo.” She tells me a story
 about driving to the petrol station with her father and hearing a Black Sabbath song for the rst
 time on the radio. Much to old dad’s dismay, who thought “Satan had taken over” her body, “it lled
 me, I knew that this was me [...] rock and roll was my rebellion and way out”. Music, she tells me,
 “spoke to me so clearly, from the radio”, and during her parents’ divorce, which “made me realise that
 the oppressive religious culture in my house was not for me”, rock and roll gave her something to
 “grasp on to”. We learn, from reading her, that her photographic impulse was only strengthened by
 an episode at the grocery story where, having stolen a roll of lm, she was discovered by her mother,
 driven back to the shop, and forced to apologise to the manager. This, she says, did not deter her
 from future “deviant deeds for the sake of photography”. Au contraire!
 
 On second reading I wonder if a connection may have been xed in her mind at this moment
 between immoral or ungodly behaviour and photography. The supermarket scene resembles a kind 
 of confession after sin, and the potential for eroticism in the confessional dynamic seems to me to be
 borne out, later, in the Private Pleasures booth at the strip club where she worked, the Lusty Lady,
 where customers would pay ve dollars for three minutes of her time (hence the book’s title),
 revealing to her their desires and often telling her stories about their own deviant sexual practices,
 despite having paid, in theory, to watch her do her thing. Her documentation of the sex-working
 space, that lent such inspiration for her creative pursuits, furnished her with the opportunity for
 plenty more fuck yous to various gendered authority gures, celestial or otherwise, allowing her to
 struggle against the Father and God who are in some ways interchangeable. We talk for a while
 about the relationship between photography, rebellion, and survival. She tells me that “those things
 merged, the rebellious thing and the photography merged, and the photography is what carried me
 through, lots of my friends didn’t make it, a couple of people died, the drugs and all that stu... and
 probably also because I’m smart, all those things kept me from diving down”, and here again her
 father’s presence can be felt: “I continued to be as punk rock, and radical, and in your face as
 possible, because I was still like, fuck you dad,” she laughs, “and that powered me into nding and
 seeking out the edges of things and the people I found to be the most interesting in my world”.
 
 Being a woman was still dicult in the 1980s (not now though), and aspects specically of
 biological femininity were still very much subjects of taboo then. The band Cammie was in, the
 Yeastie Girlz, somehow managing a kind of righteous feminist rage that retained its sense of
 humour, wrote songs about menstruating, yeast infections, and cunnilingus, with names like “Ovary
 Action” and “You Suck”, playing tampon applicators like recorders at their live shows. To ashers
 and public masturbators and men who grabbed women, they dedicated the aptly titled “Sperm
 Brain”. It is clear to me that Cammie isn’t, perhaps despite appearances, a showy person: she is open
 to the idea that, times having changed, these songs might not be relevant anymore, and that if the
 Yeastie Girlz were to get back together, she is not sure what they would sing about; it is the
 message she centres and not herself. The Yeastie Girlz were brought back into each other’s lives,
 incidentally, by the permission-less sampling of one of their songs by TV Girl (who earned lots of
 money from the resulting track’s TikTok success) and the Girlz’ ensuing struggle for justice. Not
 only had they shamelessly misappropriated the female voice (there are no women in TV Girl), but
 they had misused it, turning a song about women getting o into one about male sexual jealousy.
 Men stealing from women singing about women’s rights — what to say? The jokes indeed write
 themselves, but in this instance I couldn’t resist making one too. In her essay Cammie describes the
 ying cockroaches at the strip club where she worked, who from a “steady diet of spunk” had
 become “super-charged, testosterone-fuelled hell beasts, snacking on the dried crust of pussy juice
 on unwashed sequin thongs”. I ask her if this is not a rather apt metaphor for a kind of parasitic man 
 we all know, and that perhaps TV Girl (I’m not sure if there are one, or several TV “girls” in the
 band) is not himself a cockroach eating the crust o her thong? We both cackle like witches — I
 mean women — and she asks that I make it clear these are my words, and not hers.
 
 Having lived in Iowa City for years for the sake of her son, she did portraits and wedding
 photography to make a living, dealing with norms and bridezillas and the occasional racist (one
 woman refused to sign a contract upon learning that Cammie’s surname was Iranian). While she
 “hated the fakey fakey thing that I had to do” while shooting weddings, she tells me, she “shot it like
 a journalist”. She was able to use the plentiful moments of human interaction and emotion, the
 element of unpredictability present even on such occasions, to get what she needed from the
 exercise: “the part of me that hungered for those moments, I got it, I got it through my weddings”,
 she laughs heartily. This is my very favourite of everything she tells me during our conversation.
 What a lovely, amusing, perfect idea: Cammie on norm safari, interloper among the canapés,
 locating the intrigue.
 
 In other words, she is gifted at taking unfortunate circumstances, transforming them into
 something that she can work to her advantage, in acts of the kind of industrious, female creativity
 that is demonstrated by every woman who takes sparse ingredients and transforms them into a
 meal. In her essay she describes her early attempts at persuading customers to allow her to
 photograph them: “I gured I had to oer an incentive, so I asked the next guy if he would allow me
 to take his picture in exchange for a free dildo show. This was a ten dollar value! Amazingly, he
 didn’t seem at all hesitant or shy. In fact, he returned the following week, asking if I would take his
 picture again. He seemed to think I was hot for him. This was an important lesson in the workings
 of the male ego and served me well for the rest of my time as a stripper”. It seemed to me then, that
 much of Cammie’s joint sex work/photography practice was an exercise in getting these men to
 expose themselves to her, using their perception of her as the one who was truly exposed. Of all the
 Trojan horses, this really is very Trojan!
 
 I begin to think then about the received ideas about the objectication of the sex worker, the
 customer as the voyeur to their viewee, and how the actual dynamic does not entirely reect this
 binary. Cammie was able to conceal her personal identity through performance, through wigs and
 makeup and costume, through the use of a fake name that would develop into a eshed-out alter ego
 all her own. She was able to keep her internal landscape obscured from view. The private identity of
 the customer, on the most immediate, animal level, however, is revealed, their desire laid bare.
 Cammie’s customers were revealing, making visible to her, something that in the outside world they
 kept hidden, that they did not attach to their public persona. Before having read the bit of her essay 
 where she confesses to anthropological hobbies (spying and the like), I had thought to myself, “she’s
 gathering information about Man, that’s what she’s doing”, and this tale of photo/ dildo show
 bartering seemed a perfect illustration of how she reached these ends. I ask her to what extent this is
 true, how much the sex work situation allowed for anthropological study, and how much it was
 informed by her desire to conduct such a study. She responds: “it’s uncovering the mystery of the
 other, and being curious about the other, the men didn’t know anything about me, so they would ll
 in some blanks about what they assumed I was, who I was, and I was doing that to them, but we
 were both hiding things from each other, so I was baring the very intimate depths of my body, but
 the important bits of me, they had no idea about, and they were baring to me the very depths of their
 desire, their very personal kinks and fetishes and all these things, and bits of their body as well, but I
 could only guess who these people were in real life”.
 
 Indeed, Cammie ended up at the Lusty Lady in the first place because a friend of hers had worked
 there and she had been “enthralled by her stories about her job, her customers and the bizarre events
 she observed during her shifts”. Once there, she enjoyed meeting all the “curious characters”, telling
 the others to send any customers they couldn’t deal with to her: “the stranger the better”. This
 anthropological inquiry now strikes me as the vein that runs through the marble of all her work. She
 compassionately took note of the habits of these men, the “lunch time crowd” who came and went
 (excuse me), and then those deserving of nicknames. In her taxonomy of the strip club’s ecosystem
 was Target Practice Man, The Shitter (“straight out of a David Lynch movie”), Self-Suck Man, The
 Slug, The Rulerman and a naughty policeman. After a particularly gruelling interaction with The
 Shitter, Cammie thinks to herself: “better than a creative writing class”. You can read all about their
 unorthodox merrymaking if you buy her book.
 
 The discussion of this anthropological impulse leads me to another question I had had for her: is
 photography inherently punk? By which I had meant, rather pleased with my idea, does the act of
 looking, of actively observing and recording — thereby asserting point of view — necessarily
 engender a critique of one’s environment? Does this bothering to look constitute a refusal to become
 inured to the workaday banality or even cruelty of the conditions in which we live? Initially, her
 response is that this may be the case because of “where we are now”, but that she’s not sure it was
 true when she was young and shooting the photographs displayed here. Then she thinks for a while,
 and says very casually “yeah, actually, I guess, even when I was a teenager, shooting out in Berkely
 and San Francisco, I did know that I was making a comment on how I felt about what I was
 seeing”. “I’m always in the frame”, she acknowledges, repeating it: “I’m always in the frame.”
 Reecting on Cammie’s photographs, with their embedded, embodied, female narratorial presence,
 and what she has told me about the route she took to art — having a hard time, having something to 
 say about it, saying it through photography, and using that to survive — I feel she has already
 expressed the very idea I am putting to her, but in totally unpretentious terms. This lack of
 grandiosity, her resisting the temptation of self-mythologisation, strikes me as exceedingly punk
 indeed, especially considering that she was doing what she was doing before the de-stigmatisation
 of sex work had even really begun.
 
 This discussion led me to my next question: is sex work inherently punk? To this, she responds, “it
 was for me [...] for me, becoming a stripper was an extension of my punk, fuck you, trying to nd the
 edges, see how far I could push myself to the edge without actually dropping out of school, because
 I was also getting a degree”, she laughs, “so being a stripper was like, oh, let’s see how far I can take
 this, also as a story teller, because I think I’ve always had this need to tell stories through
 photography, I was really drawn to it because I knew that they were... not just photographic stories,
 but I knew that there were going to be some great stories that were going to come out of the
 experience of being in a place like that, and that was really part of my identity, was that person who
 threw things in people’s faces to see how they could handle it”. She tells me about the pleasure she
 took, when some poor sod would make the mistake of asking how she was, in regaling them with
 stories about what she’d been up to recently with The Shit Eater (the artist formerly known as The
 Shitter), and watching them squirm. So sex work was experimentation, it was survival, and it was
 identity formation: she talks about the lessons in tenderness she learnt from her alter-ego Tasha,
 from performing femininity, and the education she got about her own sexual preferences from her
 interactions with her customers. It was the development of more than one skill, “rst trying to entice
 the men wandering the hallways to come in and part with their money. Second, nding the best way
 to get them o while also trying to get them to stay longer and therefore pay more money”, and I
 guess, long enough for her to take their picture.
 
 Sex work was also rebellion — and I wonder — maybe even revenge? In her essay, she explains how
 she came to choose her stripper name: “My best friend in sixth grade was called Tasha. At her house
 we would watch, fascinated, as her mother prepared to go to work in the evening. She pulled on
 shiny spandex disco leggings, a tube top, a giant blonde afro wig, stuck on false eyelashes and wore
 stiletto heels. “Tonight, my name is Tasha!” she would announce. I was always perplexed about why
 she would call herself by her daughter’s name. To be honest, I’m still a bit confused, but by the time
 I was in my 20s I had at least gured out that she was probably a sex worker. I decided I would
 name myself Tasha, too.” This whole exchange of roles and names seems to serve as a long and
 winding road to getting back at her dad, in the execution of its inversion. The appropriation of a
 name that is attached to the domestic and familial space and is used to perform sex work — the
 adoption of the daughter’s name — pregures Cammie’s rejection of the parent-given name for the 
 same ends. In other words, maybe use of the name Tasha appealed to Cammie because of its
 proximity, at its origin, to the family home, and how far away from this home it took itself, not to
 mention the subversion of parental and patriarchal power enacted by calling yourself by a name
 other than the one you’re given. Or maybe I’m getting carried away.
 
 Regardless, some kind of subversion or another is enacted by the photographs here, in their
 portrayal of “hard cocks”, symbols that here challenge the status quo by gesturing at male need, and
 what’s more, this need as an idea in the mind of a woman. Cammie is making visible the obverse of
 the sex worker coin: men, and their need of women. When asking the artist Michael Petry why he
 thinks people are so reticent to exhibit her work showing hard cocks, he tells her: “Because we live
 in a patriarchy. Your photos make men look too vulnerable”. But what about the hard cock as a
 symbol of power, of domination? What about the weakness also associated with erectile
 dysfunction, and the male fantasy of female penis envy? Both poles, for me at least, are visible in
 Cammie’s photographs. It seems worth noting that the club she worked at was called the Lusty
 Lady, despite taking the satisfaction of men’s lust as its objective. So in order to entice men in, they
 had to be made to feel wanted. Women were to be portrayed as the ones in need of them, and this
 need was to be two-fold: women need men sexually, and they need their money, they need to be paid
 by them. In more Trojan horsery aimed at placating and soothing the male ego, women are oered
 up to them in a comforting state of double need. I wonder how many men would have run for the
 hills if it had been called the Lusty Bloke, how many would have felt shamed, disempowered,
 feminised even, and would have stayed at home for their festivities various.
 
 When I ask Cammie about the need to perform gender at the club, she responds “there were so
 many dierent ways to be there, but for me I had to pretend to be a feminine woman, which isn’t
 that unusual, lots of women have to do that in their lives don’t they?”, pulling out not the extremity of
 dierence between sex work and domestic life, but instead its parallels, the ways in which women
 have to use their femininity, lest it be used against them. It seems to me then, that what Cammie’s
 work manages is not only an accurate portrayal of the sex work situation, the inner workings of the
 strip club and its eco-system of girls and customers, but the ways in which the strip club acts as an
 analogue for the actual communicative situation between not only men and women, but between
 people: the things we want and need from each other, the way we pretend to need things we don’t
 need to get other things we do need, our fear of being explicit about our need (in her essay she
 describes a rather heart-breaking habit that men at the club had of accidentally on purpose leaving
 the door to the video booth unlocked, allowing others to accidentally on purpose walk in on them),
 and the whole rich, delicate, touching and obscene complex of human interaction that outside of the 
 strip club is camouaged by convention, by propriety. The club is a microcosm of life outside of
 itself.
 
 So nally, as she puts it in her essay, “We are so used to seeing women as the object of the male gaze.
 When I turned my camera on the men in the Private Pleasures booth, I violated an unspoken rule of
 the patriarchy - that the male is the owner of the gaze, never the object of it”. Cammie has reclaimed
 this gaze on all of our behalves, and given us something truly interesting to look at with it, striking
 as she does the right balance: meaning is conveyed, but not a meaning too easily closable, inciting us
 to linger on the photographs, to keep looking at them, like the men she had to get o, but not so
 quickly that she’d miss the opportunity to take their picture.
 `;


  return (
    <div className="container py-5 mt-5 work-detail">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto text-start">
          
          {/* Title & Intro Text */}
          <h2 className="py-2 text-center">5 Dollars for 3 Minutes</h2>
          <p className="lead text-center">
            Profile on Cammie Toloui for <i>A Nice Magazine</i>
          </p>

          {/* First Image (Standalone) */}
          <div className="text-center mb-4">
            <img src={img1} alt="Five Dollars Three Minutes 1" className="img-fluid" style={{ maxWidth: "100%" }} />
          </div>

          {/* Expandable Text Section - Restricting width to match the image */}
          <div className="mx-auto text-start" style={{ maxWidth: "100%", width: "fit-content" }}>
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
              <img key={index} src={img} alt={`Five Dollars Three Minutes ${index + 2}`} className="img-fluid mb-3" />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default FiveDollarsThreeMinutes;
