import React from 'react';
import BooksForm from './BooksForm';
import BooksList from './BooksList';

const booky = [
  { id: 1, title: 'me', category: 'Lalpuasd' },
  { id: 2, title: 'mm2e', category: 'Lalpuasdqwe' },
];

const App = () => (
  <div>
    <BooksForm />
    <BooksList books={booky} />
  </div>
);

export default App;
