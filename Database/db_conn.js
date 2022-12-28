const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const url2 = "mongodb://mongo:27017/Mern";
//
// Mongo conn
mongoose
  .connect(url2, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection ` + err));