const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');

// Route pour créer un utilisateur
router.post('/users', async (req, res) => {
    // Logique pour créer un utilisateur
});

// Route pour obtenir un utilisateur par ID
router.get('/users/:id', async (req, res) => {
    // Logique pour obtenir un utilisateur
});


module.exports = router;
