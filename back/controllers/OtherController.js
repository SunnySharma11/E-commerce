const Product = require('../models/ProductSchema')
const ExtraDetail = require('../models/ExtraDetails')
// product and products are diff thing ***

const Products = async(req,res) => {
    try {
        const products = await Product.find();
           
        res.json(products);
    } catch (error) {
        console.log(`error in service ${error}`)
    }
}
  
const ExtraDetails = async(req,res) =>{
    try {
        const {id} = req.params;
        const datas = await ExtraDetail.findOne({fkey : id});
        res.json(datas);

    } catch (error) {
        console.log("error during extra details")
    }


}

module.exports = {Products , ExtraDetails}