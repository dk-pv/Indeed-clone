// controllers/locationController.js
import Location from "../models/locationModel.js";
export const getAllLocations = async (req, res) => {
  try {
    const locations = await Location.find({});
    console.log("Fetched locations:", locations); // Add this
    res.status(200).json(locations);
  } catch (error) {
    console.error("Fetch error:", error);
    res.status(500).json({ message: "Failed to fetch locations" });
  }
};
