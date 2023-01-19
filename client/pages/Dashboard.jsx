/**
 * @module App.jsx
 * @description Top level of React App.
 */

import React from 'react';
import MainContainer from '../containers/mainContainer.jsx'
import HeaderContainer from '../containers/headerContainer.jsx'
import FooterContainer from '../containers/footerContainer.jsx'


const Dashboard = (props) => {

  const { user, setLoggedIn, loggedIn } = props;


  //fetch call to check ssid/session if user is logged in

  return (
    <div id = 'root-child'>

      <HeaderContainer user = {user} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn} />
      <MainContainer user = {user} setLoggedIn = {setLoggedIn} loggedIn = {loggedIn} />
      <FooterContainer />
    </div>
  );
};

export default Dashboard;