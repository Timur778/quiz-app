"use strict";

import { knowledgeValleyLevels } from "./Play Page/Worlds/Knowledge Valley/knowledge-valley-data.js";
import { knowledgeValleyQuestions } from "./Play Page/Worlds/Knowledge Valley/knowledge-valley-questions.js";
import { getUserRecord, findActiveUser } from "../../../reusable.js";
import { setUpdatedUserRecord } from "./reusable.js";
import { calculateRequiredXP } from "./reusable.js";
import { audio } from "./shared.js";

// --- DOM ELEMENT SELECTORS ---

const container = document.querySelector(".container");
const coins = document.querySelector(".coin-amount");
const question = document.querySelector(".question");

const currentQuestionNumber = document.querySelector(
  ".current-question__index",
);

const totalQuestions = document.querySelectorAll(".total-questions");
const options = document.querySelectorAll(".options");
const optionsArea = document.querySelector(".options-area");

// Summary Selectors
const summaryContainer = document.querySelector(".quiz-summary");
const summaryLevel = document.querySelector(".quiz-summary__level");
const summaryLabel = document.querySelector(".quiz-summary__label");
const passingTarget = document.querySelector(".level-target");
const currentProgress = document.querySelector(".level-current");
const summaryScoreSpan = document.querySelector(".quiz-summary__score span");
const summaryCoinsEarned = document.querySelector(
  ".reward-amount__coins .coin-amount",
);
const summaryXPEarned = document.querySelector(".amount-xp");

// Summary Buttons
const nextLevelBtn = document.querySelector(".next-level__button");
const retryBtn = document.querySelector(".retry-button");
const levelsMapBtn = document.querySelector(".levels-map__button");

const stars = document.querySelectorAll(".level-completed__star");
const star1 = document.querySelector(".star--1");
const star2 = document.querySelector(".star--2");
const star3 = document.querySelector(".star--3");

const confettiContainer = document.querySelector(".confetti-container");

// --- CONFETTI ANIMATION ---

const confettiAnimation = lottie.loadAnimation({
  container: confettiContainer,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./Animations/confetti.json",
});

// --- QUIZ STATE ---

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const world = urlParams.get("world");
const selectedLevel = urlParams.get("level");

const selectedLevelData = knowledgeValleyLevels.find((levelData) => {
  return levelData.id === selectedLevel;
});

const isMissingParameter = !world || !selectedLevel;
const isValid = world === "knowledge-valley" && Boolean(selectedLevelData);

// --- ACTIVE USER ---

const data = getUserRecord("database");
const activeUser = findActiveUser(data[0]);
const retrievedLevels = activeUser.campaign.worlds["knowledge-valley"].levels;
console.log(activeUser);

audio.stopMusic();
audio.playMusic("quizBackground");

// -------------------------------------------------------------------- //

