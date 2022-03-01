const personsApi = require('./api/persons/')
const helloWorldApi = require('./api/helloworld/')

const myFunctions = (app) => {
    app.use('/api/helloworld',helloWorldApi)
    app.use('/api/persons',personsApi)
}

module.exports = myFunctions