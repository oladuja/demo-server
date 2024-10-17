
const fs = require('fs');
const path = require('path');
const rootDir = require('../helpers/root_dir');

const p = path.join(rootDir(), 'data', 'products.json');

const getProducts = callback => {
    fs.readFile(p, (err, content) => {
        if (err) {
            return callback([]);
        }
        try {
            const products = JSON.parse(content);
            callback(products);
        } catch (err) {
            callback([]);
        }
    });
}

module.exports = class Product {
    constructor(productName, imageUrl, description, price) {
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        this.id = Math.random();
        getProducts((prods) => {
            prods.push(this);
            fs.writeFile(p, JSON.stringify(prods), (err) => { });
        });
    }

    static fetchAll(callback) {
        getProducts(callback);
    }

}