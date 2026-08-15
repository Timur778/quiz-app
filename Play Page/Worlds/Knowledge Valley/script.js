"use strict";

import { knowledgeValleyLevels } from "./knowledge-valley-data.js";
import { getUserRecord, findActiveUser } from "../../../reusable.js";
import "../../../shared.js";

const data = getUserRecord("database");
const activeUser = findActiveUser(data[0]);

const retrievedLevels = activeUser.campaign.worlds["knowledge-valley"].levels;
const levelProgress = Object.values(retrievedLevels);

const levelMap = document.querySelector(".level-map");

const fragment = document.createDocumentFragment();
createLevelNodesGrid();

function createLevelNodesGrid() {
  if (!levelMap) {
    throw new Error("Level Map grid was not found.");
  } else {
    createLevelNodes();
    levelMap.appendChild(fragment);
  }
}

function createLevelNodes() {
  knowledgeValleyLevels.forEach((level) => {
    const levelId = level.id;

    const levelNodeContainer = document.createElement("div");
    levelNodeContainer.classList.add("level-node-container");

    const levelNode = document.createElement("button");
    levelNode.classList.add("level-node");
    levelNode.dataset.levelId = level.id;
    levelNode.dataset.sound = "click";
    levelNode.dataset.navigation = "true";
    levelNode.dataset.url = `../../../quiz.html?world=knowledge-valley&level=${encodeURIComponent(levelId)}`;

    const levelProgress = retrievedLevels[levelId] || {
      isUnlocked: false,
      stars: 0,
    };

    if (levelProgress.stars >= 1) {
      levelNode.classList.add("level-node--completed");
    } else if (levelProgress.isUnlocked) {
      levelNode.classList.add("level-node--current");
    } else {
      levelNode.classList.add("level-node--locked");
      levelNode.disabled = true;
    }

    levelNode.type = "button";
    levelNode.ariaLabel = `Level ${level.number}: ${level.title}`;

    const levelNodeNumber = document.createElement("span");
    levelNodeNumber.classList.add("level-node__number");
    levelNodeNumber.textContent = level.number;

    const levelTitle = document.createElement("h3");
    levelTitle.classList.add("level-node__title");
    levelTitle.textContent = level.title;

    const levelNodeStars = document.createElement("div");
    levelNodeStars.classList.add("level-node__stars");

    const totalStars = 3;
    const earnedStars = levelProgress.stars || 0;

    let starsHTML = "";

    for (let i = 0; i < totalStars; i++) {
      const isFilled = i < earnedStars;
      const starClass = isFilled
        ? "level-node__star level-node__star--filled"
        : "level-node__star";

      starsHTML += `
        <svg
          class="${starClass}"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.5 14.9 8.4l6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3 1.1-6.5L2.6 9.3l6.5-.9L12 2.5z" />
        </svg>
      `;
    }

    levelNodeStars.innerHTML = starsHTML;

    levelNode.append(levelNodeNumber);
    levelNodeContainer.append(levelNode, levelTitle, levelNodeStars);
    fragment.appendChild(levelNodeContainer);
  });
}
