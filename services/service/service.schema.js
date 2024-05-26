const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});
const ServiceModal = mongoose.model("services", ServiceSchema);
module.exports = ServiceModal;
