"use strict";

import {
  setupTopBar,
  checkCurrentMode,
  saveCurrentCustomization,
  renderUserProgress,
} from "./reusable.js";
import { SoundManager } from "./soundmanager.js";

const avatarButton = document.querySelector(".avatar-button");
const profileDropdown = document.querySelector(".profile-dropdown");

const darkModeButton = document.querySelector(".darkmode");
const darkModeLabel = document.querySelector(".darkmode-label");
const lightModeLabel = document.querySelector(".lightmode-label");
const toggle = document.querySelector(".toggle");

export const { retrievedData, activeUser } = setupTopBar();
renderUserProgress(activeUser);
checkCurrentMode();
export const audio = new SoundManager();
audio.restoreMusicState();

if (darkModeButton && toggle && darkModeLabel && lightModeLabel) {
  darkModeButton.addEventListener("click", () => {
    const isDark = darkModeButton.classList.toggle("active");

    toggle.classList.toggle("off", isDark);
    darkModeLabel.classList.toggle("hidden", isDark);
    lightModeLabel.classList.toggle("hidden", !isDark);

    document.documentElement.dataset.mode = isDark ? "dark" : "light";

    darkModeButton.setAttribute("aria-pressed", String(isDark));

    darkModeButton.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );

    saveCurrentCustomization(retrievedData, activeUser);
  });
}

if (avatarButton && profileDropdown) {
  avatarButton.addEventListener("click", (event) => {
    const isOpening = profileDropdown.classList.contains("hidden");
    profileDropdown.classList.toggle("hidden");
    avatarButton.setAttribute("aria-expanded", String(isOpening));
  });
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

  if (avatarButton && profileDropdown) {
    if (
      !profileDropdown.contains(event.target) &&
      !avatarButton.contains(event.target)
    ) {
      profileDropdown.classList.add("hidden");
      profileDropdown.setAttribute("aria-expanded", "false");
    }
  }
});
