import React, { useState } from 'react';
import './stylesheets/Login.css';
import Doctor1 from '../assets/doctors/doctor1.png';
import { useNavigate } from 'react-router-dom';
import InputField from './components/InputField';
import { createUser } from '../SupabaseFunctions';
import { supabase } from '../SupabaseClient';
// import { createUser } from '../SupabaseFunctions';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [occupation, setOccupation] = useState('');
  const [isDoctor, setIsDoctor] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
  
    // Sign up with Supabase
    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });
  
    console.log('Sign Up User:', user); // Check the response for user
    console.log('Sign Up Error:', error); // Check if there's any error
  
    if (error) {
      setError(error.message);
      return; // Exit if there's an error during sign-up
    }
  
    if (!user) {
      setError('User object is not defined.');
      return;
    }
  
    // If user is created, insert user-specific data
    try {
      const userData = {
        user_id: user.id,  // Ensure user.id is available
        first_name: firstName,
        last_name: lastName,
        dob,
        occupation,
      };
  
      const { data, insertError } = await supabase
        .from('Users')  // Use the correct table name
        .insert([userData]);
  
      console.log('Insert Data:', data);  // See if data is inserted
      console.log('Insert Error:', insertError);  // Check for errors
  
      if (insertError) {
        setError(insertError.message);
      } else {
        setSuccess('Registration successful! You can log in now.');
        navigate('/login');
      }
    } catch (err) {
      console.error('Error during insert:', err);
      setError('Error inserting user data.');
    }
  };
  
  



  return (
    <div id="Login">
      <div id="LoginWrapper">
        <div id="LoginLeft">
          <h3>Hospital <span>logo</span></h3>
          <img src={Doctor1} alt="Doctor" />
        </div>
        <div id="LoginRight">
          <h4>Sign up for an account</h4>
          <label className="rowinput">
            <input
              type="checkbox"
              checked={isDoctor}
              onChange={() => setIsDoctor(!isDoctor)}
            />
            Doctor
          </label>
          <form className="formLogin" onSubmit={handleSignup}>
            <div className="loginrightinputs">
              <div className="inputField">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>

              <div className="inputField">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>

              <div className="inputField">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="inputField">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="inputField">
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>

              <div className="inputField">
                <label>Occupation</label>
                <input
                  type="text"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
            </div>
            <button type="submit" className="submitright">Sign Up</button>
          </form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}
        </div>
      </div>
    </div>

  );
}
