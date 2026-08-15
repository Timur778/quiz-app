export const shopItems = {
  boosters: {
    "double-xp": {
      id: "double-xp",
      label: "Double XP",
      description:
        "Earn twice the normal XP from completed quizzes for 30 minutes.",
      price: 300,
      effect: "double-xp",
      unlocks: ["double-xp"],
      duration: 30,
    },

    "coin-rush": {
      id: "coin-rush",
      label: "Coin Rush",
      description: "Earn 50% more coins from quiz rewards for 30 minutes.",
      price: 250,
      effect: "coin-rush",
      unlocks: ["coin-rush"],
      duration: 30,
    },

    "streak-shield": {
      id: "streak-shield",
      label: "Streak Shield",
      description: "Protect your current streak from one failed quiz attempt.",
      price: 200,
      effect: "streak-shield",
      unlocks: ["streak-shield"],
    },

    "xp-surge": {
      id: "xp-surge",
      label: "XP Surge",
      description: "Earn 25% more XP from completed quizzes for 30 minutes.",
      price: 180,
      effect: "xp-surge",
      unlocks: ["xp-surge"],
      duration: 30,
    },
  },

  themes: {
    "midnight-blue": {
      id: "midnight-blue",
      label: "Midnight Blue",
      description: "A deep night-inspired theme with cool blue surfaces.",
      price: 600,
      previewClass: "theme-preview--midnight",
      unlocks: ["midnight-blue"],
    },

    forest: {
      id: "forest",
      label: "Forest",
      description: "A nature-inspired theme built around rich greens.",
      price: 600,
      previewClass: "theme-preview--forest",
      unlocks: ["forest"],
    },

    lava: {
      id: "lava",
      label: "Lava",
      price: 650,
      previewClass: "theme-preview--lava",
      unlocks: ["lava"],
    },

    aurora: {
      id: "aurora",
      label: "Aurora",
      price: 650,
      previewClass: "theme-preview--aurora",
      unlocks: ["aurora"],
    },

    candy: {
      id: "candy",
      label: "Candy",
      price: 700,
      previewClass: "theme-preview--candy",
      unlocks: ["candy"],
    },

    solar: {
      id: "solar",
      label: "Solar",
      price: 700,
      previewClass: "theme-preview--solar",
      unlocks: ["solar"],
    },

    royal: {
      id: "royal",
      label: "Royal",
      price: 750,
      previewClass: "theme-preview--royal",
      unlocks: ["royal"],
    },

    terminal: {
      id: "terminal",
      label: "Terminal",
      price: 750,
      previewClass: "theme-preview--terminal",
      unlocks: ["terminal"],
    },
  },

  styles: {
    glass: {
      id: "glass",
      label: "Glassmorphism",
      price: 450,
      previewClass: "style-preview--glass",
      unlocks: ["glass"],
    },

    cyber: {
      id: "cyber",
      label: "Cyber",
      price: 500,
      previewClass: "style-preview--cyber",
      unlocks: ["cyber"],
    },

    neumorphism: {
      id: "neumorphism",
      label: "Neumorphism",
      price: 500,
      previewClass: "style-preview--neumorphism",
      unlocks: ["neumorphism"],
    },

    clay: {
      id: "clay",
      label: "Clay",
      price: 550,
      previewClass: "style-preview--clay",
      unlocks: ["clay"],
    },

    outlined: {
      id: "outlined",
      label: "Outlined",
      price: 550,
      previewClass: "style-preview--outlined",
      unlocks: ["outlined"],
    },

    retro: {
      id: "retro",
      label: "Retro",
      price: 600,
      previewClass: "style-preview--retro",
      unlocks: ["retro"],
    },

    terminal: {
      id: "terminal",
      label: "Terminal",
      price: 600,
      previewClass: "style-preview--terminal",
      unlocks: ["terminal"],
    },

    brutalist: {
      id: "brutalist",
      label: "Brutalist",
      price: 650,
      previewClass: "style-preview--brutalist",
      unlocks: ["brutalist"],
    },
  },

  accents: {
    sky: {
      id: "sky",
      label: "Sky",
      color: "#38bdf8",
    },

    azure: {
      id: "azure",
      label: "Azure",
      color: "#0ea5e9",
    },

    blue: {
      id: "blue",
      label: "Blue",
      color: "#3b82f6",
    },

    navy: {
      id: "navy",
      label: "Navy",
      color: "#1d4ed8",
    },

    mint: {
      id: "mint",
      label: "Mint",
      color: "#6ee7b7",
    },

    emerald: {
      id: "emerald",
      label: "Emerald",
      color: "#10b981",
    },

    green: {
      id: "green",
      label: "Green",
      color: "#22c55e",
    },

    lime: {
      id: "lime",
      label: "Lime",
      color: "#84cc16",
    },

    rose: {
      id: "rose",
      label: "Rose",
      color: "#fca5a5",
    },

    coral: {
      id: "coral",
      label: "Coral",
      color: "#f87171",
    },

    red: {
      id: "red",
      label: "Red",
      color: "#ef4444",
    },

    crimson: {
      id: "crimson",
      label: "Crimson",
      color: "#b91c1c",
    },

    lilac: {
      id: "lilac",
      label: "Lilac",
      color: "#d8b4fe",
    },

    violet: {
      id: "violet",
      label: "Violet",
      color: "#c084fc",
    },

    purple: {
      id: "purple",
      label: "Purple",
      color: "#a855f7",
    },

    plum: {
      id: "plum",
      label: "Plum",
      color: "#7e22ce",
    },

    cream: {
      id: "cream",
      label: "Cream",
      color: "#fde68a",
    },

    yellow: {
      id: "yellow",
      label: "Yellow",
      color: "#facc15",
    },

    gold: {
      id: "gold",
      label: "Gold",
      color: "#eab308",
    },

    ochre: {
      id: "ochre",
      label: "Ochre",
      color: "#ca8a04",
    },

    peach: {
      id: "peach",
      label: "Peach",
      color: "#fdba74",
    },

    tangerine: {
      id: "tangerine",
      label: "Tangerine",
      color: "#fb923c",
    },

    orange: {
      id: "orange",
      label: "Orange",
      color: "#f97316",
    },

    rust: {
      id: "rust",
      label: "Rust",
      color: "#c2410c",
    },

    blush: {
      id: "blush",
      label: "Blush",
      color: "#f9a8d4",
    },

    pink: {
      id: "pink",
      label: "Pink",
      color: "#f472b6",
    },

    magenta: {
      id: "magenta",
      label: "Magenta",
      color: "#ec4899",
    },

    berry: {
      id: "berry",
      label: "Berry",
      color: "#be185d",
    },

    ice: {
      id: "ice",
      label: "Ice",
      color: "#a5f3fc",
    },

    aqua: {
      id: "aqua",
      label: "Aqua",
      color: "#67e8f9",
    },

    cyan: {
      id: "cyan",
      label: "Cyan",
      color: "#06b6d4",
    },

    teal: {
      id: "teal",
      label: "Teal",
      color: "#0e7490",
    },
  },

  accentPacks: {
    "blue-pack": {
      id: "blue-pack",
      label: "Blue Pack",
      price: 350,
      unlocks: ["sky", "azure", "blue", "navy"],
    },

    "green-pack": {
      id: "green-pack",
      label: "Green Pack",
      price: 350,
      unlocks: ["mint", "emerald", "green", "lime"],
    },

    "red-pack": {
      id: "red-pack",
      label: "Red Pack",
      price: 350,
      unlocks: ["rose", "coral", "red", "crimson"],
    },

    "purple-pack": {
      id: "purple-pack",
      label: "Purple Pack",
      price: 350,
      unlocks: ["lilac", "violet", "purple", "plum"],
    },

    "yellow-pack": {
      id: "yellow-pack",
      label: "Yellow Pack",
      price: 350,
      unlocks: ["cream", "yellow", "gold", "ochre"],
    },

    "orange-pack": {
      id: "orange-pack",
      label: "Orange Pack",
      price: 350,
      unlocks: ["peach", "tangerine", "orange", "rust"],
    },

    "pink-pack": {
      id: "pink-pack",
      label: "Pink Pack",
      price: 350,
      unlocks: ["blush", "pink", "magenta", "berry"],
    },

    "cyan-pack": {
      id: "cyan-pack",
      label: "Cyan Pack",
      price: 350,
      unlocks: ["ice", "aqua", "cyan", "teal"],
    },
  },

  backgrounds: {
    midnight: {
      id: "midnight",
      label: "Midnight",
      price: 400,
      previewClass: "background-preview--midnight",
      unlocks: ["midnight"],
    },

    aurora: {
      id: "aurora",
      label: "Aurora",
      price: 450,
      previewClass: "background-preview--aurora",
      unlocks: ["aurora"],
    },

    sunset: {
      id: "sunset",
      label: "Sunset",
      price: 400,
      previewClass: "background-preview--sunset",
      unlocks: ["sunset"],
    },

    ocean: {
      id: "ocean",
      label: "Ocean",
      price: 400,
      previewClass: "background-preview--ocean",
      unlocks: ["ocean"],
    },

    forest: {
      id: "forest",
      label: "Forest",
      price: 425,
      previewClass: "background-preview--forest",
      unlocks: ["forest"],
    },

    cosmic: {
      id: "cosmic",
      label: "Cosmic",
      price: 450,
      previewClass: "background-preview--cosmic",
      unlocks: ["cosmic"],
    },

    lavender: {
      id: "lavender",
      label: "Lavender",
      price: 425,
      previewClass: "background-preview--lavender",
      unlocks: ["lavender"],
    },

    ember: {
      id: "ember",
      label: "Ember",
      price: 450,
      previewClass: "background-preview--ember",
      unlocks: ["ember"],
    },
  },
};
