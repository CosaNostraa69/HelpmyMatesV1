import React, { useState } from 'react';
import '../../styles/navigationBar.css';
import Logo from "../../images/logo.png"; 
import { Link } from 'react-router-dom';
import ProfileImage from '../../images/napoli.svg';
import { useAuth0 } from '@auth0/auth0-react'; // Importez useAuth0

function NavigationBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0(); // Utilisez useAuth0 pour gérer l'état d'authentification

    const toggleSidebar = () => setIsCollapsed(!isCollapsed);

    return (
        <nav className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="sidebar-top-wrapper">
                <div className="sidebar-top">
                    <Link to="/" className="logo__wrapper">
                        <img src={Logo} alt="Logo" className="logo-small" />
                        <span className="hide company-name">Help My Mates</span>
                    </Link>
                </div>
                <button className="expand-btn" onClick={toggleSidebar} type="button">

          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="exp-btn"
            role="img"
          >
            <title id="exp-btn">Expand/Collapse Menu</title>
            <path
              d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="search__wrapper">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="search-icon"
          role="img"
        >
          <title id="search-icon">Search</title>
          <path
            d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input type="text" aria-labelledby="search-icon" />
      </div>
      <div className="sidebar-links">
        <ul>
          <li>
            <Link to="/" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-home"
              >
                <path d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <path d="M9 22V12h6v10"></path>
              </svg>

              <span className={`hide ${isCollapsed ? "" : "show"}`}>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/games" className="tooltip__content ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-controller"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <path d="M6 12h4m-2 -2v4" />
                <line x1="15" y1="11" x2="15" y2="11.01" />
                <line x1="18" y1="13" x2="18" y2="13.01" />
              </svg>

              <span className={`hide ${isCollapsed ? "" : "show"}`}>Games</span>
            </Link>
          </li>
          <li>
            <Link to="/forums" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-messages"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 11.674a8 8 0 1 0 -10.628 9.33l.628 -2.24" />
                <path d="M17 7v4h4" />
              </svg>

              <span className={`hide ${isCollapsed ? "" : "show"}`}>
                Forums
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="tooltip">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-info-circle"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="9" />
                <line x1="12" y1="8" x2="12.01" y2="8" />
                <polyline points="11 12 12 12 12 16 13 16" />
              </svg>

              <span className={`hide ${isCollapsed ? "" : "show"}`}>About</span>
            </Link>
          </li>
          {/* Ajoutez d'autres liens ici selon vos besoins */}
        </ul>
      </div>
      {!isAuthenticated ? (
                <div className="auth-buttons">
                    <button onClick={() => loginWithRedirect()}>Connexion</button>
                    <button onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Inscription</button>
                </div>
            ) : (
                <div className="sidebar__profile">
                    <div className="avatar__wrapper">
                        <img src={ProfileImage} alt="Profile" className="avatar" />
                        <div className="online__status"></div>
                    </div>
                    <div className="avatar__name">
                        <div className="user-name">Joe Doe</div>
                        <div className="email">joe.doe@example.com</div>
                    </div>
                    <button onClick={() => logout({ returnTo: window.location.origin })} className="logout">
                        Déconnexion
                    </button>
                </div>
            )}
        </nav>
    );
}

export default NavigationBar;