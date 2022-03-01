const express = require('express')
const cors = require('cors') // libreria que me permite evitar la restriccion cors
const personsApi = require('./api/persons/')
const helloWorldApi = require('./api/helloworld/')
// get morgan
const morgan = require ('morgan')
const app = express()
//para poder aceptar verbos posts, middleware que recibe json y lo mete en body en request
app.use(express.json())
app.use(cors())
// app.use(morgan('dev'))
morgan.token('myTokenBody',(request) => {
    return JSON.stringify(request.body)
})
app.use(
    morgan(
        ':method :url :status :res[content-length] :myTokenBody - :response-time ms'
        )
    )



// data
//const persons = require('./contacts')

// get utils
// const { midLogger } = require('./utils')


app.disable('etag');
// rutas
app.use(helloWorldApi)
app.use(personsApi)
app.get('/', (request, response)=> {
    response.send('<h1>API agenda</h1>')
})

// //get persons/id
// app.get('/api/persons/:id', (request,response) => {
//     // const id = request.params.id
//     const { id } = request.params
//     // const note = notes.find((item, idx) => {
//     //     if (item.id == id) return item
//     // })
//     const person = persons.find(item => item.id === Number(id))
//     //si la nota no existe deberemos devolver 404
//     if (person) {
//         response.json(person)
//     } else {
//         response.status(404).end()
//     }
// })


// //get persons
// app.get('/api/persons', (request,response)=>{
//     response.json(persons)
// })

// //delete person
// app.delete('/api/persons/:id', (request,response) => {
//     const { id } = request.params
//     const resultPersons = persons.filter(item => item.id !== Number(id))
//     // console.log(resultPersons)
//     response.status(204).end()
// })


// app.post('/api/persons/', (request,response) => {
//     const newPerson = request.body
//     const resultPersons = persons.concat(newPerson)
//     // console.log(resultPersons)
//     response.status(201).json(newPerson)

// })

// app.put('/api/persons/:id', (request,response) => {
//     const { id } = request.params
//     const data = request.body
//     const person = persons.find(item => item.id === Number(id))
//     if (person) {
//         response.json(person)
//     } else {
//         response.status(404).end()
//     }
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)

})

