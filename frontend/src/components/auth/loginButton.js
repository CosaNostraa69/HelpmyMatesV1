
import React from 'react'; 
import { Button } from 'primereact/button';
import '../../styles/authButton/loginButton.css'

export default function LoginButton() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Login"
                className="loginButton"
                type="submit"
                value="Submit"
                
             />
        </div>
    )
}
        