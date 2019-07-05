// Model 
// We will need our mongoose library
const mongoose = require('mongoose');

// Our schema
const PostSchema = new mongoose.Schema({
    comments: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', PostSchema);