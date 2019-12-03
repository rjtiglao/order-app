const express = require(`express`);
const app = express();
const path = require("path");

const PORT = process.env.PORT || 8080;

const exphbs = require("express-handlebars");
//calling dumb callback command
const burger = require(`./models/burger`);
//calling ORM
const orm = require("./config/orm.js");

//required for POST to parse the data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//start Handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".handlebars");
app.engine(".handlebars", exphbs({ defaultLayout: "main" }));

//Server listen command
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

//Allows CSS and Image files to be Loaded
app.use(express.static("public"));

// route that renders the main handlebars file
//Callback returns the information from Mysql
app.get("/", function(req, res) {
  burger.select(function(data) {
    let Object = { burger: data };

    res.render("main", Object);
  });
});

let burgers = [];

//API for added burgers
app.post("/api", function(req, res) {
  console.log(req.body.data);
  if (req.body.data === "Enter your burger here...") {
    console.log("DUPE DATA");
  } else {
    orm.insertOne(req.body.data);
    console.log(`${req.body.data} inserted into DB`);
  }
  return res.status(200);
});

app.post("/api/eat", function(req, res) {
  console.log(req.body.data);
  orm.updateOne(req.body.data);
  return res.status(200);
});

app.get("/api", function(req, res) {
  return res.json(burgers);
});
