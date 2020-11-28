const express = require('express');
const router = express.Router();
const skincaresCtrl = require('../controllers/skincares');
const isAuthenticated = require('../utils/authorization');


router.get('/', isAuthenticated, skincaresCtrl.index);

//router.get('/:id/brandName', isAuthenticated, skincaresCtrl.show);
//router.post('/', isAuthenticated,skincaresCtrl.create);
router.get('/:id', isAuthenticated, skincaresCtrl.show);









module.exports = router; 

