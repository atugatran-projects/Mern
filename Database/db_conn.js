const mongoose = require("mongoose");

// Mongo conn
mongoose
  .connect("mongodb://127.0.0.1:27017/Mern", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection ` + err));