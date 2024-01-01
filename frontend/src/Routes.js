// Dans Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignupPage from './pages/signupPage';
import LoginPage from './pages/loginPage';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage />} />
                {/* Autres routes */}
            </Routes>
        </Router>
    );
}

export default AppRoutes;
