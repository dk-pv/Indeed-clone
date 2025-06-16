import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  jobTitle: { type: String, required: true },
  companyName: { type: String, required: true },
  openings: { type: Number, required: true },
  country: { type: String, required: true },
  language: { type: String, required: true },
  advertisingLocation: { type: String },
  location: { type: String },
  jobType: { type: String },
  schedule: { type: String },
  payRange: { type: String },
  supplementalPay: { type: String },
  benefits: { type: String },
  jobDescription: { type: String },
  applicationMethod: { type: String },
  requireCV: { type: String },
  applicationEmail: { type: String },
  candidatesContact: { type: Boolean },
  recruitmentTimeline: { type: String },
  contactPerson: { type: String },
  phone: { type: String },
  referralSource: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // authentication linkage
}, { timestamps: true });

const Job = mongoose.model("Job", jobSchema);
export default Job;
