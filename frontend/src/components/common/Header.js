import React from 'react';
import '../../styles/header.css';
import NavigationBar from './navigationBar'; 


function Header() {
    return (
        <header className="header">
            <NavigationBar />
            <div className="header-buttons">
            
            </div>
        </header>
    );
}

export default Header;
