/**
 * Created by abc on 20/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/a',function(req,res) {
    var name={"headers":req.headers}
    res.send(name);
});

app.post('/b',function(req,res) {
    var user={"headers":req.headers}
    res.send(user);
});


app.listen(3003,function () {
    console.log("Servar 3003 is started.");
});