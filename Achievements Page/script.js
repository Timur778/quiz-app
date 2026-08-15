"use strict";

import { achievements } from "./achievements.js";
import "../shared.js";
import { audio } from "../shared.js";

const achievementGrid = document.querySelector(".achievements-grid");
const fragment = document.createDocumentFragment();

createAchievementsGrid();

function createAchievementsGrid() {
  if (!achievementGrid) {
    throw new Error("Achievements grid was not found.");
  } else {
    createAchievementCards();
    achievementGrid.appendChild(fragment);
  }
}

function createAchievementCards() {
  achievements.forEach((card) => {
    // CREATING ELEMENTS

    const articleEl = document.createElement("article");
    articleEl.classList.add("achievement-container");
    articleEl.dataset.achievementId = card.id;
    articleEl.dataset.rarity = card.rarity;
    articleEl.dataset.category = card.category;

    const illustration = document.createElement("div");
    illustration.classList.add("achievement-illustration");
    const iconImage = document.createElement("img");
    iconImage.src = card.icon;

    if (!card.isUnlocked) {
      if (document.documentElement.dataset.mode === "light") {
        iconImage.src = "../Images/Achievements/locked-dark.png";
      } else {
        iconImage.src = "../Images/Achievements/locked-light.png";
      }
    } else {
      illustration.classList.add("unlocked");
      iconImage.src = card.icon;
    }

    iconImage.alt = "";
    iconImage.loading = "lazy";
    iconImage.decoding = "async";

    const containerBottom = document.createElement("div");
    containerBottom.classList.add("achievement-container__bottom");

    const textSection = document.createElement("div");
    textSection.classList.add("achievement-text");

    const achievementLabel = document.createElement("h3");
    achievementLabel.classList.add("achievement-label");
    achievementLabel.textContent = card.title;

    const achievementDescription = document.createElement("p");
    achievementDescription.classList.add("achievement-description");
    achievementDescription.textContent = card.description;

    const achievementProgress = document.createElement("div");
    achievementProgress.classList.add("achievement-progress");
    achievementProgress.role = "progressbar";
    achievementProgress.ariaLabel = `${card.title} progress`;
    achievementProgress.ariaValueMin = "0";
    achievementProgress.ariaValueMax = String(card.progress.target);
    achievementProgress.ariaValueNow = String(card.progress.current);

    const progressTrack = document.createElement("div");
    progressTrack.classList.add("achievement-progress__track");

    const progressBar = document.createElement("div");
    progressBar.classList.add("achievement-progress__bar");

    const completedAmount =
      (card.progress.current * 100) / card.progress.target;

    progressBar.style.width = `clamp(0%, ${completedAmount}%, 100%)`;

    const progressAmount = document.createElement("span");
    progressAmount.classList.add("achievement-progress__amount");

    if (card.progressType === "numeric" && !card.isUnlocked) {
      progressAmount.textContent = `${card.progress.current} / ${card.progress.target}`;
    } else {
      progressAmount.textContent = getCompleted(card, progressBar);
    }

    // APPENDING ELEMENTS

    illustration.appendChild(iconImage);
    textSection.append(achievementLabel, achievementDescription);
    progressTrack.appendChild(progressBar);
    achievementProgress.append(progressTrack, progressAmount);
    containerBottom.append(textSection, achievementProgress);

    articleEl.appendChild(illustration);
    articleEl.appendChild(containerBottom);

    fragment.appendChild(articleEl);
  });
}

function getCompleted(card, progressBar) {
  if (card.isUnlocked) {
    progressBar.style.width = "100%";
    return "Completed";
  }

  return "Not Completed";
}
