
require("dotenv").config(); // always in first line
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"], //else delete me problem
  allowedHeaders: ["Authorization", "Content-Type"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json()); //just because of this we're getting internal server error

const router = require("./routes/AuthRouter");
app.use("/", router);

mongoose
  .connect(
    URL
  )
  .then(() => {
    console.log("connected mongoose");
  })
  .catch((error) => {
    console.log("error during connection", error);
  });


app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});