const express = require("express");
const cors = require("cors");
const weatherRouter = require("./routes/weather.route");
const app = express();
app.use(cors());
app.use(express.json());


app.use("/api", weatherRouter);

app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});
