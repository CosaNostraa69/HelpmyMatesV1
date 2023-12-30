const pool = require('../config/dbConfig');

class GameModel {
    async createGame(title, description, genre, releaseDate, publisher, coverImage) {
        // Logique pour insérer un nouveau jeu
        try {
            const query = {
                text: `INSERT INTO "game" (title, description, genre, release_date, publisher, cover_image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                values: [title, description, genre, releaseDate, publisher, coverImage],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getGameById(gameId) {
        // Logique pour récupérer un jeu par son ID
        try {
            const query = {
                text: `SELECT * FROM "game" WHERE id = $1`,
                values: [gameId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllGames() {
        // Logique pour récupérer tous les jeux
        try {
            const query = {
                text: `SELECT * FROM "game"`,
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    
    async updateGameById(gameId, title, description, genre, releaseDate, publisher, coverImage) {
        // Logique pour mettre à jour un jeu par son ID
        try {
            const query = {
                text: `UPDATE "game" SET title = $1, description = $2, genre = $3, release_date = $4, publisher = $5, cover_image = $6 WHERE id = $7 RETURNING *`,
                values: [title, description, genre, releaseDate, publisher, coverImage, gameId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
}

    async deleteGameById(gameId) {
        // Logique pour supprimer un jeu par son ID
        try {
            const query = {
                text: `DELETE FROM "game" WHERE id = $1`,
                values: [gameId],
            };
            await pool.query(query);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    
}
module.exports = new GameModel();
