const axios = require("axios");

const getWeatherPrediction = async (date, region) => {
  const response = await axios.post("http://127.0.0.1:8000/predict", null, {
    params: { date, region },
  });
  return response.data;
};

module.exports = getWeatherPrediction;
