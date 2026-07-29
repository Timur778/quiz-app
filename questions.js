const questionBank = {
  entertainment: {
    easy: [
      {
        question:
          "Which animated character lives in a pineapple under the sea?",
        options: ["Shrek", "SpongeBob SquarePants", "Mickey Mouse", "Garfield"],
        correctAnswer: 1,
      },
      {
        question: "Which board game includes properties, rent, and railroads?",
        options: ["Chess", "Monopoly", "Scrabble", "Cluedo"],
        correctAnswer: 1,
      },
      {
        question: "Which superhero is known for using a shield?",
        options: ["Batman", "Spider-Man", "Captain America", "Thor"],
        correctAnswer: 2,
      },
    ],

    medium: [
      {
        question: "Which company created the character Mickey Mouse?",
        options: ["Pixar", "DreamWorks", "Disney", "Warner Bros."],
        correctAnswer: 2,
      },
      {
        question: "In The Simpsons, what is the name of the family dog?",
        options: ["Santa's Little Helper", "Snowball", "Brian", "Scooby-Doo"],
        correctAnswer: 0,
      },
      {
        question: "Which fictional detective lives at 221B Baker Street?",
        options: [
          "Hercule Poirot",
          "Sherlock Holmes",
          "Miss Marple",
          "Philip Marlowe",
        ],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question:
          "Which television series features the advertising agency Sterling Cooper?",
        options: ["Succession", "Mad Men", "The Office", "Billions"],
        correctAnswer: 1,
      },
      {
        question: "Which actor voiced Woody in the Toy Story films?",
        options: ["Tom Hanks", "Tim Allen", "Billy Crystal", "Robin Williams"],
        correctAnswer: 0,
      },
      {
        question:
          "In the television series Lost, what was the flight number of the crashed plane?",
        options: ["Oceanic 815", "Pacific 316", "Atlantic 108", "Oceanic 777"],
        correctAnswer: 0,
      },
    ],
  },

  music: {
    easy: [
      {
        question: "How many strings does a standard guitar usually have?",
        options: ["Four", "Five", "Six", "Eight"],
        correctAnswer: 2,
      },
      {
        question: "Which instrument has black and white keys?",
        options: ["Violin", "Piano", "Trumpet", "Flute"],
        correctAnswer: 1,
      },
      {
        question: "Which musical symbol indicates silence?",
        options: ["Note", "Rest", "Clef", "Chord"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Which composer wrote The Four Seasons?",
        options: ["Mozart", "Beethoven", "Vivaldi", "Bach"],
        correctAnswer: 2,
      },
      {
        question: "Which singer released the album 21?",
        options: ["Adele", "Beyoncé", "Rihanna", "Taylor Swift"],
        correctAnswer: 0,
      },
      {
        question: "Which family of instruments includes the violin and cello?",
        options: ["Brass", "Woodwind", "String", "Percussion"],
        correctAnswer: 2,
      },
    ],

    hard: [
      {
        question: "Which composer wrote the opera The Magic Flute?",
        options: ["Mozart", "Wagner", "Verdi", "Puccini"],
        correctAnswer: 0,
      },
      {
        question: "Which jazz musician was nicknamed Satchmo?",
        options: [
          "Miles Davis",
          "Louis Armstrong",
          "Duke Ellington",
          "Charlie Parker",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which musical term means gradually getting louder?",
        options: ["Diminuendo", "Crescendo", "Staccato", "Legato"],
        correctAnswer: 1,
      },
    ],
  },

  sports: {
    easy: [
      {
        question:
          "How many players are on the field for one soccer team during normal play?",
        options: ["Nine", "Ten", "Eleven", "Twelve"],
        correctAnswer: 2,
      },
      {
        question: "Which sport uses a racket and a shuttlecock?",
        options: ["Tennis", "Badminton", "Squash", "Table tennis"],
        correctAnswer: 1,
      },
      {
        question: "In basketball, how many points is a free throw worth?",
        options: ["One", "Two", "Three", "Four"],
        correctAnswer: 0,
      },
    ],

    medium: [
      {
        question: "How many rings are on the Olympic symbol?",
        options: ["Four", "Five", "Six", "Seven"],
        correctAnswer: 1,
      },
      {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Japan", "United Kingdom"],
        correctAnswer: 1,
      },
      {
        question: "What is the maximum score possible with one dart?",
        options: ["50", "60", "75", "100"],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question:
          "In tennis, what follows deuce when one player wins the next point?",
        options: ["Match point", "Advantage", "Break point", "Set point"],
        correctAnswer: 1,
      },
      {
        question: "Which country won the first FIFA World Cup in 1930?",
        options: ["Brazil", "Argentina", "Uruguay", "Italy"],
        correctAnswer: 2,
      },
      {
        question: "How long is an Olympic swimming pool?",
        options: ["25 metres", "40 metres", "50 metres", "100 metres"],
        correctAnswer: 2,
      },
    ],
  },

  science: {
    easy: [
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Mercury"],
        correctAnswer: 1,
      },
      {
        question: "What gas do humans need to breathe to survive?",
        options: ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
        correctAnswer: 1,
      },
      {
        question: "What is H2O commonly called?",
        options: ["Salt", "Water", "Oxygen", "Hydrogen"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Gd", "Go"],
        correctAnswer: 1,
      },
      {
        question: "Which organ filters blood and produces urine?",
        options: ["Heart", "Kidneys", "Lungs", "Pancreas"],
        correctAnswer: 1,
      },
      {
        question: "What force keeps planets in orbit around the Sun?",
        options: ["Magnetism", "Friction", "Gravity", "Electricity"],
        correctAnswer: 2,
      },
    ],

    hard: [
      {
        question: "Which subatomic particle has a negative electrical charge?",
        options: ["Proton", "Neutron", "Electron", "Photon"],
        correctAnswer: 2,
      },
      {
        question: "What is the approximate speed of light in a vacuum?",
        options: [
          "30,000 km/s",
          "150,000 km/s",
          "300,000 km/s",
          "3,000,000 km/s",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which part of a cell contains most of its genetic material?",
        options: ["Cell wall", "Nucleus", "Ribosome", "Cytoplasm"],
        correctAnswer: 1,
      },
    ],
  },

  history: {
    easy: [
      {
        question: "Which ancient civilisation built the pyramids of Giza?",
        options: ["Romans", "Egyptians", "Vikings", "Aztecs"],
        correctAnswer: 1,
      },
      {
        question: "Who was the first president of the United States?",
        options: [
          "Abraham Lincoln",
          "George Washington",
          "Thomas Jefferson",
          "John Adams",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which city was buried by the eruption of Mount Vesuvius in 79 CE?",
        options: ["Athens", "Pompeii", "Sparta", "Carthage"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correctAnswer: 2,
      },
      {
        question:
          "Which empire used roads and aqueducts across much of Europe?",
        options: [
          "Roman Empire",
          "Mongol Empire",
          "Ottoman Empire",
          "Aztec Empire",
        ],
        correctAnswer: 0,
      },
      {
        question: "Who was known as the Maid of Orléans?",
        options: [
          "Marie Curie",
          "Joan of Arc",
          "Cleopatra",
          "Catherine the Great",
        ],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question: "Which treaty formally ended World War I?",
        options: [
          "Treaty of Paris",
          "Treaty of Versailles",
          "Treaty of Rome",
          "Treaty of Utrecht",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which civilisation created the city of Machu Picchu?",
        options: ["Maya", "Inca", "Aztec", "Olmec"],
        correctAnswer: 1,
      },
      {
        question: "The Magna Carta was first issued in which year?",
        options: ["1066", "1215", "1492", "1642"],
        correctAnswer: 1,
      },
    ],
  },

  geography: {
    easy: [
      {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correctAnswer: 2,
      },
      {
        question: "Which is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        correctAnswer: 3,
      },
      {
        question: "On which continent is Egypt located?",
        options: ["Asia", "Africa", "Europe", "South America"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Which river flows through the city of London?",
        options: ["Seine", "Danube", "Thames", "Rhine"],
        correctAnswer: 2,
      },
      {
        question: "What is the largest country in the world by land area?",
        options: ["Canada", "China", "Russia", "United States"],
        correctAnswer: 2,
      },
      {
        question: "Which mountain range separates much of Europe from Asia?",
        options: ["Andes", "Alps", "Urals", "Himalayas"],
        correctAnswer: 2,
      },
    ],

    hard: [
      {
        question: "Which country contains the region of Transylvania?",
        options: ["Hungary", "Romania", "Bulgaria", "Serbia"],
        correctAnswer: 1,
      },
      {
        question: "What is the capital of Mongolia?",
        options: ["Astana", "Tashkent", "Ulaanbaatar", "Bishkek"],
        correctAnswer: 2,
      },
      {
        question: "Which strait separates Asia from North America?",
        options: [
          "Strait of Gibraltar",
          "Bering Strait",
          "Bosporus Strait",
          "Dover Strait",
        ],
        correctAnswer: 1,
      },
    ],
  },

  food: {
    easy: [
      {
        question: "Which fruit is commonly used to make guacamole?",
        options: ["Mango", "Avocado", "Apple", "Pear"],
        correctAnswer: 1,
      },
      {
        question: "Which ingredient is used to make bread rise?",
        options: ["Salt", "Yeast", "Pepper", "Vinegar"],
        correctAnswer: 1,
      },
      {
        question: "Which food is made from milk?",
        options: ["Cheese", "Rice", "Bread", "Pasta"],
        correctAnswer: 0,
      },
    ],

    medium: [
      {
        question: "Which country is traditionally associated with sushi?",
        options: ["China", "Japan", "Thailand", "Vietnam"],
        correctAnswer: 1,
      },
      {
        question: "What is tofu mainly made from?",
        options: ["Rice", "Soybeans", "Potatoes", "Wheat"],
        correctAnswer: 1,
      },
      {
        question: "Which herb is traditionally used in pesto?",
        options: ["Parsley", "Basil", "Mint", "Rosemary"],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question: "Which spice gives traditional paella its yellow colour?",
        options: ["Paprika", "Saffron", "Turmeric", "Cumin"],
        correctAnswer: 1,
      },
      {
        question:
          "Which French sauce is made from egg yolks, butter, and lemon juice?",
        options: ["Béchamel", "Hollandaise", "Velouté", "Espagnole"],
        correctAnswer: 1,
      },
      {
        question: "What type of pastry is used to make profiteroles?",
        options: ["Puff pastry", "Choux pastry", "Shortcrust", "Filo"],
        correctAnswer: 1,
      },
    ],
  },

  literature: {
    easy: [
      {
        question: "Who wrote Romeo and Juliet?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Mark Twain",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which character follows a white rabbit into Wonderland?",
        options: ["Alice", "Dorothy", "Wendy", "Matilda"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote the Harry Potter series?",
        options: [
          "J. R. R. Tolkien",
          "J. K. Rowling",
          "C. S. Lewis",
          "Roald Dahl",
        ],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Who wrote Pride and Prejudice?",
        options: [
          "Jane Austen",
          "Emily Brontë",
          "Virginia Woolf",
          "Mary Shelley",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which novel features the character Atticus Finch?",
        options: [
          "The Great Gatsby",
          "To Kill a Mockingbird",
          "1984",
          "Of Mice and Men",
        ],
        correctAnswer: 1,
      },
      {
        question: "Who wrote The Hobbit?",
        options: [
          "George Orwell",
          "J. R. R. Tolkien",
          "C. S. Lewis",
          "H. G. Wells",
        ],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question: "Which author created the detective Hercule Poirot?",
        options: [
          "Arthur Conan Doyle",
          "Agatha Christie",
          "Dorothy L. Sayers",
          "Raymond Chandler",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "In George Orwell's 1984, what is the name of the ruling party's leader figure?",
        options: ["Big Brother", "Goldstein", "O'Brien", "Winston"],
        correctAnswer: 0,
      },
      {
        question: "Who wrote One Hundred Years of Solitude?",
        options: [
          "Jorge Luis Borges",
          "Gabriel García Márquez",
          "Pablo Neruda",
          "Mario Vargas Llosa",
        ],
        correctAnswer: 1,
      },
    ],
  },

  cinema: {
    easy: [
      {
        question:
          "Which film features a blue-skinned species called the Na'vi?",
        options: ["Avatar", "Titanic", "Frozen", "Dune"],
        correctAnswer: 0,
      },
      {
        question: "Which character says, 'To infinity and beyond'?",
        options: ["Woody", "Buzz Lightyear", "Shrek", "Simba"],
        correctAnswer: 1,
      },
      {
        question: "Which film series features the character Darth Vader?",
        options: ["Star Trek", "Star Wars", "The Matrix", "Alien"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Who directed Jurassic Park?",
        options: [
          "James Cameron",
          "Steven Spielberg",
          "Christopher Nolan",
          "Peter Jackson",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which film features a hotel called the Overlook Hotel?",
        options: ["Psycho", "The Shining", "Jaws", "The Exorcist"],
        correctAnswer: 1,
      },
      {
        question:
          "Which actor played Iron Man in the Marvel Cinematic Universe?",
        options: [
          "Chris Evans",
          "Robert Downey Jr.",
          "Chris Hemsworth",
          "Mark Ruffalo",
        ],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question:
          "Which film won the first Academy Award for Best Animated Feature?",
        options: ["Toy Story", "Shrek", "Finding Nemo", "Spirited Away"],
        correctAnswer: 1,
      },
      {
        question: "Who directed the film Seven Samurai?",
        options: [
          "Akira Kurosawa",
          "Yasujirō Ozu",
          "Hayao Miyazaki",
          "Bong Joon Ho",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which 1927 film is widely recognised as the first feature-length talking picture?",
        options: ["Metropolis", "The Jazz Singer", "Nosferatu", "City Lights"],
        correctAnswer: 1,
      },
    ],
  },

  art: {
    easy: [
      {
        question: "Who painted the Mona Lisa?",
        options: [
          "Vincent van Gogh",
          "Leonardo da Vinci",
          "Pablo Picasso",
          "Claude Monet",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which tool is commonly used to apply paint to a canvas?",
        options: ["Hammer", "Paintbrush", "Compass", "Chisel"],
        correctAnswer: 1,
      },
      {
        question: "Which colour is created by mixing blue and yellow?",
        options: ["Purple", "Orange", "Green", "Red"],
        correctAnswer: 2,
      },
    ],

    medium: [
      {
        question: "Who painted The Starry Night?",
        options: [
          "Vincent van Gogh",
          "Claude Monet",
          "Paul Cézanne",
          "Salvador Dalí",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which art movement is associated with Claude Monet?",
        options: ["Cubism", "Impressionism", "Surrealism", "Pop art"],
        correctAnswer: 1,
      },
      {
        question: "Which artist painted The Persistence of Memory?",
        options: [
          "Salvador Dalí",
          "Pablo Picasso",
          "Andy Warhol",
          "Edvard Munch",
        ],
        correctAnswer: 0,
      },
    ],

    hard: [
      {
        question:
          "Which artist created the sculpture David during the Renaissance?",
        options: ["Donatello", "Michelangelo", "Bernini", "Rodin"],
        correctAnswer: 1,
      },
      {
        question: "Which painter is associated with the work Guernica?",
        options: [
          "Pablo Picasso",
          "Joan Miró",
          "Henri Matisse",
          "Paul Gauguin",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Which artistic technique uses tiny dots of colour to form an image?",
        options: ["Fresco", "Pointillism", "Etching", "Collage"],
        correctAnswer: 1,
      },
    ],
  },

  technology: {
    easy: [
      {
        question: "Which device is used to move a cursor on a computer screen?",
        options: ["Keyboard", "Mouse", "Printer", "Speaker"],
        correctAnswer: 1,
      },
      {
        question: "What does Wi-Fi allow devices to do?",
        options: [
          "Print documents",
          "Connect wirelessly to a network",
          "Increase battery capacity",
          "Repair software",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which language is mainly used to style web pages?",
        options: ["HTML", "CSS", "Python", "SQL"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Utility",
          "Central Program User",
          "Core Processing Utility",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which company developed the Android operating system?",
        options: ["Apple", "Google", "Microsoft", "IBM"],
        correctAnswer: 1,
      },
      {
        question: "What does URL stand for?",
        options: [
          "Uniform Resource Locator",
          "Universal Routing Link",
          "User Reference Location",
          "Unified Resource Language",
        ],
        correctAnswer: 0,
      },
    ],

    hard: [
      {
        question:
          "Which data structure follows the Last In, First Out principle?",
        options: ["Queue", "Stack", "Tree", "Graph"],
        correctAnswer: 1,
      },
      {
        question: "Which protocol is used to securely browse websites?",
        options: ["FTP", "HTTP", "HTTPS", "SMTP"],
        correctAnswer: 2,
      },
      {
        question: "What is the binary representation of decimal 10?",
        options: ["1001", "1010", "1100", "1110"],
        correctAnswer: 1,
      },
    ],
  },

  nature: {
    easy: [
      {
        question: "Which animal is the largest living land animal?",
        options: ["Giraffe", "African elephant", "Hippopotamus", "Rhinoceros"],
        correctAnswer: 1,
      },
      {
        question: "Which mammal is capable of true sustained flight?",
        options: ["Flying squirrel", "Bat", "Sugar glider", "Lemur"],
        correctAnswer: 1,
      },
      {
        question: "What do bees collect from flowers?",
        options: ["Sand", "Nectar", "Salt", "Clay"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question:
          "Which animal is known for changing colour to blend into its surroundings?",
        options: ["Chameleon", "Gorilla", "Zebra", "Penguin"],
        correctAnswer: 0,
      },
      {
        question: "Which type of tree produces acorns?",
        options: ["Pine", "Oak", "Maple", "Birch"],
        correctAnswer: 1,
      },
      {
        question: "Which is the largest species of shark?",
        options: [
          "Great white shark",
          "Tiger shark",
          "Whale shark",
          "Hammerhead shark",
        ],
        correctAnswer: 2,
      },
    ],

    hard: [
      {
        question:
          "What is the scientific name for the process by which plants lose water through their leaves?",
        options: ["Respiration", "Transpiration", "Germination", "Pollination"],
        correctAnswer: 1,
      },
      {
        question:
          "Which biome is characterised by permanently frozen subsoil called permafrost?",
        options: ["Savanna", "Tundra", "Rainforest", "Chaparral"],
        correctAnswer: 1,
      },
      {
        question: "Which animal group includes frogs, toads, and salamanders?",
        options: ["Reptiles", "Amphibians", "Mammals", "Molluscs"],
        correctAnswer: 1,
      },
    ],
  },

  gaming: {
    easy: [
      {
        question: "Which company created the Mario video game series?",
        options: ["Sony", "Nintendo", "Sega", "Microsoft"],
        correctAnswer: 1,
      },
      {
        question:
          "Which game features blocks that fall from the top of the screen?",
        options: ["Tetris", "Pac-Man", "Minecraft", "Portal"],
        correctAnswer: 0,
      },
      {
        question:
          "In Minecraft, which material is commonly used to craft a basic pickaxe?",
        options: ["Wood", "Glass", "Wool", "Sand"],
        correctAnswer: 0,
      },
    ],

    medium: [
      {
        question:
          "Which character is the main protagonist of The Legend of Zelda series?",
        options: ["Zelda", "Link", "Ganondorf", "Epona"],
        correctAnswer: 1,
      },
      {
        question: "Which game series features the city of Raccoon City?",
        options: [
          "Silent Hill",
          "Resident Evil",
          "Metal Gear",
          "Final Fantasy",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which company developed the PlayStation console?",
        options: ["Nintendo", "Sony", "Microsoft", "Atari"],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question:
          "Which 1993 first-person shooter was developed by id Software?",
        options: ["Doom", "Quake", "Half-Life", "Wolfenstein 3D"],
        correctAnswer: 0,
      },
      {
        question:
          "In Dark Souls, what resource is used both as currency and experience?",
        options: ["Runes", "Souls", "Echoes", "Credits"],
        correctAnswer: 1,
      },
      {
        question: "Which game introduced the fictional continent of Tamriel?",
        options: ["Dragon Age", "The Elder Scrolls", "Warcraft", "The Witcher"],
        correctAnswer: 1,
      },
    ],
  },

  space: {
    easy: [
      {
        question: "Which star is at the centre of our solar system?",
        options: ["Polaris", "The Sun", "Sirius", "Betelgeuse"],
        correctAnswer: 1,
      },
      {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Earth", "Mercury", "Mars"],
        correctAnswer: 2,
      },
      {
        question: "What is Earth's natural satellite called?",
        options: ["Titan", "The Moon", "Europa", "Phobos"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Which planet is famous for its prominent ring system?",
        options: ["Mars", "Saturn", "Venus", "Mercury"],
        correctAnswer: 1,
      },
      {
        question: "What is the name of our galaxy?",
        options: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"],
        correctAnswer: 1,
      },
      {
        question: "Which planet has the Great Red Spot?",
        options: ["Jupiter", "Saturn", "Neptune", "Mars"],
        correctAnswer: 0,
      },
    ],

    hard: [
      {
        question: "Which is the largest moon in the solar system?",
        options: ["Titan", "Ganymede", "Europa", "Callisto"],
        correctAnswer: 1,
      },
      {
        question: "What type of galaxy is the Milky Way?",
        options: [
          "Elliptical galaxy",
          "Barred spiral galaxy",
          "Irregular galaxy",
          "Ring galaxy",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which spacecraft was the first to land humans on the Moon?",
        options: ["Apollo 8", "Apollo 11", "Apollo 13", "Gemini 4"],
        correctAnswer: 1,
      },
    ],
  },

  mythology: {
    easy: [
      {
        question: "Who is the Greek god of thunder and the sky?",
        options: ["Ares", "Zeus", "Apollo", "Hermes"],
        correctAnswer: 1,
      },
      {
        question: "Which mythical creature is commonly shown breathing fire?",
        options: ["Unicorn", "Dragon", "Centaur", "Mermaid"],
        correctAnswer: 1,
      },
      {
        question: "Who is the Norse god associated with thunder?",
        options: ["Loki", "Thor", "Odin", "Baldr"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Which Greek hero defeated the Minotaur?",
        options: ["Perseus", "Theseus", "Achilles", "Odysseus"],
        correctAnswer: 1,
      },
      {
        question: "What is the name of the Norse world tree?",
        options: ["Asgard", "Yggdrasil", "Valhalla", "Midgard"],
        correctAnswer: 1,
      },
      {
        question: "Which Egyptian god is commonly depicted with a jackal head?",
        options: ["Ra", "Anubis", "Horus", "Osiris"],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question: "Who was the mother of Achilles in Greek mythology?",
        options: ["Hera", "Thetis", "Athena", "Demeter"],
        correctAnswer: 1,
      },
      {
        question: "Which Greek deity was condemned to hold up the sky?",
        options: ["Atlas", "Prometheus", "Hades", "Cronus"],
        correctAnswer: 0,
      },
      {
        question:
          "In Norse mythology, which wolf is destined to kill Odin during Ragnarök?",
        options: ["Fenrir", "Sköll", "Garmr", "Hati"],
        correctAnswer: 0,
      },
    ],
  },

  "pop-culture": {
    easy: [
      {
        question:
          "Which social media platform is known for short-form vertical videos?",
        options: ["LinkedIn", "TikTok", "Wikipedia", "Dropbox"],
        correctAnswer: 1,
      },
      {
        question: "Which fictional character lives in Gotham City?",
        options: ["Batman", "Superman", "Thor", "Hulk"],
        correctAnswer: 0,
      },
      {
        question: "Which emoji is commonly used to represent laughter?",
        options: ["😂", "😡", "😴", "🤔"],
        correctAnswer: 0,
      },
    ],

    medium: [
      {
        question:
          "Which reality television family includes Kim, Khloé, and Kourtney?",
        options: [
          "The Osbournes",
          "The Kardashians",
          "The Hiltons",
          "The Hadids",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which fictional school is attended by Harry Potter?",
        options: ["Narnia", "Hogwarts", "Nevermore", "Xavier's School"],
        correctAnswer: 1,
      },
      {
        question:
          "Which superhero team includes Iron Man, Thor, and Captain America?",
        options: ["Justice League", "Avengers", "Fantastic Four", "X-Men"],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question:
          "Which television series popularised the fictional coffee shop Central Perk?",
        options: ["Friends", "Seinfeld", "Frasier", "How I Met Your Mother"],
        correctAnswer: 0,
      },
      {
        question: "Which artist created the alter ego Ziggy Stardust?",
        options: ["David Bowie", "Elton John", "Freddie Mercury", "Prince"],
        correctAnswer: 0,
      },
      {
        question:
          "Which magazine first published the fictional character Superman in 1938?",
        options: [
          "Detective Comics",
          "Action Comics",
          "Marvel Comics",
          "Amazing Fantasy",
        ],
        correctAnswer: 1,
      },
    ],
  },

  fashion: {
    easy: [
      {
        question: "Which item is normally worn on the feet?",
        options: ["Gloves", "Shoes", "Scarf", "Hat"],
        correctAnswer: 1,
      },
      {
        question: "Which accessory is commonly worn around the neck?",
        options: ["Belt", "Scarf", "Sock", "Bracelet"],
        correctAnswer: 1,
      },
      {
        question: "Which material is commonly used to make jeans?",
        options: ["Silk", "Denim", "Velvet", "Linen"],
        correctAnswer: 1,
      },
    ],

    medium: [
      {
        question: "Which designer founded the fashion house Chanel?",
        options: [
          "Coco Chanel",
          "Donatella Versace",
          "Miuccia Prada",
          "Vivienne Westwood",
        ],
        correctAnswer: 0,
      },
      {
        question: "What is haute couture?",
        options: [
          "Mass-produced sportswear",
          "Custom-made high fashion",
          "Second-hand clothing",
          "Traditional military clothing",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Which pattern consists of intersecting horizontal and vertical lines?",
        options: ["Polka dot", "Plaid", "Paisley", "Floral"],
        correctAnswer: 1,
      },
    ],

    hard: [
      {
        question: "Which designer is associated with the red-soled shoe?",
        options: [
          "Christian Louboutin",
          "Jimmy Choo",
          "Manolo Blahnik",
          "Salvatore Ferragamo",
        ],
        correctAnswer: 0,
      },
      {
        question: "Which fashion house uses a double-C logo?",
        options: ["Gucci", "Chanel", "Prada", "Dior"],
        correctAnswer: 1,
      },
      {
        question:
          "Which designer is widely associated with introducing the New Look in 1947?",
        options: [
          "Christian Dior",
          "Yves Saint Laurent",
          "Hubert de Givenchy",
          "Pierre Cardin",
        ],
        correctAnswer: 0,
      },
    ],
  },
};
