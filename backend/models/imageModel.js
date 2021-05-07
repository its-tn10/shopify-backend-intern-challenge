const mongoose = require('mongoose');
const imageSchema = new mongoose.Schema({
    urlLocation: {
        type: String
    },
    isHidden: {
        type: Boolean,
        default: false,
        required: true
    }, 
    uploadDate: {
        type: Date,
        default: Date.now,
        required: true
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }
});

module.exports = mongoose.model('Images', imageSchema);