const Cart = require('../models/CartSchema')
const mongoose = require('mongoose')


const CartItems = async(req,res) =>{
    try {
        const datas = await Cart.find();
        res.json(datas);
    } catch (error) {
        console.log("error during cart fetch");
    }   
}

const CartDelete = async (req, res) => {
    const { id } = req.params;
  
    // Validate ID format
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid item ID" });
    }
  
    try {
      const result = await Cart.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
  
      if (result.deletedCount === 1) {
        return res.json({ message: "Item removed successfully" });
      } else {
        return res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      console.error("Delete Error:", error);
      return res.status(500).json({ error: "Error removing item" });
    }
  };
  
const CartAdd = async(req,res) =>{
    try {
        const newItem = new Cart(req.body);
        await newItem.save();
        res.status(201).json({ message: "Item added to cart" });

    } catch (error) {
       res.status(500).json({error: "Error adding item to cart" })
    }
}


module.exports = {CartItems , CartDelete ,CartAdd}