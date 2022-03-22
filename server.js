'use strict';

const express = require('express');
const app = express();

// Leson 3: Postman Post, Put Delete
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Lesson 2: Middlewares

// app.use((req, res, next) => {
//     console.log('<h1>Hello</h1>');
//     next();
// });

// app.get ('/', (req, res) => {
//     res.send('test');
// });




// // Lesson 1
app.get('/', (req, res) => {
    res.send('getting root');
});

app.get('/profile', (req, res) => {
    res.send('getting profile');
});

app.post('/profile', (req, res) => {
    console.log(req.body);
    res.send('Success');
});


const PORT = 5000;

app.listen(PORT, (req, res) => {
    console.log('Conecting to server on port:'+PORT);
});