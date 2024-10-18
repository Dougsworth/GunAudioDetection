const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const port = 5001;

// Enable CORS for all domains or specify localhost:3000
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Set up multer to handle file uploads
const upload = multer({ dest: "uploads/" });

app.post("/detect-gunshot", upload.single("audio"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No audio file provided" });
  }

  const audioFilePath = req.file.path;

  // Log audio file details
  console.log("Audio file uploaded:");
  console.log(`- Filename: ${req.file.originalname}`);
  console.log(`- Size: ${req.file.size} bytes`);
  console.log(`- Path: ${audioFilePath}`);

  try {
    // Placeholder for detection logic
    // Implement your real detection logic here
    const detectionResult = "Gunshot detected!"; // Simulate detection result

    // Clean up: delete the audio file if it's no longer needed
    fs.unlinkSync(audioFilePath);

    return res.json({
      message: detectionResult,
      filename: req.file.originalname,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
