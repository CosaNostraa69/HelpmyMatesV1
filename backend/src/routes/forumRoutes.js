const express = require('express');
const router = express.Router();
const ForumModel = require('../models/forumModel');

// Route pour créer un forum
router.post('/forums', async (req, res) => {
    try{
        const forum = new ForumModel(req.body);
        await forum.save();
        res.status(201).send(forum);
    }
    catch(error){
        console.log("Erreur lors de la création d'un forum : ", error);
        res.status(500).end();
    }
});

// Route pour obtenir un forum
router.get('/forums/:id', async (req, res) => {
    try{
        const forum = await ForumModel.findById(req.params.id);
        if(!forum){
            return res.status(404).send();
        }
        res.send(forum);
    }
    catch(error){
        console.log("Erreur lors de la récupération d'un forum : ", error);
        res.status(500).end();
    }
});

// Route pour obtenir tous les forums
router.get('/forums', async (req, res) => {
    try{
        const forums = await ForumModel.find({});
        res.send(forums);
    }
    catch(error){
        console.log("Erreur lors de la récupération des forums : ", error);
        res.status(500).end();
    }
});
// Route pour modifier un forum
router.patch('/forums/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'description', 'category'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        const forum = await ForumModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!forum){
            return res.status(404).send();
        }
        res.send(forum);
    }
    catch(error){
        console.log("Erreur lors de la modification d'un forum : ", error);
        res.status(500).end();
    }
});
// Route pour supprimer un forum
router.delete('/forums/:id', async (req, res) => {
    try{
        const forum = await ForumModel.findByIdAndDelete(req.params.id);
        if(!forum){
            return res.status(404).send();
        }
        res.send(forum);
    }
    catch(error){
        console.log("Erreur lors de la suppression d'un forum : ", error);
        res.status(500).end();
    }
});

module.exports = router;
