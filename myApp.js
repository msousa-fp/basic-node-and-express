var express = require('express');
var app = express();
console.log("Hello World");

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.use(express.static(__dirname + "/public"));

app.get("/json", function(req, res) {

  var message = "Hello json"; 
  message = process.env.MESSAGE_STYLE=="uppercase" ? message.toUpperCase() : message; 

  res.json({"message": message });
});






































 module.exports = app;
