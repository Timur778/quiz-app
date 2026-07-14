const questions = [
  {
    question: "Which is the only mammal capable of true, sustained flight?",
    options: ["Flying Squirrel", "Lemur", "Bat", "Sugar Glider"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Earth", "Saturn", "Jupiter", "Neptune"],
    correctAnswer: 2,
  },
  {
    question: "Which country is home to the city of Kyoto?",
    options: ["China", "Japan", "South Korea", "Thailand"],
    correctAnswer: 1,
  },
  {
    question: "What is the chemical symbol for gold?",
    options: ["Ag", "Au", "Gd", "Go"],
    correctAnswer: 1,
  },
  {
    question: "Which ocean is the largest?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    correctAnswer: 3,
  },
  {
    question: "How many sides does a hexagon have?",
    options: ["Five", "Six", "Seven", "Eight"],
    correctAnswer: 1,
  },
  {
    question: "Which organ pumps blood around the human body?",
    options: ["Lungs", "Liver", "Heart", "Kidneys"],
    correctAnswer: 2,
  },
  {
    question: "What is the capital city of Australia?",
    options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    correctAnswer: 2,
  },
  {
    question: "Which language is primarily used to style web pages?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: 1,
  },
  {
    question: "Which number is a prime number?",
    options: ["9", "15", "17", "21"],
    correctAnswer: 2,
  },
];

const container = document.querySelector(".container");
const questionIndex = document.querySelector(".question-index");
const coins = document.querySelector(".currency-amount");
const question = document.querySelector(".question");
const currentQuestionNumber = document.querySelector(
  ".current-question__index",
);
const totalQuestions = document.querySelector(".total-questions");
const options = document.querySelectorAll(".options");
const optionsArea = document.querySelector(".options-area");
const summaryContainer = document.querySelector(".quiz-summary");
const summaryLabel = document.querySelector(".quiz-summary__label");
const summaryScore = document.querySelector(".quiz-summary__score");
const summaryText = document.querySelector(".quiz-summary__text");
const reward = document.querySelector(".quiz-summary__reward");
const totalQuestionsCount = document.querySelector(".total-questions__count");
const correctAnswersFound = document.querySelector(".correct-answers");
const totalCoinsEarned = document.querySelector(".total-coins__earned");
const confettiContainer = document.querySelector(".confetti-container");

const correctSound = new Audio("./correct.mp3");
const incorrectSound = new Audio("./incorrect.mp3");
correctSound.volume = 0.3;

const confettiAnimation = lottie.loadAnimation({
  container: confettiContainer,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "./Animations/confetti.json",
});

let correctAnswers = 0;
let currentQuestionIndex = 0;
let gameCoins = 0;

totalQuestions.textContent = questions.length;
question.textContent = questions[currentQuestionIndex].question;

const calculateScore = function () {
  return Number((correctAnswers * 100) / questions.length).toFixed(2) + "%";
};

function renderOptions() {
  for (let i = 0; i < options.length; i++) {
    options[i].textContent = questions[currentQuestionIndex].options[i];
  }
}

function updateCurrency() {
  coins.textContent = Number(coins.textContent) + 10;
}

function disableOptions() {
  options.forEach((option) => {
    option.disabled = true;
  });
}

function openOptions() {
  options.forEach((option) => {
    option.disabled = false;
  });
}

function checkLastQuestion() {
  if (currentQuestionIndex === questions.length) {
    container.classList.add("hidden");
    summaryContainer.classList.remove("hidden");
    return true;
  }
}

function renderNextQuestion() {
  question.textContent = questions[currentQuestionIndex].question;
  currentQuestionNumber.textContent = currentQuestionIndex + 1;
  renderOptions();

  options.forEach((option) => {
    option.classList.remove("correct-answer");
    option.classList.remove("selected");
    option.classList.remove("incorrect-answers");
  });
}

function delayQuestion() {
  setTimeout(() => {
    console.log("3 seconds have passed");
    currentQuestionIndex++;
    const checking = checkLastQuestion();

    if (checking) {
      totalQuestionsCount.textContent = questions.length;
      correctAnswersFound.textContent = correctAnswers;
      totalCoinsEarned.textContent = gameCoins;
      summaryScore.textContent = "You scored: " + calculateScore();
      confettiAnimation.goToAndPlay(0, true);
      return;
    }

    renderNextQuestion();
    openOptions();
  }, 1000);
}

optionsArea.addEventListener("click", (event) => {
  const selectedOption = event.target;
  let clickedBtnIndex = null;

  if (!event.target.classList.contains("options")) {
    return;
  }

  disableOptions();

  for (let j = 0; j < options.length; j++) {
    const matching = selectedOption.classList.contains(`option--${j}`);
    if (matching) {
      clickedBtnIndex = j;
    }
  }

  if (clickedBtnIndex === questions[currentQuestionIndex].correctAnswer) {
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

    options.forEach((option) => {
      if (
        option.textContent ===
        questions[currentQuestionIndex].options[
          questions[currentQuestionIndex].correctAnswer
        ]
      ) {
        option.classList.add("correct-answer");
      } else if (!option.classList.contains("selected")) {
        option.classList.add("incorrect-answers");
      }
    });
  }

  delayQuestion();
});
