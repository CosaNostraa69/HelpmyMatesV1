// Header.js
import React from 'react';
import "../../components/common/navigationBar"
import NavigationBar from '../../components/common/navigationBar';
import "../../styles/header.css"

function Header() {

    return (
        <header className="header">
            <NavigationBar />
        </header>
    );
}

export default Header;
