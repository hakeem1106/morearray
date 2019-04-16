const mongoose = require('mongoose');

const url = 'mongodb+srv://hakeem1106:Megan1106@@testclust-w12h6.mongodb.net/test?retryWrites=true'

mongoose.connect(url,{useNewUrlParser:true});

const db = mongoose.connection;

db.open






