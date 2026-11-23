import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    category:{
        type:String
    }
});

const MenuModel = mongoose.model("Menu", menuSchema);
export default MenuModel;