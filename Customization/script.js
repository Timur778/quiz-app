const htmlElement = document.documentElement;
const modeButtons = document.querySelectorAll(".theme-mode-button");
const themeOptions = document.querySelectorAll(".theme-option");
const accentOptions = document.querySelectorAll(".accent-option");
const styleOptions = document.querySelectorAll(".style-option");
const backgroundOptions = document.querySelectorAll(".background-option");

updateActiveModeButton();
updateActiveTheme();
updateActiveAccent();
updateActiveStyle();
updateActiveBackground();

function deactivateAllThemes() {
  themeOptions.forEach((theme) => {
    theme.classList.remove("is-active");
  });
}

function deactivateAllButtons() {
  modeButtons.forEach((btn) => {
    btn.setAttribute("aria-pressed", "false");
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

  modeButtons.forEach((btn) => {
    const themeMatches = btn.dataset.themeOption === htmlElement.dataset.theme;
    const modeMatches = btn.dataset.modeOption === htmlElement.dataset.mode;

    if (themeMatches && modeMatches) {
      btn.setAttribute("aria-pressed", "true");
    }
  });
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    htmlElement.dataset.mode = btn.dataset.modeOption;
    htmlElement.dataset.theme = btn.dataset.themeOption;
    htmlElement.dataset.accent = "theme-default";

    updateActiveModeButton();
    updateActiveTheme();
    updateActiveAccent();
  });
});

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

backgroundOptions.forEach((background) => {
  background.addEventListener("click", () => {
    htmlElement.dataset.background = background.dataset.backgroundOption;
    updateActiveBackground();
  });
});

styleOptions.forEach((style) => {
  style.addEventListener("click", () => {
    htmlElement.dataset.style = style.dataset.styleOption;
    updateActiveStyle();
  });
});

accentOptions.forEach((accent) => {
  accent.addEventListener("click", () => {
    htmlElement.dataset.accent = accent.dataset.accentOption;
    updateActiveAccent();
  });
});

themeOptions.forEach((theme) => {
  theme.addEventListener("click", () => {
    htmlElement.dataset.theme = theme.dataset.themeOption;
    htmlElement.dataset.accent = "theme-default";

    updateActiveTheme();
    updateActiveModeButton();
    updateActiveAccent();
  });
});
