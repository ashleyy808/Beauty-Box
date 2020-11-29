const Skincare = require('../models/skincare'); 
//const Consumer = require('../models/consumer');

module.exports= {
    index,
    new: newSkincare,
    create,
    show,
    addReview,
    updateReview,
    deleteReview
};


 // Function for user wanting to choose item by skincare
 /*
function index(req, res) {
    Skincare.find({}, function(err, skincares) {
      res.render('skincares/index', { skincares, consumer: req.consumer });
    });
  };
  */

  function index(req,res) {
    Skincare.find({}).populate('reviewedBy').exec(function(err, skincares) {
      res.render('skincares/index', { skincares });
    });
  };

  function newSkincare(req, res) {
    res.render('skincares/new');
  }

  function create(req, res) {
    req.body.reviewedBy = req.user._id;
    Skincare.create(req.body, function(err, skincare) {
        res.redirect('/skincares');
    });
}
  
function show(req, res) {
  Skincare.findById(req.params.id).populate('reviewedBy').populate('reviews.reviewedBy').exec(function(err, skincare) {
    console.log(skincare)
    res.render('skincares/show', { skincare });
  })
}



  function addReview(req, res) {
    Skincare.findById(req.params.id, function(err, skincare) {
      req.body.reviewedBy = req.user._id;
      skincare.reviews.push(req.body);
      skincare.save(function(err) {
        res.redirect(`/skincares/${skincare._id}`);
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
  

/*

  function create(req,res) {
    req.body.createdBy = req.consumer._id;
   if (req.body.createdBy) req.body.createdBy.replace(/\s*,\s*///g, ',');
   /*
    const skincare = new Skincare(req.body);
    skincare.save(function(err) {
      if(err) return res.render('/skincares/index');
      console.log(skincare);
      res.redirect('/skincares/index');
    });
  };
  
  */







 

 
  


