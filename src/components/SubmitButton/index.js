import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';

const Button = styled.button`
  font-family: 'Space Grotesk', sans-serif;
  font-size: 2vw;
  font-weight: 600;
  background-color: ${color.ICE_BLUE};
  color: ${color.DEEP_PURPLE};
  border: 0;
  border-radius: 5px;
  padding: 10px;
  width: 100%;
  margin-top: 3vw;
`;

const SubmitButton = ({ onClick }) => {
  return (
    <Button onClick={onClick}>Get A Quote</Button>
  )
}

export default SubmitButton;