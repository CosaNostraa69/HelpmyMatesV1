import React from 'react';
import '../../styles/header.css';
import Logo from "../../images/logo.png";
import NavigationBar from './navigationBar'; 
import LoginButton from '../auth/loginButton';
import SignUpButton from '../auth/signupButton';

function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={Logo} alt="Help My Mates's Logo" />
            </div>
            <NavigationBar />
            <div className="header-buttons">
                <LoginButton/>
               <SignUpButton/>
            </div>
        </header>
    );
}

export default Header;
