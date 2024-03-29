


import { useState,useEffect } from "react";
// import calculateCardDistribution from '@/components/Calculator card distribuition/CalculatorCardDistribution';
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';



import Card from "@/components/SingleCard/SingleCard";
import CardDistribution from "./CardDistribuitonProb";







const LevelPage = ({ level, onStartLevel }) => {
    const [visibleCards, setVisibleCards] = useState([]);
    const [credit, setCredit] = useState(1000);
    const [remainingCards, setRemainingCards] = useState(20); // Rinominato da remainingPlays
  
    const handleCardClick = (index) => {
      const newVisibleCards = [...visibleCards];
      newVisibleCards[index].clicked = true;
      setVisibleCards(newVisibleCards);
      setRemainingCards(remainingCards - 1); // Decrementa il numero di carte rimanenti
    };
  
    const handleStartLevel = () => {
      const betAmount = credit / 10; // Calcola l'importo della scommessa
      const newVisibleCards = CardDistribution({ level });
      setVisibleCards(newVisibleCards.map(card => ({ ...card, clicked: false })));
  
      // Calcola il risultato della giocata
      const positiveSuitCount = newVisibleCards.filter(card => card.suit === 'positive').length;
      const negativeSuitCount = newVisibleCards.filter(card => card.suit === 'negative').length;
  
      let outcome;
      if (positiveSuitCount === 10) {
        outcome = betAmount;
        setCredit(credit + betAmount);
      } else if (negativeSuitCount === 10) {
        outcome = -betAmount;
        setCredit(credit - betAmount);
      } else {
        outcome = 0;
      }
  
      console.log('Risultato della giocata:', outcome);
      console.log('Credito rimanente:', credit);
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
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <button onClick={handleStartLevel} disabled={remainingCards === 0}>Start Level</button>
        <p>Credito rimanente: {credit}</p>
        <p>Carte rimanenti: {remainingCards}</p> {/* Modifica qui per mostrare il numero di carte rimanenti */}
      </div>
    );
  };
   
  export default LevelPage



const TableCards = styled.div`
    display: flex;
    flex-wrap:wrap;
`
