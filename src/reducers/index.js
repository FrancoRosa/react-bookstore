import { combineReducers, createStore } from 'redux';
import { books } from './books';

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

const rootReducer = combineReducers({
  books,
});

const store = createStore(rootReducer, initialState);

export default store;
