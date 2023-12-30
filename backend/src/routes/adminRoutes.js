const express = require('express');
const router = express.Router();
const authenticateToken = require('../middlewares/authenticateToken');
const requireAdmin = require('../middlewares/requireAdmin');

// Route accessible uniquement par l'admin
router.get('/admin-only', authenticateToken, requireAdmin, (req, res) => {
    res.send('Vous êtes admin !');
    });

module.exports = router;
