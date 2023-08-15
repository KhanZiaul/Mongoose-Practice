const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const routes = express.Router()
const userSchema = require('../models/userSchema')
const User = new mongoose.model("User", userSchema)

//  Signup

routes.post('/signup', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword
        })
        await newUser.save()
        res.status(200).json({ message: "User successfully added" });
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }

})

// Login

routes.post('/login', async (req, res) => {
    try {
        const user = await User.find({ username: req.body.username })
        if (user && user.length > 0) {
            const isValidPassword = await bcrypt.compare(req.body.password,user[0].password)
            if (isValidPassword) {
                
            }
            else {
                res.status(401).json({ error: "Authentication error" });
            }
        } else {
            res.status(401).json({ error: "Authentication error" });
        }
    }
    catch (err) {
        res.status(401).json({ error: "Authentication error" });
    }

})

module.exports = routes;