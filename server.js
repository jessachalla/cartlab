const express = require('express'); //import express
const app = express(); //new instance of express
app.use(express.json()); //lets me use req, res example: req.body.example
// app.get('/api', (req, res) => {
//     res.send('Hello, World');
// })
const cartItems = require('./cartItems'); //use the routing in cartItems.js
app.use('/', cartItems); //anytime it sees '/' it uses cartItems.js

const port = 3003;

app.listen(port, () => console.log(`listening on port: http://localhost:${port}`)); //listening to anything that is coming in on port assigned