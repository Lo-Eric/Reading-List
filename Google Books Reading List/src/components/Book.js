import React from 'react';
import '../stylesheets/splash.css';

class Book extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { readingList:[] };
  }

  render() {
    let book = {
      title: this.props.book.volumeInfo.title,
      authors: this.props.book.volumeInfo.authors,
      publisher: this.props.book.volumeInfo.publisher,
    }

    return (
      <div className='book-main'>
        <ul>
          <li id='book-content'>
            {book.title}
            <br/>
            By {book.authors}
            <br/>
            Publisher: {book.publisher}
          </li>
        </ul>
        <form onSubmit={() => this.props.addBook(book)}>
          <button type="submit">add to reading list</button>
        </form>
      </div>
  )
  }
}

export default Book;