const axios = require("axios");

const getWeatherPrediction = async (date, region) => {
  const response = await axios.post("https://web-production-ef502.up.railway.app/predict", null, {
    params: { date, region },
  });
  return response.data;
};

module.exports = getWeatherPrediction;
