require("dotenv").config();
const Razorpay = require("razorpay");

const razorpay = new Razorpay({        // creating a instance of razorpay *
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

module.exports = razorpay