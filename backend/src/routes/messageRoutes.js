const express = require('express');
const router = express.Router();
const MessageModel = require('../models/messageModel');

// Envoyer un message
router.post('/messages', async (req, res) => {
    // Logique pour envoyer un message
});

// Lire un message
router.get('/messages/:id', async (req, res) => {
    // Logique pour lire un message
});

// Autres routes pour la gestion des messages

module.exports = router;
