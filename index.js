const { response, request } = require('express')
const express = require('express')

const app = express()
//para poder aceptar verbos posts, middleware que recibe json y lo mete en body en request
app.use(express.json())

// data

const persons = [
    {
        id:1,
        name: "pablo",
        number: 3043800
    },
    {
        id:2,
        name: "jose",
        number: 3043801
    },
    {
        id:3,
        name: "pepe",
        number: 3043802
    },
    
]

app.disable('etag');
// rutas

app.get('/', (request, response)=> {
    response.send('<h1>Hello world</h1>')
})

//get persons/id
app.get('/api/persons/:id', (request,response) => {
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


//get persons
app.get('/api/persons', (request,response)=>{
    response.json(persons)
})

//delete person
app.delete('/api/persons/:id', (request,response) => {
    const { id } = request.params
    const resultPersons = persons.filter(item => item.id !== Number(id))
    console.log(resultPersons)
    response.status(204).end()
})


app.post('/api/persons/', (request,response) => {
    const newPerson = request.body
    const resultPersons = persons.concat(newPerson)
    console.log(resultPersons)
    response.status(201).json(newPerson)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)

})

