// Nel tuo componente principale che utilizza i dati dal Sanity
import React from 'react';
import Card from '@/components/SingleCard/SingleCard'; // Assicurati di importare correttamente il componente Card

const LevelPage = ({ level }) => {
  return (
    <div>
      <h1>{level.title}</h1>
      <p>{level.description}</p>
      <div>
        {level.cards.map(card => (
          <Card
            key={card._id}
            imageUrl={card.imageUrl}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelPage;
