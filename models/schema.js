const mongoose = require('mongoose');

const baseballSchema = new mongoose.Schema({
    img: {
        type: String,
        required: true

    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Baseball = mongoose.model('Baseball', baseballSchema);

module.exports = Baseball;