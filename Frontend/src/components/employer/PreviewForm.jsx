// // PreviewForm.jsx
// import { Edit } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function PreviewForm({
//   formData,
//   setActiveForm,
//   handleFinalSubmit,
//   navigate,
// }) {
//   const renderListItems = (items) => {
//     if (items.length === 0) return "Not specified";
//     return (
//       <ul className="list-disc list-inside">
//         {items.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//         <h1 className="text-2xl font-bold text-gray-900 mb-8">
//           Job Post Preview
//         </h1>

//         <div className="space-y-10">
//           {/* Account Information */}
//           <div className="border-b pb-6">
//             <div className="flex justify-between items-start">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Account Information
//               </h2>
//               <button
//                 onClick={() => setActiveForm("account")}
//                 className="text-blue-600 hover:text-blue-800 flex items-center"
//               >
//                 <Edit className="w-4 h-4 mr-1" /> Edit
//               </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-500">Company Name</p>
//                 <p className="font-medium">
//                   {formData.companyName || "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Contact Person</p>
//                 <p className="font-medium">
//                   {formData.fullName || "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Referral Source</p>
//                 <p className="font-medium">
//                   {formData.referralSource || "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Phone Number</p>
//                 <p className="font-medium">
//                   {formData.phone || "Not specified"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Job Information */}
//           <div className="border-b pb-6">
//             <div className="flex justify-between items-start">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Job Information
//               </h2>
//               <button
//                 onClick={() => setActiveForm("job")}
//                 className="text-blue-600 hover:text-blue-800 flex items-center"
//               >
//                 <Edit className="w-4 h-4 mr-1" /> Edit
//               </button>
//             </div>
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm text-gray-500">Job Title</p>
//                 <p className="font-medium">
//                   {formData.jobTitle || "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Job Description</p>
//                 <p className="whitespace-pre-line">
//                   {formData.jobDescription || "Not specified"}
//                 </p>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <div>
//                   <p className="text-sm text-gray-500">Location Type</p>
//                   <p className="font-medium">
//                     {formData.locationType || "Not specified"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">City</p>
//                   <p className="font-medium">
//                     {formData.city || "Not specified"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Area</p>
//                   <p className="font-medium">
//                     {formData.area || "Not specified"}
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Pincode</p>
//                   <p className="font-medium">
//                     {formData.pincode || "Not specified"}
//                   </p>
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Address</p>
//                 <p className="font-medium">
//                   {formData.address || "Not specified"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Job Details */}
//           <div className="border-b pb-6">
//             <div className="flex justify-between items-start">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Job Details
//               </h2>
//               <button
//                 onClick={() => setActiveForm("details")}
//                 className="text-blue-600 hover:text-blue-800 flex items-center"
//               >
//                 <Edit className="w-4 h-4 mr-1" /> Edit
//               </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-500">Job Types</p>
//                 <div className="font-medium">
//                   {renderListItems(formData.jobTypes)}
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Schedules</p>
//                 <div className="font-medium">
//                   {renderListItems(formData.schedules)}
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">
//                   Number of People to Hire
//                 </p>
//                 <p className="font-medium">
//                   {formData.numberOfPeople || "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Recruitment Timeline</p>
//                 <p className="font-medium">
//                   {formData.recruitmentTimeline || "Not specified"}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Pay & Benefits */}
//           <div className="border-b pb-6">
//             <div className="flex justify-between items-start">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Pay & Benefits
//               </h2>
//               <button
//                 onClick={() => setActiveForm("payBenefits")}
//                 className="text-blue-600 hover:text-blue-800 flex items-center"
//               >
//                 <Edit className="w-4 h-4 mr-1" /> Edit
//               </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-500">Pay Range</p>
//                 <p className="font-medium">
//                   {formData.payRange.min || formData.payRange.max
//                     ? `₹${formData.payRange.min || "0"} - ₹${
//                         formData.payRange.max || "0"
//                       } per month`
//                     : "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Supplemental Pay</p>
//                 <div className="font-medium">
//                   {renderListItems(formData.supplementalPay)}
//                 </div>
//               </div>
//               <div className="md:col-span-2">
//                 <p className="text-sm text-gray-500">Benefits</p>
//                 <div className="font-medium">
//                   {renderListItems(formData.benefits)}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Preferences */}
//           <div>
//             <div className="flex justify-between items-start">
//               <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                 Preferences
//               </h2>
//               <button
//                 onClick={() => setActiveForm("preferences")}
//                 className="text-blue-600 hover:text-blue-800 flex items-center"
//               >
//                 <Edit className="w-4 h-4 mr-1" /> Edit
//               </button>
//             </div>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <p className="text-sm text-gray-500">Notification Email</p>
//                 <p className="font-medium">
//                   {formData.email || "Not specified"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Additional Emails</p>
//                 <div className="font-medium">
//                   {formData.additionalEmails.length > 0 ? (
//                     <ul className="list-disc list-inside">
//                       {formData.additionalEmails.map((email, index) => (
//                         <li key={index}>{email || "Not specified"}</li>
//                       ))}
//                     </ul>
//                   ) : (
//                     "Not specified"
//                   )}
//                 </div>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Individual Emails</p>
//                 <p className="font-medium">
//                   {formData.individualEmails ? "Yes" : "No"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Resume Required</p>
//                 <p className="font-medium">
//                   {formData.resumeRequired ? "Yes" : "No"}
//                 </p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Contact Candidates</p>
//                 <p className="font-medium">
//                   {formData.contactCandidates ? "Yes" : "No"}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Final Submission Buttons */}
//         <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
//           <button
//             type="button"
//             onClick={() => setActiveForm("preferences")}
//             className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
//           >
//             Back
//           </button>
//           <div className="space-x-4">
//             <button
//               type="button"
//               onClick={() => navigate("/dashboard")}
//               className="px-6 py-3 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
//             >
//               Save Draft
//             </button>
//             <button
//               type="button"
//               onClick={handleFinalSubmit}
//               className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//             >
//               Submit Job Post
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Edit, AlertCircle, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PreviewForm({
  formData,
  setActiveForm,
  handleFinalSubmit,
  navigate,
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Exception handling for form navigation
  const handleNavigation = (formName) => {
    try {
      if (!setActiveForm || typeof setActiveForm !== 'function') {
        throw new Error('Navigation function not available');
      }
      if (!formName) {
        throw new Error('Form name is required');
      }
      setActiveForm(formName);
    } catch (error) {
      console.error('Navigation error:', error);
      alert('Unable to navigate. Please try again.');
    }
  };

  // Exception handling for dashboard navigation
  const handleDashboardNavigation = () => {
    try {
      if (!navigate || typeof navigate !== 'function') {
        throw new Error('Navigate function not available');
      }
      navigate("/dashboard");
    } catch (error) {
      console.error('Dashboard navigation error:', error);
      alert('Unable to navigate to dashboard. Please try again.');
    }
  };

  // Exception handling for final form submission
  const handleSubmission = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      if (!handleFinalSubmit || typeof handleFinalSubmit !== 'function') {
        throw new Error('Submit function not available');
      }
      
      if (!formData) {
        throw new Error('Form data is required for submission');
      }

      // Validate required fields
      const requiredFields = ['companyName', 'fullName', 'email', 'jobTitle', 'jobDescription'];
      const missingFields = requiredFields.filter(field => !formData[field]);
      
      if (missingFields.length > 0) {
        throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
      }

      await handleFinalSubmit();
    } catch (error) {
      console.error('Final submission error:', error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Exception handling for rendering list items
  const renderListItems = (items) => {
    try {
      if (!items || !Array.isArray(items)) {
        return <span className="text-gray-500 italic">Not specified</span>;
      }
      
      if (items.length === 0) {
        return <span className="text-gray-500 italic">Not specified</span>;
      }
      
      return (
        <ul className="list-disc list-inside space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-gray-700">{item || 'Not specified'}</li>
          ))}
        </ul>
      );
    } catch (error) {
      console.error('List rendering error:', error);
      return <span className="text-red-500">Error displaying items</span>;
    }
  };

  // Exception handling for rendering field value
  const renderFieldValue = (value, fallback = "Not specified") => {
    try {
      if (value === null || value === undefined || value === '') {
        return <span className="text-gray-500 italic">{fallback}</span>;
      }
      return <span className="text-gray-700">{value}</span>;
    } catch (error) {
      console.error('Field rendering error:', error);
      return <span className="text-red-500">Error displaying value</span>;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Job Post Preview</h1>
              <p className="text-blue-100">Review your job posting before submission</p>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
              <CheckCircle className="w-5 h-5 text-green-300" />
              <span className="text-white text-sm font-medium">Ready to Submit</span>
            </div>
          </div>
        </div>

        <div className="px-8 py-6">
          {/* Error Display */}
          {submitError && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
              <div>
                <h3 className="font-medium text-red-800">Submission Error</h3>
                <p className="text-red-600 text-sm mt-1">{submitError}</p>
              </div>
            </div>
          )}

          <div className="space-y-8">
            {/* Account Information */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">Account Information</h2>
                <button
                  onClick={() => handleNavigation("account")}
                  className="flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Company Name</p>
                  <p className="text-lg font-semibold">{renderFieldValue(formData?.companyName)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Contact Person</p>
                  <p className="text-lg font-semibold">{renderFieldValue(formData?.fullName)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Referral Source</p>
                  <p className="text-lg font-semibold">{renderFieldValue(formData?.referralSource)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Phone Number</p>
                  <p className="text-lg font-semibold">{renderFieldValue(formData?.phone)}</p>
                </div>
              </div>
            </div>

            {/* Job Information */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">Job Information</h2>
                <button
                  onClick={() => handleNavigation("job")}
                  className="flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </button>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Job Title</p>
                  <p className="text-2xl font-bold text-gray-800">{renderFieldValue(formData?.jobTitle)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Job Description</p>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                      {formData?.jobDescription || "Not specified"}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location Type</p>
                    <p className="font-semibold">{renderFieldValue(formData?.locationType)}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">City</p>
                    <p className="font-semibold">{renderFieldValue(formData?.city)}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Area</p>
                    <p className="font-semibold">{renderFieldValue(formData?.area)}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pincode</p>
                    <p className="font-semibold">{renderFieldValue(formData?.pincode)}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Address</p>
                  <p className="font-semibold">{renderFieldValue(formData?.address)}</p>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">Job Details</h2>
                <button
                  onClick={() => handleNavigation("details")}
                  className="flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Job Types</p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    {renderListItems(formData?.jobTypes)}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Schedules</p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    {renderListItems(formData?.schedules)}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Number of People to Hire</p>
                  <p className="text-lg font-semibold">{renderFieldValue(formData?.numberOfPeople)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Recruitment Timeline</p>
                  <p className="text-lg font-semibold">{renderFieldValue(formData?.recruitmentTimeline)}</p>
                </div>
              </div>
            </div>

            {/* Pay & Benefits */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">Pay & Benefits</h2>
                <button
                  onClick={() => handleNavigation("payBenefits")}
                  className="flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Pay Range</p>
                  <p className="text-lg font-semibold text-green-600">
                    {formData?.payRange?.min || formData?.payRange?.max
                      ? `₹${formData.payRange.min || "0"} - ₹${formData.payRange.max || "0"} per month`
                      : "Not specified"}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Supplemental Pay</p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    {renderListItems(formData?.supplementalPay)}
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Benefits</p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    {renderListItems(formData?.benefits)}
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-800">Communication & Preferences</h2>
                <button
                  onClick={() => handleNavigation("preferences")}
                  className="flex items-center text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg transition-all duration-200 font-medium"
                >
                  <Edit className="w-4 h-4 mr-2" /> Edit
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Notification Email</p>
                  <p className="font-semibold text-blue-600">{renderFieldValue(formData?.email)}</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Additional Emails</p>
                  <div className="bg-white p-3 rounded-lg border border-gray-200">
                    {formData?.additionalEmails?.length > 0 ? (
                      <ul className="list-disc list-inside space-y-1">
                        {formData.additionalEmails.map((email, index) => (
                          <li key={index} className="text-gray-700 text-sm">
                            {email || "Not specified"}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <span className="text-gray-500 italic">Not specified</span>
                    )}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Settings</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${formData?.individualEmails ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-sm">Individual email notifications</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${formData?.resumeRequired ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-sm">Resume required</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${formData?.contactCandidates ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                      <span className="text-sm">Allow candidate contact</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Submission Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200 mt-8">
            <button
              type="button"
              onClick={() => handleNavigation("preferences")}
              className="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105"
            >
              ← Back
            </button>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleDashboardNavigation}
                className="px-6 py-3 bg-white text-gray-600 border-2 border-gray-300 font-semibold rounded-xl hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-200 transform hover:scale-105"
              >
                Save Draft
              </button>
              <button
                type="button"
                onClick={handleSubmission}
                disabled={isSubmitting}
                className={`px-8 py-3 font-semibold rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                }`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Job Post →'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}