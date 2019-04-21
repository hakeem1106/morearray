const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');




mongoose.connect('mongodb+srv://hakeem1106:Autumn1106@testclust-w12h6.mongodb.net/UserName?retryWrites=true',{useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=>{
    console.log("Connected");
});

let User = require('./models/user');

//app.get('/', function (req, res) {

//})

app.use( bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

app.post("/index", (req,res)=>{
    let user = new User(req.body);
    console.log(req.body)
    user.email = req.body.email;
    user.name = req.body.name;
    user.number = req.body.phone;
    res.send("saved")

    user.save((err)=>{
        console.log(err);
        return;
    })

    

})

app.listen(3000);