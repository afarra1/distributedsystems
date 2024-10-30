import React from 'react'
import { Link } from 'react-router-dom'
import './Pages/stylesheets/DashNav.css'

export default function Dashboardnavbar() {
    return (
        <div className='DashNav'>
            <div className='upperdash'>
            <Link to="/" className='HosiptalLogo' id='HosiptalLogo'>
                Hosiptal <span className='color'>logo</span>
            </Link>
            </div>
        </div>
    )
}