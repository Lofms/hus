var express = require('express');
const router = express.Router();
var app = express();
var path = require('path');




// viewed at http://localhost:8080

app.get('/api/items', (req, res) => {
    let jsonObj = require('./data/data.json');
    res.json(jsonObj);
});

app.use('/', express.static(path.join(__dirname, 'site')))
app.listen(8080);