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
}
function edit(req, res) {
  Skincare.findById(req.params.id, function (err, skincare) {
    console.log(skincare)
    res.render('skincares/edit', { skincare });
  });
}
function update(req, res) {
  Skincare.findOneAndUpdate(req.params.id,req.body, function (err, skincare) {
    skincare.save(function (err, skincare) {})
    if (err) {
      console.log(err)
    } else {
      res.redirect('/skincares');
    }
  });
}

function deleteSkincare(req, res) {
  Skincare.findByIdAndDelete(req.params.id, function (err, skincare) {
      console.log(err)
      res.redirect('/skincares');
    });
  }