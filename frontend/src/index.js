import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'redux-react-hook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import App from './containers/App';
import store from './store';
import { setAppUpdated } from './store/modules/app/actions';
import * as serviceWorker from './serviceWorker';

import './index.css';

const client = new ApolloClient({
  // uri: 'https://48p1r2roz4.sse.codesandbox.io',
  uri: 'http://localhost:8080/query'
});

ReactDOM.render(
	<ApolloProvider client={client}>
	  <StoreProvider value={store}>
	    <App />
	  </StoreProvider>
	</ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register({
  onUpdate: () => store.dispatch(setAppUpdated()),
});
