const express = require("express");
const app = express();
const connectDB = require("./DB/connect");
const PORT = process.env.MONGODB_PORT || 3000;

app.use(express.json());

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/api/users", (req, res) => {
  res.send([
    {
      name: "Dhruvil",
      age: 20,
    },
    {
      name: "Divyesh",
      age: 23,
    },
    { name: "Bhautik", age: 22 },
  ]);
});
