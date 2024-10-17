const  {logger}  = require('../helpers/logger');
const Product = require('../model/product');

exports.products = (req, res, next) => {
    res.redirect('/')
};

exports.shop = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/products', {
            prods: products, docTitle: 'All Products',
        });
    });
};

exports.getProduct = (req, res, next) => {
    console.log(req.params);
    res.send(req.params);
};

exports.index = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {
            prods: products, docTitle: 'Shop',
        });
    });
};

exports.cart = (req, res, next) => {
    res.render('shop/cart', {
        docTitle: 'Your Cart',
    });
};

exports.checkout = (req, res, next) => {
    res.render('shop/checkout', {
        docTitle: 'CheckOut',
    });
};