const util = require("../../utils/response");
const message = require("../../utils/message.json");
const SlotModal = require("./slot.modal");
const { generateTimeSlots } = require("../../utils/helper");

class slotHandler {
  async createSlots(request, response) {
    try {
      const { salon_id, barber_id } = request.body;

      let default_time = await SlotModal.defaultTime();

      let start_time = default_time[0].start_time;
      let end_time = default_time[0].end_time;

      if (salon_id && barber_id) {
        // check need to create slot
        const slots_present = await SlotModal.checkSlots(salon_id, barber_id);

        if (slots_present) {
          // check time logic here
          if (
            slots_present.start_time === start_time &&
            slots_present.end_time === end_time
          ) {
            response.send(util.success(slots_present, "Slots retrived"));
          } else {
            // create slots
            let slots = generateTimeSlots(start_time, end_time, 30);

            const create_slots = await SlotModal.createSlots(
              salon_id,
              barber_id,
              start_time,
              end_time,
              slots
            );
            if (create_slots) {
              response.send(util.success(create_slots, "Slots retrived"));
            } else {
              response
                .status(400)
                .send(
                  util.error(
                    "result",
                    message.common_messages_record_not_available
                  )
                );
            }
          }
        } else {
          // create slots
          let slots = generateTimeSlots(start_time, end_time, 30);

          const create_slots = await SlotModal.createSlots(
            salon_id,
            barber_id,
            start_time,
            end_time,
            slots
          );

          if (create_slots) {
            response.send(util.success(create_slots, "Slots retrived"));
          } else {
            response
              .status(400)
              .send(
                util.error(
                  "result",
                  message.common_messages_record_not_available
                )
              );
          }
        }
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }

  async bookSlot(request, response) {
    try {
      const { slots, id } = request.body;

      if (slots && id) {
        // check need to create slot
        const booked = await SlotModal.bookSlot(slots, id);

        if (booked) {
          response.send(util.success([], "Slot Booked"));
        } else {
          response
            .status(400)
            .send(
              util.error("result", message.common_messages_record_not_available)
            );
        }
      }
    } catch (error) {
      console.log(error, "error");
      response
        .status(400)
        .send(util.error(error, message.common_messages_error));
    }
  }
}

module.exports = new slotHandler();
