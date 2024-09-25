import React from 'react'
import './Pages/stylesheets/navbar.css'
import { Link } from 'react-router-dom'
import Logo from './logo.svg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div id='LeftNav'>
                <Link>
                <img src={Logo}/>
                </Link>
            </div>
            <div id='RightNav'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/">Reserve a Session</Link>
                <Link to="/">Contact Us</Link>
            </div>
        </nav>
    )
}