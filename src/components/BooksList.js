import React from 'react';

const Book = ({book}) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

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
        {books.map(book => (<Book key={book.id} book={book} />))}
      </tbody>
    </table>
  </div>
);

export default BooksList;
