const express = require('express');
const router = express.Router();
const UserFriendModel = require('../models/userFriendModel');

// Créer une demande d'ami
router.post('/friends', async (req, res) => {
    try{
        const userFriend = new UserFriendModel(req.body);
        await userFriend.save();
        res.status(201).send(userFriend);
    }
    catch(error){
        console.log("Erreur lors de la création d'une nouvelle demande d'ami : ", error);
        res.status(500).end();
    }
});

// Accepter ou refuser une demande d'ami
router.put('/friends/:id', async (req, res) => {
    try{
        const userFriend = await UserFriendModel.findById(req.params.id);
        if(!userFriend){
            return res.status(404).send();
        }
        userFriend.status = req.body.status;
        await userFriend.save();
        res.send(userFriend);
    }
    catch(error){
        console.log("Erreur lors de la modification d'une demande d'ami : ", error);
        res.status(500).end();
    }
});

// Obtenir une demande d'ami par ID
router.get('/friends/:id', async (req, res) => {
    try{
        const userFriend = await UserFriendModel.findById(req.params.id);
        if(!userFriend){
            return res.status(404).send();
        }
        res.send(userFriend);
    }
    catch(error){
        console.log("Erreur lors de la récupération d'une demande d'ami : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les demandes d'ami
router.get('/friends', async (req, res) => {
    try{
        const userFriends = await UserFriendModel.find({});
        res.send(userFriends);
    }
    catch(error){
        console.log("Erreur lors de la récupération des demandes d'ami : ", error);
        res.status(500).end();
    }
});
// Supprimer une demande d'ami
router.delete('/friends/:id', async (req, res) => {
    try{
        const userFriend = await UserFriendModel.findByIdAndDelete(req.params.id);
        if(!userFriend){
            return res.status(404).send();
        }
        res.send(userFriend);
    }
    catch(error){
        console.log("Erreur lors de la suppression d'une demande d'ami : ", error);
        res.status(500).end();
    }
});
// Obtenir toutes les demandes d'ami d'un utilisateur
router.get('/friends/user/:id', async (req, res) => {
    try{
        const userFriends = await UserFriendModel.find({user: req.params.id});
        res.send(userFriends);
    }
    catch(error){
        console.log("Erreur lors de la récupération des demandes d'ami d'un utilisateur : ", error);
        res.status(500).end();
    }
});

module.exports = router;
