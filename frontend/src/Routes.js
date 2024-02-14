// Routes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
import AboutPage from './pages/aboutPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* Autres routes... */}
    </Routes>
  );
}

export default AppRoutes;
