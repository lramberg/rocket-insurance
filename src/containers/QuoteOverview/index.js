import React, { useState, useEffect } from 'react';

import Dropdown from '../../components/Dropdown';

import {
  Container,
  QuoteForm,
  Section
} from '../../assets/styles/layout';

import {
  Title,
  Subtitle,
  Label,
  Paragraph
} from '../../assets/styles/text';

const QuoteOverview = ({ quote, handleUpdateQuote, error }) => {
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
    <Container>
      <Title>Quote Overview</Title>
      { quote.variable_options && (
        <>
        <Subtitle>Premium: ${quote.premium}</Subtitle>
        <QuoteForm>
          <Section>
            <Label>{quote.variable_options.deductible.title}</Label>
            <Paragraph>{quote.variable_options.deductible.description}</Paragraph>
            <Dropdown
              options={quote.variable_options.deductible.values}
              onChange={(e) => {
                setDeductibleSelection(parseInt(e.target.value));
              }
              }/>
          </Section>
          <Section>
            <Label>{quote.variable_options.asteroid_collision.title}</Label>
            <Paragraph>{quote.variable_options.asteroid_collision.description}</Paragraph>
            <Dropdown
              options={quote.variable_options.asteroid_collision.values}
              onChange={(e) => {
                setAsteroidCollisionSelection(parseInt(e.target.value));
              }}
            />
          </Section>
        </QuoteForm>
        </>
      )}
    </Container>
  )
}

export default QuoteOverview;