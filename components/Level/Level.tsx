


import { useState,useEffect } from "react";
import calculateCardDistribution from '@/components/Calculator card distribuition/CalculatorCardDistribution';
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';



import Card from "@/components/SingleCard/SingleCard";
import CardDistribution from "./CardDistribuitonProb";





const LevelPage = ({ level, onStartLevel }) => {
  const [visibleCards, setVisibleCards] = useState([]);

  // Gestore di eventi per il clic su una carta
  const handleCardClick = (index) => {
    const newVisibleCards = [...visibleCards]; // Copia l'array delle carte visibili
    newVisibleCards[index].clicked = true; // Imposta lo stato di clic su true per la carta cliccata
    setVisibleCards(newVisibleCards); // Aggiorna lo stato delle carte visibili
  };

  const handleStartLevel = () => {
    const newVisibleCards = CardDistribution({ level });
    setVisibleCards(newVisibleCards.map(card => ({ ...card, clicked: false }))); // Inizializza lo stato di clic di ogni carta a false
  };

  return (
    <div>
      <h1>{level.title}</h1>
      <p>{level.description}</p>
      <button onClick={handleStartLevel}>Start Level</button>

      <CardsTableContainer>
        {visibleCards.map((card, index) => (
          <Card
            key={index}
            imageUrl={card.clicked ? card.imageUrl : null} // Mostra l'immagine solo se la carta è stata cliccata
            description={card.description}
            suit={card.suit}
            onClick={() => handleCardClick(index)} // Passa il gestore di eventi del clic alla carta
          />
        ))}
      </CardsTableContainer>
          </div>
  );
};

export default LevelPage;


const CardsTableContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`
