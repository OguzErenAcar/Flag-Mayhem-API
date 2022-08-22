var express = require("express")
var router = express()
var autController=require('../controller/authController')
 

router.post('/sign-in',autController.newAuth_Signin)
router.post('/Login', autController.newAuth_Login)


module.exports = router;