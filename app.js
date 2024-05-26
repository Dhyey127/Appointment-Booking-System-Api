var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const http = require("http");
const mongoose = require("mongoose");
const cors = require("cors");

var salonRouter = require("./routes/salon");
var barberRouter = require("./routes/barber");
var slotRouter = require("./routes/slot");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const corsOptions = {
  origin: "http://localhost:5000",
};

app.use(cors(corsOptions));

app.use("/salon", salonRouter);
app.use("/barber", barberRouter);
app.use("/slot", slotRouter);

// Connection URL
const url =
  "mongodb+srv://Bhargav:rwr5jafuDiwBpWlw@hms.ynxk9u3.mongodb.net/abs";

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

let https = http.Server(app);

const port = 4000;
const host = "localhost";

https.listen(port, host, () => {
  console.log(`Listening on http://${host}:${port}`);
});

module.exports = app;
