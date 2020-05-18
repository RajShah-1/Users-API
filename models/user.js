const mongoose = require('mongoose');

// Schema Setup
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true,
    },
    name: String,
    Info: Object
});

// Compile the mongoose model
const User = mongoose.model('User', userSchema);

module.exports = User;