const express = require('express');
const router = express.Router();
const skincaresCtrl = require('../controllers/skincares');
const isAuthenticated = require('../utils/authorization');


router.get('/', isAuthenticated, skincaresCtrl.index);
router.get('/new', skincaresCtrl.new);
router.post('/',skincaresCtrl.create);
//router.get('/:id', skincaresCtrl.show);
router.delete('/:id', skincaresCtrl.delete);
router.get('/:id/edit', skincaresCtrl.edit);  
router.put('/:id', skincaresCtrl.update);





module.exports = router; 

