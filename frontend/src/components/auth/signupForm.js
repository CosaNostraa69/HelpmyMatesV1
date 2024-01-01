import React, { useState } from 'react';
import '../../styles/authForm/signupForm.css'; 

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
        if (formData.password === formData.confirmPassword) {
            console.log('Mot de passe identique');
        }
        else {
            console.log('Mot de passe différent');
        }
        
        console.log(formData);
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit}>
            <h2>Inscription</h2>
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
