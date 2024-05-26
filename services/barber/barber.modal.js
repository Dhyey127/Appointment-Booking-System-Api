const BarberSchema = require("./barber.schema");

class BarberModal {
  createBarber(createData) {
    let barber = new BarberSchema(createData);
    return new Promise(async (resolve, reject) => {
      try {
        const result = await barber.save();
        resolve(result);
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }
}

module.exports = new BarberModal();
