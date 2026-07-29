"use strict";

// --- DOM ELEMENT SELECTORS ---
const nightMode = document.querySelector(".toggle-mode");
const container = document.querySelector(".container");
const moonIcon = document.querySelector(".lucide-moon");
const sunIcon = document.querySelector(".lucide-sun");

const categoryButtons = document.querySelectorAll(".quiz-category");

const difficultyBtn = document.querySelector(".difficulty");
const difficultyLevels = document.querySelectorAll(".difficulty-level");
const difficultyContainer = document.querySelector(".difficulty-container");
const startQuizBtn = document.querySelector(".start-quiz");

// --- APP STATE ---
let selectedCategory = null;
let selectedDifficulty = null;

let previousCategoryButton = null;
let previousDifficultyLevel = null;

// --- CATEGORY DIFFICULTY BADGE ---

function removeCategoryDifficultyBadge(button) {
  const existingBadge = button.querySelector(".difficulty-star");

  if (existingBadge) {
    existingBadge.remove();
  }
}

function updateCategoryDifficultyBadge() {
  if (!previousCategoryButton) return;

  removeCategoryDifficultyBadge(previousCategoryButton);

  if (!selectedDifficulty) return;

  const starWrapper = document.createElement("span");

  starWrapper.classList.add("difficulty-star");
  starWrapper.innerHTML = starIcons[selectedDifficulty];

  previousCategoryButton.appendChild(starWrapper);
}

// --- CATEGORY SELECTION HELPERS ---

function selectCategoryButton(button) {
  button.classList.add("active");

  const tickIcon = document.createElement("span");

  tickIcon.classList.add("icon-container");
  tickIcon.innerHTML = checkIcon;

  button.appendChild(tickIcon);
}

function deselectCategoryButton(button) {
  button.classList.remove("active");

  const tickIcon = button.querySelector(".icon-container");

  if (tickIcon) {
    tickIcon.remove();
  }

  removeCategoryDifficultyBadge(button);
}

// --- DIFFICULTY SELECTION HELPERS ---

function selectDifficultyLevel(level) {
  level.classList.add("active");
}

function deselectDifficultyLevel(level) {
  level.classList.remove("active");
}

// --- CATEGORY EVENT LISTENERS ---

categoryButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const currentButton = event.currentTarget;
    const category = currentButton.dataset.category;

    // Clicking the already selected category deselects it.
    if (currentButton === previousCategoryButton) {
      deselectCategoryButton(currentButton);

      selectedCategory = null;
      previousCategoryButton = null;

      return;
    }

    // Remove selection from the previous category.
    if (previousCategoryButton) {
      deselectCategoryButton(previousCategoryButton);
    }

    selectCategoryButton(currentButton);

    selectedCategory = category;
    previousCategoryButton = currentButton;

    updateCategoryDifficultyBadge();
  });
});

// --- NIGHT MODE ---

nightMode.addEventListener("click", () => {
  container.classList.toggle("night-active");

  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
});

// --- DIFFICULTY DROPDOWN ---

difficultyBtn.addEventListener("click", (event) => {
  difficultyContainer.classList.toggle("hidden");

  event.stopPropagation();
});

difficultyContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", () => {
  difficultyContainer.classList.add("hidden");
});

// --- DIFFICULTY EVENT LISTENERS ---

difficultyLevels.forEach((level) => {
  level.addEventListener("click", (event) => {
    const currentLevel = event.currentTarget;
    const difficulty = currentLevel.dataset.difficulty;

    // Clicking the selected difficulty again deselects it.
    if (currentLevel === previousDifficultyLevel) {
      deselectDifficultyLevel(currentLevel);

      previousDifficultyLevel = null;
      selectedDifficulty = null;

      updateCategoryDifficultyBadge();
      return;
    }

    // Remove the previously selected difficulty.
    if (previousDifficultyLevel !== null) {
      deselectDifficultyLevel(previousDifficultyLevel);
    }

    // Select the new difficulty.
    selectDifficultyLevel(currentLevel);

    previousDifficultyLevel = currentLevel;
    selectedDifficulty = difficulty;

    updateCategoryDifficultyBadge();
  });
});

startQuizBtn.addEventListener("click", () => {
  if (!selectedCategory || !selectedDifficulty) {
    return;
  }

  sessionStorage.setItem("quizCategory", selectedCategory);
  sessionStorage.setItem("quizDifficulty", selectedDifficulty);

  window.location.href = "../quiz.html";
});

// const questions = [
//   {
//     question: "Which planet is known as the Red Planet?",
//     category: "space",
//     difficulty: "easy",
//   },
//   {
//     question: "What does CPU stand for?",
//     category: "technology",
//     difficulty: "easy",
//   },
//   {
//     question: "Who was the first person to walk on the Moon?",
//     category: "space",
//     difficulty: "medium",
//   },
//   {
//     question: "What is the time complexity of binary search?",
//     category: "technology",
//     difficulty: "hard",
//   },
//   {
//     question: "Which galaxy contains our solar system?",
//     category: "space",
//     difficulty: "easy",
//   },
// ];

