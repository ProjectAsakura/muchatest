const https = require('https');
const express = require('express');
const fs = require('fs');
const app = express();
const moment = require('moment');
const formUrlEncoded = require('form-urlencoded');

const PORT = 9002;

const URL_BASE = `http://localhost:${PORT}`

app.all('*', (req, res) => {
    console.log(`catch-all: ${req.method} ${req.originalUrl} ${req.body}`);
    res.status(200).end()
})

https.createServer(
    {
        key: fs.readFileSync('server-key.pem'),
        cert: fs.readFileSync('server-cert5.pem')
    },
    app
).listen(PORT, () => console.log(`listening ${PORT}`));