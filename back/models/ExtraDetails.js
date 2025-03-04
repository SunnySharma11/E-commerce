const mongoose = require("mongoose");

const ExtraDetailsSchema = new mongoose.Schema({
  fkey: { type: String, required: true }, // foreign key
  name: { type: String, required: true },
  price: { type: String, required: true },
  notes: {type:String, required:true },
  imgSrc: { type: [String], required: true }, // Change from String to Array of Strings
});


module.exports = new mongoose.model('ExtraDetails',ExtraDetailsSchema)