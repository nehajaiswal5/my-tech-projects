/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = "amzn1.ask.skill.e04447d0-bd69-435f-9b69-dd89f6c06f7c";  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {

    'en-US': {
        translation: {
            FACTS: [
                        'A galaxy is a massive, gravitationally bound system that consists of stars, stellar objects.',
                        'Astronomers sort galaxies into three main types by their shapes: spirals, ellipticals, and irregulars.',
                        'To name a few galaxies are - Milky Way,Andromeda,Sombrero,Whirlpool,Triangulum,Pinwheel,M87,Antennae Galaxies.',
                        'The Milky Way Galaxy is our home galaxy in the universe.',
                        'Type of Milky Way Galaxy is Barred Spiral.',
                        'Age of Milky Way Galaxy is 13.6 Billion years.',
                        'Number of Stars in Milky Way Galaxy 100 - 400 billion.',
                        'The Milky Way began as a series of dense regions in the early universe not long after the Big Bang. The first stars to form were in globular clusters that still exist. They are among the oldest stars formed in the Milky Way region.',
                        'The Milky Way has grown by merging with other galaxies through time. It is currently acquiring stars from a very small galaxy called the Sagittarius Dwarf Spheroidal, as well as gobbling up material from the Magellanic Clouds.',
                        'The Milky Way moves through space at a velocity of about 552 kilometres per second (343 miles per second) with respect to the Cosmic Microwave Background radiation.',
                        'The Milky Way’s central core contains a supermassive black hole. It is commonly referred to as Sagittarius A*. It contains the mass of about 4.3 million Suns.',
                        'The stars, gas and dust of the Milky Way all orbit the centre at a rate of about 220 kilometres per second. This constant rate for all stars at different distances from the core implies the existence of a shell of dark matter surrounding our galaxy.',
                        'Our galaxy will collide with Andromeda Galaxy in about 5 billion years. Some astronomers refer to our two galaxy as a binary system of giant spirals.',
                        'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
                        'The Andromeda Galaxy (M31) is the closest large galaxy to the Milky Way and is one of a few galaxies that can be seen unaided from the Earth.',
                        'In approximately 4.5 billion years the Andromeda Galaxy and the Milky Way are expected to collide and the result will be a giant elliptical galaxy. ',
                        'Andromeda is accompanied by 14 dwarf galaxies, including M32, M110, and possibly M33 (The Triangulum Galaxy).',
                        'Type of Andromeda Galaxy is Spiral',
                        'Diameter of Andromeda Galaxy is	220,000 ly',
                        'Distance of Andromeda Galaxy is	2.54 Mly',
                        'Number of Stars in Andromeda Galaxy is	1 trillion.',
                        'While Andromeda is the largest galaxy in the Local Cluster it may not be the most massive. The Milky May is thought to contain more dark matter, which could make it much more massive.',
                        'Since it is the nearest spiral galaxy to us, astronomers use the Andromeda Galaxy to understand the origin and evolution of such galaxies.',
                        'The Andromeda Galaxy is approaching the Milky Way at approximately 100 to 140 kilometres per second.',
                        'The Andromeda Galaxy has a very crowded double nucleus. Not only does it have a massive star cluster right at its heart, but it also has at least one supermassive black hole hidden at the core.',
                        'The spiral arms of the Andromeda Galaxy are being distorted by gravitational interactions with two companion galaxies, M32 and M110.',
                        'The Andromeda Galaxy has at least two spiral arms, plus a ring of dust that may have come from the smaller galaxy M32. Astronomers think that it may have interacted more closely with Andromeda several hundred million years ago, when M32 plunged through the heart of its larger neighbor.',
                        'There are at least 450 globular clusters orbiting in and around the Andromeda Galaxy. Some of them are among the most densely populated globulars ever seen.',
                        'The Andromeda Galaxy is the most distant object you can spot with the naked eye. You need a good spot away from bright lights in order to see it.',
                        'The Sombrero Galaxy is one of the most unusual looking barred spiral galaxies visible from Earth. Its bright nucleus, large central bulge and spiral arms threaded through with a thick dust lane make it look a little like a hat from Mexico. The dust lane is a ring that circles the bulge of the galaxy, and it is rich with gas, dust, and hydrogen gas. Because it has all the elements needed for star formation, it’s not surprising that astronomers have found many sites of star formation inside.',
                        'Type of the Sombrero Galaxy is Spiral.',
                        'Diameter of the Sombrero Galaxy is	50,000 ly.',
                        'Distance of the Sombrero Galaxy	is	29 Mly.',
                        'The Sombrero Galaxy may not be part of a formal galaxy group, but could be a member of a string of galaxies that extends away from the Virgo Cluster.',
                        'As many as 2,000 globular clusters swarm around the core of the Sombrero Galaxy, and the number could be related to the size of the central bulge.',
                        'The Sombrero has a central supermassive black hole at its heart. Observations of star motions near the black hole suggest it could have the mass of a billion Suns, perhaps the most massive of any black hole found so far at the heart of a galaxy.',
                        'The Sombrero Galaxy is a favorite target for well-equipped amateur astronomers. If you have a good dark-sky sight, it can be spotted through binoculars; those with large telescopes can spot the dust lane. The Sombrero is a spring and early summer observing object half-way between the constellations Virgo and Corvus.',
                        'NASA’s Hubble Space Telescope and Spitzer Space Telescope have been used to study the Sombrero in visible and infrared light. The starbirth regions stand out in infrared wavelengths are are mostly located along the outer rim of the dust ring surrounding the galaxy’s core.',
                        'The Sombrero Galaxy looks as it does partly because we are viewing it “edge on” from our point of view here on Earth.',
                        'The Whirlpool Galaxy is a familiar one to stargazers and among the many close galaxy neighbors to our own Milky Way. Because of its shape, it was the first galaxy to be classified as a spiral by astronomers. Today, it interests astronomers due to its spiral structure and the interaction it appears to be having with its near neighbor, M51b.',
                        'Type of the Whirlpool Galaxy is	Spiral.',
                        'Diameter of the Whirlpool Galaxy is	60,000 ly.',
                        'Distance of the Whirlpool Galaxy is	23 Mly.',
                        'The Whirlpool Galaxy was first discovered in 1773 by Charles Messier, who was charting the skies looking for objects that might be confused with comets.',
                        'In 1845, astronomer William Parsons observed the galaxy pair with his telescope at Birr Castle, Ireland, and found the spiral structure of the Whirlpool.',
                        'The Whirlpool and its companion, M51b have already passed by or through each other once as they dance through a cosmic merger. The smaller galaxy has been severely disrupted by the encounter, and the Whirlpool’s spiral arms are distorted.',
                        'The Whirlpool Galaxy is undergoing huge bursts of starbirth due to its ongoing encounter with its smaller companion galaxy.',
                        'The whirlpool, like many other galaxies, has a supermassive black hole at its heart, surrounded by rings of dust. The core of the galaxy is quite quite active — making the Whirlpool what astronomers call a Seyfert galaxy.',
                        'The Whirlpool’s companion, called M51b, is a dwarf galaxy. Because it is being torn apart by the ongoing interaction, it cannot be easily classified. Its current appearance makes it look like an irregular galaxy.',
                        'The Triangulum Galaxy, also known as M33, is one of the closest spiral galaxies to the Milky Way. It lies 3 million light-years away, in the constellation Triangulum. The closest spiral is the Andromeda Galaxy, at a distance of 2.5 million light-years. All three are members of the Local Group, a collection of about 50 galaxies in our neighbourhood of space.',
                        'Type of The Triangulum Galaxy is Spiral.',
                        'Diameter of The Triangulum Galaxy is 60,000 ly.',
                        'Distance of The Triangulum Galaxy is 3 Mly.',
                        'Number of Stars in The Triangulum Galaxy is	40 billion',
                        'The Triangulum Galaxy is formally described as a spiral galaxy with a weak (or possibly no) central bar and its loosely wound arms emanate from the galactic core.',
                        'The core of the Triangulum Galaxy is a nebula – a cloud of gas and dust – called an HII region. Areas such as this are prime regions for star formation.',
                        'The Triangulum Galaxy is actively making stars. Its starbirth regions scattered throughout its spiral arms. Its starbirth rate is several times more than the Andromeda Galaxy.',
                        'Andromeda and the Triangulum Galaxy are linked by streams of hydrogen gas and embedded stars. The two galaxies may have had a close interaction in the past and it looks as if they will do so again in about 2.5 billion years.',
                        'Astronomers think that a future merger between Andromeda and the Milky Way will also affect the Triangulum Galaxy, perhaps tearing it apart or cannibalising it into a larger elliptical galaxy.',
                        'Some observers claim that under very dark skies, Triangulum galaxy can be seen with the naked eye. However, it is more easily spotted with binoculars or a telescope.',
                        'The Large Magellanic cloud is a nearby galaxy once considered to be an irregular type until astronomers studied it more closely. It now turns out to be an irregular with a bar across its heart. It may once have been a spiral. The LMC (as it is known) is visible in Earth’s Southern Hemisphere skies, along with its companion dwarf galaxy, the Small Magellanic Cloud (SMC). The Milky Way is consuming gas that is flowing from the Magellanic clouds (in the Magellanic Stream). Eventually these two smaller galaxies might collide with the Milky Way. Both the LMC and the SMC have star-forming regions, and the LMC was the site of the spectacular 1987a supernova explosion.',
                        'Type of the Large Magellanic cloud is Disrupted Barred Spiral.',
                        'Diameter of the Large Magellanic cloud is 14,000 ly.',
                        'Distance of the Large Magellanic cloud is 163,000 ly.',
                        'Number of Stars in the Large Magellanic cloud is 30 billion',
                        'The Large Magellanic Cloud lies about 163 thousand light-years from Earth. Its companion, the Small Magellanic Cloud is about 200,000 light-years away.',
                        'For many years astronomers thought the Magellanic Clouds orbited the Milky Way. Recent measurements may prove that they could be moving too fast for that.',
                        'The Magellanic Clouds are gas-rich, meaning they have a higher portion of their mass as gas. They also have less portion of their mass bound up in metallic elements.',
                        'The Magellanic Clouds have both had their shapes distorted by gravitational interactions with the Milky Way. As these galaxies pass near the Milky Way, their gravitational pull also misshapes the outer bars of our galaxy.',
                        'Recent studies of the Small Magellanic Cloud indicate that it might be a former single galaxy split into two remnants. Gravitational interactions with the LMC may have broken that galaxy apart.',
                        'The Large Magellanic Cloud contains a highly active starbirth region called the Tarantula Nebula. It is part of a larger cloud of gas and dust, and its high rate of star formation may be caused by compression of interstellar gas and dust by the collision of the cloud with the interstellar medium. The 1987a supernova exploded not far from this region.',
                        'The Pinwheel Galaxy in the constellation Ursa Major (the Greater Bear) is a grand design spiral, meaning that it has well-defined spiral arms and dust lanes that extend all the way around the body of the galaxy. It was discovered in 1781 by astronomer Pierre Méchain, and included as object number 101 in Charles Messier’s list of celestial objects.',
                        'Type of The Pinwheel Galaxy is Spiral.',
                        'Diameter of The Pinwheel Galaxy is	170,000 ly.',
                        'Distance of The Pinwheel Galaxy is	21 Mly.',
                        'Number of Stars in The Pinwheel Galaxy is 1 trillion.',
                        'The Pinwheel Galaxy is about twice the diameter of the Milky Way Galaxy, and is formally defined as a weakly barred spiral galaxy.',
                        'There are more than 3,000 starbirth regions in the spiral arms of the Pinwheel Galaxy, the most of any similar type galaxy thus far observed. These are called HII regions, for the copious amounts of hydrogen they contain.',
                        'The Pinwheel Galaxy has a fairly small central bulge, with about 3 billion solar masses. Compared to the starbirth action in the spiral arms, the bulge is very quiet, with almost no stars being born there.',
                        'While many galaxies have a central supermassive black hole, astronomers have not found one at the heart of the Pinwheel Galaxy.',
                        'There are many x-ray sources in the Pinwheel Galaxy. They emanate from exploded stars and regions around stellar-mass black holes (where material is heated as it falls into the black hole).',
                        'The Pinwheel belongs to a group of galaxies that are all interacting with each other gravitationally. As a result of this dance, their shapes are distorted.',
                        'The massive galaxy M87 is the most spectacular example of an elliptical galaxy we can see from Earth. The most fascinating feature of this galaxy is its jet, which is visible in optical light as well as x-rays and radio emissions. The jet extends from the central supermassive black hole of the galaxy and reaches out about 5,000 light-years. As a true elliptical galaxy, M87 has no obvious dust lanes and very little evidence of star formation. It likely formed from a recent merger between two other galaxies.',
                        'Type of M87 is Elliptical.',
                        'Diameter of M87 is	120,000 ly',
                        'Distance of M87 is	53 Mly',
                        'Number of Stars in M87 is	1 trillion',
                        'The interstellar medium in M87 is filled with gas that has been enriched somewhat by materials from stars that died long ago. There is dust in the galaxy, but far less than the Milky Way contains.',
                        'The black hole at M87’s heart has the mass of about 3.5 billion Suns. It is surrounded by a disk of material that is slowly funneling into the black hole, heated by the action of a jet that is moving at very high speed out from the black hole.',
                        'It is possible that the core of M87 has more than one supermassive black hole.',
                        'The nuclear region of M87 is known as an active galactic nucleus due to its brightness in visible, x-ray, radio, and other wavelengths of light.',
                        'M87 is surrounded by a corona of hot gas.',
                        'Not far from M87 is a collection of galaxies arrayed in a pair of chain-like structures called “Markarian’s Chain”. These are visible to amateur observers with good-sized telescopes.',
                        'The Antennae is a pair of spiral galaxies that are interacting and mingling their stars. They began their galactic dance over a few hundred million years ago and are currently in a period where their colliding gas clouds are bursting with new star formation. As the two galaxies merge, their gravitational interactions pull long tails of gas away from each other, and these tails are the sites of starburst activity. In a few billion years, the cores of these two galaxies will be combined into one large core, with a supermassive black hole at its heart. It will be surrounded by an elliptical galaxy of old stars.',
                        'Type of The Antennae is	Interacting Spirals.',
                        'Tail - Tail Distance of The Antennae is	350,000 ly',
                        'Centre - Centre Distance of The Antennae is	30,00 ly',
                        'Distance of The Antennae is	45 Mly',
                        'Spiral galaxies that combine as the Antennae are doing will most likely ultimately end up as elliptical galaxies.The merger will erase all traces of their spiral arms.',
                        'It is likely that when the Milky Way and the Andromeda Galaxies combine, they will look similar to the Antennae during at least one point of their interaction.',
                        'Of the millions of new stars created during the Antennae merger, only about ten percent of them will live longer than 10 million years. That’s because they will be massive blue supergiants, a type of star that quickly consumes its nuclear fuel and explodes as a supernova.',
                        'The remaining massive young star clusters formed during starburst activity will become the new galaxy’s globular clusters.',
                        'The Antennae galaxies are the closest colliding galaxies to the Milky Way.', 
                    ],
            SKILL_NAME: 'Galaxy Explorer',
            GET_FACT_MESSAGE: "Here's your fact: ",
            HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    }
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        const speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'), randomFact);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
    'SessionEndedRequest': function () {
        this.emit(':tell', this.t('STOP_MESSAGE'));
    },
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
