export const achievements = [
  {
    id: "first-steps",
    title: "First Steps",
    description: "Complete your first quiz.",
    icon: "../Images/Achievements/First Steps.webp",
    category: "progress",
    rarity: "common",
    isHidden: false,

    progress: {
      stat: "quizzesCompleted",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [],

    reward: {
      coins: 50,
      xp: 100,
    },

    isUnlocked: true,
    unlockedAt: null,
  },

  {
    id: "knowledge-seeker",
    title: "Knowledge Seeker",
    description: "Answer 100 questions.",
    icon: "../Images/Achievements/Knowledge Seeker.webp",
    category: "learning",
    rarity: "common",
    isHidden: false,

    progress: {
      stat: "questionsAnswered",
      current: 0,
      target: 100,
      targetSource: null,
      unit: "questions",
    },

    requirements: [],

    reward: {
      coins: 50,
      xp: 100,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "perfect-score",
    title: "Perfect Score",
    description: "Finish a quiz with 100% accuracy.",
    icon: "../Images/Achievements/Perfect Score.webp",
    category: "mastery",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "highestQuizAccuracy",
      current: 0,
      target: 100,
      targetSource: null,
      unit: "percent",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: true,
    unlockedAt: null,
  },

  {
    id: "speed-demon",
    title: "Speed Demon",
    description: "Finish a quiz in under 30 seconds.",
    icon: "../Images/Achievements/Speed Demon.webp",
    category: "speed",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "fastestQuizTime",
      current: null,
      target: 30,
      targetSource: null,
      unit: "seconds",
    },

    requirements: [
      {
        stat: "quizCompleted",
        operator: "equals",
        value: true,
        scope: "currentQuiz",
      },
      {
        stat: "quizCompletionTime",
        operator: "lessThan",
        value: 30,
        scope: "currentQuiz",
      },
    ],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "on-fire",
    title: "On Fire",
    description: "Get 10 correct answers in a row.",
    icon: "../Images/Achievements/On Fire.webp",
    category: "streak",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "highestCorrectStreak",
      current: 0,
      target: 10,
      targetSource: null,
      unit: "answers",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "unstoppable",
    title: "Unstoppable",
    description: "Get 25 correct answers in a row.",
    icon: "../Images/Achievements/Unstoppable.webp",
    category: "streak",
    rarity: "epic",
    isHidden: false,

    progress: {
      stat: "highestCorrectStreak",
      current: 0,
      target: 25,
      targetSource: null,
      unit: "answers",
    },

    requirements: [],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "brainiac",
    title: "Brainiac",
    description: "Reach Level 10.",
    icon: "../Images/Achievements/Brainiac.webp",
    category: "progress",
    rarity: "common",
    isHidden: false,

    progress: {
      stat: "level",
      current: 1,
      target: 10,
      targetSource: null,
      unit: "levels",
    },

    requirements: [],

    reward: {
      coins: 50,
      xp: 100,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "quiz-master",
    title: "Quiz Master",
    description: "Reach Level 50.",
    icon: "../Images/Achievements/Master.webp",
    category: "progress",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "level",
      current: 1,
      target: 50,
      targetSource: null,
      unit: "levels",
    },

    requirements: [],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "first-fortune",
    title: "First Fortune",
    description: "Earn 1,000 coins.",
    icon: "../Images/Achievements/First Fortune.webp",
    category: "economy",
    rarity: "common",
    isHidden: false,

    progress: {
      stat: "lifetimeCoinsEarned",
      current: 0,
      target: 1000,
      targetSource: null,
      unit: "coins",
    },

    requirements: [],

    reward: {
      coins: 50,
      xp: 100,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "millionaire",
    title: "Millionaire",
    description: "Earn 100,000 coins.",
    icon: "../Images/Achievements/Millionaire.webp",
    category: "economy",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "lifetimeCoinsEarned",
      current: 0,
      target: 100000,
      targetSource: null,
      unit: "coins",
    },

    requirements: [],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "shopper",
    title: "Shopper",
    description: "Buy your first cosmetic item.",
    icon: "../Images/Achievements/Shopper.webp",
    category: "collection",
    rarity: "common",
    isHidden: false,

    progress: {
      stat: "cosmeticsPurchased",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "items",
    },

    requirements: [],

    reward: {
      coins: 50,
      xp: 100,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "fashion-expert",
    title: "Fashion Expert",
    description: "Unlock 10 customization items.",
    icon: "../Images/Achievements/Fashion Expert.webp",
    category: "collection",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "customizationItemsUnlocked",
      current: 0,
      target: 10,
      targetSource: null,
      unit: "items",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "theme-collector",
    title: "Theme Collector",
    description: "Unlock every theme.",
    icon: "../Images/Achievements/Theme Collector.webp",
    category: "collection",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "themesUnlocked",
      current: 0,
      target: null,
      targetSource: "totalUnlockableThemes",
      unit: "themes",
    },

    requirements: [],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "champion",
    title: "Champion",
    description: "Win 50 quizzes.",
    icon: "../Images/Achievements/Champion.webp",
    category: "mastery",
    rarity: "epic",
    isHidden: false,

    progress: {
      stat: "quizzesWon",
      current: 0,
      target: 50,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "daily-habit",
    title: "Daily Habit",
    description: "Complete the Daily Quiz 7 days in a row.",
    icon: "../Images/Achievements/Daily Habit.webp",
    category: "consistency",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "dailyQuizStreak",
      current: 0,
      target: 7,
      targetSource: null,
      unit: "days",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "dedicated-learner",
    title: "Dedicated Learner",
    description: "Complete the Daily Quiz 30 days in a row.",
    icon: "../Images/Achievements/Dedicated Learner.webp",
    category: "consistency",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "dailyQuizStreak",
      current: 0,
      target: 30,
      targetSource: null,
      unit: "days",
    },

    requirements: [],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "explorer",
    title: "Explorer",
    description: "Play every category at least once.",
    icon: "../Images/Achievements/Explorer.webp",
    category: "exploration",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "categoriesPlayed",
      current: 0,
      target: null,
      targetSource: "totalCategories",
      unit: "categories",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "world-scholar",
    title: "World Scholar",
    description: "Complete every category with at least 80% accuracy.",
    icon: "../Images/Achievements/World Scholar.webp",
    category: "mastery",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "categoriesMastered",
      current: 0,
      target: null,
      targetSource: "totalCategories",
      unit: "categories",
    },

    requirements: [
      {
        stat: "categoryAccuracy",
        operator: "greaterThanOrEqual",
        value: 80,
        scope: "everyCategory",
      },
    ],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "experimenter",
    title: "Experimenter",
    description: "Try every game mode.",
    icon: "../Images/Achievements/Experimenter.webp",
    category: "exploration",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "gameModesPlayed",
      current: 0,
      target: null,
      targetSource: "totalGameModes",
      unit: "modes",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "arcade-veteran",
    title: "Arcade Veteran",
    description: "Play 250 quizzes.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "progress",
    rarity: "epic",
    isHidden: false,

    progress: {
      stat: "quizzesStarted",
      current: 0,
      target: 250,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "lucky-guess",
    title: "Lucky Guess",
    description:
      "Answer 5 questions correctly in a row with less than 10 seconds remaining.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "special",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "lowTimeCorrectStreak",
      current: 0,
      target: 5,
      targetSource: null,
      unit: "answers",
    },

    requirements: [
      {
        stat: "remainingTime",
        operator: "lessThan",
        value: 10,
        scope: "eachAnswer",
      },
      {
        stat: "answerCorrect",
        operator: "equals",
        value: true,
        scope: "eachAnswer",
      },
    ],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "never-give-up",
    title: "Never Give Up",
    description: "Finish a quiz after getting the first 3 questions wrong.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "special",
    rarity: "common",
    isHidden: false,

    progress: {
      stat: "comebackQuizzesCompleted",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [
      {
        stat: "firstThreeAnswersCorrect",
        operator: "equals",
        value: false,
        scope: "currentQuiz",
      },
      {
        stat: "quizCompleted",
        operator: "equals",
        value: true,
        scope: "currentQuiz",
      },
    ],

    reward: {
      coins: 50,
      xp: 100,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "rising-star",
    title: "Rising Star",
    description: "Level up 5 times in one day.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "progress",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "levelsGainedToday",
      current: 0,
      target: 5,
      targetSource: null,
      unit: "levels",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "combo-king",
    title: "Combo King",
    description: "Reach a 50-answer combo.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "streak",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "highestCorrectStreak",
      current: 0,
      target: 50,
      targetSource: null,
      unit: "answers",
    },

    requirements: [],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "professor",
    title: "Professor",
    description:
      "Maintain at least 95% overall accuracy after answering 500 questions.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "mastery",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "questionsAnswered",
      current: 0,
      target: 500,
      targetSource: null,
      unit: "questions",
    },

    requirements: [
      {
        stat: "overallAccuracy",
        operator: "greaterThanOrEqual",
        value: 95,
        scope: "lifetime",
      },
    ],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "completionist",
    title: "Completionist",
    description: "Unlock every other achievement.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "collection",
    rarity: "mythic",
    isHidden: false,

    progress: {
      stat: "achievementsUnlocked",
      current: 0,
      target: null,
      targetSource: "totalAchievementsExcludingCompletionist",
      unit: "achievements",
    },

    requirements: [],

    reward: {
      coins: 1000,
      xp: 2000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "collector",
    title: "Collector",
    description: "Unlock 50 cosmetic items.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "collection",
    rarity: "epic",
    isHidden: false,

    progress: {
      stat: "cosmeticsUnlocked",
      current: 0,
      target: 50,
      targetSource: null,
      unit: "items",
    },

    requirements: [],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "coin-magnet",
    title: "Coin Magnet",
    description: "Hold 10,000 coins without spending any.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "economy",
    rarity: "rare",
    isHidden: false,

    progress: {
      stat: "highestUnspentCoinBalance",
      current: 0,
      target: 10000,
      targetSource: null,
      unit: "coins",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "marathon",
    title: "Marathon",
    description: "Complete 20 quizzes in one session.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "consistency",
    rarity: "epic",
    isHidden: false,

    progress: {
      stat: "sessionQuizzesCompleted",
      current: 0,
      target: 20,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "welcome-back",
    title: "Welcome Back",
    description: "Log in on 100 different days.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "consistency",
    rarity: "legendary",
    isHidden: false,

    progress: {
      stat: "uniqueLoginDays",
      current: 0,
      target: 100,
      targetSource: null,
      unit: "days",
    },

    requirements: [],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  // =====================================================
  // Hidden achievements
  // =====================================================

  {
    id: "easter-egg-hunter",
    title: "Easter Egg Hunter",
    description: "Find a hidden clickable object.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "uncommon",
    isHidden: true,

    progress: {
      stat: "hiddenObjectsFound",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "objects",
    },

    requirements: [],

    reward: {
      coins: 75,
      xp: 150,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "night-owl",
    title: "Night Owl",
    description: "Play a quiz after midnight.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "uncommon",
    isHidden: true,

    progress: {
      stat: "nightQuizzesCompleted",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [
      {
        stat: "localHour",
        operator: "between",
        value: [0, 4],
        scope: "quizStart",
      },
    ],

    reward: {
      coins: 75,
      xp: 150,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "early-bird",
    title: "Early Bird",
    description: "Play a quiz before 6 AM.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "uncommon",
    isHidden: true,

    progress: {
      stat: "earlyMorningQuizzesCompleted",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [
      {
        stat: "localHour",
        operator: "lessThan",
        value: 6,
        scope: "quizStart",
      },
    ],

    reward: {
      coins: 75,
      xp: 150,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "persistent",
    title: "Persistent",
    description: "Refresh the page 10 times in one session.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "uncommon",
    isHidden: true,

    progress: {
      stat: "sessionRefreshes",
      current: 0,
      target: 10,
      targetSource: null,
      unit: "refreshes",
    },

    requirements: [],

    reward: {
      coins: 75,
      xp: 150,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "identity-crisis",
    title: "Identity Crisis",
    description: "Change your theme 20 times.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "uncommon",
    isHidden: true,

    progress: {
      stat: "themeChanges",
      current: 0,
      target: 20,
      targetSource: null,
      unit: "changes",
    },

    requirements: [],

    reward: {
      coins: 75,
      xp: 150,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "secret-treasure",
    title: "Secret Treasure",
    description: "Find a hidden coin.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "rare",
    isHidden: true,

    progress: {
      stat: "hiddenCoinsFound",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "coins",
    },

    requirements: [],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "impossible",
    title: "Impossible?",
    description: "Score 100% on Expert difficulty.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "legendary",
    isHidden: true,

    progress: {
      stat: "expertPerfectScores",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [
      {
        stat: "quizDifficulty",
        operator: "equals",
        value: "expert",
        scope: "currentQuiz",
      },
      {
        stat: "quizAccuracy",
        operator: "equals",
        value: 100,
        scope: "currentQuiz",
      },
    ],

    reward: {
      coins: 500,
      xp: 1000,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "risk-taker",
    title: "Risk Taker",
    description: "Win a quiz with only one second remaining.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "epic",
    isHidden: true,

    progress: {
      stat: "oneSecondWins",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [
      {
        stat: "quizWon",
        operator: "equals",
        value: true,
        scope: "currentQuiz",
      },
      {
        stat: "remainingTime",
        operator: "lessThanOrEqual",
        value: 1,
        scope: "quizEnd",
      },
    ],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "ice-cold",
    title: "Ice Cold",
    description: "Answer every question correctly without using hints.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "epic",
    isHidden: true,

    progress: {
      stat: "perfectNoHintQuizzes",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "quizzes",
    },

    requirements: [
      {
        stat: "quizAccuracy",
        operator: "equals",
        value: 100,
        scope: "currentQuiz",
      },
      {
        stat: "hintsUsed",
        operator: "equals",
        value: 0,
        scope: "currentQuiz",
      },
    ],

    reward: {
      coins: 250,
      xp: 500,
    },

    isUnlocked: false,
    unlockedAt: null,
  },

  {
    id: "happy-birthday",
    title: "Happy Birthday!",
    description: "Log in on your birthday.",
    icon: "../Images/Achievements/Arcade Veteran.webp",
    category: "secret",
    rarity: "rare",
    isHidden: true,

    progress: {
      stat: "birthdayLogins",
      current: 0,
      target: 1,
      targetSource: null,
      unit: "logins",
    },

    requirements: [
      {
        stat: "currentDate",
        operator: "matches",
        valueSource: "userBirthday",
        scope: "login",
      },
    ],

    reward: {
      coins: 125,
      xp: 250,
    },

    isUnlocked: false,
    unlockedAt: null,
  },
];

const binaryAchievementIds = new Set([
  "perfect-score",
  "speed-demon",
  "never-give-up",
  "easter-egg-hunter",
  "night-owl",
  "early-bird",
  "secret-treasure",
  "impossible",
  "risk-taker",
  "ice-cold",
  "happy-birthday",
]);

achievements.forEach((achievement) => {
  achievement.progressType = binaryAchievementIds.has(achievement.id)
    ? "binary"
    : "numeric";
});
