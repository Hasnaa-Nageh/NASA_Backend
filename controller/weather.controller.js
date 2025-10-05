const getWeatherPrediction = require("./../services/mlService");
const getWeather = async (req, res) => {
  try {
    const { region } = req.body;
    const date = new Date().toISOString().split("T")[0];

    const result = await getWeatherPrediction(date, region);
    res.status(200).json({ status: "success", data: result });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: err.message,
    });
  }
};

module.exports = getWeather;
