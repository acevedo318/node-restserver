require('./config/config')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');


//Parse application/x-www-form-urlended
app.use(bodyParser.urlencoded({ extended: false}));

// parse application/json
app.use(bodyParser.json());


/*Routas */
app.use(require('./routes/usuario'));


mongoose.connect(process.env.URLDB,{useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}, (err,res) => {
    if(err) throw err;

    console.log('Base de datos ONLINE!');
});

app.listen(process.env.PORT, () => {
    console.log(`Escuchando en puerto: ${process.env.PORT}`);
});