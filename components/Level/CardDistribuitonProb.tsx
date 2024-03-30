// CardDistribution.js
import React from "react";

const CardDistribution = ({ level }) => {
  const totalProbability = level.cards.reduce((acc, card) => acc + card.probability, 0);
  const randomNumbers = Array.from({ length: 3 }, () => Math.random() * totalProbability);

  const selectedCards = randomNumbers.map(randomNumber => {
    let cumulativeProbability = 0;
    let selectedCard = null;

    level.cards.some(card => {
      cumulativeProbability += card.probability;
      if (randomNumber <= cumulativeProbability) {
        selectedCard = card;
        return true;
      }
      return false;
    });

    return selectedCard;
  });

  return selectedCards.filter(Boolean);
};

export default CardDistribution;
