


import { useState,useEffect } from "react";
// import calculateCardDistribution from '@/components/Calculator card distribuition/CalculatorCardDistribution';
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';

import Card from "@/components/SingleCard/SingleCard";
import CardDistribution from "./CardDistribuitonProb";



const TableCards = styled.div`
    display: flex;
    flex-wrap:wrap;
`











const LevelPage = ({ level }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [credit, setCredit] = useState(10);
  const [remainingCards, setRemainingCards] = useState(3);
  const [betAmount, setBetAmount] = useState(0);

  useEffect(() => {
    // Calcola l'importo della scommessa dopo che gli stati sono stati aggiornati
    setBetAmount(calculateBetAmount());
  }, [credit, remainingCards]);

  const calculateBetAmount = () => {
    return Math.round(credit / (2 * remainingCards));
  };

  const handleStartLevel = () => {
    console.log("Starting level...");
    const newVisibleCards = CardDistribution({ level });
    setVisibleCards(newVisibleCards.map((card) => ({ ...card, clicked: false })));
    // Decrementa il numero di carte rimanenti
    setRemainingCards(3);
    // Riporta il credito al valore iniziale
    setCredit(10);
  };

  const handleCardClick = (index, suit) => {
    const card = visibleCards[index];

    if (card.clicked) {
      return;
    }

    const newVisibleCards = [...visibleCards];
    newVisibleCards[index].clicked = true;

    setRemainingCards(remainingCards - 1);

    if (suit === "Positive") {
      setCredit(credit + betAmount);
    } else if (suit === "Negative") {
      setCredit(credit - betAmount);
    }

    setVisibleCards(newVisibleCards);
  };

  return (
    <div>
      <h1>{level.title}</h1>
      <p>{level.description}</p>
      <div>
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.clicked ? card.imageUrl : null}
            description={card.description}
            suit={card.clicked ? card.suit : null}
            onClick={() => handleCardClick(index, card.suit)}
          />
        ))}
      </div>
      <button onClick={handleStartLevel} disabled={remainingCards === 0}>
        Start Level
      </button>
      <p>Credito rimanente: {credit}</p>
      <p>Carte rimanenti: {remainingCards}</p>
      <p>Bet Amount: {betAmount}</p>
    </div>
  );
};

export default LevelPage;
