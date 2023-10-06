const express = require("express");
const mongoose = require("mongoose");
const Class = require("./Routes/Class");
const sessionData = require("./sessionData");
const bodyParser = require("body-parser");
const userRoutes = require("./Routes/UserRoutes");
// const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
// Connect to MongoDB
const dbUrl =
  "mongodb+srv://arunramasamy46:arunramasamy46@cluster0.vspc3li.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Nodemailer configuration

// Routes
app.use("/", userRoutes);
app.use("/api/class", Class);

app.get("/sessiondata", (req, res) => {
  res.send(sessionData);
});

app.get("/", (req, res) => {
  res.send("Backend Login Page!!!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
