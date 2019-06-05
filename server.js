const express = require('express');

const app = express();
app.use(express.json());
app.get('/api', (req, res) => {
    res.send('Hello, World');
})

const cartItems = require('./cartItems');
app.use('/', cartItems);

const port = 3003;

app.listen(port, () => console.log(`listening on port: http://localhost:${port}`));