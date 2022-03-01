const { Router } = require('express')
// var express = require('express');
// var router = express.Router();
const router = new Router()
const persons = require('../../contacts')



//get persons/id
router.get('/:id', (request,response) => {
    // const id = request.params.id
    const { id } = request.params
    // const note = notes.find((item, idx) => {
    //     if (item.id == id) return item
    // })
    const person = persons.find(item => item.id === Number(id))
    //si la nota no existe deberemos devolver 404
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})
router.get('/', (request,response)=>{
    response.json(persons)
})
//delete person
router.delete('/:id', (request,response) => {
    const { id } = request.params
    const resultPersons = persons.filter(item => item.id !== Number(id))
    // console.log(resultPersons)
    response.status(204).end()
})
// create person
router.post('/', (request,response) => {
    const newPerson = request.body
    const resultPersons = persons.concat(newPerson)
    // console.log(resultPersons)
    response.status(201).json(newPerson)

})
// update person 
router.put('/:id', (request,response) => {
    const { id } = request.params
    const data = request.body
    const person = persons.find(item => item.id === Number(id))
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

module.exports = router