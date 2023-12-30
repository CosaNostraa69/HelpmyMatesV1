const pool = require('../config/dbConfig');

class MessageModel {
    async createMessage(senderId, receiverId, content) {
        // Logique pour envoyer un nouveau message
        try {
            const query = {
                text: `INSERT INTO "message" (sender_id, receiver_id, content) VALUES ($1, $2, $3) RETURNING *`,
                values: [senderId, receiverId, content],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getMessageById(messageId) {
        // Logique pour récupérer un message par son ID
        try {
            const query = {
                text: `SELECT * FROM "message" WHERE id = $1`,
                values: [messageId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getAllMessages() {
        // Logique pour récupérer tous les messages
        try {
            const query = {
                text: `SELECT * FROM "message"`,
            };
            const result = await pool.query(query);
            return result.rows;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async updateMessageById(messageId, senderId, receiverId, content) {
        // Logique pour mettre à jour un message par son ID
        try {
            const query = {
                text: `UPDATE "message" SET sender_id = $1, receiver_id = $2, content = $3 WHERE id = $4 RETURNING *`,
                values: [senderId, receiverId, content, messageId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        }
        catch (error) {
            console.log(error);
        }
    }
    

}

module.exports = new MessageModel();
