module.exports = {

  create: function (req, res) {
    let params = [
      req.body.name,
      req.body.description,
      req.body.price,
      req.body.imageurl
    ]
    req.app.get('db').createProduct(params).then(function (newProduct) {
      res.send('You did it! Success!' + newProduct)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  getOne: function (req, res) {
    req.app.get('db').readProduct(req.params.id).then(function (product) {
      res.send(product);
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  getAll: function (req, res) {
    console.log(req.app.settings.db)
    req.app.get('db').readProducts().then(function (products) {
      res.send(products)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  update: function (req, res) {
    req.app.get('db').updateProduct([req.params.id, req.body.description]).then(function (updatedProduct) {
      res.send('Updated! Hurray!' + updatedProduct)
    }).catch(function (err) {
      res.status(500).send(err)
    })
  },
  delete: function (req, res) {
    req.app.get('db').deleteProduct(req.params.id).then(function (deleted) {
      res.send("it's gone fo-ever foo!")
    }).catch(function (err) {
      res.status(500).send(err)
    })
  }

}