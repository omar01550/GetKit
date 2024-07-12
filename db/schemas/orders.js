
import mongoose from "mongoose";
const { Schema } = mongoose;

const OrderItemSchema = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['Official', 'Custom'],
  },
  team: {
    type: Schema.Types.ObjectId,
    ref: 'Team',
  },
  player: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
  },
  name: {
    type: String,
  },
  number: {
    type: Number,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    // Ref to User model when implemented
  },
  items: [OrderItemSchema],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

export const orderModel = mongoose.models.order || mongoose.model('order', TeamSchema);
