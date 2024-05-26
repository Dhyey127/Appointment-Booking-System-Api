var express = require("express");
const {
  getNearBySalons,
  getServicesOfferedBySalon,
} = require("../services/salon/salon.controller");
var router = express.Router();

router.post("/get-nearby-salons", getNearBySalons);

router.get("/services/:id", getServicesOfferedBySalon);

module.exports = router;
