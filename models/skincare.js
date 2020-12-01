const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const skincareSchema = new Schema({
    skinType:  {
        type: String,
    },
    brandName: {
        type: String,
    },  
    description: String,
}, { timestamps: true });




// Export the result of compiling the schema into a model
module.exports = mongoose.model('Skincare', skincareSchema); 