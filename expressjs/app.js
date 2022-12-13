const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('this always run');
    next();
});

app.use('/add-product', (req, res, next) => {
    console.log('in Middleware!');
    res.send('<h1>the Add-Product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('in another Middleware!');
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(3000);