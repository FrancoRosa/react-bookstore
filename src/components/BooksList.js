import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <div>
    <h2>BooksList</h2>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <Book key={book.id} book={book} />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(Book.propTypes).isRequired,
};

export default BooksList;
