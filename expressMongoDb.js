//oguz
//jiBIWCD121TCjT0P

 //var mongoose=require("mongoose")



//  var Customer=require('./customer') 
 
// var customer1 = new Customer({
//     name: "oguz",
//     city: "bursaaa"

// })

// customer1.save((error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("saved")
// })

 

 
// Customer.find({name:'oguz'},(error,data)=>{
//     if (error) {
//                   throw error;
//     }

//      console.log(data)
// }).where("city").equals("bursaaa").limit(1)

// gt=> grader than
// lt=>last than   aralık belirtmek için
//lts 
//select
//sort(order by demek )
//sort(-) tersten sırala


// Customer.findById( '62d0132eda3b46d7fe4d148c' ,(error,data)=>{
//     if (error) {
//                   throw error;
//     }

//      console.log(data)
// })



//Nesneyi güncelleme 

// Customer.findById( '62d0132eda3b46d7fe4d148c' ,(error,data)=>{
//     if (error) {
//                   throw error;
//     }

//      console.log(data)
//      data.city="istanbul"
//      data.save((error) => {
//     if (error) {
//          throw error;
//     }
//     console.log(" data saved")
// })

// })


//Nesneyi silme 

// Customer.findById( '62d0132eda3b46d7fe4d148c' ,(error,data)=>{
//     if (error) {
//                   throw error;
//     }

//      console.log(data)
//      data.city="istanbul"
//      data.remove((error) => {
//     if (error) {
//          throw error;
//     }
//     console.log(" data saved")
// })
// })

//daha hızlı bul güncelle 
 //findOneAndUpdate
//daha hızlı bul güncelle id ile
 //findbyIdAndUpdate
 //daha hızlı bul sil id ile
 //findbyIdAndRemove