const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const SlotSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: new Date(),
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
  salon_id: {
    type: ObjectId,
    ref: "salons",
  },
  barber_id: {
    type: ObjectId,
    ref: "barbers",
  },
  slots: {
    type: [
      {
        slot_num: { type: Number },
        slot_start_time: { type: String },
        slot_end_time: { type: String },
        is_booked: { type: Boolean, default: false },
      },
    ],
  },
});
const SlotModal = mongoose.model("slots", SlotSchema);
module.exports = SlotModal;
