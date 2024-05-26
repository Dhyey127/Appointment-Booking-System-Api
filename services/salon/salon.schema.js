const mongoose = require("mongoose");

const SalonSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  location: {
    type: { type: String, enum: ["Point"], required: true },
    coordinates: { type: [Number], required: true },
  },
  image: {
    type: String,
  },
});

// Create a geospatial index on the location field
SalonSchema.index({ location: "2dsphere" });

const SalonModal = mongoose.model("salons", SalonSchema);
module.exports = SalonModal;
