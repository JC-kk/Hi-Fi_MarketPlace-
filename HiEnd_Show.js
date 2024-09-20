import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faMicrochip, faCube, faPercent } from '@fortawesome/free-solid-svg-icons';

const AppContainer = styled.div`
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto', sans-serif;
`;

const Title = styled(motion.h1)`
  color: #f8f8f8;
  font-size: 3rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 600px;
  width: 100%;
`;

const StyledButton = styled(motion.button)`
  background: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 10px;
  padding: 1.5rem;
  font-size: 1.2rem;
  color: #f8f8f8;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`;

const App = () => {
  return (
    <Router>
      <AppContainer>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          HiFi Headphone Haven
        </Title>
        <ButtonContainer>
          <StyledButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon={faHeadphones} />
            Headphones
          </StyledButton>
          <StyledButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon={faMicrochip} />
            DAC/Amplifiers
          </StyledButton>
          <StyledButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon={faCube} />
            Accessories
          </StyledButton>
          <StyledButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon icon={faPercent} />
            Sales
          </StyledButton>
        </ButtonContainer>
      </AppContainer>
    </Router>
  );
};

export default App;
