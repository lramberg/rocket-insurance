import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';
import { media } from '../../assets/styles/breakpoints';

const Select = styled.select`
  width: 100%;
  background-color: ${color.BLUE_GRAY};
  padding: 10px;
  margin-top: 5px;
  border: 0;
  border-radius: 5px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  color: ${color.DEEP_PURPLE};

  @media ${media.mobile} {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const Dropdown = ({ onChange, options }) => {
  return (
    <Select onChange={onChange}>
      {options.map((option, index) => {
        return <option key={`option-${index}`} value={option}>${option.toLocaleString()}</option>
      })}
    </Select>
  )
}

export default Dropdown;