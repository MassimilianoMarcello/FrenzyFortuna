


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
  const [credit, setCredit] = useState(1000);
  const [remainingCards, setRemainingCards] = useState(20);
  const [betAmount, setBetAmount] = useState(0);

  // Funzione per calcolare l'importo della scommessa all'avvio del livello
  const calculateBetAmount = () => {
    return credit / (2 * remainingCards);
  };

  // Funzione per avviare un nuovo livello
  const handleStartLevel = () => {
    const newVisibleCards = CardDistribution({ level });
    setVisibleCards(newVisibleCards.map(card => ({ ...card, clicked: false })));
    setBetAmount(calculateBetAmount()); // Calcola e imposta l'importo della scommessa
  };

  // Funzione per gestire il clic su una carta
  const handleCardClick = (index, suit) => {
    const newVisibleCards = [...visibleCards];
    newVisibleCards[index].clicked = true;

    // Decrementa il numero di carte rimanenti
    setRemainingCards(remainingCards - 1);

    // Aggiorna il credito totale in base al suit della carta cliccata
    if (suit === 'positive') {
      setCredit(credit + betAmount);
    } else if (suit === 'negative') {
      setCredit(credit - betAmount);
    }

    // Aggiorna le carte visibili con lo stato aggiornato
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
            suit={card.suit}
            onClick={() => handleCardClick(index, card.suit)}
          />
        ))}
      </div>
      <button onClick={handleStartLevel} disabled={remainingCards === 0}>Start Level</button>
      <p>Credito rimanente: {credit}</p>
      <p>Carte rimanenti: {remainingCards}</p>
      <p>Bet Amount: {betAmount}</p>
    </div>
  );
};

export default LevelPage;






