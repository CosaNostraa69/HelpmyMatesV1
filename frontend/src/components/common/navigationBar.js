import React from 'react';
import "../../styles/navigationBar.css"
function NavigationBar() {
    return (
        <nav className="navigation">
            <ul>
                <li><a href="/">Accueil</a></li>
                <li><a href="/games">Jeux</a></li>
                <li><a href="/forums">Forums</a></li>
                <li><a href="/about">À Propos</a></li>
            </ul>
        </nav>
    );
}

export default NavigationBar;
