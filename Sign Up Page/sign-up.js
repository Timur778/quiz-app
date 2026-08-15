"use strict";

import { achievements } from "../Achievements Page/achievements.js";
import {
  setUpdatedUserRecord,
  getUserRecord,
  database,
  showError,
  clearAllErrors,
} from "../reusable.js";
import { knowledgeValleyLevels } from "../Play Page/Worlds/Knowledge Valley/knowledge-valley-data.js";

const form = document.querySelector(".form-container");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const emailExistsError = document.querySelector("#emailExistsError");
const invalidEmailError = document.querySelector("#invalidEmailError");
const userNameError = document.querySelector("#userNameError");
const passwordMismatchError = document.querySelector("#passwordMismatchError");
const missingFieldsError = document.querySelector("#missingFieldsError");
const passwordLengthError = document.querySelector("#passwordLengthError");
const errorMessages = document.querySelectorAll(".error");

function createWorldData(worldId, levelsArray, isWorldUnlocked = true) {
  const levelsObject = levelsArray.reduce((acc, level, index) => {
    acc[level.id] = {
      isUnlocked: index === 0 && isWorldUnlocked,
      stars: 0,
    };

    return acc;
  }, {});

  return {
    worlds: {
      [worldId]: {
        isUnlocked: isWorldUnlocked,
        levels: levelsObject,
      },
    },
  };
}

function addNewUser(username, email, password) {
  const newUser = {
    username: username,
    email: email,
    password: password,
    level: 1,
    xp: 0,
    coins: 5000,
    userId: generateUniqueId(),
    sounds: {
      isSfxEnabled: true,
      isMusicEnabled: true,
      sfxVolume: 0.1,
      musicVolume: 0.25,
    },
    customization: {
      theme: "default",
      mode: "light",
      style: "default",
      accent: "theme-default",
      background: "none",
    },
    achievements: [
      {
        achievementId: "first-quiz",
        current: 0,
        isUnlocked: false,
        unlockedAt: null,
      },
      {
        achievementId: "quiz-streak-3",
        current: 0,
        isUnlocked: false,
        unlockedAt: null,
      },
    ],

    campaign: createWorldData("knowledge-valley", knowledgeValleyLevels),
    inventory: {
      themes: [],
      styles: [],
      accents: [],
      backgrounds: [],
    },

    boosters: {
      "double-xp": 0,
      "coin-rush": 0,
    },
  };

  database[0].users.push(newUser);
  database[0].activeSession.userId = newUser.userId;

  return database;
}

function generateUniqueId() {
  return Math.random().toString(36).substring(2, 12);
}

function filterValues() {
  const userName = username.value.trim();
  const userEmail = email.value.trim();
  const userPassword = password.value;
  const userPasswordConfirmation = passwordConfirmation.value;

  return {
    username: userName,
    email: userEmail,
    password: userPassword,
    passwordConfirmation: userPasswordConfirmation,
  };
}

function validateFields(username, email, password, passwordConfirmation) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  clearAllErrors(errorMessages);

  if (!username || !email || !password || !passwordConfirmation) {
    showError(missingFieldsError, errorMessages);
    return false;
  }

  if (!emailRegex.test(email)) {
    showError(invalidEmailError, errorMessages);
    return false;
  }

  if (password !== passwordConfirmation) {
    showError(passwordMismatchError, errorMessages);
    return false;
  }

  if (password.length < 8) {
    showError(passwordLengthError, errorMessages);
    return false;
  }

  return true;
}

function checkDuplicateUsers(users, username, email) {
  const usernameExists = users.some((user) => {
    const filteredNewUsername = username.toLowerCase();
    const filteredExistingUsername = user.username.toLowerCase();

    if (filteredNewUsername === filteredExistingUsername) {
      return true;
    }

    return false;
  });

  const emailExists = users.some((user) => {
    const filteredNewEmail = email.toLowerCase();
    const filteredExistingEmail = user.email.toLowerCase();

    if (filteredNewEmail === filteredExistingEmail) {
      return true;
    }

    return false;
  });

  if (usernameExists && emailExists) {
    showError(userNameError, errorMessages);
    return false;
  }

  if (usernameExists) {
    showError(userNameError, errorMessages);
    return false;
  }

  if (emailExists) {
    showError(emailExistsError, errorMessages);
    return false;
  }

  return true;
}

function handleSubmit() {
  const freshData = getUserRecord("database");
  database.length = 0;
  database.push(...freshData);
  const filteredValues = filterValues();

  if (!filteredValues) {
    return;
  }

  const isValid = validateFields(
    filteredValues.username,
    filteredValues.email,
    filteredValues.password,
    filteredValues.passwordConfirmation,
  );

  if (!isValid) {
    return;
  }

  const isUnique = checkDuplicateUsers(
    database[0].users,
    filteredValues.username,
    filteredValues.email,
  );

  if (!isUnique) {
    return;
  }

  addNewUser(
    filteredValues.username,
    filteredValues.email,
    filteredValues.password,
  );

  setUpdatedUserRecord("database", database);
  window.location.href = "../Main Menu/index.html";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
});
