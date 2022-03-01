const { Router } = require('express')
// var express = require('express');
// var router = express.Router();
const router = new Router()

router.get('/', (request,response) => {
    response.json({ msj: 'hello world'})
})

module.exports = router