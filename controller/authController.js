
var User = require('../Users')
var jwt = require("jsonwebtoken");


const newAuth_Signin = (request, response, next) => {
    console.log("sign in ")
    console.log(request.body)
    console.log(request.body.email)
    User.find({ email: request.body.email }, (error, data) => {
        if (error) {

            throw error
        }
        else if (data.length=== 0) {

            console.log("bos")
            var users = new User({
                nickName: request.body.nick,
                email: request.body.email,
                password: request.body.password,
                score: 0,
                kill: 0,  //sadece string mi 
                death: 0,
                win: 0,
                lose: 0
            })
            users.save((error) => {
                if (error) {
                    throw error;
                }
                response.send(
                    {status:true,
                    message:"user saved succes"}
                )
            })

        }
        else {
            response.send(
                {status:false,
                message:"user saved failed,this email registered"})
        }
    }
    )




};


const newAuth_Login = (request, response, next) => {

    console.log("login")
    User.find({ email: request.body.email }, (error, data) => {
        if (error) {
            throw error
        }
        else  if (data.length !== 0) { 
            console.log(data)
            if (data[0].password == request.body.password) {
                const token = jwt.sign({ id: request.body.id }, "5p#Z49qFadp4") 
                response.send({ token: token, id: data[0].id });
         
            }
             else {
                response.send({token:"error",id:null});
            }
        }
    })

}

module.exports = {
    newAuth_Signin,
    newAuth_Login
}; 