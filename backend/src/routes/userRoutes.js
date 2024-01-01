const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');

// Route pour créer un utilisateur
router.post('/users', async (req, res) => {
    try{
        const user = new UserModel(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

// Route pour obtenir un utilisateur par ID
router.get('/users/:id', async (req, res) => {
    try{
        const user = await UserModel.findById(req.params.id);
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
// Route pour modifier les informations d'un utilisateur
router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update);
    });
    if(!isValidOperation){
        return res.status(400).send({error: 'Invalid updates!'});
    }
    try{
        const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});
// Route pour supprimer un utilisateur
router.delete('/users/:id', async (req,res)=>{
    try{
        const user = await UserModel.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});



module.exports = router;
