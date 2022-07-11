const https = require('https');
const express = require('express');
const fs = require('fs');
const app = express();
const moment = require('moment');
const formUrlEncoded = require('form-urlencoded');
const bodyParser = require('body-parser');
app.use(bodyParser.raw({
    type: '*/*'
}))

const PORT = 9002;

const URL_BASE = `https://localhost:${PORT}`

app.all('*', (req, res) => {
    console.log(`catch-all: ${req.method} ${req.originalUrl}`);
    console.log(req.body.toString('hex'));
    console.log(req.body.toString('ascii'));
    res.status(200).end()
})

https.createServer(
    {
        key: fs.readFileSync('server_wangan.key'),
        cert: fs.readFileSync('server_wangan.crt')
    },
    app
).listen(PORT, () => console.log(`listening ${PORT}`));