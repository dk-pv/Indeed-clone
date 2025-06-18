
// import { useState, useEffect } from "react";
// import { ChevronDown, ExternalLink, LogOut } from "lucide-react";
// import { Link } from "react-router-dom";
// import jobpostImg6 from "../assets/jobpost6.png";
// import "react-phone-input-2/lib/style.css";

// export default function IndeedEmployerPage() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState("user@example.com");
//   const [formEmail, setFormEmail] = useState("user@example.com");

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     const email = user?.email || "user@example.com";
//     setUserEmail(email);
//     setFormEmail(email);
//   }, []);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Navbar */}
//       <nav className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <span className="text-2xl font-bold text-blue-600">indeed</span>
//             <div className="relative">
//               <button
//                 onClick={toggleDropdown}
//                 className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
//               >
//                 <span className="text-sm">{userEmail}</span>
//                 <ChevronDown className="w-4 h-4" />
//               </button>
//               {isDropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
//                   <div className="py-1">
//                     <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
//                       {userEmail}
//                     </div>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//                     >
//                       <span className="mr-3">
//                         <svg
//                           className="w-4 h-4"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                       </span>
//                       <span className="flex-1">
//                         Visit Indeed for jobseekers
//                       </span>
//                       <ExternalLink className="w-4 h-4 ml-2" />
//                     </a>
//                     <a
//                       href="#"
//                       className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
//                     >
//                       <LogOut className="w-4 h-4 mr-3" />
//                       <span>Sign out</span>
//                     </a>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Header Image */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
//         <img
//           src={jobpostImg6}
//           alt="Job post"
//           className="w-[800px] h-[250px] object-contain mx-auto"
//         />
//       </div>

//       {/* Form */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//           {/* Communication preferences */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-900 mb-6">
//               Communication preferences
//             </h2>

//             <div className="mb-6">
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Get application updates <span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="email"
//                 value={formEmail}
//                 onChange={(e) => setFormEmail(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                 placeholder="Enter email address"
//               />
//             </div>

//             <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6">
//               <span className="text-xl mr-2">+</span>
//               Add email
//             </button>

//             <div className="flex items-start">
//               <input
//                 type="checkbox"
//                 id="individual-emails"
//                 className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//               />
//               <label
//                 htmlFor="individual-emails"
//                 className="ml-3 text-sm text-gray-700"
//               >
//                 Send an individual email each time someone applies.
//               </label>
//             </div>
//           </div>

//           {/* Application preferences */}
//           <div className="mb-8">
//             <h2 className="text-xl font-semibold text-gray-900 mb-6">
//               Application preferences
//             </h2>

//             <div className="space-y-4">
//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="resume-required"
//                   className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label
//                   htmlFor="resume-required"
//                   className="ml-3 text-sm text-gray-700"
//                 >
//                   Resume is required
//                 </label>
//               </div>

//               <div className="flex items-start">
//                 <input
//                   type="checkbox"
//                   id="contact-candidates"
//                   className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                 />
//                 <label
//                   htmlFor="contact-candidates"
//                   className="ml-3 text-sm text-gray-700"
//                 >
//                   Let potential candidates contact you about this job by email
//                   to the address provided.
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Navigation buttons */}
//           <div className="flex justify-between items-center pt-6 border-t border-gray-200">
//             <button className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
//               <svg
//                 className="w-4 h-4 mr-2"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//               Back
//             </button>

//             <div className="flex items-center space-x-4">
//               <button className="text-blue-600 hover:text-blue-700 font-medium">
//                 Preview
//               </button>
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center">
//                 Continue
//                 <svg
//                   className="w-4 h-4 ml-2"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 5l7 7-7 7"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Feedback link */}
//           <div className="text-center mt-6 pt-6 border-t border-gray-200">
//             <span className="text-sm text-gray-600">
//               Have feedback?{" "}
//               <a href="#" className="text-blue-600 hover:text-blue-700">
//                 Tell us more.
//               </a>
//             </span>
//           </div>
//         </div>
//       </div>

