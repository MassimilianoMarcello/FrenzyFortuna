"use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import styled from "@emotion/styled";
// import theme from '@/app/theme_emotion';
// import React, { useState, useEffect } from "react";
// import  BetInput from '@/components/BetInput/BetInput';
//import Level from "@/components/Level/Level";

// import { getLevel } from "@/sanity/sanity.query";



// const MainPage = ({ level, totalScore, totalCards }) => {
//   const [currentScore, setCurrentScore] = useState(totalScore); // Inizializza lo score corrente al totale dello score
//   const [levels, setLevels] = useState([]);

//   useEffect(() => {
//     const fetchLevels = async () => {
//       const levelsData = await getLevel();
//       setLevels(levelsData);
//     };

//     fetchLevels();
//   }, []);
//   // Funzione per calcolare lo score scommetibile per ogni carta
//   const calculateBettableScore = () => {
//     return Math.floor(currentScore / totalCards); // Calcola lo score scommetibile come frazione dello score totale
//   };

//   // Funzione per gestire la scommessa del giocatore
//   const handleBet = (betAmount) => {
//     // Verifica che lo score scommetibile sia maggiore di 0 e non superi lo score corrente
//     if (betAmount > 0 && betAmount <= calculateBettableScore()) {
//       // Aggiorna lo score corrente sottraendo lo score scommetibile
//       setCurrentScore(currentScore - betAmount);
//       // Implementa qui la logica per girare la carta e valutare l'esito della giocata
//     } else {
//       // Messaggio di errore se lo score scommetibile non è valido
//       console.log("Scommessa non valida!");
//     }
//   };

//   return (
//     <div>
//       <h1>Frenzy Fortuna</h1>
//       <h2>Level {level}</h2>
//       <p>Total Score: {totalScore}</p>
//       <p>Total Cards: {totalCards}</p>
//       {levels.map(level => (
//         <Level key={level._id} level={level} />
//       ))}
//       <p>Bettable Score per Card: {calculateBettableScore()}</p>
//       <BetInput onBetChange={handleBet} bettableScore={calculateBettableScore()} />

//     </div>
//   );
// };

// export default MainPage;


// const Title = styled.h1`
//     font-family:${theme.fontFamily.headersFont};
//     font-size:${theme.fontSize.large};
// `

// // const Level = styled.h1`
// //   font-family:${theme.fontFamily.titleFont};
// //     font-size:${theme.fontSize.large};
// // `

// const Points = styled.div`
// `
// secondo tipo

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import styled from "@emotion/styled";
// import theme from "@/app/theme_emotion";
// import BetInput from "@/components/BetInput/BetInput";
// import Level from "@/components/Level/Level";

// import { getLevel } from "@/sanity/sanity.query";

// const MainPage = ({ totalScore, totalCards }) => {
//   const [currentScore, setCurrentScore] = useState(totalScore);
//   const [levels, setLevels] = useState([]);

//   useEffect(() => {
//     const fetchLevels = async () => {
//       const levelsData = await getLevel();
//       setLevels(levelsData);
//     };

//     fetchLevels();
//   }, []);

//   const calculateBettableScore = () => {
//     return Math.floor(currentScore / totalCards);
//   };

//   const handleBet = (betAmount) => {
//     if (betAmount > 0 && betAmount <= calculateBettableScore()) {
//       setCurrentScore(currentScore - betAmount);
//     } else {
//       console.log("Scommessa non valida!");
//     }
//   };

//   return (
//     <div>
//       <h1>Frenzy Fortuna</h1>
//       <p>Total Score: {totalScore}</p>
//       <p>Total Cards: {totalCards}</p>
//       {levels.map((levelData) => (
//         <Level key={levelData._id} level={levelData} onStartLevel={undefined} />
//       ))}
//       <p>Bettable Score per Card: {calculateBettableScore()}</p>
//       <BetInput onBetChange={handleBet} bettableScore={calculateBettableScore()} />
//     </div>
//   );
// };

// export default MainPage;



// terzo tipo


import React, { useState, useEffect } from 'react';

import LevelPage from '@/components/Level/Level'; 

import { getLevel } from '@/sanity/sanity.query';

const MainPage = ({ totalScore, totalCards,onStartLevel }) => {
  const [currentScore, setCurrentScore] = useState(totalScore);
  const [levels, setLevels] = useState([]);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const fetchLevels = async () => {
      const levelsData = await getLevel();
      setLevels(levelsData);
    };

    fetchLevels();
  }, []);

  const calculateBettableScore = () => {
    return Math.floor(currentScore / totalCards);
  };

  const handleBet = (betAmount) => {
    if (betAmount > 0 && betAmount <= calculateBettableScore()) {
      setCurrentScore(currentScore - betAmount);
    } else {
      console.log("Scommessa non valida!");
    }
  };
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
            <p>Total Score: {totalScore}</p>
      <p>Total Cards: {totalCards}</p>
      <p>Bettable Score per Card: {calculateBettableScore()}</p>
        </div>
  );
};

export default MainPage;
