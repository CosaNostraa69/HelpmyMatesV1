import React, { useState } from 'react';
import '../../styles/authForm/signupForm.css'; 
import authService from '../../services/authService';


function SignupForm() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        authService.register(formData.username, formData.email, formData.password)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nom d'utilisateur"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mot de passe"
                required
            />
            <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirmer le mot de passe"
                required
            />
            <button type="submit">S'inscrire</button>
        </form>
    );
}

export default SignupForm;
