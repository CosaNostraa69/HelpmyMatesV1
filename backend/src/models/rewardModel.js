const pool = require("../config/dbConfig");

class RewardModel {
  async createReward(userId, points, description) {
    // Logique pour attribuer une récompense
    try {
      const query = {
        text: `INSERT INTO "reward" (user_id, points, description) VALUES ($1, $2, $3) RETURNING *`,
        values: [userId, points, description],
      };
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getRewardById(rewardId) {
    // Logique pour récupérer une récompense par son ID
    try {
      const query = {
        text: `SELECT * FROM "reward" WHERE id = $1`,
        values: [rewardId],
      };
      const result = await pool.query(query);
      return result.rows[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllRewards() {
    // Logique pour récupérer toutes les récompenses
    try {
      const query = {
        text: `SELECT * FROM "reward"`,
      };
      const result = await pool.query(query);
      return result.rows;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
    async updateRewardById(rewardId, userId, points, description) {
        // Logique pour mettre à jour une récompense par son ID
        try {
        const query = {
            text: `UPDATE "reward" SET user_id = $1, points = $2, description = $3 WHERE id = $4 RETURNING *`,
            values: [userId, points, description, rewardId],
        };
        const result = await pool.query(query);
        return result.rows[0];
        } catch (error) {
        console.log(error);
        }
    }
}

module.exports = new RewardModel();
