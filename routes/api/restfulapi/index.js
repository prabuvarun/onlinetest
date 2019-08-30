'use strict';

var express = require('express');
var controller = require('./restfulapi');
var router = express.Router();
var models = require('../../../models');

router.get('/api/restfulapis/listUsers', controller.listUsers);
router.get('/api/restfulapis/listUserPost/:id', controller.listUserPost);
router.put('/api/restfulapis/update/user/:id', controller.updateUser);