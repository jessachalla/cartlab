//routes
const express = require("express");

const cartItem = express.Router();
const cartData = require("./cartData");

// GET /cart‑items: returns a JSON array of all items
cartItem.get('/cart-items', (req, res) => {
    res.send(cartData)
    console.log(req.body);
});

cartItem.get('/cart-items/:id', (req, res) => {
    let arrayIndex = req.params.id;
    if (cartData[arrayIndex]) {
        res.send(cartData[arrayIndex]);
    } else {
        //something when wrong
        res.send('Not valid');
    }
});

//POST /cart‑items: for now, log the body to the console. 
//(later, this will add a new item to the list)
cartItem.post('/cart-items', (req, res) => {
    console.log(req.body);
    res.send("Adding..");
});

//PUT /cart‑items/_ID_: for now, log the _ID_ URL param and 
//the body to the console.
//(later, this will replace an item in the list)
cartItem.put('/cart-items', (req, res) => {
    console.log(req.param.id);
    console.log(req.body);
    res.send("Updating..");
});

//DELETE /cart‑items/_ID_: for now, log the _ID_ URL param 
//to the console.
//(later, this will delete an item from the list.)
cartItem.delete('/cart-items', (req, res) => {
    console.log(req.param.id);
    res.send("Deleting..");
});

module.exports = cartItem;