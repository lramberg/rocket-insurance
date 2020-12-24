import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import RatingInformation from './containers/RatingInformation';
import QuoteOverview from './containers/QuoteOverview';

const height = window.innerHeight;
const baseURL = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

function App() {
  const history = useHistory();
  const [quote, setQuote] = useState({});
  const [apiError, setApiError] = useState('');

  const handleCreateQuote = async (data) => {
    try {
      const quoteResponse = await axios.post(baseURL, data);
      setQuote(quoteResponse.data.quote);
      if (quoteResponse.data) history.push('/quote-overview');
      return quoteResponse;
    } catch (error) {
      const responseErrors = Object.assign({}, error.response.data.errors);
      setApiError(getErrorMessage(responseErrors));
    }
  }

  const handleUpdateQuote = async (data) => {
    try {
      const updatedQuote = await axios.put(`${baseURL}/${quote.quoteId}`, data);
      setQuote(updatedQuote.data.quote);
    } catch (error) {
      setApiError('Oops something went wrong, please try again');
    }
  }

  const getErrorMessage = (error) => {
    let message = 'Oops something went wrong, please try again';
    if (error.address) {
      const keys = Object.keys(error.address);
      if (keys[keys.length - 1] === 'postal') keys[keys.length - 1] = 'postal code';
      const joined = keys.join(', ');
      message = `please enter a vaild ${joined}.`;
    }
    return message;
  }

  return (
    <div className='App' style={{ minHeight: height }}>
      <Switch>
        <Route exact path='/'>
          <RatingInformation handleCreateQuote={handleCreateQuote} apiError={apiError} setApiError={setApiError} />
        </Route>
        <Route exact path='/quote-overview'>
          <QuoteOverview quote={quote} handleUpdateQuote={handleUpdateQuote} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
