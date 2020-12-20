import React from 'react';

const Dropdown = (props) => {
  return (
    <select onChange={props.onChange}>
      {props.options.map((option, index) => {
        return <option key={`option-${index}`} value={option}>{option}</option>
      })}
    </select>
  )
}

export default Dropdown;