import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

const App = () => (
  <div>
    <BooksForm />
    <BooksList books={[]}/>
  </div>
);

export default App;
