


import { useState,useEffect } from "react";
import calculateCardDistribution from '@/components/Calculator card distribuition/CalculatorCardDistribution';








/// LevelPage.js

// import React, { useState } from "react";
// import CardDistribution from "@/components/CardDistribution/CardDistribution";
import Card from "@/components/SingleCard/SingleCard";
import CardDistribution from "./CardDistribuitonProb";

const LevelPage = ({ level, onStartLevel }) => {
  const [visibleCards, setVisibleCards] = useState([]);

  const handleStartLevel = () => {
    const newVisibleCards = CardDistribution({ level });
    setVisibleCards(newVisibleCards);
  };

  return (
    <div>
      <h1>{level.title}</h1>
      <p>{level.description}</p>
      <button onClick={handleStartLevel}>Start Level</button>
      <div>
        {visibleCards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} description={card.description} suit={card.suit} />
        ))}
      </div>
     
    </div>
  );
};

export default LevelPage;
