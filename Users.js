var mongoose=require("mongoose") 
// mongoose.connect('mongodb+srv://oguz:jiBIWCD121TCjT0P@cluster0.38rpt.mongodb.net/?retryWrites=true&w=majority',(error)=>{
//        if(!error){
//         console.log('connected mongodb')
//        }  
//        else{
//         console.log("disconnected")
//        }       
// })
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


