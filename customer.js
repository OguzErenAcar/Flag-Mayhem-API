

var mongoose=require("mongoose") 
mongoose.connect('mongodb+srv://oguz:jiBIWCD121TCjT0P@cluster0.38rpt.mongodb.net/?retryWrites=true&w=majority',(error)=>{
       if(!error){
        console.log('connected mongodb')
       }  
       else{
        console.log("...asd")
       }       
})


var Schema= mongoose.Schema;

var customerSchema = new Schema({

    email:String,
    password:String, 
}
)
 

var Customer =mongoose.model('Customer',customerSchema)

module.exports=Customer


