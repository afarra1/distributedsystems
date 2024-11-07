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
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register' || location.pathname === '/Login';
  const isDashboard = location.pathname === '/dashboard';
  const navigate = useNavigate(); // Initialize useNavigate
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  //Set supabase session with userID
  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session); // Set the session from Supabase
      setLoading(false); // Stop loading after fetching session
    };
    fetchSession();
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setSession(session);
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
        {/* {session && (
          <h3 style={{ position: 'absolute', top: '60px', left: '10px', zIndex: 1000 }}>
            User ID: {session.user.id}
          </h3>
        )} */}
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
