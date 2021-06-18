import { RECEIVE_BOOKS, REMOVE_BOOK, CLEAR_BOOKS } from '../actions/book_actions';

const _nullBook = {};

const booksReducer = (state = _nullBook, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKS: 
       return Object.assign({}, state, action.books)
    case REMOVE_BOOK:
      return state.filter(plans => plans === action.book);
    case CLEAR_BOOKS:
      return [];
    default:
      return state;
  }

}

export default booksReducer;