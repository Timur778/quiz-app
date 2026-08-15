function calculateRequiredXP(level) {
  const baseXp = 100;
  const growthExponent = 1.25;

  const requiredXp = Math.round((baseXp * level ** growthExponent) / 10) * 10;

  return requiredXp;
}

function handleXp(activeUser, xpEarned) {
  if (!activeUser || !xpEarned || xpEarned <= 0) return;
  activeUser.xp += xpEarned;

  while (true) {
    const requiredXp = calculateRequiredXP(activeUser.level);
    if (activeUser.xp < requiredXp) break;

    activeUser.level++;
    activeUser.xp -= requiredXp;
  }
}
