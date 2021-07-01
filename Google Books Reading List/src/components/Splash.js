import React, { useState } from 'react';
import axios from 'axios'; 

import '../stylesheets/splash.css';
import Modal from './Modal';
import Book from './Book';

function Splash () {
  const [book, setBook] = useState("");
  const [booksList, setBooksList] = useState([]);
  const [readingList, setReadingList] = useState([]);
  const [modal, setModal] = useState(false);
  const [apiKey, setAPIKey] = useState("AIzaSyDtWC2e41_BX704ZEXkYlppH1ilDLGo500")

  function handleChange(e) {
   const book = e.target.value;
   setBook(book);
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=5")
      .then(data => {
        setBooksList(data.data.items);
      });
  }

  function addBookToReadingList (book) {
    let prevList = readingList; 
    prevList.push(book);
    setReadingList(prevList);
  }
  
  return (
    <div className="splash-main-div">
      <div className="splash-main-contents">
        <h1>My Favorite Books</h1>

        <div className="input-and-btns">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search for Books" 
              onChange={handleChange}
              autoComplete="off"
            />
            <button type="submit" className="btn-submit">
              Search
            </button>
          </form>

          <button onClick={() => setModal(true)}>View Your Reading List</button>
          <Modal onClose={() => setModal(false)} show={modal} readingList={readingList}/>
        </div>
      </div>
      <br/>
      {booksList.map((book, idx) => (
        <Book 
          key={idx}
          book={book}
          addBook={addBookToReadingList}
        />
      ))}
    </div>
  )
}

export default Splash;