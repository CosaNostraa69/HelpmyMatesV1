import React from 'react';
import "../../styles/navigationBar.css"
function NavigationBar() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/games">Games</a></li>
                <li><a href="/forums">Forums</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
