import User from "../models/userModel.js";
import { generateOTP } from "../utils/otpGenerator.js";
import { sendOTP } from "../config/nodemailer.js";
import { generateToken } from "../utils/token.js";
import dotenv from 'dotenv';
dotenv.config();

import { OAuth2Client } from "google-auth-library";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID); 

export const requestOTP = async (req, res) => {
  try {
    const { email, role } = req.body;

    const otp = generateOTP();

    let user = await User.findOne({ email });

    if (user) {
      user.otp = otp;
      user.loginType = "email";
      if (!user.role && role) {
        user.role = role;
      }
    } else {
      user = new User({
        email,
        otp,
        loginType: "email",
        role: role || null,
      });
    }

    await user.save();
    await sendOTP(email, otp);

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send OTP", error: error.message });
  }
};


export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.otp !== otp) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    user.isVerified = true;
    user.otp = null;
    await user.save();

    const token = generateToken({ id: user._id });

    res.status(200).json({
      message: "OTP verified",
      token,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "OTP verification failed", error: error.message });
  }
};

export const googleLogin = async (req, res) => {
  try {
    const { token, role } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();
    const { email } = payload;

    let user = await User.findOne({ email });

    if (!user) {
      user = new User({
        email,
        loginType: "google",
        isVerified: true,
        role: role || null,
      });
    } else if (!user.role && role) {
      user.role = role; 
    }

    await user.save();

    const jwtToken = generateToken({ id: user._id });

    res.status(200).json({
      message: "Google login successful",
      token: jwtToken,
      user: {
        id: user._id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({ message: "Google login failed", error: error.message });
  }
};
// in controllers/userController.js
export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-otp");
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch user", error: err.message });
  }
};
