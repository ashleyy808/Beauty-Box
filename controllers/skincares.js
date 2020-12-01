const Skincare = require('../models/skincare');
//const Consumer = require('../models/consumer');

module.exports = {
  index,
  new: newSkincare,
  create,
  //  show,
  delete: deleteSkincare,
  edit,
  update
};




function index(req, res) {
  Skincare.find({}, function (err, skincares) {
    res.render('skincares/index', {
      skincares
    });
  });
}



function newSkincare(req, res) {
  res.render('skincares/new');
}


function create(req, res) {
  console.log(req.body)
  const skincare = new Skincare(req.body)
  skincare.save(function (err, skincare) {
    if (err) {
      console.log(err)
    } else {
      res.redirect('/skincares');
    }
  })
  //req.body.done = false;
  //Skincare.create(req.body, function(err, skincare) {
  //  console.log(skincare)
  // res.redirect('/skincares');
  // }); 
}


/*
function show(req, res) {
  Skincare.findById(req.params.id, function(err, skincare) {
    res.render('skincares/show', { skincare });
  });
}
*/



function deleteSkincare(req, res) {
  Skincare.deleteOne(req.params.id);
  res.redirect('/skincares');
}


function edit(req, res, next) {
  res.render('skincare/edit', {
    skincareId: req.params.id
  });
}

function update(req, res) {
  Skincare.findOneAndUpdate({
    _id: req.params.id
  }, req.body, function (err, skincare) {
    skincare.brandName = req.body.brandName;
    skincare.save(function (err) {
      if (err) {
        console.log(err)
      } else {
        res.redirect('/skincares');
      }
    })
  })
};