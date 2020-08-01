require('./config/config')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');


//Parse application/x-www-form-urlended
app.use(bodyParser.urlencoded({ extended: false}));

// parse application/json
app.use(bodyParser.json());

//Habilitar la carpeta public
app.use(express.static( path.resolve( __dirname,'../public')));


/*Configuracion global de rutas */
app.use(require('./routes'));


mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, (err,res) => {
    if(err) throw err;

    console.log('Base de datos ONLINE!');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto: ${process.env.PORT}`);
});