function initializeQuiz() {
  if (isMissingParameter || !isValid) {
    window.location.href = "Play Page/Worlds/Knowledge Valley/index.html";
    return;
  }

  function unlockNextLevel() {
    const currentLevelId = selectedLevelData.id;
    const savedStars = retrievedLevels[currentLevelId].stars;

    if (savedStars < 1) return;

    const currentLevelIndex = knowledgeValleyLevels.findIndex(
      (level) => level.id === currentLevelId,
    );

    if (knowledgeValleyLevels.length === currentLevelIndex + 1) return;

    const nextLevelId = knowledgeValleyLevels[currentLevelIndex + 1].id;
    retrievedLevels[nextLevelId].isUnlocked = true;
    return nextLevelId;
  }

  let nextLevelId = null;

  const questions = knowledgeValleyQuestions[selectedLevel];
  if (!questions || !Array.isArray(questions) || questions.length < 1) {
    throw new Error("Invalid questions set.");
  }

  totalQuestions.forEach((total) => {
    total.textContent = questions.length;
  });

  let correctAnswers = 0;
  let currentQuestionIndex = 0;

  // --- QUIZ HELPERS ---

  function calculateScore() {
    const score = (correctAnswers * 100) / questions.length;
    return Math.round(score);
  }

  function convertScoreToStars() {
    const calculatedScore = calculateScore();

    if (calculatedScore >= 85) return 3;
    if (calculatedScore >= 60) return 2;
    if (calculatedScore >= 40) return 1;
    return 0;
  }

  function displayStars(starsCount) {
    clearAllStars();
    if (starsCount >= 1) star1.classList.add("level-completed__star--filled");
    if (starsCount >= 2) star2.classList.add("level-completed__star--filled");
    if (starsCount >= 3) star3.classList.add("level-completed__star--filled");
  }

  function clearAllStars() {
    stars.forEach((star) => {
      star.classList.remove("level-completed__star--filled");
    });
  }

  function checkStatus(starsCount) {
    return starsCount >= 1 ? "Complete" : "Failed";
  }

  function handleXp(activeUser, xpEarned) {
    if (!activeUser || !xpEarned || xpEarned <= 0) return;
    activeUser.xp += xpEarned;

    while (true) {
      const requiredXp = calculateRequiredXP(activeUser.level);
      if (activeUser.xp < requiredXp) break;

      activeUser.level++;
      activeUser.xp -= requiredXp;
    }
  }

  function disableOptions() {
    options.forEach((option) => {
      option.disabled = true;
    });
  }

  function enableOptions() {
    options.forEach((option) => {
      option.disabled = false;
    });
  }

  function clearOptionStyles() {
    options.forEach((option) => {
      option.classList.remove(
        "correct-answer",
        "selected",
        "incorrect-answers",
      );
    });
  }

  function renderOptions() {
    const currentQuestion = questions[currentQuestionIndex];

    options.forEach((option, index) => {
      const questionAnswers = currentQuestion.answers[index];
      option.dataset.answerId = questionAnswers.id;
      option.textContent = questionAnswers.text;
    });
  }

  function renderQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    question.textContent = currentQuestion.question;
    currentQuestionNumber.textContent = currentQuestionIndex + 1;

    clearOptionStyles();
    renderOptions();
  }

  function showCorrectAnswer() {
    const correctAnswerId = questions[currentQuestionIndex].correctAnswerId;

    options.forEach((option) => {
      if (option.dataset.answerId === correctAnswerId) {
        option.classList.add("correct-answer");
      }
    });
  }

  function showIncorrectAnswers(selectedOption) {
    options.forEach((option) => {
      if (
        option === selectedOption ||
        option.classList.contains("correct-answer")
      ) {
        return;
      }
      option.classList.add("incorrect-answers");
    });
  }

  function calculateCoins(previousStars, collectedStars) {
    if (previousStars >= collectedStars) return 0;
    const previousStarsPercentage = convertStarsToPercentage(previousStars);
    const newStarsPercentage = convertStarsToPercentage(collectedStars);
    const totalRewardCoins = selectedLevelData.rewards.coins;
    const previousRewardCoins = totalRewardCoins * previousStarsPercentage;
    const newRewardCoins = totalRewardCoins * newStarsPercentage;
    const coinsToGrantNow = Math.round(newRewardCoins - previousRewardCoins);

    return coinsToGrantNow;
  }

  function calculateXP(previousStars, collectedStars) {
    if (previousStars >= collectedStars) return 0;
    const previousStarsPercentage = convertStarsToPercentage(previousStars);
    const newStarsPercentage = convertStarsToPercentage(collectedStars);
    const totalRewardXP = selectedLevelData.rewards.xp;
    const previousRewardXP = totalRewardXP * previousStarsPercentage;
    const newRewardXP = totalRewardXP * newStarsPercentage;
    const xpToGrantNow = Math.round(newRewardXP - previousRewardXP);

    return xpToGrantNow;
  }

  function convertStarsToPercentage(stars) {
    if (stars === 1) {
      return 0.5;
    } else if (stars === 2) {
      return 0.75;
    } else if (stars === 3) {
      return 1;
    }

    return 0;
  }

  function showQuizSummary() {
    const collectedStars = convertScoreToStars();
    const previousStars = retrievedLevels[selectedLevelData.id].stars;

    const coinsEarned = calculateCoins(previousStars, collectedStars);
    const xpEarned = calculateXP(previousStars, collectedStars);

    if (collectedStars > previousStars) {
      retrievedLevels[selectedLevelData.id].stars = collectedStars;
    }

    activeUser.coins += coinsEarned;
    handleXp(activeUser, xpEarned);

    nextLevelId = unlockNextLevel();

    container.classList.add("hidden");
    summaryContainer.classList.remove("hidden");

    if (summaryLevel)
      summaryLevel.textContent = `Level ${selectedLevelData.number || selectedLevel}`;
    if (summaryLabel) summaryLabel.textContent = checkStatus(collectedStars);
    if (passingTarget)
      passingTarget.textContent = Math.round(questions.length * 0.4);
    if (totalQuestions) {
      totalQuestions.forEach((total) => {
        total.textContent = questions.length;
      });
    }
    if (currentProgress) {
      currentProgress.textContent = correctAnswers;
    }
    if (summaryCoinsEarned) {
      summaryCoinsEarned.textContent = coinsEarned;
    }

    if (summaryXPEarned) {
      summaryXPEarned.textContent = xpEarned;
    }

    displayStars(collectedStars);

    if (nextLevelId) {
      nextLevelBtn.classList.remove("hidden");
    } else {
      nextLevelBtn.classList.add("hidden");
    }

    setUpdatedUserRecord("database", data);

    if (collectedStars >= 1) {
      confettiAnimation.goToAndPlay(0, true);
      audio.playSfx("levelComplete");
      audio.playSfx("crowd");
      return;
    }

    audio.playSfx("gameover");
  }

  function moveToNextQuestion() {
    setTimeout(() => {
      currentQuestionIndex++;

      const quizFinished = currentQuestionIndex === questions.length;

      if (quizFinished) {
        showQuizSummary();
        return;
      }

      renderQuestion();
      enableOptions();
    }, 2000);
  }

  // --- OPTION CLICK HANDLER ---

  optionsArea.addEventListener("click", (event) => {
    const selectedOption = event.target.closest(".options");
    const currentQuestion = questions[currentQuestionIndex];

    if (
      !selectedOption ||
      !optionsArea.contains(selectedOption) ||
      selectedOption.disabled
    ) {
      return;
    }

    disableOptions();

    const selectedAnswerId = selectedOption.dataset.answerId;
    const correctAnswerId = currentQuestion.correctAnswerId;
    const answerIsCorrect = selectedAnswerId === correctAnswerId;

    if (answerIsCorrect) {
      selectedOption.classList.add("correct-answer");

      audio.playSfx("correct");

      correctAnswers++;
    } else {
      selectedOption.classList.add("selected");

      audio.playSfx("incorrect");

      showCorrectAnswer();
      showIncorrectAnswers(selectedOption);
    }

    moveToNextQuestion();
  });

  if (retryBtn) {
    retryBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }

  if (levelsMapBtn) {
    levelsMapBtn.addEventListener("click", () => {
      window.location.href = "Play Page/Worlds/Knowledge Valley/index.html";
    });
  }

  if (nextLevelBtn) {
    nextLevelBtn.addEventListener("click", () => {
      if (!nextLevelId) return;
      window.location.href = `quiz.html?world=knowledge-valley&level=${nextLevelId}`;
    });
  }

  // --- INITIAL RENDER ---

  currentQuestionNumber.textContent = 1;

  renderQuestion();
}

