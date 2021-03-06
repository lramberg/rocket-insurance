import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';
import { media } from '../../assets/styles/breakpoints';

const Select = styled.select`
  margin-bottom: 1vw;
  padding: 0 0 1vw;
  border: 0;
  border-bottom: 1px solid ${color.ICE_BLUE};
  background-color: transparent;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  color: ${color.ICE_BLUE};
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  -webkit-appearance:none;

  @media ${media.mobile} {
    font-size: 5vw;
    padding: 2vw 0;
    margin-bottom: 3vw;
  }
`;

const RegionSelect = ({ onChange, options }) => {
  return (
    <Select onChange={onChange}>
      <option value=''>State</option>
      {options.map((option, index) => {
        return <option key={`region-${index}`} value={option}>{option}</option>
      })}
    </Select>
  )
}

export default RegionSelect;