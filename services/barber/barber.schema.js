const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const BarberSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  service: [
    {
      type: ObjectId,
      ref: "services",
    },
  ],
  salon: {
    type: ObjectId,
    ref: "salons",
  },
});
const BarberModal = mongoose.model("barbers", BarberSchema);
module.exports = BarberModal;
