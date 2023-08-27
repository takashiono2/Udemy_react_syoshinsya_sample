import { useParams } from 'react-router-dom';
import { getBook } from '../functions/book';

// 変数paramsとして、パラメータを取得したい
const BookDetail = () => {
  const params = useParams();
//変数bookとして、10進数のidに変換
  const book = getBook(parseInt(params.id,10));
  return (
    <div>
      id: {book.id}<br />
      title: {book.title}
    </div>
  )
}

export default BookDetail