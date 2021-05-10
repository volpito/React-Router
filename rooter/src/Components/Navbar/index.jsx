import React from 'react';
import { Link } from 'react-router-dom';
import books from '../../data/books';

const Navbar = () => {

  return (
    <nav>
      <ul>
      <li>    
        <Link to="/"> Home </Link>
      </li>
      <li>    
        <Link to="/About"> About </Link>
      </li>
      <li>    
        <Link to="/Documentation"> Documentation </Link>
      </li>
      {books.map((book, i) => {
        return (
            <li key={i}>    
              <Link to={"/book/" + book.slug}>{book.slug}</Link>
            </li>
        );
      })}
    </ul>
    </nav>
  )
}

export default Navbar; 