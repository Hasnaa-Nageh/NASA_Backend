const express = require("express");
const getWeather = require("./../controller/weather.controller");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather Prediction API
 */

/**
 * @swagger
 * /api/weather:
 *   post:
 *     summary: Get weather prediction by date and region
 *     tags: [Weather]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *               - region
 *             properties:
 *               date:
 *                 type: string
 *                 example: "2025-12-01"
 *               region:
 *                 type: string
 *                 example: "North"
 *     responses:
 *       200:
 *         description: Successful weather prediction
 *       500:
 *         description: Server error
 */

router.get("/weather", (req, res) => {
  res.status(405).json({
    success: false,
    message:
      "This endpoint only supports POST method. Please send date and region in the request body.",
    example_body: {
      date: "2025-12-01",
      region: "North",
    },
  });
});

router.post("/weather", getWeather);

module.exports = router;
