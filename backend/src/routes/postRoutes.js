const express = require('express');
const router = express.Router();
const PostModel = require('../models/postModel');

// Créer un post
router.post('/posts', async (req, res) => {
    // Logique pour créer un post
});

// Obtenir un post par ID
router.get('/posts/:id', async (req, res) => {
    // Logique pour obtenir un post
});

// Autres routes pour les posts (mise à jour, suppression, etc.)

module.exports = router;
