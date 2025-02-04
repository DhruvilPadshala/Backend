const express = require("express");
const app = express();
const connectDB = require("./src/DB/connect");
const userRoutes = require("./src/routes/index");
const dotenv = require("dotenv");

const PORT = process.env.MONGODB_PORT || 3000;

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/api", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
