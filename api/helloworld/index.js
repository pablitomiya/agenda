const { Router } = require('express')
// var express = require('express');
// var router = express.Router();
const router = new Router()
const controller = require('./helloworld.controller')

router.get('/', controller.sayHello)

module.exports = router