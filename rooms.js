var mongoose=require("mongoose") 
mongoose.connect('mongodb+srv://oguz:jiBIWCD121TCjT0P@cluster0.38rpt.mongodb.net/?retryWrites=true&w=majority',(error)=>{
       if(!error){
        console.log('connected mongodb')
       }  
       else{
        console.log("disconnected")
       }       
})


var Schema= mongoose.Schema;

var RoomsSchema = new Schema({

    odaismi:String,
    kapasite:String,
    Kullanıcılar:String,
}
)
 

var Rooms =mongoose.model('Rooms',RoomsSchema)

module.exports=Rooms


