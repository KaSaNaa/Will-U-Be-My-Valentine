import React, { useState } from 'react';
import Button from './components/Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('./assets/pppixelate.svg');
  font-family: 'Press Start 2P', cursive;
`;

const GiftBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffeb3b;
  border: 2px solid #000;
  margin-top: 20px;
  text-align: center;
  line-height: 300px;
  font-size: 24px;
  border-radius: 10px;
`;

const App: React.FC = () => {
  const [isYesLarge, setIsYesLarge] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const handleNoClick = () => {
    setIsYesLarge(true);
  };

  const handleYesClick = () => {
    setShowGift(true);
  };

  return (
    <Container>
      <h1>Will you be my Valentine?</h1>
      <Button large={isYesLarge.toString()} onClick={handleYesClick}>Yes</Button>
      {!isYesLarge && <Button onClick={handleNoClick}>No</Button>}
      {showGift && <GiftBox>🎁 Movie Tickets Inside! 🎁</GiftBox>}
    </Container>
  );
};

export default App;