function requireAdmin(req, res, next) {
    if (!req.user || !req.user.isAdmin) {
        return res.sendStatus(403); // Accès refusé
    }
    next();
}

module.exports = requireAdmin;
