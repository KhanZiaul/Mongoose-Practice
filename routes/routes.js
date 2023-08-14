const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router()
const todoSchema = require('../models/models')
const Todo = new mongoose.model("Todo",todoSchema)

routes.get('/',(req,res) =>{
    
})

routes.get('/:id',(req,res) =>{
    
})

// routes.post('/',async(req,res) =>{
//     const newTodo = new Todo(req.body)
//     await newTodo.save((err)=>{
//         if(err){
//             res.status(400).json({err:"error found in server site"})
//         }
//         else{
//             res.status(201).json({err:"successfully added new todo in database"})
//         }
//     })
// })

routes.post('/', async (req, res) => {
    try {
        const newTodo = new Todo(req.body);
        await newTodo.save();
        res.status(201).json({ message: "Successfully added new todo to the database" });
    } catch (err) {
        res.status(400).json({ error: "Error occurred on the server side" });
    }
});

routes.post('/all',(req,res) =>{

})

routes.put('/:id',(req,res) =>{

})

routes.delete('/:id',(req,res) =>{

})


module.exports=routes;