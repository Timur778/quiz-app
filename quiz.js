"use strict";

// --- RETRIEVE QUIZ SETTINGS ---

const selectedCategory = sessionStorage.getItem("quizCategory");
const selectedDifficulty = sessionStorage.getItem("quizDifficulty");

// Return to the main menu if the quiz was opened without selections.
if (!selectedCategory || !selectedDifficulty) {
  window.location.href = "./Main Menu/index.html";
  throw new Error("Quiz category or difficulty was not selected.");
}

// --- RANDOM SELECTION HELPER ---

function getRandomItem(items) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

// `questionBank` comes from questions.js.
const availableCategories = Object.keys(questionBank);
const availableDifficulties = ["easy", "medium", "hard"];

let resolvedCategory = selectedCategory;
let resolvedDifficulty = selectedDifficulty;

// Choose a real category when Random was selected.
if (selectedCategory === "random") {
  resolvedCategory = getRandomItem(availableCategories);
}

// Choose a real difficulty when Random was selected.
if (selectedDifficulty === "random") {
  resolvedDifficulty = getRandomItem(availableDifficulties);
}

// Load the matching question set.
const questions = questionBank[resolvedCategory]?.[resolvedDifficulty];

// Protect against incorrect category names or missing question sets.
if (!questions || questions.length === 0) {
  console.error(
    `No questions found for category "${resolvedCategory}" and difficulty "${resolvedDifficulty}".`,
  );

  window.location.href = "./Main Menu/index.html";
  throw new Error("The selected question set could not be loaded.");
}

// --- DOM ELEMENT SELECTORS ---

const container = document.querySelector(".container");
const coins = document.querySelector(".currency-amount");
const question = document.querySelector(".question");

const currentQuestionNumber = document.querySelector(
  ".current-question__index",
);

const totalQuestions = document.querySelector(".total-questions");
const options = document.querySelectorAll(".options");
const optionsArea = document.querySelector(".options-area");

const summaryContainer = document.querySelector(".quiz-summary");
const summaryScore = document.querySelector(".quiz-summary__score");
const totalQuestionsCount = document.querySelector(".total-questions__count");
const correctAnswersFound = document.querySelector(".correct-answers");
const totalCoinsEarned = document.querySelector(".total-coins__earned");

const confettiContainer = document.querySelector(".confetti-container");

// --- AUDIO ---

const correctSound = new Audio("Sounds/correct.mp3");
const incorrectSound = new Audio("Sounds/incorrect.mp3");

correctSound.volume = 0.3;

// --- CONFETTI ANIMATION ---

const confettiAnimation = lottie.loadAnimation({
  container: confettiContainer,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./Animations/confetti.json",
});

// --- QUIZ STATE ---

let correctAnswers = 0;
let currentQuestionIndex = 0;
let gameCoins = 0;

// --- QUIZ HELPERS ---

function calculateScore() {
  const score = (correctAnswers * 100) / questions.length;

  return score.toFixed(2) + "%";
}

function updateCurrency() {
  coins.textContent = gameCoins;
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
    option.classList.remove("correct-answer", "selected", "incorrect-answers");
  });
}

function renderOptions() {
  const currentQuestion = questions[currentQuestionIndex];

  options.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
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
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

  options[correctAnswerIndex].classList.add("correct-answer");
}

function showIncorrectAnswers(selectedOption) {
  options.forEach((option) => {
    if (option === selectedOption) {
      return;
    }

    if (option.classList.contains("correct-answer")) {
      return;
    }

    option.classList.add("incorrect-answers");
  });
}

function showQuizSummary() {
  container.classList.add("hidden");
  summaryContainer.classList.remove("hidden");

  totalQuestionsCount.textContent = questions.length;
  correctAnswersFound.textContent = correctAnswers;
  totalCoinsEarned.textContent = gameCoins;
  summaryScore.textContent = `You scored: ${calculateScore()}`;

  confettiAnimation.goToAndPlay(0, true);
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
  }, 1000);
}

// --- OPTION CLICK HANDLER ---

optionsArea.addEventListener("click", (event) => {
  const selectedOption = event.target.closest(".options");

  // Ignore clicks outside the answer buttons.
  if (!selectedOption || !optionsArea.contains(selectedOption)) {
    return;
  }

  // Ignore an option if the buttons are already disabled.
  if (selectedOption.disabled) {
    return;
  }

  disableOptions();

  const clickedOptionIndex = [...options].indexOf(selectedOption);
  const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;

  const answerIsCorrect = clickedOptionIndex === correctAnswerIndex;

  if (answerIsCorrect) {
    selectedOption.classList.add("correct-answer");

    correctSound.currentTime = 0;
    correctSound.play();

    correctAnswers++;
    gameCoins += 10;

    updateCurrency();
  } else {
    selectedOption.classList.add("selected");

    incorrectSound.currentTime = 0;
    incorrectSound.play();

    showCorrectAnswer();
    showIncorrectAnswers(selectedOption);
  }

  moveToNextQuestion();
});

// --- INITIAL RENDER ---

totalQuestions.textContent = questions.length;
currentQuestionNumber.textContent = 1;

updateCurrency();
renderQuestion();
