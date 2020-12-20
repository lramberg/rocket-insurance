import React from 'react';
import styled from 'styled-components';

const Input = (props) => {
  return (
    <input  type='text' placeholder={props.placeholder} onChange={props.onChange} />
  )
}

export default Input;