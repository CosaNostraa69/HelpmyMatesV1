import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
// Importez d'autres composants et pages

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/login" component={LoginPage} />
                {/* Définissez d'autres routes ici */}
            </Switch>
        </Router>
    );
}

export default Routes;
