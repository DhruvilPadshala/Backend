const csvParser = require("csv-parser");
const fs = require("fs");
const Csv = require("../../model/csvModel");

const uploadCsv = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const filePath = req.file.path;
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      try {
        await Csv.insertMany(results);
        fs.unlinkSync(filePath);
        res
          .status(200)
          .json({ data: results, message: "Data saved successfully" });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
    })
    .on("error", (error) => {
      res.status(500).json({ error: error.message });
    });
};
module.exports = { uploadCsv };
