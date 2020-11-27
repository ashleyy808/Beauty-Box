const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexCtrl = require('../controllers/index'); 

// Define Routes
/*
router.get('/', function(req,res,next) {
    res.render('index');
});
*/

router.get('/', indexCtrl.index);

//Google OAuth
router.get('/auth/google', passport.authenticate (
    'google', {
        scope: ['profile', 'email']
    }
));

router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/skincares',
    failureRedirect: '/'    
}));

router.get('/logout', function(req,res) {
    req.logOut();
    res.redirect('/');
});





// Export the Router Object
module.exports = router; 