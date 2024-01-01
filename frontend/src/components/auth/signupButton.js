
import React from 'react'; 
import { Button } from 'primereact/button';
import '../../styles/authButton/signupButton.css'


export default function SignUpButton() {
    return (
        <div className="card flex justify-content-center">
            <Button label="Submit" 
                className="signupButton"
                type="submit"
                value="Submit"
            />
        </div>
    )
}
        