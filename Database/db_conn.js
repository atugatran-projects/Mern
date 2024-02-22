const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const url = process.env.DATABASE;

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
