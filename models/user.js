const mongoose = require('mongoose')

const user = mongoose.Schema({
    email: {
       type: String
        },
    name: {
        type:String
        },
    phone: {
        type:Number
    }
});


let User = module.exports = mongoose.model('User', user);