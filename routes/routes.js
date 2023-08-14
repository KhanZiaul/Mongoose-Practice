const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router()
const todoSchema = require('../models/models')
const Todo = new mongoose.model("Todo", todoSchema)

routes.get('/', async (req, res) => {
    try {
        const data = await Todo.find({ status: 'active' }).limit(2).select({ _id: 0, date: 0 })

        console.log(data)

        res.status(200).json({ message: "All todos get successfully", data });
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }

})

routes.get('/:id', async(req, res) => {
    try {
        const data = await Todo.find({ _id : req.params.id })

        console.log(data)

        res.status(200).json({ message: "Single todo get successfully", data });
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }

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
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { $set: { status: "inactive" } },
            { new: true } // This option returns the updated document
        );

        if (!updatedTodo) {
            return res.status(404).json({ error: "Todo not found" });
        }

        console.log(updatedTodo)

        res.status(200).json({ message: "Todo status updated successfully", updatedTodo });
    } catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }
});


routes.delete('/:id', async(req, res) => {
    try {
        const data = await Todo.deleteOne({ _id : req.params.id })


        res.status(200).json({ message: "Single todo delete successfully"});
    }
    catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }
})


module.exports = routes;