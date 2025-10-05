const express = require("express");
const getWeather = require("./../controller/weather.controller");
const router = express.Router();

router.get("/weather", (req, res) => {
  res.json({ message: "Server Running Successfully" });
});
router.post("/weather", getWeather);

module.exports = router;
