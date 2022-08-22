var express = require("express")
var mongoose=require("mongoose") 
var {checkJwtToken}=require("../util/checkToken") 
var router = express()
 
var userArcController=require('../controller/userArchiveController')

router.post('/GameScores',checkJwtToken,userArcController.new_gameScores)
router.get('/deneme',userArcController.deneme_)
router.post('/user-info', checkJwtToken,userArcController.info)
router.post('/getuser', checkJwtToken, userArcController.getuser)
router.get('/getAllusers',userArcController.getAllusers)
router.get('/deleteuser',checkJwtToken,userArcController.deleteUser)


module.exports = router;

// router.get('/', function (request, response) {
//     response.send("userarchive")

// }) 
// router.post('/deneme',function (request, response) {
//     response.send(request.body)
//     console.log(request.body)
    
// })
