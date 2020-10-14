import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => (
  <h1>Working React!</h1>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
