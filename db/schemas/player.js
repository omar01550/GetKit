import mongoose from "mongoose";
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  team: {
    type: Schema.Types.ObjectId,
    ref: 'player',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

export const PlayerModel = mongoose.models.player || mongoose.model('player', TeamSchema);
