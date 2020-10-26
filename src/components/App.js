import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import BooksForm from '../containers/BooksForm';
import BooksList from '../containers/BooksList';
import NavBar from '../components/Navbar';
const App = () => (
  <div>
    <NavBar />
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
