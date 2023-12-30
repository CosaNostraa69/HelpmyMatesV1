const express = require('express');
const router = express.Router();
const MessageModel = require('../models/messageModel');

// Envoyer un message
router.post('/messages', async (req, res) => {
    try{
        const message = new MessageModel(req.body);
        await message.save();
        res.status(201).send(message);
    }
    catch(error){
        console.log("Erreur lors de la création d'un message : ", error);
        res.status(500).end();
    }
});

// Lire un message
router.get('/messages/:id', async (req, res) => {
    try{
        const message = await MessageModel.findById(req.params.id);
        if(!message){
            return res.status(404).send();
        }
        res.send(message);
    }
    catch(e){
        console.log("Erreur lors de l'affichage d'un message :", e);
        res.status(500).end();
    }
});
// Afficher tous les messages
router.get('/messages', async (req, res) => {
    try{
        const messages = await MessageModel.find({});
        res.send(messages);
    }
    catch(e){
        console.log("Erreur lors de l'affichage des messages :", e);
        res.status(500).end();
    }
});
// Modifier un message
router.patch('/messages/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['content'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        const message = await MessageModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!message){
            return res.status(404).send();
        }
        res.send(message);
    }
    catch(e){
        console.log("Erreur lors de la modification d'un message :", e);
        res.status(500).end();
    }
});
// Supprimer un message
router.delete('/messages/:id', async (req,res)=>{
    try{
        const message = await MessageModel.findByIdAndDelete(req.params.id);
        if(!message){
            return res.status(404).send();
        }
        res.send(message);
    }
    catch(e){
        console.log("Erreur lors de la suppression d'un message :", e);
        res.status(500).end();
    }
});

module.exports = router;
