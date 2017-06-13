var express = require('express');
var router = express.Router();
var buyerController = require('../controllers/BuyerController');


router.get('/buyer', buyerController.findAllBuyer);
router.post('/buyer', buyerController.createNewBuyer);
router.get('/buyer/:Id', buyerController.findBuyerById);
router.put('/buyer/:Id', buyerController.updateBuyerById);
router.delete('/buyer/:Id', buyerController.deleteBuyerById);
router.delete('/buyer', buyerController.deleteAllBuyer);

module.exports = router;
