const mongoose = require('mongoose');

// const todoSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: String,
//     status: {
//         type: String,
//         enum: ['active', 'inactive']
//     },
//     date: {
//         type: Date,
//         default: Date.now
//     }
// })


//  one to one relational database schema

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: String,
        enum: ['active', 'inactive']
    },
    date: {
        type: Date,
        default: Date.now
    },
    user:{
            type: mongoose.Types.ObjectId, 
            ref: 'User'
    }
})

// Instance methods

todoSchema.methods = {
    findActive:function() {
        return mongoose.model('Todo').find({ status:"active" });
    }
}

// Statics methods

todoSchema.statics = {
    findNewTodo:function() {
        return this.find({ title: /new/i });
    }
}

// Query Helpers methods

todoSchema.query = {
    byLanguage:function(language) {
        return this.find({ title: new RegExp(language,"i") });
    }
}

module.exports = todoSchema