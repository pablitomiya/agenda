const persons = require('../../contacts')
const getPerson = (request,response) => { //get persons/id
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
}

const deletePerson = (request,response) => {
    const { id } = request.params
    const resultPersons = persons.filter(item => item.id !== Number(id))
    // console.log(resultPersons)
    response.status(204).end()
}

const getListPersons = (request,response)=>{
    response.json(persons)
}

const newPerson =  (request,response) => {
    const newPerson = request.body
    const resultPersons = persons.concat(newPerson)
    // console.log(resultPersons)
    response.status(201).json(newPerson)

}
const updatePerson = (request,response) => {
    const { id } = request.params
    const data = request.body
    const person = persons.find(item => item.id === Number(id))
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
}

module.exports = {
    getPerson,
    getListPersons,
    deletePerson,
    newPerson,
    updatePerson
}