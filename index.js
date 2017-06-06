let express = require('express');
let massive = require('massive');
let bodyParser = require('body-parser');
let app = module.exports = express();
let port = 3000;

//------------

app.use(bodyParser.json());

//------------------- OLD STUFF

// let db = massive.connectSync({
//     connectionString: 'postgres://postgres:@localhost/massive_demo'
// })
// app.set('db', db); //.set makes it excessible outside of this file so I can use .get and get db elsewhere

//------------------- NEW STUFF

massive({
    host: 'localhost',
    port: 5432,
    database: 'massive_demo',
    user: 'postgres',
    password: ''
}).then(db => {
    app.set('db', db)
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