const express = require('express');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const router = express.Router();

// Route pour l'inscription d'un utilisateur
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await UserModel.createUser(username, email, password);
        res.status(201).json({ message: "Utilisateur créé avec succès", userId: newUser.user_id });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'utilisateur", error: error.message });
    }
});

// Route pour la connexion d'un utilisateur
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.getUserByEmail(email);
        if (user && await UserModel.verifyPassword(password, user.password_hash)) {
            const token = jwt.sign({ userId: user.user_id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
            res.json({ message: "Connexion réussie", token });
        } else {
            res.status(401).send('Identifiants invalides');
        }
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la connexion", error: error.message });
    }
});

module.exports = router;
