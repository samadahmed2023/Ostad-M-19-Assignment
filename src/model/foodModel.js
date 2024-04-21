const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    ProductName:{type:String},
    ProductCode:{type:String},
    Img:{type:String},
    Category:{type:String},
    Price:{type:String},
    Qty:{type:String}
},{timestamps:true,versionKey:false})

const foodModel = mongoose.model('products', DataSchema)
module.exports=foodModel;