const jwt = require('jsonwebtoken')

function checkJwtToken(request, response, next) {
    try {
        //const token = request.body.token; 
       // console.log(request.headers.token)
         const token = request.headers.authorization
         const splittedToken = String(token).split(' ')[1]
         console.log(token)
        const decodedToken = jwt.verify(splittedToken, "5p#Z49qFadp4")
        // console.log(token) 
        //response.send(request.headers.token)
        next()
    } catch (error) {
        return response.send({token:"false token"});
    }
}
module.exports = {
    checkJwtToken
};