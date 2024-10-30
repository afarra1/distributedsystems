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
              <div className='logincenter'>
                <h4 style={{textAlign:'center'}}>Sign In</h4>
                <form className='formLogin'>
                  <h4 id='Signintext'>Email</h4>
                  <input type='email' placeholder='Enter Email'/>
                  <h4 id='Signintext'>Password</h4>
                  <input type='password' placeholder='Enter Password'/>
                  <button id='LoginButton'>Login</button>
                </form>
            </div>

              </div>
        </div>
    </div>
  )
}