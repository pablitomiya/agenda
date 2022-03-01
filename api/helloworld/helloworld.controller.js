

const sayHello = (request,response) => {
    response.json({ msj: 'hello world'})
}

module.exports = {
    sayHello
}