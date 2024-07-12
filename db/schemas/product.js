import mongoose from "mongoose";
const { Schema } = mongoose;

const Product = new Schema({
  team: {
    type: Schema.Types.ObjectId,
    ref: 'product',
    required: true,
  },
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

export const ProductModel = mongoose.models.product || mongoose.model('product', TeamSchema);