//       {isDropdownOpen && (
//         <div
//           className="fixed inset-0 z-40"
//           onClick={() => setIsDropdownOpen(false)}
//         ></div>
//       )}
//     </div>
//   );
// }


import { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import jobpostImg6 from "../assets/jobpost6.png";
import "react-phone-input-2/lib/style.css";

export default function IndeedEmployerPage() {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [formEmail, setFormEmail] = useState("");
  const [resumeRequired, setResumeRequired] = useState(false);
  const [contactCandidates, setContactCandidates] = useState(false);
  const [individualEmails, setIndividualEmails] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const email = user?.email || "user@example.com";
    setUserEmail(email);
    setFormEmail(email);

    // Load from localStorage if available
    const savedData = JSON.parse(localStorage.getItem("jobPostStep6"));
    if (savedData) {
      setFormEmail(savedData.formEmail || email);
      setResumeRequired(savedData.resumeRequired || false);
      setContactCandidates(savedData.contactCandidates || false);
      setIndividualEmails(savedData.individualEmails || false);
    }
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBack = () => {
    navigate("/addJobDetails5");
  };

  const handleContinue = () => {
  const newErrors = {};
  if (!formEmail || !/\S+@\S+\.\S+/.test(formEmail)) {
    newErrors.formEmail = "Please enter a valid email address";
  }

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    const formData = {
      formEmail,
      resumeRequired,
      contactCandidates,
      individualEmails,
    };

    localStorage.setItem("jobPostStep6", JSON.stringify(formData));
    console.log("Form Data Saved", formData);
    navigate("/jobPostReview");
  } catch (err) {
    console.error("Failed to save to localStorage or navigate:", err);
  }
};


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold text-blue-600">indeed</span>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                <span className="text-sm">{userEmail}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="py-1">
                    <div className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-100">
                      {userEmail}
                    </div>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Indeed for jobseekers
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign out
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <img
          src={jobpostImg6}
          alt="Job post"
          className="w-[800px] h-[250px] object-contain mx-auto"
        />
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Communication Preferences */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Communication preferences
            </h2>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Get application updates <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                placeholder="Enter email address"
              />
              {errors.formEmail && (
                <p className="text-red-500 text-sm mt-1">{errors.formEmail}</p>
              )}
            </div>
            <button
              type="button"
              className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
            >
              <span className="text-xl mr-2">+</span>Add email
            </button>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="individual-emails"
                checked={individualEmails}
                onChange={(e) => setIndividualEmails(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <label htmlFor="individual-emails" className="ml-3 text-sm text-gray-700">
                Send an individual email each time someone applies.
              </label>
            </div>
          </div>

          {/* Application Preferences */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Application preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="resume-required"
                  checked={resumeRequired}
                  onChange={(e) => setResumeRequired(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="resume-required" className="ml-3 text-sm text-gray-700">
                  Resume is required
                </label>
              </div>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="contact-candidates"
                  checked={contactCandidates}
                  onChange={(e) => setContactCandidates(e.target.checked)}
                  className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="contact-candidates" className="ml-3 text-sm text-gray-700">
                  Let potential candidates contact you about this job by email to the address provided.
                </label>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-6 border-t border-gray-200">
            <button onClick={handleBack} className="flex items-center text-blue-600 hover:text-blue-700 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <div className="flex items-center space-x-4">
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Preview
              </button>
              <button
                onClick={handleContinue}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center"
              >
                Continue
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Feedback */}
          <div className="text-center mt-6 pt-6 border-t border-gray-200">
            <span className="text-sm text-gray-600">
              Have feedback?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-700">
                Tell us more.
              </a>
            </span>
          </div>
        </div>
      </div>

      {isDropdownOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)}></div>
      )}
    </div>
  );
}

