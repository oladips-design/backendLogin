const express = require("express");
const app = express();
require("dotenv").config();
// const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
const login = require("./routes/auth");

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/", login);

// const connectDb = async () => {
//   try {
//     await mongoose.connect(process.env.DBURL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// connectDb();
app.listen(port, (err) => {
  if (err) {
    console.log("something went wrong");
    return;
  }
  console.log(`listening at port: http://localhost:${port}`);
});
