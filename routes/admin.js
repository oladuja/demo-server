const express = require('express');
const adminController = require('../controllers/admin');
const router = express.Router();


router.get('/add-product', adminController.addProduct);
router.get('/products', adminController.getProducts);

router.post('/add-product', adminController.postProduct);

exports.router = router;
