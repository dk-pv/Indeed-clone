// PreviewForm.jsx
import { Edit } from "lucide-react";
import { Link } from "react-router-dom";

export default function PreviewForm({
  formData,
  setActiveForm,
  handleFinalSubmit,
  navigate,
}) {
  const renderListItems = (items) => {
    if (items.length === 0) return "Not specified";
    return (
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">
          Job Post Preview
        </h1>

        <div className="space-y-10">
          {/* Account Information */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Account Information
              </h2>
              <button
                onClick={() => setActiveForm("account")}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Company Name</p>
                <p className="font-medium">
                  {formData.companyName || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact Person</p>
                <p className="font-medium">
                  {formData.fullName || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Referral Source</p>
                <p className="font-medium">
                  {formData.referralSource || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone Number</p>
                <p className="font-medium">
                  {formData.phone || "Not specified"}
                </p>
              </div>
            </div>
          </div>

          {/* Job Information */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Job Information
              </h2>
              <button
                onClick={() => setActiveForm("job")}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Job Title</p>
                <p className="font-medium">
                  {formData.jobTitle || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Job Description</p>
                <p className="whitespace-pre-line">
                  {formData.jobDescription || "Not specified"}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Location Type</p>
                  <p className="font-medium">
                    {formData.locationType || "Not specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">City</p>
                  <p className="font-medium">
                    {formData.city || "Not specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Area</p>
                  <p className="font-medium">
                    {formData.area || "Not specified"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Pincode</p>
                  <p className="font-medium">
                    {formData.pincode || "Not specified"}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Address</p>
                <p className="font-medium">
                  {formData.address || "Not specified"}
                </p>
              </div>
            </div>
          </div>

          {/* Job Details */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Job Details
              </h2>
              <button
                onClick={() => setActiveForm("details")}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Job Types</p>
                <div className="font-medium">
                  {renderListItems(formData.jobTypes)}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Schedules</p>
                <div className="font-medium">
                  {renderListItems(formData.schedules)}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">
                  Number of People to Hire
                </p>
                <p className="font-medium">
                  {formData.numberOfPeople || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Recruitment Timeline</p>
                <p className="font-medium">
                  {formData.recruitmentTimeline || "Not specified"}
                </p>
              </div>
            </div>
          </div>

          {/* Pay & Benefits */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Pay & Benefits
              </h2>
              <button
                onClick={() => setActiveForm("payBenefits")}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Pay Range</p>
                <p className="font-medium">
                  {formData.payRange.min || formData.payRange.max
                    ? `₹${formData.payRange.min || "0"} - ₹${
                        formData.payRange.max || "0"
                      } per month`
                    : "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Supplemental Pay</p>
                <div className="font-medium">
                  {renderListItems(formData.supplementalPay)}
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-gray-500">Benefits</p>
                <div className="font-medium">
                  {renderListItems(formData.benefits)}
                </div>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div>
            <div className="flex justify-between items-start">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Preferences
              </h2>
              <button
                onClick={() => setActiveForm("preferences")}
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <Edit className="w-4 h-4 mr-1" /> Edit
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Notification Email</p>
                <p className="font-medium">
                  {formData.email || "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Additional Emails</p>
                <div className="font-medium">
                  {formData.additionalEmails.length > 0 ? (
                    <ul className="list-disc list-inside">
                      {formData.additionalEmails.map((email, index) => (
                        <li key={index}>{email || "Not specified"}</li>
                      ))}
                    </ul>
                  ) : (
                    "Not specified"
                  )}
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500">Individual Emails</p>
                <p className="font-medium">
                  {formData.individualEmails ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Resume Required</p>
                <p className="font-medium">
                  {formData.resumeRequired ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Contact Candidates</p>
                <p className="font-medium">
                  {formData.contactCandidates ? "Yes" : "No"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Submission Buttons */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
          <button
            type="button"
            onClick={() => setActiveForm("preferences")}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
          >
            Back
          </button>
          <div className="space-x-4">
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="px-6 py-3 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={handleFinalSubmit}
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
            >
              Submit Job Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}