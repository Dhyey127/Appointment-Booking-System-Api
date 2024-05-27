const salonModal = require("./salon.modal");
const util = require("../../utils/response");
const message = require("../../utils/message.json");

class SalonHandler {
  async getNearBySalons(request, response) {
    try {
      const { lat, long, radius = 10000 } = request.body;

      var result = await salonModal.getNearBySalons(lat, long, radius);
      if (result) {
        response.send(util.success(result, "Salons Retrived"));
      } else {
        response
          .status(400)
          .send(
            util.error("result", message.common_messages_record_not_available)
          );
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }

  async getServicesOfferedBySalon(request, response) {
    try {
      let salon_id = request.params.id;

      var result = await salonModal.getServicesOfferedBySalon(salon_id);
      if (result) {
        response.send(util.success(result, "Services Retrived"));
      } else {
        response
          .status(400)
          .send(
            util.error("result", message.common_messages_record_not_available)
          );
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }
}

module.exports = new SalonHandler();
