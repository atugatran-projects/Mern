const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
// const url = "mongodb+srv://atul:9C5Xc4Q06BKIqvZP@cluster0.otpfyog.mongodb.net/Mehbn?retryWrites=true&w=majority"
const DB = process.env.DATABASE;
mongoose.set("strictQuery", true);

// Mongo conn
mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`connnection successful`);
  })
  .catch((err) => console.log(`no connection ${err}`));