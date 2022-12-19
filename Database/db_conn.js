const mongoose = require("mongoose");

// Mongo conn
mongoose.connect("mongodb://localhost/contactDance", { useNewUrlParser: true });

// Define mongoose schema
var contactSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  address: String,
  desc: String,
});

const db = mongoose.model("Contact", contactSchema);

module.exports = db;