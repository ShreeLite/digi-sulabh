const mongoose = require('mongoose');

const toiletSchema = new mongoose.Schema({
  placeId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  address: String,
  isPaid: {
    type: Boolean,
    default: false
  },
  qrCodeId: String,
  isCleaned: {
    type: Boolean,
    default: false
  },
  lastCleanedAt: Date
});

module.exports = mongoose.model('Toilet', toiletSchema);
