import { createStore } from 'redux';

const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const removeBook = (books, book) => {
  return books.filter(stockbook => stockbook !== book);
};

const createBook = (books, book) => {
  return [...books, book];
};

const book = (state, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return createBook(state, action.book);
    case REMOVE_BOOK:
      return removeBook(state, action.id);
    default:
      return state;
  }
};

const bookStore = createStore(book);

export default bookStore;
