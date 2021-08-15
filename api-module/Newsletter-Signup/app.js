const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res) => {
  let firstName = req.body.fName;
  let lastName = req.body.lName;
  let email = req.body.email;
  console.log(firstName, lastName, email);

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  let jsonData = JSON.stringify(data);

  let url = "https://us5.api.mailchimp.com/3.0/lists/bca18e101d";

  let options = {
    method: "POST",
    auth: "John:7a6ed328d82d61adca2c7a2e65f13a4d-us5",
  };

  const requestAPI = https.request(url, options, (response) => {
    if (response.statusCode == 200) {
      res.sendFile(__dirname + "/sucess.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }

    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });
  });

  requestAPI.write(jsonData);
  requestAPI.end();
});

app.post("/failure", (req, res) => {
  res.redirect("/");
});

app.listen(process.env.PORT||port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// App Key 7a6ed328d82d61adca2c7a2e65f13a4d-us5

// List id bca18e101d
