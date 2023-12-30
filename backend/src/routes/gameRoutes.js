const express = require('express');
const router = express.Router();
const GameModel = require('../models/gameModel');

// Route pour ajouter un jeu
router.post('/games', async (req, res) => {
    // Logique pour ajouter un jeu
});

// Route pour obtenir les détails d'un jeu
router.get('/games/:id', async (req, res) => {
    // Logique pour obtenir un jeu
});


module.exports = router;
