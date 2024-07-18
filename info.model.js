const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let infoScheme = new Schema(
  {
    platform: {
      type: String,
    },
    follower_count: {
      type: Number,
    },
    demographic: {
      type: Object,
    },
  },
  {
    collection: "stats",
  },
);
module.exports = mongoose.model("infoSchema", infoScheme);
