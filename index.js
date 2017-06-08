//EXAMPLE WITHOUT DM-MASSIFIER ON MASTER BRANCH

let express = require('express');
let massive = require('massive');
let bodyParser = require('body-parser');
let massifier = require('dm-massifier')('postgres://postgres:@localhost/massive_demo') //must be the connection string
let app = module.exports = express();
let port = 3000;

//------------

app.use(bodyParser.json());
app.use(massifier.middleware())


let controller = require('./productsCtrl.js'); //this MUST be below any db declarations


//-------------

app.get('/products', controller.getAll)
app.get('/products/:id', controller.getOne)
app.post('/products', controller.create)
app.put('/products/:id', controller.update)
app.delete('/products/:id', controller.delete)




app.listen(port, function(){
    console.log('listening on port ' + port);
})