initializeQuiz();

// // --- RETRIEVE QUIZ SETTINGS ---

// const selectedCategory = sessionStorage.getItem("quizCategory");
// const selectedDifficulty = sessionStorage.getItem("quizDifficulty");

// // Return to the main menu if the quiz was opened without selections.
// if (!selectedCategory || !selectedDifficulty) {
//   window.location.href = "./Main Menu/index.html";
//   throw new Error("Quiz category or difficulty was not selected.");
// }

// // --- RANDOM SELECTION HELPER ---

// function getRandomItem(items) {
//   const randomIndex = Math.floor(Math.random() * items.length);
//   return items[randomIndex];
// }

// // `questionBank` comes from questions.js.
// const availableCategories = Object.keys(questionBank);
// const availableDifficulties = ["easy", "medium", "hard"];

// let resolvedCategory = selectedCategory;
// let resolvedDifficulty = selectedDifficulty;

// // Choose a real category when Random was selected.
// if (selectedCategory === "random") {
//   resolvedCategory = getRandomItem(availableCategories);
// }

// // Choose a real difficulty when Random was selected.
// if (selectedDifficulty === "random") {
//   resolvedDifficulty = getRandomItem(availableDifficulties);
// }

// // Load the matching question set.
// const questions = questionBank[resolvedCategory]?.[resolvedDifficulty];

// // Protect against incorrect category names or missing question sets.
// if (!questions || questions.length === 0) {
//   console.error(
//     `No questions found for category "${resolvedCategory}" and difficulty "${resolvedDifficulty}".`,
//   );

//   window.location.href = "./Main Menu/index.html";
//   throw new Error("The selected question set could not be loaded.");
// }
