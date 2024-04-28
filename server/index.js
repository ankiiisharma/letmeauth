const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB connected!");
  })
  .catch((err) => {
    console.log("Error while connecting to the database:", err);
  });

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:5173",
      "https://letmeauth-server.vercel.app",
      "https://letmeauth-frontend.vercel.app",
    ],
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 8000;

app.use("/", require("./Routes/authentication"));

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
