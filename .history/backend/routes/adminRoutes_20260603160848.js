const express = require("express");

const router = express.Router();

const { getResponses } = require("../controllers/adminController");

router.get("/responses", getResponses);

module.exports = router;
