import React from 'react'; 
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import '../../styles/authButton/signupButton.css';

export default function SignUpButton() {
    const navigate = useNavigate();

    const handleSignUpClick = () => {
        navigate('/signup');
    };

    return (
        <div className="card flex justify-content-center">
            <Button 
                label="Register" 
                className="signupButton"
                onClick={handleSignUpClick}
            />
        </div>
    );
}
