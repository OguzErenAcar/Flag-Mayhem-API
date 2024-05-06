var express = require("express")
var app = express()
var bodyParser = require('body-parser')

var urlEncodedParser = bodyParser.urlencoded()
var rawencoder = bodyParser.json()
app.use(rawencoder)
app.use(bodyParser.urlencoded({ extended: true }));

var auth_router=require("./router/auth")
app.use("/auth",auth_router)
 
var UserArc = require("./router/UserArchive")
app.use("/UserArchive",UserArc)

//var sign_router=require("./router/sign_in")
//app.use("/sign",sign_router) 
 

app.get('/', function (request, response) {

    response.send('Merhaba')
})


app.post('/product', function (request, response) {
    console.log(request.body.isim)
    response.send(request.body.isim)
})



app.get('/admin', function (request, response) {

    response.send('Merhaba admin')
})
app.post('/product', urlEncodedParser, function (request, response) {
    console.log(request.body.isim)
    response.send("post")
})
app.delete('/product', function (request, response) {
    response.send("delete")
})
app.put('/product', function (request, response) {
    response.send("put")
})



app.get('/customer*', function (request, response) {
    //customer* custommer ile başlayan
    //*custommer  içinde customer geçen 
    //*custommer* içinde customer geçen  
    response.send('Merhaba')
})

app.get('/product', function (request, response) {
    console.log("ID:" + request.query.id);
    console.log("CATAGORY ID:" + request.query.categoryid);
    response.send('Merhaba')
})
var server = app.listen(8080)