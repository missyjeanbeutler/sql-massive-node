
// CHECK THE OTHER BRANCH FOR HOW TO USE WITH DM-MASSIFIER!!


let express = require('express');
let massive = require('massive');
let bodyParser = require('body-parser');
let app = module.exports = express();
let port = 3000;

//------------

app.use(bodyParser.json());



massive({
    host: 'localhost',
    port: 5432,
    database: 'massive_demo',
    user: 'postgres',
    password: ''
}).then(db => {
    app.set('db', db) //allows you to set keys to the app object, the response is the database connection

})



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