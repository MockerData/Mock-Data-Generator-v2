import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';


const HeaderContainer = (props) => { 
  const { user, setLoggedIn, loggedIn } = props;
    return (
      <header id='header'>
        <div className="header-text">
          {/* <h1>Mock Data Generator</h1> */}
          <img src='../styles/logos/mockerwhite.png' className='mocker-logo' alt="" />
          {/* <h3>Generate mock data for your database.</h3> */}
        </div>
        {loggedIn && <div className="welcome-message"><img id='profile-icon' src="../styles/logos/user.png" alt="" /></div>}
        {!loggedIn && <div className="header-buttons">
          <Link to="/login">
            <button className="header-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="header-button">Sign Up</button>
          </Link>
        </div>}
      </header>
    )
}

export default HeaderContainer;

