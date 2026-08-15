export const database = [
  {
    users: [],
    activeSession: {
      userId: null,
    },
  },
];

export function clearAllErrors(elements) {
  elements.forEach((error) => {
    if (!error.classList.contains("hidden")) {
      error.classList.add("hidden");
    }
  });
}

export function showError(error, elements) {
  clearAllErrors(elements);
  error.classList.remove("hidden");
}

export function setUpdatedUserRecord(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Error storing JSON into LocalStorage", error);
  }
}

export function getUserRecord(key) {
  try {
    const retrievedRecord = localStorage.getItem(key);

    if (retrievedRecord) {
      return JSON.parse(retrievedRecord);
    }

    return structuredClone(database);
  } catch (error) {
    console.error("Error parsing JSON from LocalStorage", error);
    return structuredClone(database);
  }
}

export function findActiveUser(data) {
  const activeUser = data.users.find((user) => {
    return user.userId === data.activeSession.userId;
  });

  if (!activeUser) {
    console.error("User is not found");
    return;
  }

  return activeUser;
}

export function applyUserCustomization(user) {
  document.documentElement.dataset.theme = user.customization.theme;
  document.documentElement.dataset.mode = user.customization.mode;
  document.documentElement.dataset.accent = user.customization.accent;
  document.documentElement.dataset.style = user.customization.style;
  document.documentElement.dataset.background = user.customization.background;
}

export function updateUserDetails(user, username, email, coins) {
  if (username) {
    username.textContent = user.username || "Guest";
  }

  if (email) {
    email.textContent = user.email || "guest@gmail.com";
  }

  if (coins) {
    coins.textContent = user.coins;
  }
}

export function setupTopBar() {
  const username = document.querySelector(".dropdown-top__username");
  const email = document.querySelector(".dropdown-top__email");
  const coins = document.querySelector(".coin-amount");

  const retrievedData = getUserRecord("database");
  const activeUser = findActiveUser(retrievedData[0]);

  if (!activeUser) {
    console.error("Active user could not be found.");
    window.location.href = "Login Page/login.html";
  } else {
    applyUserCustomization(activeUser);
    updateUserDetails(activeUser, username, email, coins);
  }

  requestAnimationFrame(() => {
    document.documentElement.classList.remove("preload");
  });

  return {
    retrievedData,
    activeUser,
  };
}

export function checkCurrentMode() {
  const currentMode = document.documentElement.dataset.mode;
  const darkModeButton = document.querySelector(".darkmode");
  const toggle = document.querySelector(".toggle");

  if (!darkModeButton || !toggle) return;

  const isDark = currentMode === "dark";

  darkModeButton.classList.toggle("active", isDark);
  toggle.classList.toggle("off", isDark);
}

export function saveCurrentCustomization(retrievedData, activeUser) {
  const htmlElement = document.documentElement;

  if (!activeUser) {
    return;
  }

  activeUser.customization.theme = htmlElement.dataset.theme;
  activeUser.customization.mode = htmlElement.dataset.mode;
  activeUser.customization.accent = htmlElement.dataset.accent;
  activeUser.customization.style = htmlElement.dataset.style;
  activeUser.customization.background = htmlElement.dataset.background;

  setUpdatedUserRecord("database", retrievedData);
}

export function calculateRequiredXP(level) {
  const baseXp = 100;
  const growthExponent = 1.25;

  const requiredXp = Math.round((baseXp * level ** growthExponent) / 10) * 10;

  return requiredXp;
}

