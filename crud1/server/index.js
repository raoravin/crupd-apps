const express = require("express");
const connectToDB = require("./config/db");
const Router = require("./routes/userRoute");
require("dotenv").config();
const PORT = process.env.PORT || 4000
connectToDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", Router)


app.listen(PORT, () =>{
    console.log(`App is running at http://localhost:${PORT}`);
})




