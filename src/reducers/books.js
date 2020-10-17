import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

export const removeBook = (books, book) => (
  books.filter(stockbook => stockbook !== book)
);

export const createBook = (books, book) => ([...books, book]);

export const books = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return createBook(state, action.book);
    case REMOVE_BOOK:
      return removeBook(state, action.id);
    default:
      return state;
  }
};
