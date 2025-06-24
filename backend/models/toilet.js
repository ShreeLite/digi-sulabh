const mongoose = require('mongoose');

const toiletSchema = new mongoose.Schema({
  placeId: { type: String, required: true, unique: true },
  name: String,
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number],
      required: true
    }
  },
  address: String,
  isPaid: { type: Boolean, default: false },
  qrCodeId: String,
  isCleaned: { type: Boolean, default: false },
  lastCleanedAt: Date
});

// 2dsphere index for geospatial queries
toiletSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('Toilet', toiletSchema);