// // FILTER QUESTIONS

// function filterQuestions(questions, category, difficulty) {
//   const filteredArray = questions.filter((question) => {
//     if (category === "random" && difficulty === "all") {
//       return question;
//     } else if (difficulty === "all") {
//       return question.category === category;
//     } else if (category === "random") {
//       return question.difficulty === difficulty;
//     }

//     return question.category === category && question.difficulty === difficulty;
//   });

//   return filteredArray;
// }

// console.log(filterQuestions(questions, "random", "easy"));

// // GET QUESTION SET

// function getQuestionSet(questions, amount) {
//   const limitedQuestions = questions.slice(0, amount);
//   return limitedQuestions;
// }

// console.log(getQuestionSet(questions, 2));

// const numbers = [10, 20, 30, 40];
// const randomNum = Math.floor(Math.random() * numbers.length);

// const currentIndex = 3;
// const temporaryValue = numbers[randomNum];

// numbers[randomNum] = numbers[currentIndex];
// numbers[currentIndex] = temporaryValue;

// console.log(numbers);

// // SHUFFLE QUESTIONS

// function shuffleQuestions(questions) {
//   const randomQuestions = [...questions];

//   for (let i = randomQuestions.length - 1; i > 0; i--) {
//     const randomNum = Math.floor(Math.random() * (i + 1));

//     const temporaryValue = randomQuestions[randomNum];

//     randomQuestions[randomNum] = randomQuestions[i];
//     randomQuestions[i] = temporaryValue;
//   }

//   return randomQuestions;
// }

// console.log(shuffleQuestions(questions));

// // CREATE QUIZ

// function createQuiz(questions, category, difficulty, amount) {
//   const filtered = filterQuestions(questions, category, difficulty);
//   const shuffled = shuffleQuestions(filtered);
//   const finalSet = getQuestionSet(shuffled, amount);

//   return finalSet;
// }

// console.log(createQuiz(questions, "space", "easy", 2));

// // VALIDATE REQUEST
// function validateQuestionAmount(questions, category, difficulty, amount) {
//   const availableSet = filterQuestions(questions, category, difficulty);

//   return {
//     valid: availableSet.length >= amount,
//     available: availableSet.length,
//     requested: amount,
//   };
// }

// console.log(validateQuestionAmount(questions, "space", "easy", 3));

// // CREATE FALLBACK QUESTION AMOUNT

// function getSafeQuestionAmount(
//   questions,
//   category,
//   difficulty,
//   requestedAmount,
// ) {
//   const availableQuestions = filterQuestions(questions, category, difficulty);
//   const maxQuestions = availableQuestions.length;
//   const safeAmount = Math.min(maxQuestions, requestedAmount);

//   return safeAmount;
// }

// console.log(getSafeQuestionAmount(questions, "space", "easy", 5));

// // CALCULATE QUIZ SCORE PERCENTAGE

// function calculateScore(correctAnswers, totalQuestions) {
//   if (totalQuestions === 0) {
//     return 0;
//   }

//   return (correctAnswers * 100) / totalQuestions;
// }

// console.log(calculateScore(8, 10));
// console.log(calculateScore(3, 4));
// console.log(calculateScore(0, 0));

// // GET PERFORMANCE MESSAGE

// function getPerformanceMessage(score) {
//   if (score >= 90) {
//     return "Outstanding";
//   } else if (score >= 70) {
//     return "Great job";
//   } else if (score >= 50) {
//     return "Good effort";
//   } else {
//     return "Keep practicing";
//   }
// }

// console.log(getPerformanceMessage(95));
// console.log(getPerformanceMessage(75));
// console.log(getPerformanceMessage(50));
// console.log(getPerformanceMessage(25));

// function calculateCoins(correctAnswers, difficulty) {
//   let coins = 0;

//   switch (difficulty) {
//     case "easy":
//       coins = correctAnswers * 5;
//       break;
//     case "medium":
//       coins = correctAnswers * 10;
//       break;
//     case "hard":
//       coins = correctAnswers * 15;
//       break;
//     default:
//       coins = 0;
//   }

//   return coins;
// }

// console.log(calculateCoins(8, "easy"));
// console.log(calculateCoins(6, "medium"));
// console.log(calculateCoins(4, "hard"));
// console.log(calculateCoins(10, "unknown"));

// // -------------------------------------------------------------------------//
// // -------------------------------------------------------------------------//
// // -------------------------------------------------------------------------//

// const answeredQuestions = [
//   {
//     correct: true,
//     difficulty: "easy",
//   },
//   {
//     correct: false,
//     difficulty: "hard",
//   },
//   {
//     correct: true,
//     difficulty: "medium",
//   },
//   {
//     correct: true,
//     difficulty: "hard",
//   },
// ];

// // CALCULATE TOTAL COINS

