//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
})


app.get('/success', function (req, res) {
    res.sendFile(__dirname + '/success.html')
  })
  


  app.post('/regist', function (req, res) {
    console.log(req.body)
    res.redirect('/success')
  })








app.post("/failure", function(req, res){
   res.redirect("/")
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});