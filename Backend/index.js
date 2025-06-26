import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from './routes/jobRoutes.js'
import errorHandler from './middleware/errorHandler.js';
import locationRoutes from "./routes/locationRoutes.js";

connectDB();
const app = express();
app.use(errorHandler);

console.log("EMAIL_USER:", process.env.EMAIL_USER); 
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/job", jobRoutes);
app.use("/api/locations", locationRoutes);



app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
