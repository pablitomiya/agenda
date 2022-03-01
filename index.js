const express = require('express')
const cors = require('cors') // libreria que me permite evitar la restriccion cors
const routeConfig = require('./routes')
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

// get utils
// const { midLogger } = require('./utils')


app.disable('etag');
// rutas
routeConfig(app)
app.get('/', (request, response)=> {
    response.send('<h1>API agenda</h1>')
})



const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)

})

