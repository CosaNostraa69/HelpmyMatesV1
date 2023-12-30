const pool = require('../config/dbConfig');

class PostModel {
    async createPost(content, postedByUserId, forumId) {
        // Logique pour créer un nouveau post
        try {
            const query = {
                text: `INSERT INTO "post" (content, posted_by_user_id, forum_id) VALUES ($1, $2, $3) RETURNING *`,
                values: [content, postedByUserId, forumId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getPostById(postId) {
        // Logique pour récupérer un post par son ID
        try {
            const query = {
                text: `SELECT * FROM "post" WHERE id = $1`,
                values: [postId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllPosts() {
        // Logique pour récupérer tous les posts
        try {
            const query = {
                text: `SELECT * FROM "post"`,
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updatePostById(postId, content, postedByUserId, forumId) {
        // Logique pour mettre à jour un post par son ID
        try {
            const query = {
                text: `UPDATE "post" SET content = $1, posted_by_user_id = $2, forum_id = $3 WHERE id = $4 RETURNING *`,
                values: [content, postedByUserId, forumId, postId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }

    }
    async deletePostById(postId) {
        // Logique pour supprimer un post par son ID
        try {
            const query = {
                text: `DELETE FROM "post" WHERE id = $1`,
                values: [postId],
            };
            await pool.query(query);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

}

module.exports = new PostModel();
