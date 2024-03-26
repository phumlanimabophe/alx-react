// Importing necessary dependencies from libraries and files
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware, compose } from 'redux'; // Importing createStore, applyMiddleware, and compose from Redux
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Importing thunk middleware for async actions
import { rootReducer } from './reducers/rootReducer'; // Importing the root reducer

// Configuring Redux DevTools extension or falling back to Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Creating the Redux store with the root reducer and applying middleware
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Rendering the application with the Redux store wrapped in the Provider component
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
