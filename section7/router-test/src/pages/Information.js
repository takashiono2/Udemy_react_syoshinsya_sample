import { useNavigate } from 'react-router-dom';

const Information = () => {
  const navigate = useNavigate();

  const gotoContact = () =>{
    navigate('/contact');
  }

  return (
  <>
    <h2>
      Informationです。
    </h2>
    <button onClick={gotoContact}>お問合せページ</button>
  </>
  )
}

export default Information;