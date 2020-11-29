const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    type: String,
    rating: {
        type: Number, 
        default: 5
}, 
    reviewedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Consumer'
    }
    }, { timestamps: true });


const skincareSchema = new Schema({
    skinType:  {
        type: String,
        enum: ['normal', 'dry', 'oily', 'combination']
    },
    brandName: {
        type: String,
    },  
    description: String,
    reviews: [reviewSchema],
    reviewedBy: {
        type: Schema.Types.ObjectId,
        ref: 'Consumer'
    }
}, { timestamps: true });




// Export the result of compiling the schema into a model
module.exports = mongoose.model('Skincare', skincareSchema); 