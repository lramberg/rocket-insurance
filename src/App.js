import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import RatingInformation from './containers/RatingInformation';
import QuoteOverview from './containers/QuoteOverview';

const baseURL = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes';

function App() {
  const [quote, setQuote] = useState({});

  const handleCreateQuote = async (data) => {
    try {
      const quoteResponse = await axios.post(baseURL, data);
      setQuote(quoteResponse.data.quote);
      return quoteResponse;
    } catch (error) {
      console.log('error', error);
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <RatingInformation handleCreateQuote={handleCreateQuote} />
        </Route>
        <Route exact path='/quote-overview'>
          <QuoteOverview quote={quote} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
