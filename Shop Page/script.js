"use strict";

// --- IMPORTS --- //

import { retrievedData, activeUser } from "../shared.js";
import { shopItems } from "./shop.js";
import { setUpdatedUserRecord } from "../reusable.js";

// --- GRID SELECTORS --- //

const themeGrid = document.querySelector(".theme-grid");
const styleGrid = document.querySelector(".style-grid");
const accentGrid = document.querySelector(".accent-grid");
const backgroundGrid = document.querySelector(".background-grid");

// --- USER DATA --- //

const userThemes = activeUser.inventory.themes;
const userStyles = activeUser.inventory.styles;
const userAccents = activeUser.inventory.accents;
const userBackgrounds = activeUser.inventory.backgrounds;

syncOwnedShopItems();
checkItemPrices();

// --- THEMES DATA INJECTION --- //

const themeFragment = document.createDocumentFragment();

userThemes.forEach((theme) => {
  const themeData = shopItems.themes[theme];

  if (!themeData) return;

  const articleEl = document.createElement("article");
  articleEl.classList.add("customization-option", "theme-option");
  articleEl.dataset.themeOption = theme;

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

// --- STYLES DATA INJECTION --- //

const styleFragment = document.createDocumentFragment();

userStyles.forEach((style) => {
  const styleData = shopItems.styles[style];
  if (!styleData) return;

  const styleButton = document.createElement("button");
  styleButton.classList.add("customization-option", "style-option");
  styleButton.type = "button";
  styleButton.dataset.styleOption = style;
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

// --- ACCENTS DATA INJECTION --- //

const accentsFragment = document.createDocumentFragment();

userAccents.forEach((accent) => {
  const accentData = shopItems.accents[accent];
  if (!accentData) return;

  const accentButton = document.createElement("button");
  accentButton.classList.add("accent-option");
  accentButton.type = "button";
  accentButton.dataset.accentOption = accentData.id;
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

// --- BACKGROUNDS DATA INJECTION --- //

const backgroundFragment = document.createDocumentFragment();

userBackgrounds.forEach((background) => {
  const backgroundData = shopItems.backgrounds[background];
  if (!backgroundData) return;

  const backgroundButton = document.createElement("button");
  backgroundButton.type = "button";
  backgroundButton.classList.add(
    "background-option",
    `background-option--${backgroundData.id}`,
  );
  backgroundButton.dataset.backgroundOption = backgroundData.id;
  backgroundButton.setAttribute(
    "aria-label",
    `${backgroundData.label} Gradient background`,
  );
  backgroundButton.setAttribute("aria-pressed", "false");

  backgroundButton.innerHTML = `
  <span class="background-option__${backgroundData.id}">${backgroundData.label}</span>`;

  backgroundFragment.appendChild(backgroundButton);
});

if (backgroundGrid) {
  backgroundGrid.appendChild(backgroundFragment);
}

// --- HELPER FUNCTIONS --- //

function checkItemPrices() {
  const shopCard = document.querySelectorAll(".shop-card");

  const catalogue = {
    booster: "boosters",
    theme: "themes",
    style: "styles",
    background: "backgrounds",
    "accent-pack": "accentPacks",
  };

  shopCard.forEach((card) => {
    const category = card.dataset.shopCategory;
    const itemId = card.dataset.shopItem;
    const itemCategory = catalogue[category];
    const itemData = shopItems[itemCategory]?.[itemId];
    const buyButton = card.querySelector(".shop-card__button");

    if (!category || !itemId || !itemCategory || !itemData || !buyButton)
      return;

    if (activeUser.coins < itemData.price) {
      buyButton.disabled = true;
      buyButton.classList.add("is-disabled");
    } else {
      buyButton.disabled = false;
      buyButton.classList.remove("is-disabled");
    }
  });
}

function markAsOwned() {
  const shopCard = document.querySelectorAll(".shop-card.is-owned");

  shopCard.forEach((card) => {
    const buyButton = card.querySelector(".shop-card__button");
    const priceContainer = card.querySelector(".shop-card__price");

    if (buyButton) {
      buyButton.textContent = "Owned";
      buyButton.disabled = true;
      buyButton.classList.add("is-owned");
    }

    if (priceContainer) {
      priceContainer.style.display = "none";
    }
  });
}

function syncOwnedShopItems() {
  const shopCard = document.querySelectorAll(".shop-card");

  const catalogue = {
    booster: "boosters",
    theme: "themes",
    style: "styles",
    background: "backgrounds",
    "accent-pack": "accentPacks",
  };

  shopCard.forEach((card) => {
    const category = card.dataset.shopCategory;
    const itemId = card.dataset.shopItem;
    const inventoryKey = catalogue[category];

    if (!category || !itemId || !inventoryKey || category === "booster") return;

    if (category === "accent-pack") {
      const accentPackData = shopItems.accentPacks[itemId];

      if (!accentPackData || !Array.isArray(accentPackData.unlocks)) return;

      const ownsFullPack = accentPackData.unlocks.every((accent) =>
        activeUser.inventory.accents.includes(accent),
      );

      if (ownsFullPack) {
        card.classList.add("is-owned");
      }

      return;
    }

    const userInventory = activeUser.inventory[inventoryKey];

    if (Array.isArray(userInventory) && userInventory.includes(itemId)) {
      card.classList.add("is-owned");
    }
  });

  markAsOwned();
}

// --- EVENT LISTENERS --- //

document.addEventListener("click", (event) => {
  const buyButton = event.target.closest(".shop-card__button");

  if (!buyButton) return;

  const shopCard = buyButton.closest(".shop-card");
  const category = shopCard.dataset.shopCategory;
  const itemId = shopCard.dataset.shopItem;

  const catalogue = {
    booster: "boosters",
    theme: "themes",
    style: "styles",
    background: "backgrounds",
    "accent-pack": "accentPacks",
  };

  const itemCategory = catalogue[category];
  const itemData = shopItems[itemCategory]?.[itemId];

  if (!itemData) return;

  const initialCoins = activeUser.coins;

  addItems(itemData.unlocks, itemData.price, itemCategory);

  if (activeUser.coins < initialCoins) {
    if (category !== "booster") {
      shopCard.classList.add("is-owned");
      markAsOwned();
    }

    setUpdatedUserRecord("database", retrievedData);
    checkItemPrices();
  }
});

function addItems(item, itemPrice, category) {
  const currentBalance = activeUser.coins;

  if (currentBalance < itemPrice || !Array.isArray(item)) return;

  if (category === "boosters") {
    item.forEach((booster) => {
      if (activeUser.boosters[booster] !== undefined) {
        activeUser.boosters[booster]++;
      }
    });
    activeUser.coins -= itemPrice;
    return;
  }

  const targetKey = category === "accentPacks" ? "accents" : category;
  const targetArray = activeUser.inventory[targetKey];
  if (!targetArray) return;

  let itemsAdded = false;

  item.forEach((element) => {
    if (!targetArray.includes(element)) {
      targetArray.push(element);
      itemsAdded = true;
    }
  });

  if (itemsAdded) {
    activeUser.coins -= itemPrice;
  }
}
