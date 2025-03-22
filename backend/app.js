require("dotenv").config(); // Always first
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

// Validate environment variables
if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  console.error("Missing Razorpay credentials in .env file");
  process.exit(1);
}

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  allowedHeaders: ["Authorization", "Content-Type"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json()); 

// Routes
const authRouter = require("./routes/AuthRouter");
app.use("/", authRouter);

const paymentRouter = require("./routes/paymentRouter");
app.use("/",paymentRouter)

mongoose
  .connect(URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB Connection Error:", error));

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
