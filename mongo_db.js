const express = require('express');
const app     = express();
const parser  = require('body-parser');

app.use(parser.urlencoded({ extended: false }));

app.get('/user', (req,res) => {
    // res.end('Data User');
    res.json(
        {
            id: '1',
            name: 'User Name',
            desc: 'User Desc',
        }
    );
});

app.post('/user', (req,res) => {
    let name = req.body.name;
    let desc = req.body.desc;
    res.end('Data user baru di tambahkan name: '+name+' desc: '+desc);
});

app.put('/user/:username', (req,res) => {
    let username = req.params.username;
    let name     = req.body.name;
    let desc     = req.body.desc;
    res.end('Data User '+username+' di update => name: '+name+' desc: '+desc);
});

app.delete('/user/:username', (req,res) => {
    let username = req.params.username;
    res.end('Data User '+username+' telah di hapus ! ');
});

app.listen('3000', (e) => {
    console.log('localhost port 3000');
});