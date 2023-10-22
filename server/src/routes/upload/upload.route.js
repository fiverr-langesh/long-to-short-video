const express = require("express");
const router = express.Router();

const upload = require("../../middlewares/multer.middleware");

// Define the upload route
router.post("/", upload, (req, res) => {
  console.log(req.file);
  res.json({url: `http://localhost:8000/uploads/${req.file.filename}`});
});

module.exports = {uploadRouter: router};
