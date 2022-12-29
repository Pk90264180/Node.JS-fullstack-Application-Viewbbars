const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const DB =
  "mongodb+srv://Pk90264180:288AWF%40Xr6B8nnV@cluster0.bjvhzte.mongodb.net/mernbyme?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(function () {
    console.log("Connected to MONGOD !!");
  })
  .catch(function (err) {
    console.log("Failed to establish connection with MONGOD !!");
    console.log(err);
  });
