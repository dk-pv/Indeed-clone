import { useEffect, useState } from "react";

const JobPostReview = () => {
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("jobPostStep6"));
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

  if (!formData) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-600">
        No job data found. Please complete the job post steps first.
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">Review Job Post</h1>

      {/* Step 1: Employer Info */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Employer Info</h2>
        <p><strong>Company Name:</strong> {formData.employerInfo?.companyName}</p>
        <p><strong>Full Name:</strong> {formData.employerInfo?.fullName}</p>
        <p><strong>Referral Source:</strong> {formData.employerInfo?.referralSource || "N/A"}</p>
        <p><strong>Phone:</strong> {formData.employerInfo?.phone}</p>
      </section>

      {/* Step 2: Job Details */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Job Details</h2>
        <p><strong>Job Title:</strong> {formData.jobDetails?.jobTitle}</p>
        <p><strong>Location Type:</strong> {formData.jobDetails?.locationType}</p>
        <p><strong>City:</strong> {formData.jobDetails?.city}</p>
        <p><strong>Area:</strong> {formData.jobDetails?.area || "N/A"}</p>
        <p><strong>Pincode:</strong> {formData.jobDetails?.pincode || "N/A"}</p>
        <p><strong>Address:</strong> {formData.jobDetails?.address || "N/A"}</p>
      </section>

      {/* Step 3: Hiring Preferences */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Hiring Preferences</h2>
        <p><strong>Job Types:</strong> {(formData.hiringPreferences?.jobTypes || []).join(", ")}</p>
        <p><strong>Schedules:</strong> {(formData.hiringPreferences?.schedules || []).join(", ") || "N/A"}</p>
        <p><strong>Number of People:</strong> {formData.hiringPreferences?.numberOfPeople}</p>
        <p><strong>Recruitment Timeline:</strong> {formData.hiringPreferences?.recruitmentTimeline}</p>
      </section>

      {/* Step 4: Compensation */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Compensation</h2>
        <p>
          <strong>Salary Range:</strong> ₹{formData.compensation?.salaryRange?.min} - ₹{formData.compensation?.salaryRange?.max}
        </p>
        <p><strong>Supplemental Pay:</strong> {(formData.compensation?.supplementalPay || []).join(", ") || "N/A"}</p>
        <p><strong>Benefits:</strong> {(formData.compensation?.benefits || []).join(", ") || "N/A"}</p>
      </section>

      {/* Step 5: Communication Preferences */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Communication Preferences</h2>
        <p><strong>Primary Email:</strong> {formData.communicationPreferences?.primaryEmail}</p>
        <p>
          <strong>Additional Emails:</strong>{" "}
          {(formData.communicationPreferences?.additionalEmails || []).length > 0
            ? formData.communicationPreferences.additionalEmails.join(", ")
            : "None"}
        </p>
        <p><strong>Individual Emails:</strong> {formData.communicationPreferences?.individualEmails ? "Yes" : "No"}</p>
        <p><strong>Resume Required:</strong> {formData.communicationPreferences?.resumeRequired ? "Yes" : "No"}</p>
        <p><strong>Allow Candidate Contact:</strong> {formData.communicationPreferences?.allowCandidateContact ? "Yes" : "No"}</p>
      </section>

      {/* Final Step: Job Description */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Job Description</h2>
        <p>{formData.jobDescription}</p>
      </section>
    </div>
  );
};

export default JobPostReview;
