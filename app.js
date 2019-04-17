var express = require('express');
var app = express();
const bodyParser= require('body-parser');

//app.get('/', function (req, res) {

//})

app.use( bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.

app.listen(3000);