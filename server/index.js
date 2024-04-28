const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

//mdb connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log("error while connecting db:" + err);
  });

//middlewares

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = 8000;

app.use("/", require("./Routes/authentication"));

app.listen(port, () => {
  console.log(`server is listening at ${port}`);
});
