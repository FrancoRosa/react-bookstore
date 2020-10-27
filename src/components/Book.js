import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => {
  const handleClick = (e, book) => clickHandler(book);

  return (
    <div className="card">
      <div className="details">
        <p className="category">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">Unknown author</p>
        <p className="actions">
          <button type="button">Comments</button>
          <button type="button" onClick={e => handleClick(e, book)}>Remove</button>
          <button type="button" className="no-border">Edit</button>
        </p>
      </div>
      <div className="progress">
        <div className="image" />
        <div className="text">
          <p className="number">0%</p>
          <p className="status">Unread</p>
        </div>
      </div>
      <div className="chapter">
        <p className="title">CURRENT CHAPTER</p>
        <p className="name">Chapter 1</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
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
