import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js'
import Home from './Pages/Home.js';
import About from './Pages/About.js';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
}

export default App;
