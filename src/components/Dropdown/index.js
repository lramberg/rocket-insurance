import React from 'react';
import styled from 'styled-components';
import { color } from '../../assets/styles/color';

const Select = styled.select`
  width: 100%;
  background-color: ${color.LIGHT_PINK};
  padding: 10px;
  margin-top: 5px;
  border: 0;
  border-radius: 5px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5vw;
  color: ${color.DEEP_PURPLE}
`;

const Dropdown = ({ onChange, options }) => {
  return (
    <Select onChange={onChange}>
      {options.map((option, index) => {
        return <option key={`option-${index}`} value={option}>{option}</option>
      })}
    </Select>
  )
}

export default Dropdown;