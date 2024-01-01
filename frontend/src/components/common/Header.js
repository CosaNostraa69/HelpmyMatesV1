import React from 'react';
import '../../styles/header.css';
import Logo from "../../images/logo.png";

function Header() {
    return (
        <header className="header">
            <img src={Logo} alt="Help My Mates's Logo" className="header-logo" />
        </header>
    );
}

export default Header;
