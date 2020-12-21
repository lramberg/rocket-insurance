import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';

const StyledInput = styled.input`
  margin-bottom: 1vw;
  padding: 1vw;
  border: 0;
  border-bottom: 1px solid ${color.ICE_BLUE};
  background-color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  color: ${color.WHITE};
  width: 100%;
  box-sizing: border-box;
`;

const Input = ({ placeholder, onChange }) => {
  return (
    <StyledInput  type='text' placeholder={placeholder} onChange={onChange} />
  )
}

export default Input;