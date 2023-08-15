const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const routes = express.Router()
const userSchema = require('../models/userSchema')
const User = new mongoose.model("User", userSchema)

routes.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password,10);
        const newUser = new User({
            name:req.body.name,
            username:req.body.username,
            password:hashedPassword
        })
        await newUser.save()
        res.status(200).json({ message: "User successfully added"});
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }

})


module.exports = routes;