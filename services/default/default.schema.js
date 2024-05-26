const mongoose = require("mongoose");

const DefaultSchema = new mongoose.Schema({
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
});
const DefaultModal = mongoose.model("defaults", DefaultSchema);
module.exports = DefaultModal;
