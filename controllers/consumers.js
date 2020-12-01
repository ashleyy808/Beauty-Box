const Consumer = require('../models/consumer');

module.exports = {
    show
};

function show(req, res) {
    if (req.consumer) {
        Consumer.findById(req.consumer._id).populate('skincare').exec(function (err, consumer) {
            res.render('consumer', {
                consumer: req.consumer
            });
        })

    } else {
        res.render('consumer', {
            consumer: req.consumer
        })
    }
};