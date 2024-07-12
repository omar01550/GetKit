const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
});

export const TeamModel=  mongoose.models.team || mongoose.model('team', TeamSchema);
