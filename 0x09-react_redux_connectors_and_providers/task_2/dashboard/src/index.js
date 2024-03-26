import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App'; // Importing the root component of the application
import { createStore, applyMiddleware } from 'redux'; // Importing Redux functions for creating the store and applying middleware
import { Provider } from 'react-redux'; // Importing the Redux Provider component
import { uiReducer } from './reducers/uiReducers'; // Importing the UI reducer
import thunk from 'redux-thunk'; // Importing Redux Thunk middleware for handling asynchronous actions

// Create the Redux store with the UI reducer and apply middleware
export const store = createStore(uiReducer, applyMiddleware(thunk));

// Render the App component wrapped in the Redux Provider and with StrictMode enabled
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root') // Mounting point in the HTML document
);

