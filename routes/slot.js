var express = require("express");
const { createSlots, bookSlot } = require("../services/slot/slot.controller");
var router = express.Router();

router.post("/create", createSlots);

router.put("/book-slot", bookSlot);

module.exports = router;
