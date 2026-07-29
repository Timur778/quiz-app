"use strict";

import {
  showError,
  database,
  getUserRecord,
  setUpdatedUserRecord,
} from "../reusable.js";

const form = document.querySelector(".form-container");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const checkbox = document.querySelector("#remember");
const invalidInputError = document.querySelector("#invalidInputError");
const missingInputsError = document.querySelector("#missingInputsError");
const errorMessages = document.querySelectorAll(".error");

console.log(getUserRecord("database"));

function filterValues() {
  const userEmail = email.value.trim().toLowerCase();
  const userPassword = password.value;

  if (!email.value || !password.value) {
    showError(missingInputsError, errorMessages);
    return false;
  }

  return {
    email: userEmail,
    password: userPassword,
  };
}

function checkCredentials(email, password) {
  const accountFound = database[0].users.find((account) => {
    const normalizedEmail = account.email.toLowerCase();
    if (normalizedEmail === email) {
      return account;
    }

    return null;
  });

  if (!accountFound) {
    showError(invalidInputError, errorMessages);
    return false;
  }

  if (accountFound.password === password) {
    return accountFound;
  }

  showError(invalidInputError, errorMessages);
  return false;
}

function handleSubmit() {
  const freshData = getUserRecord("database");
  database.length = 0;
  database.push(...freshData);
  const filteredValues = filterValues();

  if (!filteredValues) {
    return;
  }

  const userExists = checkCredentials(
    filteredValues.email,
    filteredValues.password,
  );

  if (userExists) {
    database[0].activeSession.userId = userExists.userId;
    setUpdatedUserRecord("database", database);
    window.location.href = "../Main Menu/index-copy.html";
    return;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleSubmit();
});
