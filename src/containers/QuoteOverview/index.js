import { queryByPlaceholderText } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

import Dropdown from '../../components/Dropdown';

const QuoteOverview = ({ quote, handleUpdateQuote }) => {
  const [deductibleSelection, setDeductibleSelection] = useState(quote.variable_selections?.deductible);
  const [asteroidCollisionSelection, setAsteroidCollisionSelection] = useState(quote.variable_selections?.asteroid_collision);

  useEffect(() => {
    const data = {
      quote: {
        quoteId: quote.quoteId,
        rating_address: quote.rating_address,
        policy_holder: quote.policy_holder,
        variable_selections: {
          deductible: parseInt(deductibleSelection),
          asteroid_collision: parseInt(asteroidCollisionSelection)
        }
      }
    }

    if (quote.quoteId) {
      handleUpdateQuote(data);
    }
  }, [deductibleSelection, asteroidCollisionSelection]);

  return (
    <div>
      <h1>Quote Overview</h1>
      { quote.variable_options && (
        <>
        <h2>Premium: {quote.premium}</h2>
        <div>
          <h3>{quote.variable_options.deductible.title}</h3>
          <p>{quote.variable_options.deductible.description}</p>
          <Dropdown
            options={quote.variable_options.deductible.values}
            onChange={(e) => {
              setDeductibleSelection(e.target.value);
            }
            }/>
        </div>
        <div>
          <h3>{quote.variable_options.asteroid_collision.title}</h3>
          <p>{quote.variable_options.asteroid_collision.description}</p>
          <Dropdown
            options={quote.variable_options.asteroid_collision.values}
            onChange={(e) => {
              setAsteroidCollisionSelection(e.target.value);
            }}
          />
        </div>
        </>
      )}
    </div>
  )
}

export default QuoteOverview;