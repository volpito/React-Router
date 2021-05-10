import React from 'react';
import { Link } from 'react-router-dom';
import books from '../../data/books';

const Navbar = () => {

  const [book, setBook] = useState(undefined)
  setBook(books.map(a => a))

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
      <li>    
      <Link to="/book"> Books </Link>
      </li>
      <li>    
      <Link to="/book"> Books </Link>
      </li>
      <li>    
      <Link to="/book"> Books </Link>
      </li>
    </ul>
    </nav>
  )
}

export default Navbar; 