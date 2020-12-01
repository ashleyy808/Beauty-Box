const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/mysa-beauty-box', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


db.on('connected', function () {
    console.log(`Mongoose connected to:${db.host}:${db.port}`);
});

db.on('error', function (error) {
    console.log(`Encountered an error: ${error.message}`);
});