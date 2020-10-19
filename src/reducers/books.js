import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const defaultState = [
  {
    id: 10,
    title: 'This book',
    category: 'Unkono',
  },
  {
    id: 20,
    title: 'This other book',
    category: 'Unkono',
  },
];

export const removeBook = (books, book) => (
  books.filter(stockbook => stockbook !== book)
);

export const createBook = (books, book) => ([...books, book]);

export const books = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return createBook(state, action.book);
    case REMOVE_BOOK:
      return removeBook(state, action.id);
    default:
      return state;
  }
};
