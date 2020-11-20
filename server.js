// Require our modules and set up our setting variables
const express = require('express');
const port = process.env.PORT || 3000;
const session = require('express-session');
const passport = require('passport');

// Load the Env Vars 
require('dotenv').config(); 

// Create Middleware Path
const morgan = require('morgan');
const methodOverride = require('method-override');

// Create the Express App
const app = express();

// Connect to the MongoDB with Mongoose
require('./config/database');
require('./config/passport');

// Require Our Routes
const indexRoutes = require('./routes/index');

// View Engine Setup
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true 
}));

// Create Passport Middleware 
app.use(passport.initialize());
app.use(passport.session());

// Mount Routes Here
app.use('/', indexRouter);

// Tell the Application to Listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});
