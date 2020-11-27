const express = require('express');
const router = express.Router();
const consumersCtrl = require('../controllers/consumers');

router.get('/',consumersCtrl.show);

//router.post('/reviews', isLoggedIn, usersCtrl.addReview);

//router.delete('/reviews/:id', usersCtrl.delReview);
/*
function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}
*/
module.exports = router; 