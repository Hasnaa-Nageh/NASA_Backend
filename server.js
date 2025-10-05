const express = require("express");
const cors = require("cors");
const weatherRouter = require("./routes/weather.route");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "NASA Weather Prediction API",
      version: "1.0.0",
      description: "API documentation for the weather prediction system",
    },
    servers: [
      { url: "https://nasa-backend-six.vercel.app" },
      { url: "http://localhost:3000" },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Routes
app.use("/api", weatherRouter);

// Swagger endpoints
app.get("/swagger.json", (req, res) => {
  res.json(swaggerSpec);
});

// 👇 دي اللي بتخلي swagger يفتح صفحة UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(3000, () => {
  console.log("Server Running On Port 3000");
});
