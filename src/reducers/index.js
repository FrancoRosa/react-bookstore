import { combineReducers, createStore } from 'redux';
import { books } from './books';

const rootReducer = combineReducers({
  books,
});

const store = createStore(rootReducer);

console.log(store.getState());

export default store;
