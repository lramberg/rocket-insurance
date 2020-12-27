import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';
import { media } from '../../assets/styles/breakpoints';

const StyledInput = styled.input`
  margin-bottom: 1vw;
  padding: 3px 0 1vw;
  border: 0;
  border-bottom: 1px solid ${color.ICE_BLUE};
  border-radius: 0;
  background-color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  color: ${color.ICE_BLUE};
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${color.ICE_BLUE}
  }

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  @media ${media.mobile} {
    font-size: 5vw;
    padding: 2vw 0;
    margin-bottom: 3vw;
  }
`;

const Input = ({ placeholder, onChange, type, maxLength }) => {
  return (
    <StyledInput
      type={type ?? 'text'}
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength ?? 30} // would match character limit in the database
      autoComplete='off'
    />
  )
}

export default Input;