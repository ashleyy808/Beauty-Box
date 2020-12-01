const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consumerSchema = new Schema( {
    name: String,
    email: String,
    googleID: String,
    avatarURL: String,
});

module.exports = mongoose.model('Consumer', consumerSchema); 