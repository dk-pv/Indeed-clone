import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: String, // for email login
  isVerified: { type: Boolean, default: false },
  loginType: { type: String, enum: ["google", "email"], required: true },
  role: { type: String, enum: ["jobSeeker", "employer"], default: null },
}, { timestamps: true });

export default mongoose.model("User", userSchema);


