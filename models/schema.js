const mongoose = require('mongoose');

const bBallSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Baseball = mongoose.model('Baseball', bBallSchema);

module.exports = Baseball;