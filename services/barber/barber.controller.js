const util = require("../../utils/response");
const message = require("../../utils/message.json");
const BarberModal = require("./barber.modal");

class BarberHandler {
  async addBarber(request, response) {
    try {
      let data = request.body;

      var result = await BarberModal.createBarber(data);
      if (result) {
        response.send(
          util.success(result, message.common_messages_record_added)
        );
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

module.exports = new BarberHandler();
