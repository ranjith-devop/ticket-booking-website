const mongoose = require('mongoose');

const busSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true, unique: true },
  source: { type: String, required: true },
  destination: { type: String, required: true },
  departureTime: { type: String, required: true },
  arrivalTime: { type: String, required: true },
  seatsAvailable: { type: Number, required: true },
  fare: { type: Number, required: true },
});

module.exports = mongoose.model('Bus', busSchema);
