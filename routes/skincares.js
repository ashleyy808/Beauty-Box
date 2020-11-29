const express = require('express');
const router = express.Router();
const skincaresCtrl = require('../controllers/skincares');
const isAuthenticated = require('../utils/authorization');


router.get('/', isAuthenticated, skincaresCtrl.index);
router.get('/new', isAuthenticated, skincaresCtrl.new);
router.post('/', isAuthenticated,skincaresCtrl.create);
router.get('/:id', isAuthenticated, skincaresCtrl.show);
router.post('/:id/reviews', isAuthenticated, skincaresCtrl.addReview);
router.put('/:id/reviews', isAuthenticated, skincaresCtrl.updateReview);
router.delete('/:id/reviews', isAuthenticated, skincaresCtrl.deleteReview);



module.exports = router; 

