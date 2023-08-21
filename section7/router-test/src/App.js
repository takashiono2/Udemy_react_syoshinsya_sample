import Home from './pages/Home'
import Information from './pages/Information'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/information">Information</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
