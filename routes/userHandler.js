const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router()
const userSchema = require('../models/userSchema')
const User = new mongoose.model("User", userSchema)

routes.get('/', async (req, res) => {

})


module.exports = routes;