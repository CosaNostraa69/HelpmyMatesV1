// Dans LoginButton.js
import React from 'react';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../../styles/authButton/loginButton.css';

export default function LoginButton() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div className="card flex justify-content-center">
            <Button 
                label="Login"
                className="loginButton"
                onClick={handleLoginClick}
            />
        </div>
    );
}
