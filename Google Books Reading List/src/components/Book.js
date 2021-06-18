import React from 'react';
import '../stylesheets/splash.css';

class Book extends React.Component { //Did not utilize react hooks in this component to demonstrate knowledge of class components
  constructor(props) {
    super(props);
    this.state = { books:[] };
    // this.addBook = this.addBook.bind(this);
  }

  // addBook(e) {
  //   e.preventdefault;
  // }

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
        
        <form >
          <button type="submit">add to reading list</button>
        </form>
      </div>
  )
  }
}

export default Book;