const pool = require('../config/dbConfig');

class ForumModel {
    async createForum(title, description, gameId, createdByUserId) {
        // Logique pour créer un nouveau forum
        try {
            const query = {
                text: `INSERT INTO "forum" (title, description, game_id, created_by_user_id) VALUES ($1, $2, $3, $4) RETURNING *`,
                values: [title, description, gameId, createdByUserId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getForumById(forumId) {
        // Logique pour récupérer un forum par son ID
        try {
            const query = {
                text: `SELECT * FROM "forum" WHERE id = $1`,
                values: [forumId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllForums() {
        // Logique pour récupérer tous les forums
        try {
            const query = {
                text: `SELECT * FROM "forum"`,
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateForumById(forumId, title, description, gameId, createdByUserId) {
        // Logique pour mettre à jour un forum par son ID
        try {
            const query = {
                text: `UPDATE "forum" SET title = $1, description = $2, game_id = $3, created_by_user_id = $4 WHERE id = $5 RETURNING *`,
                values: [title, description, gameId, createdByUserId, forumId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }

    }
    async deleteForumById(forumId) {
        // Logique pour supprimer un forum par son ID
        try {
            const query = {
                text: `DELETE FROM "forum" WHERE id = $1`,
                values: [forumId],
            };
            await pool.query(query);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = new ForumModel();
