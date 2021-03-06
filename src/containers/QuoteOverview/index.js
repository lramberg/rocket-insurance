import React, { useState, useEffect } from 'react';

import Dropdown from '../../components/Dropdown';
import SubmitButton from '../../components/SubmitButton';

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

const QuoteOverview = ({ quote, handleUpdateQuote }) => {
  const [deductibleSelection, setDeductibleSelection] = useState(0);
  const [asteroidCollisionSelection, setAsteroidCollisionSelection] = useState(0);
  const [checkedOut, setCheckedOut ] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => true;
  });

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

  const formatPremium = (value) => {
    let premium = value.toFixed(2);
    const parts = premium.split('.');
    const wholeNumber = parseInt(parts[0]).toLocaleString();
    return `$${wholeNumber}.${parts[1]}`;
  };

  return (
    <Container>
      <Title>Quote #{quote.quoteId}</Title>
      { !quote.quoteId && <Subtitle>Oops something went wrong, please try again</Subtitle>}
      { quote.variable_options && !checkedOut && (
        <>
        <Subtitle>Annual Premium: {formatPremium(quote.premium)}</Subtitle>
        <QuoteForm>
          <div>
            <Label>{quote.variable_options.deductible.title}</Label>
            <Paragraph>{quote.variable_options.deductible.description}</Paragraph>
            <Dropdown
              options={quote.variable_options.deductible.values}
              onChange={(e) => {
                setDeductibleSelection(parseInt(e.target.value));
              }
              }/>
          </div>
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
          <SubmitButton text={'Checkout'} onClick={() => setCheckedOut(true)} />
        </QuoteForm>
        </>
      )}
      { checkedOut && (
        <>
        <Subtitle>You have submitted your policy request.</Subtitle>
        <Label>Save this quote number for your records.</Label>
        </>
      )}
    </Container>
  )
}

export default QuoteOverview;