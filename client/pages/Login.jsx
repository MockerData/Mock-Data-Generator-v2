import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

const Login = () => {

  // useState to update and track the input fields from the login page
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/login`, { username, password });
      console.log(response);
      if (response) navigate('/');
    } catch (err) {
      setError('Invalid Username/Password');
      console.log('err:', err)
    }
  };
  return (
    <div className='Login'>
      {/* display error message if error */}
      {/* useState to track the data in each input field */}
      <form className='login-form'
        onSubmit={handleLogin}
        >
          <h1 className='login-text'>Login</h1>
        <input
          placeholder="Username:"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          />
        <input
          type="password"
          placeholder="Password:"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <button>Login</button>
          <div className='error'>{error}</div>
      </form>
      <div className='login-additional'>
        <br/>
          Don't have an account? 
        <br/>
        <Link to="/signup">
          Sign up right here!
        </Link>
      </div>
    </div>
  );
};

export default Login;