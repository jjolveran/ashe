const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;
  res.send("There Result of the calculation is " + result);
});

app.get("/bmicalculator", (req, res) => {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let n = Math.floor( weight / (height*height));
    res.send("Your BMI is " + n);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
