import React from 'react';
import books from '../../data/books';

const Books = () => {
  const book = books.map(a => a)
  const { bookSlug } = useParams();
  const [currentBook, setCurrentBook] = useState(undefined)

  useEffect(() => {
    const foundBook = books.find((book) => book.slug === bookSlug);
    setCurrentBook(foundBook);
  }, [bookSlug])
  return (
    <h1>{currentBook}</h1>
  )
}

export default Books;