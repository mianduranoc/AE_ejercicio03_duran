const mongoose=require('mongoose');
const brandSchema=new mongoose.Schema({
    brand:{
        type:String
    }
});
const brandModel=mongoose.model("Brand",brandSchema,"Brands");

module.exports=brandModel;