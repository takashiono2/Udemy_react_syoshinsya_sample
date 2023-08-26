import { useParams } from 'react-router-dom';
import { getBook } from '../functions/book';

const BookDetail = () => {
  const params = useParams()

  const book = getBook(parseInt(params.id, 10))
  return (
    <div>
      id: {book.id}<br />
      title: {book.title}
    </div>
  )
}

export default BookDetail