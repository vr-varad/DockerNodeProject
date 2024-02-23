const express = require('express')
require('dotenv').config();

const app = express();

const port = process.env.port;

app.get('/home', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(port, () => {
    console.log('Server is running on port',port);
});