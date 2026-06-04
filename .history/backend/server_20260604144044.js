require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://smart-pillow-survey.vercel.app",
    "https://smart-pillow-survey-d65pu0223-luongptce181311s-projects.vercel.app",
  ],
}));


app.use(express.json());

app.use("/api/survey", require("./routes/surveyRoutes"));

app.use("/api/admin", require("./routes/adminRoutes"));

app.get("/", (req, res) => {
  res.send("Smart Pillow API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
