
const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
    orderId: { type: String, unique: true, required: true },
    paymentId: { type: String, unique: true, required: true },
    signature: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true }
}, { timestamps: true });

const Payment = mongoose.model("Payment", PaymentSchema);
module.exports = Payment;
