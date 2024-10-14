const Product = require('../model/product');
exports.addProduct = (req, res, next) => {
    res.render('admin/add_product', { docTitle: 'Add Product', url_path: 'add-product' });
};

exports.postProduct = (req, res, next) => {
    const { productName, imageUrl, description, price } = req.body;
    const product = new Product(productName, imageUrl, description, price)
    product.save();
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('admin/product_list', {
            prods: products, docTitle: 'Admin Products',
        });
    });
};