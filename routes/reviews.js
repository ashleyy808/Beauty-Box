const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews'); 

// POST reviews and ratings
router.post('/:id/rating', reviewsCtrl.addRating);
router.post('/:id', reviewsCtrl.addReview);

// PUT reviews and ratings
router.put('/:id/rating', reviewsCtrl.updateRating);
router.put('/:id/update', reviewsCtrl.updateReview);


// DELETE reviews and ratings
router.delete('/:id/rating', reviewsCtrl.deleteRating);
router.delete('/:id', reviewsCtrl.deleteReview);

module.exports = router; 