//jshint ES version:6
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

app.listen(port, function () {
    console.log("server is running on port 3000");
});

//#region root page("/")
app.post("/", function (req,res) {
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let operation = req.body.opt;
    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            res.send("The result of the calculation is : " + result);
        break;

        case "-":
            result = num1 - num2;
            res.send("The result of the calculation is : " + result);
        break;

        case "*":
            result = num1 * num2;
            res.send("The result of the calculation is : " + result);
        break;

        case "/":
            result = num1 / num2;
            res.send("The result of the calculation is : " + result)
        break;

    }
});

app.get('/', function (req,res) {
    res.sendFile(__dirname + "/index.html")
});
//#endregion

//#region bmiCalculator page("/bmiCalculator")
app.get("/bmiCalculator", function (req,res) {
    res.sendFile(__dirname + "/bmiCalculator.html")
});

    app.post("/bmiCalculator", function (req, res) {
    let weight = Number(req.body.weightBox);
    let height = Number(req.body.heightBox);
    let resultBMI = (weight / ((height * height) / 10000)).toFixed(2);

    if(resultBMI < 18.6){
        res.send("your bmi is " + resultBMI + " and you are Under Weight");
    } else if(resultBMI >= 18.6 && resultBMI < 24.9){
        res.send("your bmi is " + resultBMI + " and you are Normal");
    } else if(resultBMI > 18.6){
        res.send("your bmi is " + resultBMI + " and you are Over Weight");
    }
});
//#endregion