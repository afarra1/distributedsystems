import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import DashboardNavbar from './Dashboardnavbar.js';
import Footer from './Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Dashboard from './Pages/Dashboard.js';

function App() {
  const location = useLocation();

  // Simplify conditional rendering for Navbar
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isDashboard = location.pathname === '/dashboard';

  return <>
    <div className={ isDashboard ? "container" : 'containerNavbar'}>
      {/* Conditionally render Navbar or DashboardNavbar */}
      {!isAuthPage && !isDashboard && <Navbar />}
      {isDashboard && <DashboardNavbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      
      {/* Conditionally render Footer */}
    </div>
      {!isAuthPage && <Footer />}
  </>
}



export default App;
