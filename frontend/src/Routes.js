// Dans Routes.js
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';
import SignupPage from './pages/signupPage';
import LoginPage from './pages/loginPage';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
