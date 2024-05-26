const BarberModal = require("../barber/barber.schema");
const SalonSchema = require("./salon.schema");
const ServiceSchema = require("../service/service.schema");

class SalonModal {
  getNearBySalons(lat, long) {
    const maxDistance = 10000; // meters
    let result = SalonSchema.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(lat), parseFloat(long)],
          },
          $maxDistance: maxDistance,
        },
      },
    });
    return new Promise(async (resolve, reject) => {
      try {
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  getServicesOfferedBySalon(salon_id) {
    let services = BarberModal.find({ salon: salon_id }).populate("service");
    return new Promise(async (resolve, reject) => {
      try {
        resolve(services);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new SalonModal();
