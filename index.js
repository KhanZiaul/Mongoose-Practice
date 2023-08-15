const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()
const routes = require('./routes/routes')
const userRoutes = require('./routes/userHandler')
const app= express()

// middleware
app.use(express.json())
app.use(cors())

const port = process.env.PORT

mongoose.connect(process.env.MONGODB)
.then(()=>{
    console.log('Mongoose connected')
})
.catch((err)=>{
    console.log(err)
})


app.use('/todos',routes)
app.use('/users',userRoutes)

app.listen(port,()=>{
    console.log(`PORT is running in ${port}`)
})