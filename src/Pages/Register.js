import React from 'react'
import './stylesheets/Login.css'
import Doctor1 from '../assets/doctors/doctor1.png';

export default function Register() {
  return (
    <div id='Login'>
        <div id='LoginWrapper'>
            <div id='LoginLeft'>
                <h3>Hosiptal <span>logo</span></h3>
                <img src= {Doctor1}/>
            </div>
            <div id='LoginRight'>
                <h4>Sign up For account</h4>
                <label className='rowinput'>
                <input type='checkbox'/>
                  Doctor
                </label>
                <form className='formLogin'>
                <div className='loginrightinputs'>
                <label>
                  Name
                <input type='text' className='inputfield'/>
                </label>
                
                <label>
                  Email
                <input type='text' className='inputfield'/>
                </label>
 
                <label>
                  Password
                <input type='password' className='inputfield'/>
                </label>

                </div>
            <button className='submitright'>Sign Up</button>
                </form>
            </div>
        </div>
    </div>
  )
}