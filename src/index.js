import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './style.css';
import bookStore from './reducers/books';
const initialState = [
  {
    id: 10,
    title: 'This book',
    category: 'Unkono',
  },
  {
    id: 20,
    title: 'This other book',
    category: 'Unkono',
  },
];

const render = () => { 
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );
}

render();

