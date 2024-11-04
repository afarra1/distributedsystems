import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar.js';
import DashboardNavbar from './Dashboardnavbar.js';
import Footer from './Footer.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Login from './Pages/Login.js';
import Register from './Pages/Register.js';
import Dashboard from './Pages/Dashboard.js';
import { supabase } from './SupabaseClient.js';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Pages/components/ProtectedRoute.js';
import { AuthProvider } from './useHooks/AuthProvider.js';

function App() {

  const location = useLocation();

  // Simplify conditional rendering for Navbar
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isDashboard = location.pathname === '/dashboard';
  const navigate = useNavigate(); // Initialize useNavigate
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session); // Set the session from Supabase
      setLoading(false); // Stop loading after fetching session
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
      if (session) {
        
      } else {
        // navigate('/login'); // Redirect to login if logged out
      }
    });

    return () => {
    };
  }, [navigate]);

  // Show a loading indicator while fetching session data
  if (loading) {
    return <div>Loading...</div>;
  }


  return <>
  <AuthProvider>
    <div className={isDashboard ? "container" : 'containerNavbar'}>
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
  </AuthProvider>
  </>
}



export default App;
