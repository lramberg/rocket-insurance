import React from 'react';

const Dropdown = ({ onChange, options }) => {
  return (
    <select onChange={onChange}>
      {options.map((option, index) => {
        return <option key={`option-${index}`} value={option}>{option}</option>
      })}
    </select>
  )
}

export default Dropdown;