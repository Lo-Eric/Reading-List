import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 

import '../stylesheets/splash.css';
import Book from './Book'

//Due to time contraints and feeling very sick from covid vaccine, the reading list feature has not been implemented and styling has not really been worked on. Will implement these features in the upcoming days.  

function Splash () {
  const [book, setBook] = useState("");
  const [booksList, setBooksList] = useState([]);
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
        // console.log(booksList)
      });
  }

    return (
      <div className="splash-main-div">
        <h1>Search for books</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            className="search-input" 
            placeholder = "Search for Books" 
            onChange={handleChange}
            autoComplete="off"
          />

          <button type="submit" className="btn-submit">
            Search
          </button>
        </form>

        <br/>
        {booksList.map((book, idx) => (
          <Book 
            key={idx}
            book = {book}
          />
        ))}
       
      </div>
    )
}

export default Splash;