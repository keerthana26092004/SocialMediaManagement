const express = require('express')
const body_parser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const {social_tracker} = require('./schema.js')

const app=express();
app.use(body_parser.json())
app.use(cors)

const port=process.env.PORT || 8000;

async function mongoDbConnection() {
    await mongoose.connect(
      "mongodb://127.0.0.1:27017/social_tracker",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      6000,
    );
  }
  mongoDbConnection().then(() => {
    console.log("MongoDB successfully connected.");
    app.listen(port,function(){
        console.log("Listening on port 8000")
    })
  }),
    (err) => {
      console.log("Could not connected to database : " + err);
    };
  
app.get("/get-data", async (request, response) => {
    try {
        const trackdata = await social_tracker.find();
        response.status(200).json(trackdata);
    } catch (error) {
        response.status(500).json({
        status: "failed",
        message: "failed to reterive data",
        error: error,
        });
    }
    });

app.post("/add-data", async function (request, response) {
  try {
    await social_tracker.create({
      // for inserting data into db
      platform: request.body.platform,
      follower_count: request.body.follower_count,
      demographic: request.body.demographic,
    });
    response.status(200).json({
      status: "success",
      message: "entry created",
    });
  } catch (error) {
    response.status(500).json({
      status: "failure",
      message: "entry    created",
      error: error,
    });
  }
});