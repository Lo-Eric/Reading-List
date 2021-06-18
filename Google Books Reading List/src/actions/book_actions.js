export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const REMOVE_BOOK = 'REMOVE_BOOK';
export const CLEAR_BOOKS = 'CLEAR_BOOKS';

export const receiveBooks = books => ({
  type: RECEIVE_BOOKS,
  books
})

export const removeBook = book => ({
  type: REMOVE_BOOK,
  book
})

export const clearBooks = () => ({
  type: CLEAR_BOOKS,
})

