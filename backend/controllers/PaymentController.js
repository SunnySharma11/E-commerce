require("dotenv").config()
const razorpay = require("../config/razorpay");
const crypto = require("crypto");


const createOrder = async (req, res) => {
  try {
    const options = {
      amount: 50000, // amount in paise (₹500)
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    const order = await razorpay.orders.create(options);
    console.log("Order Created:", order);
    res.json(order);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const ValiatePayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    // Use your Razorpay Secret Key
    const secret = process.env.RAZORPAY_KEY_SECRET;

    // Step 1: Create HMAC SHA256 signature
    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // Step 2: Compare generated signature with received signature
    if (generated_signature === razorpay_signature) {
      res.json({ success: true, message: "Payment verified successfully" });
    } else {
      res.status(400).json({ success: false, message: "Invalid payment signature" });
    }
  } catch (error) {
    console.error("Payment validation error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};


module.exports = { createOrder ,ValiatePayment };
