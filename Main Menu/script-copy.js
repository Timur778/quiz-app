"use strict";

const soundBtn = document.querySelector(".sound-button");
const soundsDropdown = document.querySelector(".sounds-dropdown");
const profileDropdown = document.querySelector(".profile-dropdown");
const profileAvatar = document.querySelector(".dropdown-top__avatar");
const darkModeButton = document.querySelector(".darkmode");
const darkModeLabel = document.querySelector(".darkmode-label");
const lightModeLabel = document.querySelector(".lightmode-label");
const toggle = document.querySelector(".toggle");
const darkModeIcon = document.querySelector(".darkmode-icon");
const lightModeIcon = document.querySelector(".lightmode-icon");

darkModeButton.addEventListener("click", () => {
  const isDark = darkModeButton.classList.toggle("active");

  toggle.classList.toggle("off", isDark);
  darkModeLabel.classList.toggle("hidden", isDark);
  lightModeLabel.classList.toggle("hidden", !isDark);

  document.documentElement.dataset.mode = isDark ? "dark" : "light";
});

// Toggle Buttons
soundBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  profileDropdown.classList.add("hidden");
  soundsDropdown.classList.toggle("hidden");
});

profileAvatar.addEventListener("click", (event) => {
  event.stopPropagation();
  soundsDropdown.classList.add("hidden");
  profileDropdown.classList.toggle("hidden");
});

// Close when clicking outside
document.addEventListener("click", (event) => {
  if (
    !soundsDropdown.contains(event.target) &&
    !soundBtn.contains(event.target)
  ) {
    soundsDropdown.classList.add("hidden");
  }

  if (
    !profileDropdown.contains(event.target) &&
    !profileAvatar.contains(event.target)
  ) {
    profileDropdown.classList.add("hidden");
  }
});
