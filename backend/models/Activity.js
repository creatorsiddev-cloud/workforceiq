const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema(
  {
    module: {
      type: String,
      required: true,
      enum: ["Employee", "Department"],
    },

    action: {
      type: String,
      required: true,
      enum: ["Added", "Updated", "Deleted"],
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", activitySchema);