const mongoose = require("mongoose")

const CartSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      imgSrc: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        required: true,
      },
      quant: {
        type: Number,
        required: true,
        min: 1, // Ensuring at least 1 item in stock
      },
    });


module.exports = new mongoose.model("CartItems",CartSchema);