var express = require('express');
var users = express.Router();

// users.post('/registration', require('../controllers/addUsers'));

users.post('/registration', require( '../controllers/addUsers'));

users.post('/enterlogin', require( '../controllers/loginUsers'));


module.exports = users;
