const pool = require('../config/dbConfig');

class UserFriendModel {
    async createUserFriendship(user1Id, user2Id, status) {
        // Logique pour créer une nouvelle amitié
        try {
            const query = {
                text: `INSERT INTO "user_friend" (user1_id, user2_id, status) VALUES ($1, $2, $3) RETURNING *`,
                values: [user1Id, user2Id, status],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getUserFriendshipById(friendshipId) {
        // Logique pour récupérer une amitié par son ID
        try {
            const query = {
                text: `SELECT * FROM "user_friend" WHERE id = $1`,
                values: [friendshipId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateUserFriendStatus(userId, friendId, newStatus) {
        // Logique pour mettre à jour une amitié par son ID
        try {
            const query = {
                text: `UPDATE "user_friend" SET status = $1 WHERE user1_id = $2 AND user2_id = $3 RETURNING *`,
                values: [newStatus, userId, friendId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAllUserFriendships() {
        // Logique pour récupérer toutes les amitiés
        try {
            const query = {
                text: `SELECT * FROM "user_friend"`,
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getUserFriendshipByUserId(userId) {
        // Logique pour récupérer toutes les amitiés d'un utilisateur
        try {
            const query = {
                text: `SELECT * FROM "user_friend" WHERE user1_id = $1 OR user2_id = $1`,
                values: [userId],
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async deleteUserFriendshipById(friendshipId) {
        // Logique pour supprimer une amitié par son ID
        try {
            const query = {
                text: `DELETE FROM "user_friend" WHERE id = $1`,
                values: [friendshipId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    async deleteUserFriendshipByUserId(userId) {
        // Logique pour supprimer toutes les amitiés d'un utilisateur
        try {
            const query = {
                text: `DELETE FROM "user_friend" WHERE user1_id = $1 OR user2_id = $1`,
                values: [userId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
        }
    }

}

module.exports = new UserFriendModel();
