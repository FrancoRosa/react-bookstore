import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import CategoryFilter from './CategoryFilter';

const App = () => (
  <div>
    <BooksForm />
    <CategoryFilter />
    <BooksList />
  </div>
);

export default App;
