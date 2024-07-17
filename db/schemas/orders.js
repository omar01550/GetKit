
import mongoose from "mongoose";
import { type } from "os";
const { Schema } = mongoose;

const OrderItemSchema = new Schema({
  type: {
    type: String,
  },
  uid:{
     type:String
  },
  team: {
    type: String,
  },
  name: {
    type: String,
  },
  number: {
    type: String,
  },
  size:{
     type:String
  },
  productid:{
     type:String
  }
});



export const orderModel = mongoose.models.order || mongoose.model('order', OrderItemSchema);
