export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const actionRemove = book => (
  {
    book,
    type: REMOVE_BOOK,
  }
);

export const actionCreate = book => (
  {
    book,
    type: CREATE_BOOK,
  });

export const actionFilter = filter => (
  {
    filter,
    type: CHANGE_FILTER,
  });
