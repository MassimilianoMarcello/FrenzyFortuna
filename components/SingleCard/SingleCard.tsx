import Image from "next/image"; // Importa Image da next/image
import styled from "@emotion/styled";
import theme from '@/app/theme_emotion';

// SingleCard.js


const CardContainer = styled.div`

  border: .1rem solid #ccc;
  border-radius: 5px;
  padding: 2rem;
  margin: 2rem;
  width: 5rem;
  background-color: ${theme.colors.bigYellow};
`;

const StyledImage = styled(Image)`
  max-width: 100%;
`;

const CardDescription = styled.p`
  margin-top: 10px;
`;

const Card = ({ imageUrl, description, suit }) => {
  return (
    <CardContainer>
      <StyledImage src={imageUrl} alt="Card" height={100} width={100} />
      <CardDescription>{description}</CardDescription>
      {suit && <p>Suit: {suit}</p>}
    </CardContainer>
  );
};

export default Card;
