const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const url = "mongodb://127.0.0.1:27017/Mern"

// Mongo conn
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection ` + err));