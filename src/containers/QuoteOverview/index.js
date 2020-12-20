import React, { useState, useEffect } from 'react';

const QuoteOverview = (props) => {
  console.log('props.quote', props.quote);
  return (
    <div>
      <h1>Quote Overview</h1>
      <h2>Premium: {props.quote.premium}</h2>
    </div>
  )
}

export default QuoteOverview;