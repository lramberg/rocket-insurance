import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';
import { media } from '../../assets/styles/breakpoints';

const StyledInput = styled.input`
  margin-bottom: 1vw;
  padding: 0 0 1vw;
  border: 0;
  border-bottom: 1px solid ${color.ICE_BLUE};
  background-color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  color: ${color.LIGHT_GRAY};
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${color.LIGHT_GRAY}
  }

  &::-webkit-inner-spin-button, 
  &::-webkit-outer-spin-button { 
    -webkit-appearance: none; 
    margin: 0; 
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 20px ${color.DEEP_PURPLE} inset !important;
    -webkit-text-fill-color: ${color.LIGHT_GRAY};
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
    />
  )
}

export default Input;