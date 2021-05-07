const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true
    }, 
});

module.exports = mongoose.model('Users', userSchema);