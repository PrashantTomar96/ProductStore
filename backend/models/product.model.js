import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        price: {
            type : Number,
            required : true,  
        },
        image : {
            type : String,
            required : true,
        }

    },{
        timestamps : true // createdAt, updatedAt
    }
);

const Product = mongoose.model('Product', productSchema);
// mongoose will take a look on the above line and make a 'products' collection in DB
export default Product;