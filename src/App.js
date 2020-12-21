import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import RatingInformation from './containers/RatingInformation';
import QuoteOverview from './containers/QuoteOverview';

const height = window.innerHeight;
const baseURL = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

function App() {
  const [quote, setQuote] = useState({});
  const [error, setError] = useState('');

  const handleCreateQuote = async (data) => {
    try {
      const quoteResponse = await axios.post(baseURL, data);
      setQuote(quoteResponse.data.quote);
      return quoteResponse;
    } catch (error) {
      console.log('error', error);
      setError('Oops, something went wrong. Please try again.');
    }
  }

  const handleUpdateQuote = async (data) => {
    try {
      const updatedQuote = await axios.put(`${baseURL}/${quote.quoteId}`, data);
      setQuote(updatedQuote.data.quote);
    } catch (error) {
      console.log('error', error);
      setError('Oops, something went wrong. Please try again.');
    }
  }

  return (
    <div style={{ height: height, backgroundColor: '#0D021A' }}>
      <Switch>
        <Route exact path='/'>
          <RatingInformation handleCreateQuote={handleCreateQuote} />
        </Route>
        <Route exact path='/quote-overview'>
          <QuoteOverview quote={quote} handleUpdateQuote={handleUpdateQuote} error={error} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
