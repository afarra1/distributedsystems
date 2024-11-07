import React, { useState } from 'react'
import './stylesheets/Login.css'
import Doctor1 from '../assets/doctors/doctor1.png';
import { supabase } from '../SupabaseClient.js';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null); // State to hold the user ID
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    setUserId(null); // Reset user ID on new login attempt

    // Use signInWithPassword to authenticate the user
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      setUserId(data.user.id); // Set user ID on successful login
      localStorage.setItem('supabaseToken', data.session.access_token); // Store token
      console.log('Login successful', data);
      navigate('/'); // Redirect to home page on successful login

    }
  };

  return (
    <div id='Login'>
      <div id='LoginWrapper'>
        <div id='LoginLeft'>
          <h3>Hosiptal <span>logo</span></h3>
          <img src={Doctor1} />
        </div>
        <div id='LoginRight'>
          <div className='logincenter'>
            <h4 style={{ textAlign: 'center' }}>Sign In</h4>
            <form className='formLogin' onSubmit={handleLogin}>
              <h4 id='Signintext'>Email</h4>
              <input type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required />
              <h4 id='Signintext'>Password</h4>
              <input type='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required />
              <button id='LoginButton'>Login</button>
            </form>
            {error && <p>{error}</p>}

          </div>

        </div>
      </div>
    </div>
  )
}