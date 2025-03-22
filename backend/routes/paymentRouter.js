
const router = require("express").Router()
const razorpay = require("../config/razorpay")
const crypto = require("crypto");
const Payment = require("../models/PaymentSchema")

router.post("/create-order", async (req, res) => {
    try {
        const options = {
            amount: req.body.amount * 100, // Amount in paise
            currency: "INR",
            receipt: "receipt_order_" + new Date().getTime(),
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
});

const RAZORPAY_KEY_SECRET = process.env.RAZORPAY_KEY_SECRET;

router.post("/verify-payment", async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            return res.status(400).json({ success: false, message: "Missing required fields" });
        }

        // Generate Signature
        const secret = process.env.RAZORPAY_KEY_SECRET;
        const generated_signature = crypto
            .createHmac("sha256", secret)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex");

        // console.log("Generated Signature:", generated_signature);     // for test only**
        // console.log("Received Signature:", razorpay_signature);

        // Compare Signatures
        if (generated_signature !== razorpay_signature) {
            return res.status(400).json({ success: false, message: "Invalid Signature" });
        }

        // Save to DB (Prevent duplicate insertions)
        const existingPayment = await Payment.findOne({ orderId: razorpay_order_id });
        if (existingPayment) {
            return res.status(400).json({ success: false, message: "Duplicate Order ID" });
        }

        const payment = new Payment({
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            signature: razorpay_signature,
            amount: 50000, // You should fetch this from DB or order data
            status: "Paid"
        });

        await payment.save();
        res.status(200).json({ success: true, message: "Payment Verified & Saved!" });

    } catch (error) {
        console.error("Payment Verification Error:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


module.exports = router