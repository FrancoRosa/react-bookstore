import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import rootReducer from './reducers/index';
import './style.css';

const initialState = {
  books: [
    {
      id: Math.random(),
      title: 'A Fiction Book',
      category: 'Sci-Fi',
    },
    {
      id: Math.random(),
      title: 'Some guy bio',
      category: 'Biography',
    },
    {
      id: Math.random(),
      title: 'Watch out, the return',
      category: 'Horror',
    },
  ],
  filter: 'All',
};

const store = createStore(
  rootReducer,
  initialState,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

export default initialState;
