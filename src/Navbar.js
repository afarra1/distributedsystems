import React, { useContext } from 'react'
import './Pages/stylesheets/navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import Logo from './logo.svg';
import { AuthContext } from './useHooks/AuthProvider';
import { supabase } from './SupabaseClient';

export default function Navbar({}) {
    const navigate = useNavigate();
    const session = useContext(AuthContext); // Access session from context

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            navigate('/home');
        }
    };

    return (
        <nav className="navbar">
            <div id='LeftNav'>
                <Link to="/" className='HosiptalLogo'>
                    Hosiptal <span className='color'>logo</span>
                </Link>
            </div>
            <div id='RightNav'>
                <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Doctors</Link>
                <Link to="/about">About</Link>
                <Link to="/">Contact us</Link>
            </div>
            <div id='signInNav'>
                {session ? ( // Conditional rendering based on session
                    <button id='logout' onClick={handleLogout} style={{ backgroundColor: 'darkred', color:'white' }}>Logout</button>
                ) : (
                    <>
                        <Link id='sign1' to="/login">Sign in</Link>
                        <Link id='sign2' to="/register">Sign up</Link>
                    </>
                )}
            </div>
        </nav>
    )
    
}