export function renderUserProgress(activeUser) {
  const userLevelCircle = document.querySelector(".user-level__circle");
  const userLevel = document.querySelector(".user-level");
  const nextLevelRequiredPoints = document.querySelector(
    ".next-level__points span",
  );
  const currentLevel = document.querySelector(".current-level");
  const nextLevel = document.querySelector(".next-level");
  const currentProgress = document.querySelector(".current-points");
  const progressTrack = document.querySelector(".progress-track");
  const rankingTitle = document.querySelector(".dropdown-top__ranking");
  const levelContainer = document.querySelector(".dropdown-top__level");

  const requiredXp = calculateRequiredXP(activeUser.level);
  const currentRank = getRankByLevel(activeUser.level);

  if (
    !userLevelCircle ||
    !userLevel ||
    !nextLevelRequiredPoints ||
    !currentLevel ||
    !nextLevel ||
    !currentProgress ||
    !progressTrack ||
    !rankingTitle ||
    !levelContainer
  )
    return;
  rankingTitle.textContent = currentRank.toUpperCase();
  rankingTitle.dataset.rank = currentRank;
  levelContainer.dataset.rank = currentRank;
  userLevelCircle.textContent = activeUser.level;
  userLevel.textContent = activeUser.level;
  currentLevel.textContent = activeUser.level;
  nextLevel.textContent = activeUser.level + 1;
  nextLevelRequiredPoints.textContent = requiredXp - activeUser.xp;
  currentProgress.textContent = `${activeUser.xp} / ${requiredXp}`;
  const completedAmount = (activeUser.xp * 100) / requiredXp;

  progressTrack.style.width = `clamp(0%, ${completedAmount}%, 100%)`;
}

export function getRankByLevel(level) {
  if (level >= 29) return "champion";
  if (level >= 27) return "immortal";
  if (level >= 25) return "ascendant";
  if (level >= 23) return "mythic";
  if (level >= 21) return "legend";
  if (level >= 19) return "grandmaster";
  if (level >= 17) return "master";
  if (level >= 15) return "elite";
  if (level >= 13) return "expert";
  if (level >= 11) return "strategist";
  if (level >= 9) return "challenger";
  if (level >= 7) return "thinker";
  if (level >= 5) return "scholar";
  if (level >= 3) return "learner";

  return "novice";
}

export function getTotalStars(levels) {
  const totalStars = levels.reduce((stars, level) => {
    return stars + level.stars;
  }, 0);

  return totalStars;
}

export function getUnlockedLevelsCount(levels) {
  return levels.reduce((unlocked, level) => {
    return level.isUnlocked ? unlocked + 1 : unlocked;
  }, 0);
}

export function getCompletedLevelsCount(levels) {
  return levels.reduce((completed, level) => {
    return level.stars >= 1 ? completed + 1 : completed;
  }, 0);
}

export function getTotalPossibleStars(levels) {
  const totalLevels = levels.length;
  return totalLevels * 3;
}

export function getWorldCompletionPercentage(levels) {
  const collectedStars = getTotalStars(levels);
  const possibleStars = getTotalPossibleStars(levels);

  return Math.round((collectedStars * 100) / possibleStars);
}

export function updateWorldStats() {
  const data = getUserRecord("database");
  const activeUser = findActiveUser(data[0]);
  const worldCards = document.querySelectorAll(".campaign-world");

  worldCards.forEach((worldCard) => {
    const worldId = worldCard.dataset.worldId;

    const percentage = worldCard.querySelector(".campaign-world__percentage");

    const levels = worldCard.querySelector(".campaign-world__levels");

    const stars = worldCard.querySelector(".campaign-world__stars");
    const worldProgress = activeUser.campaign.worlds[worldId];

    if (!worldProgress) return;

    const retrievedLevels = activeUser.campaign.worlds[worldId].levels;
    const levelProgress = Object.values(retrievedLevels);
    percentage.textContent = `${getWorldCompletionPercentage(levelProgress)}%`;
    levels.textContent = `${getCompletedLevelsCount(levelProgress)} / ${levelProgress.length} Levels`;
    stars.textContent = `${getTotalStars(levelProgress)} / ${getTotalPossibleStars(levelProgress)} Stars`;
  });
}

export const campaignWorlds = [
  {
    id: "knowledge-valley",
    requiredStars: 0,
  },
  {
    id: "science-station",
    requiredStars: 22,
  },
  {
    id: "history-kingdom",
    requiredStars: 45,
  },
  {
    id: "geography-isles",
    requiredStars: 70,
  },
  {
    id: "nature-realm",
    requiredStars: 100,
  },
  {
    id: "technology-city",
    requiredStars: 130,
  },
  {
    id: "arts-academy",
    requiredStars: 165,
  },
  {
    id: "sports-arena",
    requiredStars: 200,
  },
  {
    id: "mystery-dimension",
    requiredStars: 235,
  },
  {
    id: "quizsphere-citadel",
    requiredStars: 270,
  },
];
