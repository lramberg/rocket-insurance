import React from 'react';
import styled from 'styled-components';

const Input = ({ placeholder, onChange }) => {
  return (
    <input  type='text' placeholder={placeholder} onChange={onChange} />
  )
}

export default Input;