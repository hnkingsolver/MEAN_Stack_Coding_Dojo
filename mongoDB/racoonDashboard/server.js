// Import
const express = require("express");
const mongoose = require("mongoose");
var moment = require('moment');
const app = express();

mongoose.connect("mongodb://localhost/racoonDB", {useNewUrlParser: true });

// Create an object that contains methods for mongoose to interface with MongoDB

// Setting
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
// Routes
require('./server/config/routes.js')(app)

app.listen(8000, () => {
    console.log("Started server on port 8000");
});