const express = require("express");
const https = require("https");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

//Body parser it's necessary to parse the post "info" from the website and use it in the backend
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.cityName);

  const query = req.body.cityName;
  const apiKey = "3dae631ef12081a8f54213e5ce3f8d5c";
  const unit = "metric";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    apiKey +
    "&units=" +
    unit;
  https
    .get(url, (response) => {
      console.log(response.statusCode);
      console.log("statusCode:", response.statusCode);
      console.log("headers:", response.headers);

      response.on("data", (d) => {
        console.log(d);
        process.stdout.write(d);
        const weatherData = JSON.parse(d);
        //JSON.stringify(Object) will return the data in text lines, not JSON
        console.log(weatherData);

        // Access or parse the data
        const temp = weatherData.main.temp;

        // or
        //you can get the path  from Postman or webbrowser with JSON Pro
        const weatherDescription = weatherData.weather[0].description;

        const icon = weatherData.weather[0].icon;

        const imageURL =
          "https://openweathermap.org/img/wn/" + icon + "@2x.png";

        //Only one send
        // res.send("<h1>There temperature is " + temp + " degrees Celcius.</h1>")

        //or

        res.write(
          "<p>There weather is currently " + weatherDescription + ".<p>"
        );
        res.write(
          "<h1>The temperature in " + query + " is " + temp + " degrees Celcius.</h1>"
        );
        res.write("<img src=" + imageURL + ">");
        res.send();
      });
    })
    .on("error", (e) => {
      console.error(e);
    });

  console.log("Post Received");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