// function calculateMixedCoins(answeredQuestions) {
//   const totalCoins = answeredQuestions.reduce((total, question) => {
//     const coinsForThisQuestion = question.correct
//       ? calculateCoins(1, question.difficulty)
//       : 0;

//     return total + coinsForThisQuestion;
//   }, 0);

//   return totalCoins;
// }

// console.log(calculateMixedCoins(answeredQuestions));

// // CALCULATE QUIZ STATS

// function calculateQuizStats(answeredQuestions) {
//   const correctAnswers = answeredQuestions.filter((question) => {
//     return question.correct;
//   });

//   return {
//     totalQuestions: answeredQuestions.length,
//     correctAnswers: correctAnswers.length,
//     incorrectAnswers: answeredQuestions.length - correctAnswers.length,
//     score: calculateScore(correctAnswers.length, answeredQuestions.length),
//     coinsEarned: calculateMixedCoins(answeredQuestions),
//   };
// }

// console.log(calculateQuizStats(answeredQuestions));

// // COUNT CORRECT ANSWERS BY DIFFICULTY

// function countCorrectByDifficulty(answeredQuestions) {
//   const counted = answeredQuestions.reduce(
//     (stats, question) => {
//       if (question.correct) {
//         stats[question.difficulty]++;
//       }

//       return stats;
//     },
//     {
//       easy: 0,
//       medium: 0,
//       hard: 0,
//     },
//   );

//   return counted;
// }

// // CREATE QUIZ TIMER

// function createQuizTimer(durationInSeconds, callbacks = {}) {
//   const originalDuration = durationInSeconds;
//   let remainingTime = durationInSeconds;
//   let intervalId = null;
//   let running = false;
//   let targetEndTime = null;

//   return {
//     start() {
//       this.reset();
//       this.resume();
//     },
//     pause() {
//       clearInterval(intervalId);
//       intervalId = null;
//       running = false;
//     },
//     resume() {
//       if (running || remainingTime === 0) {
//         return;
//       }

//       running = true;
//       targetEndTime = Date.now() + remainingTime * 1000;

//       intervalId = setInterval(() => {
//         remainingTime = Math.ceil((targetEndTime - Date.now()) / 1000);

//         if (remainingTime <= 0) {
//           remainingTime = 0;
//           clearInterval(intervalId);
//           intervalId = null;
//           running = false;
//           if (typeof callbacks.onTick === "function") {
//             callbacks.onTick(remainingTime);
//           }

//           if (typeof callbacks.onComplete === "function") {
//             callbacks.onComplete();
//           }
//           return;
//         }

//         if (typeof callbacks.onTick === "function") {
//           callbacks.onTick(remainingTime);
//         }
//       }, 1000);
//     },
//     reset() {
//       clearInterval(intervalId);
//       intervalId = null;
//       remainingTime = originalDuration;
//       running = false;
//     },
//     getRemainingTime() {
//       return remainingTime;
//     },
//     isRunning() {
//       return running;
//     },
//   };
// }

// // const timer = createQuizTimer(10);

// // console.log(`Remaining Time: ${timer.getRemainingTime()} seconds`);
// // timer.start();

// // setTimeout(() => {
// //   timer.pause();
// //   console.log(`Remaining Time: ${timer.getRemainingTime()} seconds`);
// //   console.log(`Running State: ${timer.isRunning()}`);

// //   setTimeout(() => {
// //     timer.resume();
// //     console.log(`Timer resumed: ${timer.isRunning()}`);

// //     setTimeout(
// //       () => {
// //         console.log(`Remaining Time: ${timer.getRemainingTime()} seconds`);
// //         console.log(`Running State: ${timer.isRunning()}`);
// //       },
// //       timer.getRemainingTime() * 1000 + 1000,
// //     );
// //   }, 2000);
// // }, 2000);

// const timer = createQuizTimer(3, {
//   onTick(remainingTime) {
//     console.log("Time Left: " + remainingTime);
//   },

//   onComplete() {
//     console.log("Time is up.");
//   },
// });

// timer.start();

// function runTask(successful, score, callbacks = {}) {
//   if (successful) {
//     if (typeof callbacks.onSuccess === "function") {
//       callbacks.onSuccess(score);
//     }

//     return;
//   }

//   if (typeof callbacks.onFailure === "function") {
//     callbacks.onFailure(score);
//   }
// }

// runTask(false, 45, {
//   onSuccess(score) {
//     console.log(`You have successfully completed quiz. Your score is ${score}`);
//   },

//   onFailure(score) {
//     console.log(`You have to train more. Your score is ${score}`);
//   },
// });

// --- SVG ICON CONFIGURATION ---
const starIcons = {
  easy: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#22c55e"
      stroke="#22c55e"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
        12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  `,

  medium: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#eab308"
      stroke="#eab308"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
        12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  `,

  hard: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#ef4444"
      stroke="#ef4444"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
        12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  `,

  random: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="#a855f7"
      stroke="#a855f7"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02
        12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  `,
};

const checkIcon = `
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    stroke-width="3"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
`;
