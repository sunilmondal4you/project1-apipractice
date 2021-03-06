/**
 * Created by abc on 20/05/2016.
 */
var express= require("express");
var bodyParser = require('body-parser');

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/a',function(req,res) {
    res.body("Hello we are here.");
});

app.post('/a/b', function(req,res) {
    res.send(req.body);

  /*
  select data in Header>>>>
        Key= Content-Type & value=application/json
   and send data in row in json format like
        {
        "name":"sunil",
            "sex":"male"
        }
   */
});

app.post('/a/b/c',function(req,res) {
    var name=req.body.name;
    res.send(req.body);
    res.send(name);
});

app.listen(3001,function () {
    console.log("Server 3001 is now started.");
});