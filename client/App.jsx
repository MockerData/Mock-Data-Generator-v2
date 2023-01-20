/**
 * @module App.jsx
 * @description Top level of React App.
 */
import {Route, Routes} from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Login from './pages/Login.jsx';
import SignUp from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';


const App = () => {
  const [user, setUser] = useState({username: 'test'});
  const [loggedIn, setLoggedIn] = useState(false);


  return (
    <div id = 'root-child'>
      <Routes>
        <Route path="/" element={<Dashboard setUser = {setUser} user = {user} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn} />} />
        <Route path="/login" element={<Login loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} setUser = {(user) => setUser(user)} />} />
        <Route path="/signup" element={<SignUp loggedIn = {loggedIn} setLoggedIn = {setLoggedIn} setUser = {(user) => setUser(user)} />} />
      </Routes>
    </div>
  );
};


export default App;


