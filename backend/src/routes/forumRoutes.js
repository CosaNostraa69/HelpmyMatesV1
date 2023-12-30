const express = require('express');
const router = express.Router();
const ForumModel = require('../models/forumModel');

// Route pour créer un forum
router.post('/forums', async (req, res) => {
    // Logique pour créer un forum
});

// Route pour obtenir un forum
router.get('/forums/:id', async (req, res) => {
    // Logique pour obtenir un forum
});

// Ajoutez d'autres routes nécessaires

module.exports = router;
