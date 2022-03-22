'use strict';

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('getting root');
});

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.post('/profile', (req, res) => {
    const user = {
        name: 'Sally',
        hobby: 'Soccer'
    }
    res.send(user);
});


const PORT = 5000;




app.listen(PORT, (req, res) => {
    console.log('Conecting to server on port:'+PORT);
});