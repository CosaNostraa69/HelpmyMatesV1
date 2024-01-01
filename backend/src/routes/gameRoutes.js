const express = require('express');
const router = express.Router();
const GameModel = require('../models/gameModel');

// Route pour ajouter un jeu
router.post('/games', async (req, res) => {
    try{
        const game = new GameModel(req.body);
        await game.save();
        res.status(201).send(game);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

// Route pour obtenir les détails d'un jeu
router.get('/games/:id', async (req, res) => {
    try{
        const game = await GameModel.findById(req.params.id);
        if(!game){
            return res.status(404).send();
        }
        res.send(game);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
// Route pour modifier les détails d'un jeu
router.patch('/games/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'category'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        const game = await GameModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!game){
            return res.status(404).send();
        }
        res.send(game);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
// Route pour supprimer un jeu
router.delete('/games/:id', async (req,res)=>{
    try{
        const game = await GameModel.findByIdAndDelete(req.params.id);
        if(!game){
            return res.status(404).send();
        }
        res.send(game);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
);
// Route pour obtenir tous les jeux
router.get("/games", async (req, res) => {
    try {
        const games = await GameModel.find({});
        res.send(games);
    } catch (error) {
        console.log("Erreur lors de la récupération des jeux : ", error);
        res.status(500).end();
    }
}
);



module.exports = router;
