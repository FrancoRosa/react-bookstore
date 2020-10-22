export const CREATE_BOOK = 'CREATE_BOOK';
export const REMOVE_BOOK = 'REMOVE_BOOK';

export const actionRemove = book => (
  {
    book,
    type: REMOVE_BOOK,
  });

export const actionCreate = book => (
  {
    book,
    type: CREATE_BOOK,
  });
