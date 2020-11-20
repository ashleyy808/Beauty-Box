const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/beauty-box', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}); 

const db = mongoose.connection;
db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});

db.on('error', function(error) {
    console.log(`Encountered an error: ${error.message}`);
});