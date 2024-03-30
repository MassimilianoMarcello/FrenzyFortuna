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
  const [cardMessages, setCardMessages] = useState([]);

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
    setCardMessages([]); // Resetta i messaggi associati alle carte quando avvii un nuovo livello
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

    let message = "";
    if (suit === 'Positive') {
      setCredit(credit + currentBetAmount);
      message = `Win +${currentBetAmount}`;
    } else if (suit === 'Negative') {
      setCredit(credit - currentBetAmount);
      message = `Loss -${currentBetAmount}`;
    }

    setCardMessages([...cardMessages, { index, message }]);

    setVisibleCards(newVisibleCards);

    // Nasconde il messaggio dopo un certo periodo di tempo
    setTimeout(() => {
      setCardMessages(cardMessages.filter(msg => msg.index !== index));
    }, 300);
  };

  return (
    <div>
      <h1>{level.title}</h1>
      <p>{level.description}</p>
      <button onClick={handleStartLevel} disabled={remainingCards !== 0}>Start Level</button>
      <TableCard>
        {visibleCards.map((card, index) => (
          <div key={index} style={{ position: 'relative' }}>
            <Card
              imageUrl={card.clicked ? card.imageUrl : null}
              description={card.description}
              suit={card.clicked ? card.suit : null}
              onClick={() => handleCardClick(index, card.suit)}
            />
            {cardMessages.map((msg, i) => {
              if (msg.index === index) {
                return <p key={i} style={{ position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '5px', borderRadius: '5px', boxShadow: '0 0 5px rgba(0,0,0,0.3)' }}>{msg.message}</p>;
              }
              return null;
            })}
          </div>
        ))}
      </TableCard>
      
      <p>Credito rimanente: {credit}</p>
      <p>Carte rimanenti: {remainingCards}</p>
      <p>Bet Amount: {betAmount}</p>
    </div>
  );
};

export default LevelPage;
