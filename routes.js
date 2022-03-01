const personsApi = require('./api/persons/')
const helloWorldApi = require('./api/helloworld/')

const myFunctions = (app) => {
    app.use(helloWorldApi)
    app.use(personsApi)
}

module.exports = myFunctions