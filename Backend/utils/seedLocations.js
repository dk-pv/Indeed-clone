// utils/seedLocations.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import Location from "../models/locationModel.js";

dotenv.config();

// Get absolute path to Location.json
const __dirname = path.resolve();
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "utils", "Location.json"), "utf-8")
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Location.deleteMany();
    await Location.insertMany(data);
    console.log("✅ Locations seeded successfully");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Error seeding:", err);
    process.exit(1);
  });
