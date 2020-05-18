const userRouter = require('express').Router();
const User = require('../models/user');

userRouter.get('/', async (req, res, next) => {
    try{
        const users = await User.find({}).exec();
        res.json(users);
    } catch(e){
        next(e);
    }
});

userRouter.post('/', async (req, res, next) => {
    try{
        const newUser = req.body;
        await User.create(newUser);
        res.sendStatus(201);
    } catch(e){
        next(e);
    }
});

userRouter.get('/:id', async (req, res, next) => {
    try{
        const userID = req.params.id;
        const user = await User.findOne({id: userID});
        res.json(user);
    } catch(e){
        next(e);
    }
});

userRouter.put('/:id', async (req, res, next) => {
    try{
        const updatedUserData = req.body;
        const userID = req.params.id;
        const user = await User.findOne({id: userID});
        if(!user){
            return res.sendStatus(404);
        }
        await User.findOneAndUpdate({id: userID}, updatedUserData);
        res.sendStatus(201);
    } catch(e){
        next(e);
    }
});

userRouter.delete('/:id', async (req, res, next) => {
    try{
        const userID = req.params.id;
        const user = await User.findOne({id: userID});
        if(!user){
            return res.sendStatus(404);
        }
        await User.findOneAndRemove({id: userID});
        res.sendStatus(204);
    } catch(e){
        next(e);
    }
});

module.exports = userRouter;