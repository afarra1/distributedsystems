import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';

function App() {
  const location = useLocation();
  
  // Check if the current path is either /login or /register
  const hideNavbar = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="container">
      {/* Conditionally render the Navbar */}
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
