var mongoose=require("mongoose") 
mongoose.connect('',(error)=>{//mongose connection link 
       if(!error){
        console.log('connected mongodb')
       }  
       else{
        console.log("disconnected")
       }       
})

module.exports = mongoose