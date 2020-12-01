// Require our modules and set up our setting variables
const express = require('express');
const port = process.env.PORT || 3000;
const session = require('express-session');
const passport = require('passport');

// Require Our Routes
const indexRouter = require('./routes/index');
const skincaresRouter = require('./routes/skincares');
//const consumersRouter = require('./routes/consumers');

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
    saveUninitialized: false 
}));

// Create Passport Middleware 
app.use(passport.initialize());
app.use(passport.session());

// make req.user available everywhere:
app.use(function(req, res, next) {
    res.locals.consumer = req.consumer
    next();
});

// Mount Routes Here
app.use('/', indexRouter);
app.use('/skincares', skincaresRouter);  
//app.use('/consumers',consumersRouter)



// Tell the Application to Listen
app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
});
