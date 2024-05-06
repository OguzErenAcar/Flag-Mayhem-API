var mongoose=require("mongoose")  
const connection = require('./connection/mongodb')
 
var Schema= mongoose.Schema;

var UsersSchema = new Schema({

    email:String,
    password:String, 
    nickName:String,  
    score:Number,
    kill:Number,  
    death:Number,
    win:Number,
    lose:Number
}
)
 

var Users =connection.model('Users',UsersSchema)

module.exports=Users


