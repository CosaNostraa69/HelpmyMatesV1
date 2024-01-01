const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    // Récupérer le token d'authentification de l'en-tête de la requête
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Vérifier si l'en-tête d'autorisation est présent
    if (!authHeader) {
        return res.status(401).json({ error: 'Aucun token fourni' });
    }

    // Vérifier si le token est présent
    if (token == null) {
        return res.status(401).json({ error: 'Token manquant dans l’en-tête d’autorisation' });
    }

    // Vérifier le token
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        // Si le token est invalide ou expiré, renvoyer une erreur 403 (Interdit)
        if (err) {
            const message = err.name === 'JsonWebTokenError' ? 'Token invalide' : 'Token expiré';
            return res.status(403).json({ error: message });
        }

        // Ajouter les données de l'utilisateur à l'objet request pour les utiliser dans les routes suivantes
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
