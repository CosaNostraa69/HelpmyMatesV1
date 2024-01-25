import React, { useState } from 'react';
import '../../styles/navigationBar.css';
import Logo from "../../images/logo.png"; 
import { Link } from 'react-router-dom';
import ProfileImage from '../../images/napoli.svg'

function NavigationBar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

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
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="exp-btn" role="img">
        <title id="exp-btn">Expand/Collapse Menu</title>
        <path d="M6.00979 2.72L10.3565 7.06667C10.8698 7.58 10.8698 8.42 10.3565 8.93333L6.00979 13.28"
              strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
</button>

            </div>
            <div className="search__wrapper">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="search-icon" role="img">
        <title id="search-icon">Search</title>
        <path
          d="M9 9L13 13M5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333Z"
          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <input type="text" aria-labelledby="search-icon" />
    </div>
            <div className="sidebar-links">
                <ul>
                    <li>
                        <Link to="/" className="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width="24"
              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 4h6v8h-6z" />
              <path d="M4 16h6v4h-6z" />
              <path d="M14 12h6v8h-6z" />
              <path d="M14 4h6v4h-6z" />
            </svg>
                             <span className={`hide ${isCollapsed ? '' : 'show'}`}>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/games" className="tooltip__content ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-bar" width="24"
              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M9 8m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M15 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
              <path d="M4 20l14 0" />
            </svg>
            <span className={`hide ${isCollapsed ? '' : 'show'}`}>Games</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/forums" className="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chart-pie" width="24"
              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 3.2a9 9 0 1 0 10.8 10.8a1 1 0 0 0 -1 -1h-6.8a2 2 0 0 1 -2 -2v-7a.9 .9 0 0 0 -1 -.8" />
              <path d="M15 3.5a9 9 0 0 1 5.5 5.5h-4.5a1 1 0 0 1 -1 -1v-4.5" />
            </svg>
            <span className={`hide ${isCollapsed ? '' : 'show'}`}>Forums</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="tooltip">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-report-analytics" width="24"
              height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
              strokeLinejoin="round" aria-hidden="true">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
              <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M9 17v-5" />
              <path d="M12 17v-1" />
              <path d="M15 17v-3" />
            </svg>
            <span className={`hide ${isCollapsed ? '' : 'show'}`}>About</span>
                        </Link>
                    </li>
                    {/* Ajoutez d'autres liens ici selon vos besoins */}
                </ul>
            </div>
            <div className="sidebar__profile">
                <div className="avatar__wrapper">
                    {/* Image de profil */}
                    <img src={ProfileImage} alt="Profile" className="avatar" />
                    <div className="online__status"></div>
                </div>
                <div className="avatar__name">
                    {/* Nom et email de l'utilisateur */}
                    <div className="user-name">Joe Doe</div>
                    <div className="email">joe.doe@example.com</div>
                </div>
                <Link to="#logout" className="logout hide">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24"
          viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
          strokeLinejoin="round" aria-labelledby="logout-icon" role="img">
          <title id="logout-icon">log out</title>
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
          <path d="M9 12h12l-3 -3"></path>
          <path d="M18 15l3 -3"></path>
        </svg>                    
                </Link>
            </div>
        </nav>
    );
}

export default NavigationBar;
