const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'pug');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (res, req, next) => {
    console.log("Server works!");
    next();
})

mongoose
    .connect('mongodb://localhost:27017/credbox')
    .then(result => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });
