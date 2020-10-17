import expect from 'expect';

const testRemoveBook = () => {
  const booksBefore = [
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

  const booksAfter = [
    {
      id: 10,
      title: 'This book',
      category: 'Unkono',
    },
  ];

  const action = {
    id: 20,
    type: REMOVE_BOOK,
  };

  expect(removeBook(booksBefore, action.book)).toEqual(booksAfter);
  console.log('test removebook');
};

const testCreateBook = () => {
  const booksBefore = [
    {
      id: 10,
      title: 'This book',
      category: 'Unkono',
    },
  ];

  const booksAfter = [
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

  const action = {
    book: {
      id: 20,
      title: 'This other book',
      category: 'Unkono',
    },
    type: CREATE_BOOK,
  };

  console.log('test createbook');
  expect(createBook(booksBefore, action.book)).toEqual(booksAfter);
};

testCreateBook();
testRemoveBook();
console.log('...All test passed');