const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const activityRoutes = require("./routes/activityRoutes");
const PORT = process.env.PORT || 5000;
const authRoutes = require("./routes/authRoutes");
const morgan = require("morgan");
dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/employees", employeeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/auth", authRoutes);
app.get("/", (req, res) => {
  res.send("🚀 WorkforceIQ Backend Running...");
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});