import React from 'react'
import './stylesheets/Login.css'
import Doctor1 from '../assets/doctors/doctor1.png';

export default function Login() {
  return (
    <div id='Login'>
        <div id='LoginWrapper'>
            <div id='LoginLeft'>
                <h3>Hosiptal <span>logo</span></h3>
                <img src= {Doctor1}/>
            </div>
            <div id='LoginRight'>
                <h4>Sign In</h4>
            </div>
        </div>
    </div>
  )
}