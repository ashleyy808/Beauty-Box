const Skincare = require('../models/skincare'); 
const Consumer = require('../models/consumer');

module.exports= {
    index,
    show,
    //create
    
};


 // Function for user wanting to choose item by skincare
function index(req, res) {
    Skincare.find({}, function(err, skincares) {
      res.render('/skincares/index', { skincares, consumer: req.consumer });
    });
  };

  function show(req, res) {
    Skincare.findOne({_id: req.params.skincareId} , function (err, skincare) {
      if (err) return res.render('/show'); 
    })
  }

/*

 // Function for when user select skincare product
  function show (req,res) {
    Skincare.findById({ brandName: req.params.brandName }, function (err, skincares) {
      Consumer.find({ skincare: skincare._id}).populate('createdBy').exec(function(err, consumers) {
        console.log(skincare, consumers)
        res.render('skincares/show', { skincares, consumer: req.consumer});
      });
    });
  };
  



  function create(req,res) {
    req.body.createdBy = req.consumer._id;
   // if (req.body.createdBy) req.body.createdBy.replace(/\s*,\s*///g, ',');
   /*
    const skincare = new Skincare(req.body);
    skincare.save(function(err) {
      if(err) return res.render('/skincares/index');
      console.log(skincare);
      res.redirect('/skincares');
    });
  };
  
*/





 

 
  


