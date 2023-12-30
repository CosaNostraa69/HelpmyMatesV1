const express = require('express');
const router = express.Router();
const RewardModel = require('../models/rewardModel');

// Attribuer une récompense
router.post('/rewards', async (req, res) => {
    try{
        const reward = new RewardModel(req.body);
        await reward.save();
        res.status(201).send(reward);
    }
    catch(error){
        console.log("Erreur lors de la création d'une récompense : ", error);
        res.status(500).end();
    }
});

// Obtenir des informations sur une récompense
router.get('/rewards/:id', async (req, res) => {
    try{
        const reward = await RewardModel.findById(req.params.id);
        if(!reward){
            return res.status(404).send();
        }
        res.send(reward);
    }
    catch(error){
        console.log("Erreur lors de la récupération d'une récompense : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les récompenses
router.get('/rewards', async (req, res) => {
    try{
        const rewards = await RewardModel.find({});
        res.send(rewards);
    }
    catch(error){
        console.log("Erreur lors de la récupération des récompenses : ", error);
        res.status(500).end();
    }
});
// Modifier une récompense
router.patch('/rewards/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'category'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        const reward = await RewardModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!reward){
            return res.status(404).send();
        }
        res.send(reward);
    }
    catch(error){
        console.log("Erreur lors de la modification d'une récompense : ", error);
        res.status(500).end();
    }
});
// Supprimer une récompense
router.delete('/rewards/:id', async (req,res)=>{
    try{
        const reward = await RewardModel.findByIdAndDelete(req.params.id);
        if(!reward){
            return res.status(404).send();
        }
        res.send(reward);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
);
// Obtenir toutes les récompenses d'un utilisateur
router.get('/rewards/user/:id', async (req, res) => {
    try{
        const rewards = await RewardModel.find({user: req.params.id});
        res.send(rewards);
    }
    catch(error){
        console.log("Erreur lors de la récupération des récompenses d'un utilisateur : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les récompenses d'un jeu
router.get('/rewards/game/:id', async (req, res) => {
    try{
        const rewards = await RewardModel.find({game: req.params.id});
        res.send(rewards);
    }
    catch(error){
        console.log("Erreur lors de la récupération des récompenses d'un jeu : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les récompenses d'un forum
router.get('/rewards/forum/:id', async (req, res) => {
    try{
        const rewards = await RewardModel.find({forum: req.params.id});
        res.send(rewards);
    }
    catch(error){
        console.log("Erreur lors de la récupération des récompenses d'un forum : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les récompenses d'un post
router.get('/rewards/post/:id', async (req, res) => {
    try{
        const rewards = await RewardModel.find({post: req.params.id});
        res.send(rewards);
    }
    catch(error){
        console.log("Erreur lors de la récupération des récompenses d'un post : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les récompenses d'un message
router.get('/rewards/message/:id', async (req, res) => {
    try{
        const rewards = await RewardModel.find({message: req.params.id});
        res.send(rewards);
    }
    catch(error){
        console.log("Erreur lors de la récupération des récompenses d'un message : ", error);
        res.status(500).end();
    }
});

module.exports = router;
