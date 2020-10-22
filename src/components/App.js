import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';

const App = () => (
  <div>
    <BooksForm />
    <BooksList />
  </div>
);

export default App;
