import Image from "next/image"; // Importa Image da next/image


import React, { useState } from "react";
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';

const CardContainer = styled.div`
  display: flex;
  border: .1rem solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  margin: 1rem;
  width: 5rem;
  background-color: ${theme.colors.bigYellow};
  cursor: pointer; // Cambia il cursore al passaggio sopra la carta
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

const CardDescription = styled.p`
  margin-top: 10px;
`;

const Card = ({ imageUrl, description, suit, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      {/* Mostra l'immagine solo se è stata cliccata */}
      {imageUrl && <StyledImage src={imageUrl} alt="Card" height={100} width={100} />}
      <CardDescription>{description}</CardDescription>
      {suit && <p>Suit: {suit}</p>}
    </CardContainer>
  );
};

export default Card;
