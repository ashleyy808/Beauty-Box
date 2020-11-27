const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: String,
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
    brandName:  {
        type: String,
        unique: true,
        required: true,
    },
    description: String,
    reviews: [reviewSchema],
}, { timestamps: true });




// Export the result of compiling the schema into a model
module.exports = mongoose.model('Skincare', skincareSchema); 