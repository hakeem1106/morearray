const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const router = express.Router();
const access = require('./routes/api/access');





mongoose.connect('mongodb+srv://hakeem1106:Autumn1106@testclust-w12h6.mongodb.net/UserName?retryWrites=true',{useNewUrlParser:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', ()=>{
    console.log("Connected");
});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


// Use routes

app.use('/api/access', access);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started on port ${port}'));



