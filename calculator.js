const express = require('express');
const app = express();
const port = 3000;

app.listen(3000, function () {
    console.log("server connected with port 3000");
});

app.get('/', function (req,res) {
    res.send("<h1>Hello World!</h1>");
})