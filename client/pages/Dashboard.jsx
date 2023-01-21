/**
 * @module App.jsx
 * @description Top level of React App.
 */

import React, { useEffect } from 'react';
import MainContainer from '../containers/mainContainer.jsx'
import HeaderContainer from '../containers/headerContainer.jsx'
import FooterContainer from '../containers/footerContainer.jsx'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Dashboard = (props) => {

  const { setUser, user, setLoggedIn, loggedIn } = props;
  const navigate = useNavigate();

  //fetch call to check ssid/session if user is logged in

  // useEffect(() => {
  //   axios.get('/api/verify', {
  //     method: 'GET',
  //     body: JSON.stringify({ssid: document.cookie})
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if (data) {
  //       setUser(data.username);
  //       setLoggedIn(true);
  //     }})
  //   .catch(err => {
  //     console.log('Error verifying session', err);
  //     navigate('/login');
  //   })
  // }, [])
      




  return (
    <div id = 'root-child'>
      <HeaderContainer user = {user} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn} />
      <MainContainer user = {user} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn} />
      <FooterContainer />
    </div>
  );
};

export default Dashboard;