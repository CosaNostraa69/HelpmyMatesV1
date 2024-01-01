import React, { useState } from 'react';
import authService from '../../services/authService'; // Assurez-vous que ce chemin est correct

function LoginForm({ history }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await authService.login(email, password);
            // Connexion réussie
            console.log('Connexion réussie:', response);

            // Redirection vers la page d'accueil ou une autre page
            history.push('/');
        } catch (err) {
            if (err.response && err.response.data) {
                setError(err.response.data.message);
            } else {
                setError('Erreur de connexion');
            }
        }
    };

    return (
        <div className="login-form">
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                {error && <div className="error-message">{error}</div>}
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}

export default LoginForm;
