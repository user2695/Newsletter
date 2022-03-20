const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [{
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName
      }
    }]
  };
  const jsonData = JSON.stringify(data);
  const url = "https://us14.api.mailchimp.com/3.0/lists/3dc7854b20";
  const options = {
    method: "POST",
    auth: "zubi:0378d24a5e346b275ea9ba23165d4f2e-us14"
  }
  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    })
  })
  request.write(jsonData);
  request.end();
  console.log(firstName, lastName, email);
  res.sendFile(__dirname + "/success.html")
});

app.listen(PORT, function () {
  console.log(`Listening on ${ PORT }`);
})

// 0378d24a5e346b275ea9ba23165d4f2e-us14

// 3dc7854b20