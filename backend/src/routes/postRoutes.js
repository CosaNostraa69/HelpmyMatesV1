const express = require('express');
const router = express.Router();
const PostModel = require('../models/postModel');

// Créer un post
router.post('/posts', async (req, res) => {
    try{
        const post = new PostModel(req.body);
        await post.save();
        res.status(201).send(post);
    }
    catch(error){
        console.log("Erreur lors de la création d'un post : ", error);
        res.status(500).end();
    }
});

// Obtenir un post par ID
router.get('/posts/:id', async (req, res) => {
    try{
        const post = await PostModel.findById(req.params.id);
        if(!post){
            return res.status(404).send();
        }
        res.send(post);
    }
    catch(error){
        console.log("Erreur lors de la récupération d'un post : ", error);
        res.status(500).end();
    }
});
// Obtenir tous les posts
router.get('/posts', async (req, res) => {
    try{
        const posts = await PostModel.find({});
        res.send(posts);
    }
    catch(error){
        console.log("Erreur lors de la récupération des posts : ", error);
        res.status(500).end();
    }
});
// Modifier un post
router.patch('/posts/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['content'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        const post = await PostModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!post){
            return res.status(404).send();
        }
        res.send(post);
    }
    catch(error){
        console.log("Erreur lors de la modification d'un post : ", error);
        res.status(500).end();
    }
});
// Supprimer un post
router.delete('/posts/:id', async (req,res)=>{
    try{
        const post = await PostModel.findByIdAndDelete(req.params.id);
        if(!post){
            return res.status(404).send();
        }
        res.send(post);
    }
    catch(error){
        console.log("Erreur lors de la suppression d'un post : ", error);
        res.status(500).end();
    }
});

module.exports = router;
