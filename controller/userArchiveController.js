
const jwt = require('jsonwebtoken')
var Users = require('../Users')


const deneme_ = (request, response) => {
    response.send({ status: "sertac" })
};

const new_gameScores = (request, response) => {
    console.log(request.body)

    Users.findById(request.body.id, (error, data) => {
        if (error) {
            throw error
        }
        data.score = data.score + parseInt(request.body.score);
        data.kill = data.kill + parseInt(request.body.kill);
        data.death = data.death + parseInt(request.body.death);
        data.win = data.win + parseInt(request.body.win);
        data.lose = data.lose + parseInt(request.body.lose);
        //  console.log(data);
        data.save((error) => {
            if (error) {
                throw error;
            }
            console.log({ status: true, message: "saved user" })
        })

        response.send(data)
    })

};


const info = (request, response, next) => {
    Users.findById(request.body.id, (error, data) => {
        if (error) {
            response.send({ status: false, message: "error" })
        }
        else if (data !== 0) {
            console.log("else if te ")
            console.log(data);
            response.send(JSON.stringify({ nickName: data.nickName, id: data.id, OnLogin: true }))
            console.log("info gonderildi")
        }
        else {
            response.send({ status: true, message: "unfined user" })
        }

    })
};

const getuser = (request, response, next) => {
    Users.find({email:request.body.email}, (error, data) => {
        if (error) {
            response.send({ status: true, data: "error" })
        }

        else {
            console.log(data);
            response.send({ status: true, data: data })
        }

    }).select('nickName email score kill death win lose')
};


const getAllusers = (request, response, next) => {
    Users.find({}, (error, data) => {
        if (error) {
            response.send({ status: false, data: "error" })
        }

        else {
            console.log(data)
            response.send({ status: true, data: data })
        }

    }).select('nickName email score kill death win lose')
};


const deleteUser = (request, response, next) => {

    console.log(request.body);
    Users.find({nickName:request.body.nickName}, (error, data) => {
        if (error) {
            response.send({ status: false, message: "error" })
            throw error;
        }
        data[0].remove((error) => {
            if (error) {
                response.send({ status: false, message: "error" })
                throw error;
            } 
        })
        response.send({ status: true, message: "deleted" })
    })



};



module.exports = {
    new_gameScores,
    info,
    getuser,
    getAllusers,
    deneme_,
    deleteUser

}; 