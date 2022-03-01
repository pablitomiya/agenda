const { Router } = require('express')
// var express = require('express');
// var router = express.Router();
const router = new Router()

const controller = require('./persons.controller')




router.get('/:id', controller.getPerson)
router.get('/', controller.getListPersons)
//delete person
router.delete('/:id', controller.deletePerson)
// create person
router.post('/', controller.newPerson)
// update person 
router.put('/:id', controller.updatePerson)

module.exports = router