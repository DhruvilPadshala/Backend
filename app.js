const express = require("express");
const app = express();
const connectDB = require("./src/DB/connect");
const PORT = process.env.MONGODB_PORT || 3000;
const userRoutes = require("./src/routes/index");

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
