import React, { useState, useEffect } from 'react';

import Dropdown from '../../components/Dropdown';

const QuoteOverview = ({ quote, handleUpdateQuote }) => {
  const [deductibleSelection, setDeductibleSelection] = useState(0);
  const [asteroidCollisionSelection, setAsteroidCollisionSelection] = useState(0);

  // set the default values once the initial quote is received 
  useEffect(() => {
    if (quote.variable_selections && 
        quote.variable_selections.asteroid_collision !== asteroidCollisionSelection &&
        quote.variable_selections.deductible !== deductibleSelection
      ) {
      setAsteroidCollisionSelection(quote.variable_selections.asteroid_collision);
      setDeductibleSelection(quote.variable_selections.deductible);
    }
  }, [quote]);

  useEffect(() => {
    const data = {
      quote: {
        quoteId: quote.quoteId,
        rating_address: quote.rating_address,
        policy_holder: quote.policy_holder,
        variable_selections: {
          deductible: deductibleSelection,
          asteroid_collision: asteroidCollisionSelection
        }
      }
    }

    if (deductibleSelection && asteroidCollisionSelection) handleUpdateQuote(data);   
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
              setDeductibleSelection(parseInt(e.target.value));
            }
            }/>
        </div>
        <div>
          <h3>{quote.variable_options.asteroid_collision.title}</h3>
          <p>{quote.variable_options.asteroid_collision.description}</p>
          <Dropdown
            options={quote.variable_options.asteroid_collision.values}
            onChange={(e) => {
              setAsteroidCollisionSelection(parseInt(e.target.value));
            }}
          />
        </div>
        </>
      )}
    </div>
  )
}

export default QuoteOverview;