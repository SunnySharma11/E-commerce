const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true }, // Store price as a string since it's prefixed with '$'
  imgSrc: { type: String, required: true },
  category: { type:String, required:true},
});

module.exports = new mongoose.model("Product", ProductSchema);
