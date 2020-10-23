import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => {
  const handleClick = (e, book) => clickHandler(book);

  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        <button
          type="button"
          onClick={e => handleClick(e, book)}
        >
          Remove Book
        </button>
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
