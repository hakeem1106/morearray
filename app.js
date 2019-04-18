var express = require('express');
var app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://hakeem1106:Autumn1106@testclust-w12h6.mongodb.net/test?retryWrites=true',{useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=>{
    console.log("Connected");
});

const user = mongoose.Schema({
    email: String,
    name: String,
    phone: Number,
    new: Boolean
});

const Person = mongoose.model('User', user, 'Customer' );

const newUser = new Person({});

//app.get('/', function (req, res) {

//})

app.use( bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.post("/connect", (req,res)=>{

})

app.listen(3000);