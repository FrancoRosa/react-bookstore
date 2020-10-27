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
      {visibleBooks.map(book => (
        <Book key={book.id} book={book} clickHandler={handleRemoveBook} />
      ))}
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


