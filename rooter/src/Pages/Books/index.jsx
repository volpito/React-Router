import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router';
import books from '../../data/books';



const Books = () => {
  const data = books;
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined)

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])
console.log(currentBook)

  return (
    <div id="main">

      {data.reduce((book, i) => {
        if (currentBook !== undefined ) {
        return (
          <div key={i} className="squares">
            <p>
              Author: <em>{currentBook.author}</em>
            </p>
            <p>
              Title: <strong>{currentBook.title}</strong>
            </p>
            <p>{currentBook.description}</p>
          </div>
        )};
      })}
    </div>
  )
}

export default Books;