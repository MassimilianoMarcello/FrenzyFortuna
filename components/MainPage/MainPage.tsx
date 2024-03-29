"use client";



import React, { useState, useEffect } from 'react';

import LevelPage from '@/components/Level/Level'; 

import { getLevel } from '@/sanity/sanity.query';

const MainPage = ({ totalCards,onStartLevel }) => {

  const [levels, setLevels] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const levelsData = await getLevel();
      setLevels(levelsData);
    };

    fetchLevels();
  }, []);


  const startLevel = () => {
    // Selezionare casualmente le carte da visualizzare per il livello
    const selectedCards = levels[0].cards.slice(0, totalCards);
    setVisibleCards(selectedCards);
    
    // Aggiungere qui eventuali altre operazioni necessarie per preparare il livello
    console.log("Livello avviato!", selectedCards);
  };
  return (
    <div>
      <h1>Frenzy Fortuna</h1>

      {levels.map((levelData) => (
        <LevelPage key={levelData._id} level={levelData} onStartLevel={onStartLevel} />
      ))}
    
     
        </div>
  );
};

export default MainPage;
