var express = require('express');
var router = express.Router();
var sellerController = require('../controllers/SellerController');


router.get('/seller', sellerController.findAllSeller);
router.post('/seller', sellerController.createNewSeller);
router.get('/seller/:Id', sellerController.findSellerById);
router.put('/seller/:Id', sellerController.updateSellerById);
router.delete('/seller/:Id', sellerController.deleteSellerById);
router.delete('/seller', sellerController.deleteAllSeller);

module.exports = router;
