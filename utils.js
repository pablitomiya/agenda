function midLogger(request, response, next){
    console.log(`method: ${request.method}`)
    console.log('path: ', request.path)
    console.log('status: ', response.statusCode)
    console.log('body: ',request.body)

    next()
}

module.exports = {
    midLogger
}