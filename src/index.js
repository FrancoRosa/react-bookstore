import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import { createStore } from 'redux';
import expect from 'expect';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const actionRemove = {
  book: {
    id: 20,
    title: 'This other book',
    category: 'Unkono',
  },
  type: REMOVE_BOOK,
};

const actionCreate = {
  book: {
    id: 20,
    title: 'This other book',
    category: 'Unkono',
  },
  type: CREATE_BOOK,
};
