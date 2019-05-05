const express = require('express');
const router = express.Router();

const User = require('../../models/user');

const Login = require('../../src/modules/login');

// GET

router.get('/', (req, res) =>{
    User.find()
    .then(user => res.json(user));
})

// POST

router.post('/', (req, res) =>{
let user = new User(req.body);
    console.log(req.body)
    user.username = req.body.username;
    user.password = req.body.password;


});

user.save().then(user = res.json(user));

module.exports = router;