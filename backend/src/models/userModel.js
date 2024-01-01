const pool = require('../config/dbConfig');
const bcrypt = require('bcrypt');

class UserModel {
    async createUser(username, email, password, profilePicture, bio, gamePreferences) {
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const query = {
                text: `INSERT INTO users (username, email, password_hash, profile_picture, bio, game_preferences) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
                values: [username, email, hashedPassword, profilePicture, bio, gamePreferences],
            };
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error creating user:', error);
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const query = {
                text: `SELECT * FROM users WHERE user_id = $1`,
                values: [userId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by ID:', error);
            throw error;
        }
    }

    async getUserByEmail(email) {
        try {
            const query = {
                text: `SELECT * FROM users WHERE email = $1`,
                values: [email],
            };
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error getting user by email:', error);
            throw error;
        }
    }

    async updateUserById(userId, username, email, password, profilePicture, bio, gamePreferences) {
        const hashedPassword = await bcrypt.hash(password, 10);
        try {
            const query = {
                text: `UPDATE users SET username = $1, email = $2, password_hash = $3, profile_picture = $4, bio = $5, game_preferences = $6 WHERE user_id = $7 RETURNING *`,
                values: [username, email, hashedPassword, profilePicture, bio, gamePreferences, userId],
            };
            const result = await pool.query(query);
            return result.rows[0];
        } catch (error) {
            console.error('Error updating user:', error);
            throw error;
        }
    }

    async verifyPassword(userPassword, hashedPassword) {
        return bcrypt.compare(userPassword, hashedPassword);
    }

}

module.exports = new UserModel();
