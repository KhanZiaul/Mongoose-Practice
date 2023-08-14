const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router()
const todoSchema = require('../models/models')
const Todo = new mongoose.model("Todo", todoSchema)

routes.get('/', (req, res) => {

})

routes.get('/:id', (req, res) => {

})

routes.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json({ message: "Successfully added new todo to the database" });
    } catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }
});

routes.post('/all', async (req, res) => {

    try {
        await Todo.insertMany(req.body)
        res.status(201).json({ message: "Successfully added new todo to the database" });
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }
})

// routes.put('/:id', async (req, res) => {
//     try {
//         await Todo.updateOne({ _id: req.params.id }, {
//             $set: {
//                 status: "inactive"
//             }
//         })
//         res.status(201).json({ message: "Successfully added new todo to the database" });
//     }
//     catch (err) {
//         res.status(400).json({ error: "Error occurred on the server side" });
//     }
// })

routes.put('/:id', async (req, res) => {
    try {
        await Todo.updateOne({ _id: req.params.id }, {
            $set: {
                status: "inactive"
            }
        })
        res.status(201).json({ message: "Successfully added new todo to the database" });
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }
})

routes.delete('/:id', (req, res) => {

})


module.exports = routes;