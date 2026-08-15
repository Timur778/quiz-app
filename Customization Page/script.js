"use strict";

import { saveCurrentCustomization } from "../reusable.js";
import { retrievedData, activeUser } from "../shared.js";
import { shopItems } from "../Shop Page/shop.js";

const htmlElement = document.documentElement;

const themeGrid = document.querySelector(".theme-grid");
const styleGrid = document.querySelector(".style-grid");
const accentGrid = document.querySelector(".accent-grid");
const backgroundGrid = document.querySelector(".background-grid");

const userThemes = activeUser.inventory.themes;
const userStyles = activeUser.inventory.styles;
const userAccents = activeUser.inventory.accents;
const userBackgrounds = activeUser.inventory.backgrounds;

const themeFragment = document.createDocumentFragment();

userThemes.forEach((theme) => {
  const themeData = shopItems.themes[theme];

  if (!themeData) return;

  const articleEl = document.createElement("article");
  articleEl.classList.add("customization-option", "theme-option");
  articleEl.dataset.themeOption = theme;
  articleEl.dataset.sound = "click";

  const preview = document.createElement("div");
  preview.classList.add(
    "option-preview",
    "theme-preview",
    themeData.previewClass,
  );
  preview.setAttribute("aria-hidden", "true");

  const themeModeControls = document.createElement("div");
  themeModeControls.classList.add("theme-mode-controls");

  const darkModeButton = document.createElement("button");
  darkModeButton.classList.add("theme-mode-button");
  darkModeButton.type = "button";
  darkModeButton.dataset.themeOption = theme;
  darkModeButton.dataset.modeOption = "dark";
  darkModeButton.dataset.sound = "toggle";
  darkModeButton.setAttribute(
    "aria-label",
    `Apply ${themeData.label} dark mode`,
  );
  darkModeButton.setAttribute("aria-pressed", "false");
  darkModeButton.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401" />
      </svg>`;

  const lightModeButton = document.createElement("button");
  lightModeButton.classList.add("theme-mode-button");
  lightModeButton.type = "button";
  lightModeButton.dataset.themeOption = theme;
  lightModeButton.dataset.modeOption = "light";
  lightModeButton.dataset.sound = "toggle";
  lightModeButton.setAttribute(
    "aria-label",
    `Apply ${themeData.label} light mode`,
  );
  lightModeButton.setAttribute("aria-pressed", "false");
  lightModeButton.innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" />
        <path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" />
        <path d="m19.07 4.93-1.41 1.41" />
      </svg>`;

  const themeLabel = document.createElement("h3");
  themeLabel.classList.add("option-label");
  themeLabel.textContent = themeData.label;

  themeModeControls.append(darkModeButton, lightModeButton);
  articleEl.append(preview, themeModeControls, themeLabel);
  themeFragment.appendChild(articleEl);
});

if (themeGrid) {
  themeGrid.appendChild(themeFragment);
}

const styleFragment = document.createDocumentFragment();

userStyles.forEach((style) => {
  const styleData = shopItems.styles[style];
  if (!styleData) return;

  const styleButton = document.createElement("button");
  styleButton.classList.add("customization-option", "style-option");
  styleButton.type = "button";
  styleButton.dataset.styleOption = style;
  styleButton.dataset.sound = "click";
  styleButton.setAttribute("aria-pressed", "false");

  styleButton.innerHTML = `<span
      class="option-preview style-preview ${styleData.previewClass}"
      aria-hidden="true"
    ></span>

    <span class="option-label">${styleData.label}</span>`;

  styleFragment.appendChild(styleButton);
});

if (styleGrid) {
  styleGrid.appendChild(styleFragment);
}

const accentsFragment = document.createDocumentFragment();

userAccents.forEach((accent) => {
  const accentData = shopItems.accents[accent];
  if (!accentData) return;

  const accentButton = document.createElement("button");
  accentButton.classList.add("accent-option");
  accentButton.type = "button";
  accentButton.dataset.accentOption = accentData.id;
  accentButton.dataset.sound = "click";
  accentButton.setAttribute("aria-label", `Use ${accentData.label} accent`);
  accentButton.setAttribute("aria-pressed", "false");

  accentButton.innerHTML = `
  <span
    class="accent-swatch"
    style="--preview-accent: ${accentData.color}"
    aria-hidden="true"
  ></span>

  <span class="option-label">${accentData.label}</span>
`;

  accentsFragment.appendChild(accentButton);
});

if (accentGrid) {
  accentGrid.appendChild(accentsFragment);
}

const backgroundFragment = document.createDocumentFragment();

