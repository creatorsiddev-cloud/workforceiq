const Activity = require("../models/Activity");

// ==========================================
// Get Activities
// ==========================================

const getActivities = async (req, res) => {
  try {
    const activities = await Activity.find()
      .sort({ createdAt: -1 })
       .limit(5);
     

    res.json(activities);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================================
// Add Activity
// ==========================================

const addActivity = async (req, res) => {
  try {

    const activity = await Activity.create(req.body);

    res.status(201).json(activity);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// ==========================================
// Delete All Activities
// ==========================================

const deleteActivities = async (req, res) => {
  try {

    await Activity.deleteMany();

    res.json({
      message: "All activities deleted.",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  getActivities,
  addActivity,
  deleteActivities,
};