const calculateCardDistribution = (level, totalCardsOnTable) => {
    let suitCounts = {};
    let remainingCards = totalCardsOnTable;
  
    // Utilizza le informazioni del livello per calcolare la distribuzione delle carte
    if (level) {
      const suits = level.suits || []; // Array di suit per il livello corrente
  
      suits.forEach(suit => {
        const percentage = suit.percentage || 0; // Percentuale di carte di questo suit
        const count = Math.round(totalCardsOnTable * percentage);
        suitCounts[suit.type] = count;
        remainingCards -= count;
      });
  
      // Distribuisci eventuali carte rimanenti in modo casuale tra i suit disponibili
      while (remainingCards > 0) {
        const availableSuits = Object.keys(suitCounts);
        const randomSuit = availableSuits[Math.floor(Math.random() * availableSuits.length)];
        suitCounts[randomSuit]++;
        remainingCards--;
      }
  
      // Assicurati che il numero di carte per ogni suit non superi il totale delle carte sul tavolo
      for (const suit in suitCounts) {
        if (suitCounts[suit] > totalCardsOnTable) {
          suitCounts[suit] = totalCardsOnTable;
        }
      }
    }
  
    return suitCounts;
  };
  
  export default calculateCardDistribution;
  