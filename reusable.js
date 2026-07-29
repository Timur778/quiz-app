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

    return database;
  } catch (error) {
    console.error("Error parsing JSON from LocalStorage", error);
    return database;
  }
}
