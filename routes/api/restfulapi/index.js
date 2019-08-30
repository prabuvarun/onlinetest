'use strict';

var express = require('express');
var controller = require('./restfulapi');
var router = express.Router();
var models = require('../../../models');

router.get('/listUsers', controller.listUsers);
router.get('/listUserPost/:id', controller.listUserPost);
router.put('/update/user/:id', controller.updateUser);