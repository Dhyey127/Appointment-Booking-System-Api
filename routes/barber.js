var express = require("express");
const { addBarber } = require("../services/barber/barber.controller");
var router = express.Router();

router.post("/add", addBarber);

module.exports = router;
