const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const connectDB = require("./config/db");
const Admin = require("./models/Admin");

const seed = async () => {
  try {
    await connectDB();

    const exists = await Admin.findOne({
      email: "admin@workforceiq.com",
    });

    if (exists) {
      console.log("Admin already exists");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      "admin123",
      10
    );

    await Admin.create({
      name: "Admin",
      email: "admin@workforceiq.com",
      password: hashedPassword,
    });

    console.log("Admin Created");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit(1);
  }
};

seed();