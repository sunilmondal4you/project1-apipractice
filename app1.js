/**
 * Created by abc on 20/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    res.send("Hello Sunil!!!");
    
    //localhost:3000/a;
    
});

app.get('/a/b', function(req,res) {
    var name=req.query.name;
    var email=req.query.email;
    res.send("Hello "+name+" your email id is "+email);
    
    //localhost:3000/a?name=Sunil&email=sunilmondal4you@gmail.com;
});

app.get('/a/b/c',function(req,res) {
    var user={"name":req.query.name,
            "email":req.query.email};
    res.send(user);

    //localhost:3000/a?name=Sunil&email=sunilmondal4you@gmail.com;
    //answer is in the json format    {"name":"Sunil","email":"jnbgvu"} ;
});

app.listen(3000,function () {
    console.log("Server 3000 is Started.");
});