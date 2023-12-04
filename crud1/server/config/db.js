const mongoose = require("mongoose");
require("dotenv").config();

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("Database connected to localhost");
    })
    .catch((error) => {
      console.log(error);
    });
};
 
module.exports = connectToDB;
