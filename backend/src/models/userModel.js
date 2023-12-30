const pool = require('../config/dbConfig');

class UserModel {
    async createUser(username, email, passwordHash) {
        // Logique pour créer un utilisateur
        try {
            const query = {
                text: `INSERT INTO "user" (username, email, password) VALUES ($1, $2, $3) RETURNING *`,
                values: [username, email, passwordHash],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
        
    }

    async getUserById(userId) {
        // Logique pour récupérer un utilisateur par son ID
        try {
            const query = {
                text: `SELECT * FROM "user" WHERE id = $1`,
                values: [userId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const query = {
                text: `SELECT * FROM "user" WHERE email = $1`,
                values: [email],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateUserById(userId, username, email, passwordHash) {
        // Logique pour mettre à jour un utilisateur par son ID
        try {
            const query = {
                text: `UPDATE "user" SET username = $1, email = $2, password = $3 WHERE id = $4 RETURNING *`,
                values: [username, email, passwordHash, userId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = new UserModel();
