import React from 'react'
import './Pages/stylesheets/navbar.css'
import { Link } from 'react-router-dom'
import Logo from './logo.svg';

export default function Navbar() {
    return (
        <nav className="navbar">
            <div id='LeftNav'>
                <Link id='HosiptalLogo'>
                    Hosiptal <span className='color'>logo</span>
                </Link>
            </div>
            <div id='RightNav'>
                <Link to="/">Home</Link>
                <Link to="/">Services</Link>
                <Link to="/">Doctors</Link>
                <Link to="/about">About</Link>
                <Link to="/about">Contact us</Link>
            </div>
            <div id='signInNav'>
                <Link id='sign1' to="/">Sign in</Link>
                <Link id='sign2' to="/">Sign up</Link>
            </div>

        </nav>
    )
}