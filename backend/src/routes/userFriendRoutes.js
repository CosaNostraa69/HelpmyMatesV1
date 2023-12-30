const express = require('express');
const router = express.Router();
const UserFriendModel = require('../models/userFriendModel');

// Créer une demande d'ami
router.post('/friends', async (req, res) => {
    // Logique pour créer une demande d'ami
});

// Accepter ou refuser une demande d'ami
router.put('/friends/:id', async (req, res) => {
    // Logique pour répondre à une demande d'ami
});

// Autres routes pour la gestion des amitiés

module.exports = router;
