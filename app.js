require('dotenv').config();
const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Database Connection
require("./Database/db_conn");
const Contact = require('./model/Contact');

// Set static folder
app.use("/static", express.static("static")); // For serving static files
app.use(express.urlencoded());

// Set views folder
app.set("view engine", "hbs"); // Set the template engine as hbs
app.set("views", path.join(__dirname, "views")); // Set the views directory

// Set partials folder
var hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// Get ENDPOINTS
app.get("/", (req, res) => {
  res.status(200).render("index");
});

app.get("/about", (req, res) => {
  res.status(200).render("about");
});

app.get("/contact", (req, res) => {
  res.status(200).render("contact");
});

// Post ENDPOINTS
app.post("/contact", (req, res) => {
  var myData = new Contact(req.body);
  myData
    .save()
    .then(() => {
      res.send("This item has been saved to the database");
    })
    .catch(() => {
      res.status(400).send("Item was not saved to the database");
    });
});

// START THE SERVER
app.listen(PORT, () => {
  console.log(
    `The application started successfully on port http://localhost:${PORT}`
  );
});
