const express = require("express");
const infoExpressRoute = express.Router();
const cors = require("cors");
let infoSchema = require("../model/info.model");

var whitelist = ["http://localhost:8100", "http://localhost:4000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = {
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    };
  } else {
    corsOptions = { origin: false }; 
  }
  callback(null, corsOptions);
};
infoExpressRoute
  .route("/", cors(corsOptionsDelegate))
  .get(async (req, res, next) => {
    await infoSchema.find()
      .then((result) => {
        res.json({
          data: result,
          message: "Data successfully fetched!",
          status: 200,
        });
      })
      .catch((err) => {
        return next(err);
      });
  });

infoExpressRoute.route("/get-data/").get(async (req, res, next) => {
  await infoSchema.find()
    .then((result) => {
      res.json({
        data: result,
        message: "Data successfully retrieved.",
        status: 200,
      });
    })
    .catch((err) => {
      return next(err);
    });
});

module.exports = infoExpressRoute;
