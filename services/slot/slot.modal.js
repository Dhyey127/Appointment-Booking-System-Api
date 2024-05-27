const DefaultModal = require("../default/default.schema");
const SlotSchema = require("./slot.schema");
const moment = require("moment");

class SlotModal {
  checkSlots(salon_id, barber_id) {
    let slots_present = SlotSchema.findOne({
      salon_id: salon_id,
      barber_id: barber_id,
      date: moment().format("DD-MM-YY"),
    });

    return new Promise(async (resolve, reject) => {
      try {
        resolve(slots_present);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  createSlots(salon_id, barber_id, start_time, end_time, slots) {
    let Slots = new SlotSchema({
      salon_id,
      barber_id,
      start_time,
      end_time,
      slots,
      date: moment().format("DD-MM-YY"),
    });
    return new Promise(async (resolve, reject) => {
      try {
        const result = await Slots.save();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  defaultTime() {
    let default_time = DefaultModal.find({});

    return new Promise(async (resolve, reject) => {
      try {
        resolve(default_time);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  bookSlot(slot, id) {
    let update = SlotSchema.updateOne(
      {
        _id: id,
      },
      {
        slots: slot,
      }
    );

    return new Promise(async (resolve, reject) => {
      try {
        resolve(update);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new SlotModal();
