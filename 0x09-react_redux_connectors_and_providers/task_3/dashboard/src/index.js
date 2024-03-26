import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware, compose } from 'redux'; // Import compose from redux
import { Provider } from 'react-redux';
import { uiReducer } from './reducers/uiReducers';
import thunk from 'redux-thunk';

// Retrieve composeEnhancers from window object to enable Redux DevTools Extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create Redux store with uiReducer, applying thunk middleware and Redux DevTools Extension composeEnhancers
export const store = createStore(
  uiReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Render the application wrapped in React.StrictMode and Redux Provider
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
