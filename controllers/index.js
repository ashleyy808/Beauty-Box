//const Skincare = require("../models/skincare");
//const Consumer = require('../models/consumer');
const { model } = require("mongoose"); 

module.exports = {
    index
};

function index(req, res) {
    Skincare.find({}, function (err,skincares) {
        res.render('index', { skincares });
    });
};

/*
function index(req,res) {
    res.render('index');
}

*/