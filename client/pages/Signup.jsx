import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const SignUp = () => {


  // useState to update and track the input fields from the signup page
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // handle form submission 
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/signup', { username, password });
      console.log(response);
      if (response) navigate('/dashboard');
    } catch (err) {
      setError('Invalid Username/Password');
      console.log('err:', err);
    }
  };

  return (
    <div className='Signup'>
      {/* display error message if error */}
      {/* useState to track the data in each input field */}
        <form className='signup-form' onSubmit={handleSignUp}>
        <h1 className='signup-text'>Signup</h1>

          <input
            placeholder='Username:'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password:'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign Up</button>
          <div className='error'>{error}</div> 
        </form>
        <div className='signup-additional'>
          <br/>
            Have an account already? 
          <br/>
          <Link to="/login">
            Login right here!
          </Link>
      </div>
    </div>
  );
};

export default SignUp;