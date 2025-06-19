import Job from '../models/jobModel.js';
import asyncHandler from 'express-async-handler';


export const createJob = asyncHandler(async (req, res) => {
  const {
    company,
    job,
    details,
    payAndBenefits,
    preferences,
    status
  } = req.body;

  const newJob = await Job.create({
    employer: req.user._id,

    // 🔹 Nested structure → Schema match
    company: {
      name: company.name,
      contactPerson: company.contactPerson,
      phone: company.phone,
      referralSource: company.referralSource,
    },

    job: {
      title: job.title,
      description: job.description,
      location: job.location
    },

    jobTypes: details.jobTypes,
    schedules: details.schedules,
    numberOfPeople: details.hiringCount,
    recruitmentTimeline: details.timeline,

    payRange: {
      min: payAndBenefits.minSalary,
      max: payAndBenefits.maxSalary,
      currency: payAndBenefits.currency || 'INR'
    },
    supplementalPay: payAndBenefits.supplementalPay,
    benefits: payAndBenefits.benefits,

    preferences,
    status
  });

  res.status(201).json({
    success: true,
    data: newJob
  });
});



export const getAllJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ status: 'published' })
    .populate('employer', 'name email companyName')
    .sort('-createdAt');

  res.status(200).json({
    success: true,
    count: jobs.length,
    data: jobs
  });
});



export const getAJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)
    .populate('employer', 'name email companyName');

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  res.status(200).json({
    success: true,
    data: job
  });
});

// @desc    Update job
// @route   PUT /api/jobs/:id
// @access  Private (Employer)
export const updateJob = asyncHandler(async (req, res) => {
  let job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  if (job.employer.toString() !== req.user._id) {
    res.status(401);
    throw new Error('Not authorized to update this job');
  }

  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: job
  });
});

// @desc    Delete job
// @route   DELETE /api/jobs/:id
// @access  Private (Employer)
export const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  if (job.employer.toString() !== req.user._id) {
    res.status(401);
    throw new Error('Not authorized to delete this job');
  }

  await job.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Get jobs by employer
// @route   GET /api/jobs/employer/my-jobs
// @access  Private (Employer)
export const getEmployerJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({ employer: req.user._id }).sort('-createdAt');

  res.status(200).json({
    success: true,
    count: jobs.length,
    data: jobs
  });
});

// @desc    Update job status
// @route   PUT /api/jobs/:id/status
// @access  Private (Employer)
export const updateJobStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  let job = await Job.findById(req.params.id);

  if (!job) {
    res.status(404);
    throw new Error('Job not found');
  }

  if (job.employer.toString() !== req.user._id) {
    res.status(401);
    throw new Error('Not authorized to update this job');
  }

  job.status = status;
  await job.save();

  res.status(200).json({
    success: true,
    data: job
  });
});
