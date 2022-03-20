const recommendations = [
    {
        name: "Loki",
        image: "https://64.media.tumblr.com/299154b64cc546a6a81f7f6eff252025/43e756433ccf99f9-6e/s400x600/cf7f05971c38b54cf7c60d8de6a2df6a8ead300f.jpg",
        genres: ["Marvel", "Superhero"],
        description:
            "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
        year: 2021,
    },
    {
        name: "The Lion King",
        image: "https://i.pinimg.com/564x/b3/cd/cf/b3cdcfc325ffc2c9c322ecf42b0310fd.jpg",
        genres: ["Family", "Adventure", "Animation"],
        description:
            "In the African savanna, a young prince overcomes betrayal and tragedy to assume his rightful place on Pride Rock.",
        year: 2019,
    },
    {
        name: "Raya and the Lost Dragon",
        image: "https://4kwallpapers.com/images/walls/thumbs/5880.jpg",
        genres: ["Animation", "Adventure", "Comedy"],
        description:
            "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
        year: 2021,
    },
    {
        name: "Eternals",
        image: "https://ichef.bbci.co.uk/news/400/cpsprodpb/685C/production/_118661762_e2j7vq5veaq-2jg.jpg",
        genres: ["Action Fiction", "Fantasy", "Superhero fiction"],
        description:
            "The Eternals, a race of immortal beings with superhuman powers who have secretly lived on Earth for thousands of years, reunite to battle the evil Deviants.",
        year: 2021,
    },
];

const originals = [
    {
        name: "Luca",
        image: "https://i.pinimg.com/originals/92/d8/18/92d818ea0cd394a7d92f1917f6a6a690.png",
        genres: ["Adventure", "Comedy", "Animated Cartoon"],
        description:
            "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
        year: 2021,
    },
    {
        name: "WandaVision",
        image: "https://media.newstracklive.com/uploads/entertainment/hollywood-news/Jun/03/small_thumb/5_60b86064afa9c.jpg",
        genres: ["Mystery", "Drama", "Sitcom"],
        description:
            "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
        year: 2021,
    },
    {
        name: "Own the room",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C96B4275D39889284DFBBF6D89D60E1187A2700AD6CDA5E8B5271F6E62CA48E7/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        genres: ["Reality", "Documentary"],
        description:
            "Five student entrepreneurs from disparate corners of the planet go head-to-head at one of the most prestigious business competitions in the world.",
        year: 2021,
    },
    {
        name: "Apollo - Missions to the moon",
        image: "https://media.bizj.us/view/img/11353714/n8apollomissionstothemoonkeyart-2*1024xx400-225-0-8.jpg",
        genres: ["Documentary", "Science"],
        description:
            "Primary source media recount the key moments of NASA's Apollo space program and America's goal to land on the moon before 1970.",
        year: 2019,
    },
];

const newToDisney = [
    {
        name: "What If",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/23BE7D0390EC91E6CD7FC7DD3FA5B9124C276BF0603D7EB4816E5B37609CACBD/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        genres: ["Animation", "Superhero", "Action"],
        description:
            "NEW EPISODE EVERY WEDNESDAY AT 12:30 PM. What If…? flips the script on the MCU, reimagining famous events from the films in unexpected ways.",
        year: 2021,
    },
    {
        name: "She Builds",
        image: "https://i.ibb.co/F7fS845/she-builds.png",
        genres: ["Documentary", "Reality"],
        description:
            "She Builds unravels the powerful stories of female founders who have redefined what it is to be a woman and an entrepreneur in 21st century India.",
        year: `2022`,
    },
    {
        name: "The Mandalorian",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D3272A46C21A5DF3EA7E68595AD2E703EF471A733C5D979261C7DAC7738587E5/badging?width=400&aspectRatio=1.78&format=jpeg&label=disneyplusoriginal",
        genres: ["Space Western", "Adventure Fiction"],
        description:
            "After the defeat of the Empire at the hands of Rebel forces, a lone bounty hunter operating in the Outer Rim, away from the dominion of the New Republic, goes on many surprising and risky adventures.",
        year: 2019,
    },
    {
        name: "Turning Red",
        image: "https://bloximages.newyork1.vip.townnews.com/lsureveille.com/content/tncms/assets/v3/editorial/8/8f/88fa905e-a6ee-11ec-9587-9f463f4095fb/6234d871644b8.image.jpg?resize=400%2C225",
        genres: ["Family", "Animation"],
        description:
            "Mei Lee is a 13-year-old girl who is torn between being her mother's obedient daughter and the chaos of her youth. As if that were not enough, when she gets too excited, she turns into a big red panda.",
        year: `2022`,
    },
];

const hit = [
    {
        name: "Avengers Endgame",
        image: "https://lh6.googleusercontent.com/AsH16SeWUowjachSfHv-GD6UqHj4Fk2_fLSMsznjEmG3kDLP0dHVuj8iwIhRpFyo20VYvC2jGihNV5s0jw1cvCS0gE0YLdRhYHIR5bivYSNdhsCSU21Kj37Vsbx7ZeRRdLtiPOmE=w400-h226",
        genres: ["Fantasy", "Superhero", "Action"],
        description:
            "After the devastating events of the Infinity War, the Avengers assemble once more to reverse Thanos’ actions and restore balance to the universe.",
        year: 2019,
    },
    {
        name: "The Batman",
        image: "https://static.digit.in/OTT/v2/images/tr:w-400/the-batman-669919.jpg",
        genres: ["Crime", "Action", "Mystery"],
        description:
            "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.",
        year: `2022`,
    },
    {
        name: "Shang-Chi and the Legend of the Ten Rings",
        image: "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/CB8286740ECBC21E64FAEC18762152C8D8DB0877B06F7B3C3A05D0CEBC0B3615/scale?width=400&aspectRatio=1.78&format=jpeg",
        genres: ["Fantasy", "Action"],
        description:
            "Martial-arts master Shang-Chi confronts the past he thought he left behind when he's drawn into the web of the mysterious Ten Rings organization.",
        year: `2021`,
    },
    {
        name: "Chhichhore",
        image: "https://suryaa.com/suryaa-images/cinema-english/thumbnail/817220-chhichhore_4654.jpg",
        genres: ["Comedy", "Drama"],
        description:
            "Divided by time, united by a tragic incident. In a bittersweet reunion, seven middle-aged friends take a walk down the memory lane at the least expected place.",
        year: `2019`,
    },
];

export { recommendations, originals, newToDisney, hit };
