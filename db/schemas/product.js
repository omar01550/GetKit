import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  }
  ,
  image: {
    type: String,
  },
  club: {
    type: String,
    required: true,
  }
});

export const ProductModel = mongoose.models.product || mongoose.model('product',Product );
