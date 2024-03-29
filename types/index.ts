// types.ts

export interface Level {
    _id: string;
    title: string;
    description: string;
    cards: {
      _id: string;
      value: string;
      suit: string;
      imageUrl: string;
      description: string;
    }[];
  }
  

