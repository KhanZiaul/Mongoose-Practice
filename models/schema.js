const mongoose = require('mongoose');

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

module.exports = todoSchema