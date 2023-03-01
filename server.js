const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 4000;
const login = require("./routes/auth");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: POST,GET,OPTIONS");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
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
