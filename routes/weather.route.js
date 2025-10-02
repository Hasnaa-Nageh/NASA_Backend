const express = require("express");
const getWeather = require("./../controller/weather.controller");
const router = express.Router();

router.post("/weather", getWeather);

module.exports = router;
