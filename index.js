const express = require('express');
const app     = express();
const parser  = require('body-parser');

app.use(parser.urlencoded({ extended: false }));

app.get('/', (req,res) => {
    res.end('Node Rest API');
});

app.listen('3000', (e) => {
    console.log('localhost port 3000');
});