userBackgrounds.forEach((background) => {
  const backgroundData = shopItems.backgrounds[background];
  if (!backgroundData) return;

  const backgroundButton = document.createElement("button");
  backgroundButton.type = "button";
  backgroundButton.classList.add("background-option");
  backgroundButton.dataset.sound = "click";
  backgroundButton.dataset.backgroundOption = backgroundData.id;

  backgroundButton.setAttribute(
    "aria-label",
    `Apply ${backgroundData.label} gradient background`,
  );

  backgroundButton.setAttribute("aria-pressed", "false");

  backgroundButton.innerHTML = `
  <span
    class="background-option__preview ${backgroundData.previewClass}"
    aria-hidden="true"
  ></span>

  <span class="option-label">${backgroundData.label}</span>
`;

  backgroundFragment.appendChild(backgroundButton);
});

if (backgroundGrid) {
  backgroundGrid.appendChild(backgroundFragment);
}

const modeButtons = document.querySelectorAll(".theme-mode-button");
const themeOptions = document.querySelectorAll(".theme-option");
const accentOptions = document.querySelectorAll(".accent-option");
const styleOptions = document.querySelectorAll(".style-option");
const backgroundOptions = document.querySelectorAll(".background-option");

function deactivateAllThemes() {
  themeOptions.forEach((theme) => {
    theme.classList.remove("is-active");
  });
}

function deactivateAllButtons() {
  modeButtons.forEach((button) => {
    button.setAttribute("aria-pressed", "false");
  });
}

function deactivateAllAccents() {
  accentOptions.forEach((accent) => {
    accent.setAttribute("aria-pressed", "false");
  });
}

function deactivateAllStyles() {
  styleOptions.forEach((style) => {
    style.setAttribute("aria-pressed", "false");
  });
}

function deactivateAllBackgrounds() {
  backgroundOptions.forEach((background) => {
    background.setAttribute("aria-pressed", "false");
  });
}

function updateActiveModeButton() {
  deactivateAllButtons();

  modeButtons.forEach((button) => {
    const themeMatches =
      button.dataset.themeOption === htmlElement.dataset.theme;

    const modeMatches = button.dataset.modeOption === htmlElement.dataset.mode;

    if (themeMatches && modeMatches) {
      button.setAttribute("aria-pressed", "true");
    }
  });
}

function updateActiveTheme() {
  deactivateAllThemes();

  themeOptions.forEach((theme) => {
    const themeMatches =
      theme.dataset.themeOption === htmlElement.dataset.theme;

    if (themeMatches) {
      theme.classList.add("is-active");
    }
  });
}

function updateActiveAccent() {
  deactivateAllAccents();

  accentOptions.forEach((accent) => {
    const accentMatches =
      accent.dataset.accentOption === htmlElement.dataset.accent;

    if (accentMatches) {
      accent.setAttribute("aria-pressed", "true");
    }
  });
}

function updateActiveStyle() {
  deactivateAllStyles();

  styleOptions.forEach((style) => {
    const styleMatches =
      style.dataset.styleOption === htmlElement.dataset.style;

    if (styleMatches) {
      style.setAttribute("aria-pressed", "true");
    }
  });
}

function updateActiveBackground() {
  deactivateAllBackgrounds();

  backgroundOptions.forEach((background) => {
    const backgroundMatches =
      background.dataset.backgroundOption === htmlElement.dataset.background;

    if (backgroundMatches) {
      background.setAttribute("aria-pressed", "true");
    }
  });
}

modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    htmlElement.dataset.mode = button.dataset.modeOption;
    htmlElement.dataset.theme = button.dataset.themeOption;
    htmlElement.dataset.accent = "theme-default";

    updateActiveModeButton();
    updateActiveTheme();
    updateActiveAccent();

    saveCurrentCustomization(retrievedData, activeUser);
  });
});

themeOptions.forEach((theme) => {
  theme.addEventListener("click", () => {
    htmlElement.dataset.theme = theme.dataset.themeOption;
    htmlElement.dataset.accent = "theme-default";

    updateActiveTheme();
    updateActiveModeButton();
    updateActiveAccent();

    saveCurrentCustomization(retrievedData, activeUser);
  });
});

accentOptions.forEach((accent) => {
  accent.addEventListener("click", () => {
    htmlElement.dataset.accent = accent.dataset.accentOption;

    updateActiveAccent();

    saveCurrentCustomization(retrievedData, activeUser);
  });
});

styleOptions.forEach((style) => {
  style.addEventListener("click", () => {
    htmlElement.dataset.style = style.dataset.styleOption;

    updateActiveStyle();

    saveCurrentCustomization(retrievedData, activeUser);
  });
});

backgroundOptions.forEach((background) => {
  background.addEventListener("click", () => {
    htmlElement.dataset.background = background.dataset.backgroundOption;

    updateActiveBackground();

    saveCurrentCustomization(retrievedData, activeUser);
  });
});

updateActiveModeButton();
updateActiveTheme();
updateActiveAccent();
updateActiveStyle();
updateActiveBackground();
