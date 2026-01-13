import mongoose  from "mongoose";

const productSchema = new mongoose.Schema({
 createdAt:{type:Date, default:Date.now}
}, {strict:false});

let productModel = mongoose.model("productModel" , productSchema);
export default productModel;