const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const consumerSchema = new Schema( {
    name: String,
    email: String,
    googleID: String,
    reviewedSkincare: [{
        type: Schema.Types.ObjectId,
        ref: 'Skincare'
    }]
});

module.exports = mongoose.model('Consumer', consumerSchema); 