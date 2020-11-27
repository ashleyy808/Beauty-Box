const Skincare = require('../models/skincare');
const Consumer = require('../models/consumer');

module.exports = {
    addRating,
    addReview,   
    updateRating,
    updateReview,
    deleteRating,
    deleteReview   
};

function addRating(req, res) {
    Skincare.findById(req.params.id, function(err, skincare) {
        skincare.reviews.push(req.body);
        Consumer.findById(req.consumer, function(err, reviewer) {
            reviewer.reviewedSkincare.push(req.params.id);
            reviewer.save(function(err) {
                console.log(err)
            });
        });
        skincare.save(function(err) {
           res.redirect('/')
        });
    });
};

function addReview(req, res) {
    Skincare.findById(req.params.id, function(err, skincare) {
        for (review of skincare.reviews) {
            if (review.reviewBy.toString() === req.consumer.id.toString()) {
                review.content = req.body.content;
                break;
            }
ear        };
        skincare.save(function(err) {
            res.redirect('/');
        });
    });
};

function updateRating(req, res) {
    Skincare.findById(req.params.id, function(err, skincare) {
        for (review of skincare.reviews) {
            if (review.reviewBy.toString() === req.consumer.id.toString()) {
                review.rating = req.body.rating;
                break;
            };
        };
        skincare.save(function(err) {
            res.redirect('/');
        });
    });
};

function updateReview(req,res) {
    Skincare.findById(req.params.id, function(err, skincare) {
        for (review of skincare.reviews) {
            if (review.reviewedBy.toString() === req.consumer.id.toString()) {
                review.content = req.body.content;
                break;
            };
        };
        skincare.save(function(err) {
            res.redirect('/');
        });
    });
};


function deleteRating(req, res) {
    Skincare.findById(req.params.id, function(err, skincare) {
        for (i=0; i<skincare.reviews.length; i++) {
            if (skincare.reviews[i].reviewedBy.toString() === req.consumer.id.toString()) {
                skincare.reviews.splice(s, 1);
                break;
            };
        };
        Consumer.findById(req.consumer, function(err, reviwer) {
            for(i=0; i<reviwer.ratedSkincares.length; i++) {
                if( reviewer.ratedSkincares[i].toString() === req.params.id.toString()) {
                    reviewer.ratedSkincares.splice(s,1);
            };
        };
             reviewer.save(function(err) {
                 console.log(err) 
         });
     });
         skincare.save(function(err) {
            res.redirect('/');
         });

     });
};

function deleteReview(req, res) {
    Skincare.findById(req.params.id, function(err, skincare) {
        for (review of skincare.reviews) {
            if (review.reviewedBy.toString() === req.consumer.id.toString()) {
                review.content = "";
                break;
            };
        };
        skincare.save(function(err) {
            res.redirect('/');
        });
    });
};