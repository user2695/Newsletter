const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function(req, res) {
 const firstName = req.body.fName;
  const lastName = req.body.lName;
 const email = req.body.email;

  console.log(firstName );
  res.sendFile(__dirname +"/success.html")
});

// app.get('/success', function (req, res) {
//   res.sendFile(__dirname + '/success.html')
// })
// app.post('/signup', function (req, res) {
//   console.log(req.body)
//   res.redirect('/success')
// })

app.listen(3000, function () {
  console.log("listening on 3000");
})