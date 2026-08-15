"use strict";

import {
  getUserRecord,
  findActiveUser,
  applyUserCustomization,
  updateUserDetails,
  setupTopBar,
  checkCurrentMode,
  saveCurrentCustomization,
  setUpdatedUserRecord,
  renderUserProgress,
} from "../reusable.js";
import { SoundManager } from "../soundmanager.js";

const soundBtn = document.querySelector(".sound-button");
const soundsDropdown = document.querySelector(".sounds-dropdown");
const profileDropdown = document.querySelector(".profile-dropdown");
const profileAvatar = document.querySelector(".dropdown-top__avatar");
const darkModeButton = document.querySelector(".darkmode");
const darkModeLabel = document.querySelector(".darkmode-label");
const lightModeLabel = document.querySelector(".lightmode-label");
const toggle = document.querySelector(".toggle");
const musicToggle = document.querySelector(".sounds-music__toggle");
const sfxToggle = document.querySelector(".sounds-fx__toggle");
const { retrievedData, activeUser } = setupTopBar();
checkCurrentMode();

renderUserProgress(activeUser);

darkModeButton.addEventListener("click", () => {
  const isDark = darkModeButton.classList.toggle("active");

  toggle.classList.toggle("off", isDark);
  darkModeLabel.classList.toggle("hidden", isDark);
  lightModeLabel.classList.toggle("hidden", !isDark);

  document.documentElement.dataset.mode = isDark ? "dark" : "light";
  saveCurrentCustomization(retrievedData, activeUser);
});

// Toggle Buttons
soundBtn.addEventListener("click", () => {
  profileDropdown.classList.add("hidden");
  soundsDropdown.classList.toggle("hidden");
});

profileAvatar.addEventListener("click", () => {
  soundsDropdown.classList.add("hidden");
  profileDropdown.classList.toggle("hidden");
});

const audio = new SoundManager(
  activeUser.sounds.isSfxEnabled,
  activeUser.sounds.isMusicEnabled,
  activeUser.sounds.sfxVolume,
  activeUser.sounds.musicVolume,
);

musicToggle.classList.toggle("off", !activeUser.sounds.isMusicEnabled);
sfxToggle.classList.toggle("off", !activeUser.sounds.isSfxEnabled);

const wasRestored = audio.restoreMusicState();

if (!wasRestored) {
  audio.playMusic("background");
}

document.addEventListener("click", (event) => {
  const soundElement = event.target.closest("[data-sound]");
  if (soundElement) {
    const soundName = soundElement.dataset.sound;
    const isNavigation = soundElement.dataset.navigation === "true";
    audio.playSfx(soundName);

    if (isNavigation) {
      event.preventDefault();
      const linkElement = soundElement.closest("a");
      const targetUrl = linkElement
        ? linkElement.href
        : soundElement.dataset.url;

      if (targetUrl) {
        audio.saveMusicState();
        setTimeout(() => {
          window.location.href = targetUrl;
        }, 200);
      }
    }
  }

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

musicToggle.addEventListener("click", () => {
  audio.toggleMusic();

  activeUser.sounds.isMusicEnabled = audio.isMusicEnabled;

  musicToggle.classList.toggle("off", !audio.isMusicEnabled);

  setUpdatedUserRecord("database", retrievedData);
});

sfxToggle.addEventListener("click", () => {
  audio.toggleSfx();

  activeUser.sounds.isSfxEnabled = audio.isSfxEnabled;

  sfxToggle.classList.toggle("off", !audio.isSfxEnabled);

  setUpdatedUserRecord("database", retrievedData);
});
