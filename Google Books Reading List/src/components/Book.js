import React from 'react';
import '../stylesheets/splash.css';

//Did not utilize react hooks in this component to demonstrate knowledge of class components

class Book extends React.Component { 
  constructor(props) {
    super(props);
    this.state = { books:[] };
    this.addBook = this.addBook.bind(this);
  }

  addBook(e) {
    e.preventdefault;
    const newBook = {title: this.props.book.volumeInfo.title};
    this.setState((prevState) => {
      return {
        books: prevState.books.concat(newBook)
      }
    })
  }

  render() {
    return (
      <div className='book-main'>
        <ul>
          <li id='book-content'>
            {this.props.book.volumeInfo.title}
            <br/>
            By {this.props.book.volumeInfo.authors}
            <br/>
            Publisher: {this.props.book.volumeInfo.publisher}
          </li>
        </ul>
        
        <form onSubmit={this.addBook}>
          <button type="submit">add to reading list</button>
        </form>
      </div>
  )
  }
}

export default Book;