'use strict';

const express = require('express');
const app = express();

// Leson 3: Postman Post, Put Delete
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// Lesson 4: RESTful APIs

// app.get('/:id', (req, res) => {
//     // console.log(req.query); //?name:eduardo&age:24 <- on the browser url
//     // req.body
//     // console.log(req.headers);
//     // console.log(req.params);
//     // res.send('getting root');
//     res.status(404).send('Not Found');
// });

// Use a static folder
app.use(express.static(`${__dirname}/public`));


const PORT = 5000;

app.listen(PORT, (req, res) => {
    console.log('Conecting to server on port:'+PORT);
});