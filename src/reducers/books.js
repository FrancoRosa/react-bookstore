import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';

const initialState = [
  {
    id: Math.random(),
    title: 'A Fiction Book',
    category: 'Sci-Fi',
  },
  {
    id: Math.random(),
    title: 'Some guy bio',
    category: 'Biography',
  },
  {
    id: Math.random(),
    title: 'Watch out, the return',
    category: 'Horror',
  },
];

export const removeBook = (books, book) => (
  books.filter(stockbook => stockbook !== book)
);

export const createBook = (books, book) => ([...books, book]);

export const books = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return createBook(state, action.book);
    case REMOVE_BOOK:
      return removeBook(state, action.id);
    default:
      return state;
  }
};
