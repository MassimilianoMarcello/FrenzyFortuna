


import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';
import Card from "@/components/SingleCard/SingleCard";
import CardDistribution from "./CardDistribuitonProb";

const TableCard = styled.div`
  display: flex;
  flex-wrap:wrap;
`;

const LevelPage = ({ level }) => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [credit, setCredit] = useState(100);
  const [remainingCards, setRemainingCards] = useState(0);
  const [betAmount, setBetAmount] = useState(0);
  const [creditChangeMessage, setCreditChangeMessage] = useState(null);

  useEffect(() => {
    setBetAmount(calculateBetAmount());
  }, [credit, remainingCards]);

  const calculateBetAmount = () => {
    return Math.round(credit / (0.5 * remainingCards));
  };

  const handleStartLevel = () => {
    const newVisibleCards = CardDistribution({ level });
    setVisibleCards(newVisibleCards.map(card => ({ ...card, clicked: false })));
    setRemainingCards(20);
    setCredit(100);
    setCreditChangeMessage(null); // Resetta il messaggio di cambio credito quando avvii un nuovo livello
  };

  const handleCardClick = (index, suit) => {
    const card = visibleCards[index];

    if (card.clicked) {
      return;
    }
    
    const newVisibleCards = [...visibleCards];
    newVisibleCards[index].clicked = true;

    setRemainingCards(remainingCards - 1);

    const currentBetAmount = calculateBetAmount();

    if (suit === 'Positive') {
      setCredit(credit + currentBetAmount);
      setCreditChangeMessage(`Win +${currentBetAmount}`);
    } else if (suit === 'Negative') {
      setCredit(credit - currentBetAmount);
      setCreditChangeMessage(`Loss -${currentBetAmount}`);
    }

    setVisibleCards(newVisibleCards);

    // Nasconde il messaggio dopo un certo periodo di tempo
    setTimeout(() => {
      setCreditChangeMessage(null);
    }, 2000);
  };

  return (
    <div>
      <h1>{level.title}</h1>
      <p>{level.description}</p>
      <TableCard>
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.clicked ? card.imageUrl : null}
            description={card.description}
            suit={card.clicked ? card.suit : null} // Mostriamo il suit solo se la carta è stata cliccata
            onClick={() => handleCardClick(index, card.suit)} // Passa l'indice e il suit alla funzione di gestione del clic
          />
        ))}
      </TableCard>
      <button onClick={handleStartLevel} disabled={remainingCards !== 0}>Start Level</button>
      <p>Credito rimanente: {credit}</p>
      <p>Carte rimanenti: {remainingCards}</p>
      <p>Bet Amount: {betAmount}</p>
      {creditChangeMessage && <p>{creditChangeMessage}</p>}
    </div>
  );
};

export default LevelPage;
