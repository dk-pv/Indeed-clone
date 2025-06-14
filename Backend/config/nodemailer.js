import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config(); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendOTP = async (email, otp) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    html: `<p>Your OTP is <b>${otp}</b></p>`,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("OTP sent:", result.response);
  } catch (error) {
    console.error("Email Error:", error.message);
    throw new Error("Failed to send OTP");
  }
};
