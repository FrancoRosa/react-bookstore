import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
import { actionRemove, actionFilter } from '../actions/index';

const BooksList = ({
  books,
  filter,
  removeBook,
  filterBooks,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = event => {
    const filter = event.target.value;
    filterBooks(filter);
  };

  const applyFilter = (books, filter) => {
    if (filter === 'All') return books;
    return books.filter(book => filter === book.category);
  };

  const visibleBooks = applyFilter(books, filter);

  return (
    <div>
      <CategoryFilter clickHandler={handleFilterChange} />
      <div className="card">
        <div className="details">
          <p className="category">History</p>
          <p className="title">Amazing best seller book</p>
          <p className="author">Unknown author</p>
          <p className="actions">
            <span>Comments</span><span>Remove</span><span>Edit</span>
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
          <button>UPDATE PROGRESS</button>
        </div>
      </div>
      <table>
        <tbody>
          {visibleBooks.map(book => (
            <Book key={book.id} book={book} clickHandler={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      category: PropTypes.string,
    }),
  ).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(actionRemove(book));
  },

  filterBooks: filter => {
    dispatch(actionFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);


