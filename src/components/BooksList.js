import React from 'react';

const BooksList = (books) => {
  const tableContent = books.map(book => {(
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
    </tr>
    );
  });

  return (
    <div>
      <h2>BooksList</h2>
      <table>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
        {tableContent}
      </table>
    </div>
  );
};

export default BooksList;
