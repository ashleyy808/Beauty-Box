const Skincare = require("../models/skincare");
const Consumer = require('../models/consumer');


module.exports = {
    index
};



function index(req, res) {
    Skincare.find({}, function (err,skincares) {
        res.render('/', { skincares });
    });
};

/*
function index(req,res) {
    res.render('index');
}

*/

