const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const createError = require("http-errors");


async function mongoDbConnection() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/social_tracker", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB successfully connected.");
  } catch (error) {
    console.log("Could not connect to database: " + error);
  }
}

mongoDbConnection();

const userRoute = require("./routes/info.route");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
  bodyParser.json()
);


app.use(cors());


app.use("/endpoint", userRoute);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("PORT Connected on: " + port);
});


app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
