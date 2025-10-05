const getWeatherPrediction = require("../services/mlService");

const getWeather = async (req, res) => {
  try {
    const { date, region } = req.body;

    if (!date || !region) {
      return res.status(400).json({
        success: false,
        message: "Please provide both 'date' and 'region' in the request body.",
      });
    }

    const result = await getWeatherPrediction(date, region);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

module.exports = getWeather;
