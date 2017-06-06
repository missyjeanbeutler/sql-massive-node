const app = require('./index');
const db = app.get('db');

module.exports = {
    create: function (req, res) {
        let params = [
            req.body.name,
            req.body.description,
            req.body.price,
            req.body.imageurl
        ]
        db.createProduct(params, function (err, newProduct) {
            if (!err) {
                res.send('You did it! Success!' + newProduct)
            }
        })
    },
    getOne: function (req, res) {
        db.readProduct(req.params.id, function (err, product) {
            if (!err) {
                res.send(product);
            }
        })
    },
    getAll: function (req, res) {
        db.readProducts(function (err, products) {
            if (!err) {
                res.send(products)
            }
        })
    },
    update: function (req, res) {
        db.updateProduct([req.params.id, req.body.description], function (err, updatedProduct) {
            if (!err) {
                res.send('Updated! Hurray!' + updatedProduct)
            }
        })
    },
    delete: function (req, res) {
        db.deleteProduct(req.params.id, function (err, deleted) {
            if (!err) {
                res.send("it's gone fo-ever foo!")
            }
        })
    }
}

