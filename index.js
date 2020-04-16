const mongoose = require('mongoose');
require('./config/db');

const express = require('express');
const routes = require('./routes');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const path = require('path');

require('dotenv').config({ path: 'variables.env'});

// creando el servidor
const app = express();


// Habilitar bodyParser para leer el req body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Statics files
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection})
}));


app.use('/', routes());

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

// iniciar app
app.listen(port, host, () => {
    console.log('El servidor esta funcionando en el puerto:', port);
});