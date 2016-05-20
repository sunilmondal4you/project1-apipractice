/**
 * Created by abc on 20/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a/b/:name/:email/:place',function(req,res) {
    var name=req.params.name;
    var email=req.params.email;
    var place=req.params.place;
    res.send("Hello "+name+" your email id is "+email+" wellcome to "+place+".");
});

app.post('/x/y/z/:firstname/:lastname',function(req,res) {
    var firstname=req.params.firstname;
    var lastname=req.params.lastname;
    res.send("hello "+firstname+" "+lastname);
});

app.listen(3002,function () {
    console.log("Server 3004 is started.");
});