import mongoose, { Schema } from "mongoose"


const productSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true,
        // validate: {
        //     validator: function (value) {
        //         // Simulate checking the image metadata
        //         const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        //         const maxSize = 5 * 1024 * 1024; // 5MB

        //         // Dummy metadata extraction logic (replace with real checks)
        //         const metadata = {
        //             type: value.split('.').pop(), // Simulated type from extension
        //             size: 1024 * 1024 * 4 // Simulated size (4MB)
        //         };

        //         // Check type and size
        //         return (
        //             allowedTypes.includes(`image/${metadata.type}`) &&
        //             metadata.size <= maxSize
        //         );
        //     },
        //     message: 'Invalid image. Only JPEG, PNG, GIF are allowed and size must be under 5MB.'
        // }
    },
    price:{
        type: Number,
        required: true
    },
    category:{
        type: String,
        required: true
    }

},{timestamps:true})

const ProductModel = mongoose.models.Product || mongoose.model("Product",productSchema);
export default ProductModel;