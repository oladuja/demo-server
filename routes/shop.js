const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.get('/', productsController.index);
router.get('/products', productsController.shop);
router.get('/products/:id', productsController.getProduct);
router.get('/cart', productsController.cart);
router.get('/checkout', productsController.checkout);

module.exports = router;