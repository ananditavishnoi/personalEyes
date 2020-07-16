var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.get("/", function(req, res) {
    res.render("homepage")
})
app.get("/first", function(req, res) {
    res.render("home")
})
app.get("/to-do", function(req, res) {
    res.render("to-do")
})

app.get("/pomodoro", function(req, res) {
    res.render("pomodoro");
})
app.listen(3000, function() {
    console.log("success is a crime")
})