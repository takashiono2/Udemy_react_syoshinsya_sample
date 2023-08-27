import { getBooks } from '../functions/book';
import { Link } from 'react-router-dom';

const BookIndex = () => {
  // オブジェクトを取得
  const books = getBooks();
  // book-list/idとしたい
  return (
    <div>
      <ul>
        { books.map( book => (
          <li key={book.id}>
            <Link to={`/book-list/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookIndex