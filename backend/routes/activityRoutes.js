const express = require("express");

const {
  getActivities,
  addActivity,
  deleteActivities,
} = require("../controllers/activityController");

const router = express.Router();

router.get("/", getActivities);

router.post("/", addActivity);

router.delete("/", deleteActivities);

module.exports = router;