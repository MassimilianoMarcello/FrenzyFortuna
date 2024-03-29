import React, { useState } from 'react';

const BetInput = ({ bettableScore, onBetChange } ) => {
  const [betAmount, setBetAmount] = useState(1); // Valore predefinito per la scommessa

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value);
    setBetAmount(value);
    onBetChange(value); // Passa il nuovo valore della scommessa alla funzione di gestione nella pagina principale
  };

  return (
    <div>
      <label htmlFor="betAmount">Bet Amount:</label>
      <input 
        type="number" 
        id="betAmount" 
        value={betAmount} 
        onChange={handleInputChange} 
      />
    </div>
  );
};

export default BetInput;
