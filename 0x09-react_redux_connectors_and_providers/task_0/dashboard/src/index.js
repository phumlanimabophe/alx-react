// Import necessary modules from React and Redux
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Import the UI reducer
import { uiReducer } from './reducers/uiReducers';

// Create the Redux store with the UI reducer
const store = createStore(uiReducer);

// Render the App component wrapped in the Redux Provider
ReactDOM.render(
  // StrictMode helps identify potential issues in the application
  <React.StrictMode>
    {/* Provider makes the Redux store available to the App component and its children */}
    <Provider store={store}>
      {/* App component is the root component of the application */}
      <App />
    </Provider>
  </React.StrictMode>,
  // App is rendered inside the DOM element with the id 'root'
  document.getElementById('root')
);
