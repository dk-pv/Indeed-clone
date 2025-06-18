// import { useState, useEffect } from "react";
// import { ChevronDown, ExternalLink, LogOut, Check, Edit } from "lucide-react";
// import { Link, useNavigate } from "react-router-dom";
// import jobpostImg from "../assets/jobpost.png";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";

// const IndeedFooter = () => {
//   return (
//     <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col items-center space-y-4 mb-8">

//           <p className="text-sm text-gray-600">
//             Have feedback?{" "}
//             <Link
//               to="#"
//               className="text-blue-600 hover:text-blue-700 font-medium"
//             >
//               Tell us more.
//             </Link>
//           </p>
//         </div>

//         <div className="text-center text-xs text-gray-500 space-y-2">
//           <p>©2025 Indeed</p>
//           <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
//             <Link to="#" className="hover:text-gray-700">
//               Cookies, privacy and terms
//             </Link>
//             <Link to="#" className="hover:text-gray-700">
//               Privacy Centre
//             </Link>
//             <Link to="#" className="hover:text-gray-700">
//               Security
//             </Link>
//             <Link to="#" className="hover:text-gray-700">
//               Billing
//             </Link>
//             <Link to="#" className="hover:text-gray-700">
//               Contact
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default function CombinedEmployerPage() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState("");
//   const [activeForm, setActiveForm] = useState("account");
//   const [showMoreSchedule, setShowMoreSchedule] = useState(false);
//   const [showMoreBenefits, setShowMoreBenefits] = useState(false);
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   // Form data states
//   const [accountFormData, setAccountFormData] = useState({
//     companyName: "",
//     fullName: "",
//     referralSource: "",
//     phone: "",
//   });

//   const [jobFormData, setJobFormData] = useState({
//     jobTitle: "",
//     locationType: "On-site",
//     city: "",
//     area: "",
//     pincode: "",
//     address: "",
//     jobDescription: "",
//   });

//   const [detailsFormData, setDetailsFormData] = useState({
//     jobTypes: [],
//     schedules: [],
//     numberOfPeople: "",
//     recruitmentTimeline: "",
//   });

//   const [payBenefitsFormData, setPayBenefitsFormData] = useState({
//     payRange: { min: "", max: "" },
//     supplementalPay: [],
//     benefits: [],
//   });

//   const [preferencesFormData, setPreferencesFormData] = useState({
//     email: "",
//     additionalEmails: [],
//     individualEmails: false,
//     resumeRequired: true,
//     contactCandidates: true,
//   });

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     if (user?.email) {
//       setUserEmail(user.email);
//       setPreferencesFormData((prev) => ({
//         ...prev,
//         email: user.email,
//       }));
//     }

//     // Load saved form data if available
//     const savedFormData = JSON.parse(localStorage.getItem("jobPostFormData"));
//     if (savedFormData) {
//       if (savedFormData.account) setAccountFormData(savedFormData.account);
//       if (savedFormData.job) setJobFormData(savedFormData.job);
//       if (savedFormData.details) setDetailsFormData(savedFormData.details);
//       if (savedFormData.payBenefits)
//         setPayBenefitsFormData(savedFormData.payBenefits);
//       if (savedFormData.preferences)
//         setPreferencesFormData(savedFormData.preferences);
//     }
//   }, []);

//   // Save form data to localStorage whenever it changes
//   useEffect(() => {
//     const formData = {
//       account: accountFormData,
//       job: jobFormData,
//       details: detailsFormData,
//       payBenefits: payBenefitsFormData,
//       preferences: preferencesFormData,
//     };
//     localStorage.setItem("jobPostFormData", JSON.stringify(formData));
//   }, [
//     accountFormData,
//     jobFormData,
//     detailsFormData,
//     payBenefitsFormData,
//     preferencesFormData,
//   ]);

//   // Common handlers
//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   // Account form handlers
//   const handleAccountChange = (e) => {
//     setAccountFormData({ ...accountFormData, [e.target.name]: e.target.value });
//   };

//   // Job form handlers
//   const handleJobChange = (e) => {
//     const { name, value } = e.target;
//     setJobFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Details form handlers
//   const handleJobTypeToggle = (type) => {
//     setDetailsFormData((prev) => ({
//       ...prev,
//       jobTypes: prev.jobTypes.includes(type)
//         ? prev.jobTypes.filter((t) => t !== type)
//         : [...prev.jobTypes, type],
//     }));
//   };

//   const handleScheduleToggle = (schedule) => {
//     setDetailsFormData((prev) => ({
//       ...prev,
//       schedules: prev.schedules.includes(schedule)
//         ? prev.schedules.filter((s) => s !== schedule)
//         : [...prev.schedules, schedule],
//     }));
//   };

//   const handleDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setDetailsFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   // Pay and benefits handlers
//   const handlePayChange = (field, value) => {
//     setPayBenefitsFormData((prev) => ({
//       ...prev,
//       payRange: {
//         ...prev.payRange,
//         [field]: value,
//       },
//     }));
//   };

//   const toggleSupplementalPay = (item) => {
//     setPayBenefitsFormData((prev) => ({
//       ...prev,
//       supplementalPay: prev.supplementalPay.includes(item)
//         ? prev.supplementalPay.filter((i) => i !== item)
//         : [...prev.supplementalPay, item],
//     }));
//   };

//   const toggleBenefit = (item) => {
//     setPayBenefitsFormData((prev) => ({
//       ...prev,
//       benefits: prev.benefits.includes(item)
//         ? prev.benefits.filter((i) => i !== item)
//         : [...prev.benefits, item],
//     }));
//   };

//   // Preferences form handlers
//   const handlePreferencesChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setPreferencesFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const addEmail = () => {
//     setPreferencesFormData((prev) => ({
//       ...prev,
//       additionalEmails: [...prev.additionalEmails, ""],
//     }));
//   };

//   const handleAdditionalEmailChange = (index, value) => {
//     const newEmails = [...preferencesFormData.additionalEmails];
//     newEmails[index] = value;
//     setPreferencesFormData((prev) => ({
//       ...prev,
//       additionalEmails: newEmails,
//     }));
//   };

//   // Validation functions
//   const validateAccountForm = () => {
//     const newErrors = {};
//     if (!accountFormData.companyName)
//       newErrors.companyName = "Company name is required";
//     if (!accountFormData.fullName) newErrors.fullName = "Full name is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateJobForm = () => {
//     const newErrors = {};
//     if (!jobFormData.jobTitle) newErrors.jobTitle = "Job title is required";
//     if (!jobFormData.city) newErrors.city = "City is required";
//     if (!jobFormData.jobDescription)
//       newErrors.jobDescription = "Job description is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateDetailsForm = () => {
//     const newErrors = {};
//     if (detailsFormData.jobTypes.length === 0)
//       newErrors.jobTypes = "Select at least one job type";
//     if (!detailsFormData.numberOfPeople)
//       newErrors.numberOfPeople =
//         "Please select how many people you want to hire";
//     if (!detailsFormData.recruitmentTimeline)
//       newErrors.recruitmentTimeline = "Please select a recruitment timeline";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validatePayBenefitsForm = () => {
//     return true;
//   };

//   const validatePreferencesForm = () => {
//     const newErrors = {};
//     if (!preferencesFormData.email) newErrors.email = "Email is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Form submission handlers
//   const handleAccountSubmit = (e) => {
//     e.preventDefault();
//     if (validateAccountForm()) {
//       setActiveForm("job");
//       window.scrollTo(0, 0);
//     }
//   };

//   const handleJobSubmit = (e) => {
//     e.preventDefault();
//     if (validateJobForm()) {
//       setActiveForm("details");
//       window.scrollTo(0, 0);
//     }
//   };

//   const handleDetailsSubmit = (e) => {
//     e.preventDefault();
//     if (validateDetailsForm()) {
//       setActiveForm("payBenefits");
//       window.scrollTo(0, 0);
//     }
//   };

//   const handlePayBenefitsSubmit = (e) => {
//     e.preventDefault();
//     if (validatePayBenefitsForm()) {
//       setActiveForm("preferences");
//       window.scrollTo(0, 0);
//     }
//   };

//   const handlePreferencesSubmit = (e) => {
//     e.preventDefault();
//     if (validatePreferencesForm()) {
//       setActiveForm("preview");
//       window.scrollTo(0, 0);
//     }
//   };

//   const handleFinalSubmit = async () => {
//     let jobPostData;
//     try {
//       jobPostData = {
//         company: {
//           name: accountFormData.companyName,
//           contactPerson: accountFormData.fullName,
//           phone: accountFormData.phone,
//           referralSource: accountFormData.referralSource,
//         },
//         job: {
//           title: jobFormData.jobTitle,
//           description: jobFormData.jobDescription,
//           location: {
//             type: jobFormData.locationType,
//             city: jobFormData.city,
//             area: jobFormData.area,
//             pincode: jobFormData.pincode,
//             address: jobFormData.address,
//           },
//         },
//         details: {
//           jobTypes: detailsFormData.jobTypes,
//           schedules: detailsFormData.schedules,
//           hiringCount: detailsFormData.numberOfPeople,
//           timeline: detailsFormData.recruitmentTimeline,
//         },
//         payAndBenefits: {
//           minSalary: payBenefitsFormData.payRange.min,
//           maxSalary: payBenefitsFormData.payRange.max,
//           supplementalPay: payBenefitsFormData.supplementalPay,
//           benefits: payBenefitsFormData.benefits,
//         },
//         preferences: {
//           email: preferencesFormData.email,
//           additionalEmails: preferencesFormData.additionalEmails,
//           individualEmails: preferencesFormData.individualEmails,
//           resumeRequired: preferencesFormData.resumeRequired,
//           contactCandidates: preferencesFormData.contactCandidates,
//         },
//       };

//       const token = localStorage.getItem("token");

//       const response = await fetch("http://localhost:9999/api/job/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify(jobPostData),
//       });

//       const contentType = response.headers.get("content-type");
//       if (!response.ok) {
//         if (contentType && contentType.includes("application/json")) {
//           const result = await response.json();
//           throw new Error(result.message || "Failed to submit job post");
//         } else {
//           const htmlError = await response.text();
//           console.error("Server returned HTML error:", htmlError);
//           throw new Error("Unexpected error (HTML response)");
//         }
//       }

//       const result = await response.json();
//       localStorage.removeItem("jobPostFormData");
//       navigate("/success");
//     } catch (error) {
//       console.error("Error details:", error);
//       console.log("Failed request data:", jobPostData);
//       alert(`Error: ${error.message}`);
//     }
//   };

//   // Options for selectors
//   const jobTypes = [
//     "Full-time",
//     "Permanent",
//     "Fresher",
//     "Part-time",
//     "Internship",
//     "Contractual / Temporary",
//     "Freelance",
//     "Volunteer",
//   ];

//   const scheduleOptions = [
//     "Day shift",
//     "Morning shift",
//     "Rotational shift",
//     "Night shift",
//     "Monday to Friday",
//     "Evening shift",
//     "Weekend availability",
//     "Fixed shift",
//   ];

//   const supplementalPayOptions = [
//     "Performance bonus",
//     "Yearly bonus",
//     "Commission pay",
//     "Overtime pay",
//     "Quarterly bonus",
//     "Shift allowance",
//     "Joining bonus",
//     "Other",
//   ];

//   const benefitOptions = [
//     "Health insurance",
//     "Provident Fund",
//     "Cell phone reimbursement",
//     "Paid sick time",
//     "Work from home",
//     "Paid time off",
//     "Food provided",
//     "Life insurance",
//     "Dental insurance",
//     "Flexible schedule",
//     "Employee discount",
//     "Retirement plan",
//   ];

//   const visibleSchedules = showMoreSchedule
//     ? scheduleOptions
//     : scheduleOptions.slice(0, 4);
//   const visibleBenefits = showMoreBenefits
//     ? benefitOptions
//     : benefitOptions.slice(0, 8);

//   // Helper function to render list items
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
//     <div className="min-h-screen bg-gray-50 flex flex-col">
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
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
//         <img
//           src={jobpostImg}
//           alt="Job post"
//           className="w-[800px] h-[200px] object-contain mx-auto"
//         />
//       </div>

//       {/* Progress Indicator */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-8">
//         <div className="flex items-center justify-center">
//           {/* Step 1 - Account */}
//           <div className="flex flex-col items-center">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeForm === "account"
//                   ? "bg-blue-600 text-white"
//                   : [
//                       "job",
//                       "details",
//                       "payBenefits",
//                       "preferences",
//                       "preview",
//                     ].includes(activeForm)
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {activeForm === "account" ? (
//                 "1"
//               ) : (
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               )}
//             </div>
//             <span
//               className={`text-xs mt-1 ${
//                 activeForm === "account"
//                   ? "font-semibold text-blue-600"
//                   : [
//                       "job",
//                       "details",
//                       "payBenefits",
//                       "preferences",
//                       "preview",
//                     ].includes(activeForm)
//                   ? "text-green-600"
//                   : "text-gray-600"
//               }`}
//             >
//               Account
//             </span>
//           </div>

//           <div
//             className={`h-1 w-20 ${
//               [
//                 "job",
//                 "details",
//                 "payBenefits",
//                 "preferences",
//                 "preview",
//               ].includes(activeForm)
//                 ? "bg-green-500"
//                 : "bg-gray-200"
//             }`}
//           ></div>

//           {/* Step 2 - Job Info */}
//           <div className="flex flex-col items-center">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeForm === "job"
//                   ? "bg-blue-600 text-white"
//                   : [
//                       "details",
//                       "payBenefits",
//                       "preferences",
//                       "preview",
//                     ].includes(activeForm)
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {activeForm === "job" ? (
//                 "2"
//               ) : ["details", "payBenefits", "preferences", "preview"].includes(
//                   activeForm
//                 ) ? (
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               ) : (
//                 "2"
//               )}
//             </div>
//             <span
//               className={`text-xs mt-1 ${
//                 activeForm === "job"
//                   ? "font-semibold text-blue-600"
//                   : [
//                       "details",
//                       "payBenefits",
//                       "preferences",
//                       "preview",
//                     ].includes(activeForm)
//                   ? "text-green-600"
//                   : "text-gray-600"
//               }`}
//             >
//               Job Info
//             </span>
//           </div>

//           <div
//             className={`h-1 w-20 ${
//               ["details", "payBenefits", "preferences", "preview"].includes(
//                 activeForm
//               )
//                 ? "bg-green-500"
//                 : "bg-gray-200"
//             }`}
//           ></div>

//           {/* Step 3 - Details */}
//           <div className="flex flex-col items-center">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeForm === "details"
//                   ? "bg-blue-600 text-white"
//                   : ["payBenefits", "preferences", "preview"].includes(
//                       activeForm
//                     )
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {activeForm === "details" ? (
//                 "3"
//               ) : ["payBenefits", "preferences", "preview"].includes(
//                   activeForm
//                 ) ? (
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               ) : (
//                 "3"
//               )}
//             </div>
//             <span
//               className={`text-xs mt-1 ${
//                 activeForm === "details"
//                   ? "font-semibold text-blue-600"
//                   : ["payBenefits", "preferences", "preview"].includes(
//                       activeForm
//                     )
//                   ? "text-green-600"
//                   : "text-gray-600"
//               }`}
//             >
//               Details
//             </span>
//           </div>

//           <div
//             className={`h-1 w-20 ${
//               ["payBenefits", "preferences", "preview"].includes(activeForm)
//                 ? "bg-green-500"
//                 : "bg-gray-200"
//             }`}
//           ></div>

//           {/* Step 4 - Pay & Benefits */}
//           <div className="flex flex-col items-center">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeForm === "payBenefits"
//                   ? "bg-blue-600 text-white"
//                   : ["preferences", "preview"].includes(activeForm)
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {activeForm === "payBenefits" ? (
//                 "4"
//               ) : ["preferences", "preview"].includes(activeForm) ? (
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               ) : (
//                 "4"
//               )}
//             </div>
//             <span
//               className={`text-xs mt-1 ${
//                 activeForm === "payBenefits"
//                   ? "font-semibold text-blue-600"
//                   : ["preferences", "preview"].includes(activeForm)
//                   ? "text-green-600"
//                   : "text-gray-600"
//               }`}
//             >
//               Pay & Benefits
//             </span>
//           </div>

//           <div
//             className={`h-1 w-20 ${
//               ["preferences", "preview"].includes(activeForm)
//                 ? "bg-green-500"
//                 : "bg-gray-200"
//             }`}
//           ></div>

//           {/* Step 5 - Preferences */}
//           <div className="flex flex-col items-center">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeForm === "preferences"
//                   ? "bg-blue-600 text-white"
//                   : activeForm === "preview"
//                   ? "bg-green-500 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {activeForm === "preferences" ? (
//                 "5"
//               ) : activeForm === "preview" ? (
//                 <svg
//                   className="w-4 h-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M5 13l4 4L19 7"
//                   />
//                 </svg>
//               ) : (
//                 "5"
//               )}
//             </div>
//             <span
//               className={`text-xs mt-1 ${
//                 activeForm === "preferences"
//                   ? "font-semibold text-blue-600"
//                   : activeForm === "preview"
//                   ? "text-green-600"
//                   : "text-gray-600"
//               }`}
//             >
//               Preferences
//             </span>
//           </div>

//           <div
//             className={`h-1 w-20 ${
//               activeForm === "preview" ? "bg-green-500" : "bg-gray-200"
//             }`}
//           ></div>

//           {/* Step 6 - Preview */}
//           <div className="flex flex-col items-center">
//             <div
//               className={`flex items-center justify-center w-8 h-8 rounded-full ${
//                 activeForm === "preview"
//                   ? "bg-blue-600 text-white"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               6
//             </div>
//             <span
//               className={`text-xs mt-1 ${
//                 activeForm === "preview"
//                   ? "font-semibold text-blue-600"
//                   : "text-gray-600"
//               }`}
//             >
//               Preview
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <main className="flex-grow">
//         {/* Account Form */}
//         {activeForm === "account" && (
//           <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-6">
//             <h2 className="text-2xl font-semibold">
//               Create an employer account
//             </h2>

//             <form onSubmit={handleAccountSubmit}>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Company name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="companyName"
//                   value={accountFormData.companyName}
//                   onChange={handleAccountChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   required
//                 />
//                 {errors.companyName && (
//                   <p className="text-red-600 text-sm mt-1">
//                     {errors.companyName}
//                   </p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   First and last name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   value={accountFormData.fullName}
//                   onChange={handleAccountChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                   required
//                 />
//                 {errors.fullName && (
//                   <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>
//                 )}
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   How did you hear about us?
//                 </label>
//                 <select
//                   name="referralSource"
//                   value={accountFormData.referralSource}
//                   onChange={handleAccountChange}
//                   className="w-full border border-gray-300 rounded-md p-2"
//                 >
//                   <option value="">Select an option</option>
//                   <option value="online_video">Online video</option>
//                   <option value="mail">Mail</option>
//                   <option value="streaming_audio">
//                     Streaming audio (ex. Spotify, Pandora)
//                   </option>
//                   <option value="tv">TV</option>
//                   <option value="word_of_mouth">Word of mouth</option>
//                   <option value="search_engine">
//                     Search engine (ex. Google, Bing, Yahoo)
//                   </option>
//                   <option value="newspaper">Newspaper</option>
//                   <option value="radio">Radio (AM/FM/XM)</option>
//                   <option value="billboard">Billboard</option>
//                   <option value="podcast">Podcast</option>
//                   <option value="social_media">Social media</option>
//                   <option value="other">Other</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Phone number
//                 </label>
//                 <PhoneInput
//                   country={"in"}
//                   value={accountFormData.phone}
//                   onChange={(value) =>
//                     setAccountFormData({ ...accountFormData, phone: value })
//                   }
//                   inputProps={{
//                     name: "phone",
//                     required: true,
//                     autoFocus: false,
//                   }}
//                   inputStyle={{
//                     width: "100%",
//                     height: "42px",
//                     borderRadius: "0.375rem",
//                     border: "1px solid #d1d5db",
//                     fontSize: "1rem",
//                     paddingLeft: "48px",
//                     boxSizing: "border-box",
//                     backgroundColor: "#fff",
//                   }}
//                   buttonStyle={{
//                     border: "none",
//                     backgroundColor: "#f3f4f6",
//                   }}
//                   containerStyle={{
//                     width: "100%",
//                   }}
//                 />
//                 <p className="text-sm text-gray-500 mt-1">
//                   For account management communication. Not visible to
//                   jobseekers.
//                 </p>
//               </div>

//               <div className="pt-4">
//                 <button
//                   type="submit"
//                   className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center"
//                 >
//                   Continue
//                   <svg
//                     className="w-5 h-5 ml-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M9 5l7 7-7 7"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Job Form */}
//         {activeForm === "job" && (
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
//             <form onSubmit={handleJobSubmit}>
//               {/* Job Title */}
//               <label className="block font-semibold mb-1">Job title *</label>
//               <input
//                 type="text"
//                 name="jobTitle"
//                 value={jobFormData.jobTitle}
//                 onChange={handleJobChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
//               />
//               {errors.jobTitle && (
//                 <p className="text-red-600 text-sm mt-1">{errors.jobTitle}</p>
//               )}

//               {/* Job Description */}
//               <label className="block font-semibold mb-1">
//                 Job description *
//               </label>
//               <textarea
//                 name="jobDescription"
//                 value={jobFormData.jobDescription}
//                 onChange={handleJobChange}
//                 required
//                 rows={6}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
//                 placeholder="Describe the responsibilities, required skills, and qualifications for this position..."
//               />
//               {errors.jobDescription && (
//                 <p className="text-red-600 text-sm mt-1">
//                   {errors.jobDescription}
//                 </p>
//               )}

//               {/* Location Type */}
//               <h3 className="text-lg font-bold mt-8 mb-2">
//                 Job posting location
//               </h3>
//               <label className="block font-medium mb-1">
//                 Which option best describes this job's location? *
//               </label>
//               <select
//                 name="locationType"
//                 value={jobFormData.locationType}
//                 onChange={handleJobChange}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
//               >
//                 <option value="On-site">On-site</option>
//                 <option value="Remote">Remote</option>
//                 <option value="Hybrid">Hybrid</option>
//               </select>

//               {/* City */}
//               <label className="block font-medium mb-1">City *</label>
//               <input
//                 type="text"
//                 name="city"
//                 value={jobFormData.city}
//                 onChange={handleJobChange}
//                 required
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
//               />
//               {errors.city && (
//                 <p className="text-red-600 text-sm mt-1">{errors.city}</p>
//               )}

//               {/* Area + Pincode */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block font-medium mb-1">Area</label>
//                   <input
//                     type="text"
//                     name="area"
//                     value={jobFormData.area}
//                     onChange={handleJobChange}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium mb-1">Pincode</label>
//                   <input
//                     type="text"
//                     name="pincode"
//                     value={jobFormData.pincode}
//                     onChange={handleJobChange}
//                     className="w-full border border-gray-300 rounded-lg px-4 py-2"
//                   />
//                 </div>
//               </div>

//               {/* Address */}
//               <label className="block font-medium mb-1">Street address</label>
//               <input
//                 type="text"
//                 name="address"
//                 value={jobFormData.address}
//                 onChange={handleJobChange}
//                 className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
//               />

//               {/* Navigation Buttons */}
//               <div className="flex justify-between">
//                 <button
//                   type="button"
//                   onClick={() => setActiveForm("account")}
//                   className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//                 >
//                   Continue
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Job Details Form */}
//         {activeForm === "details" && (
//           <form
//             onSubmit={handleDetailsSubmit}
//             className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10"
//           >
//             {/* Job Type */}
//             <div>
//               <label className="block text-sm font-semibold mb-4">
//                 Job type *
//               </label>
//               <div className="flex flex-wrap gap-3">
//                 {jobTypes.map((type) => (
//                   <button
//                     key={type}
//                     type="button"
//                     onClick={() => handleJobTypeToggle(type)}
//                     className={`px-4 py-2 text-sm rounded-full border ${
//                       detailsFormData.jobTypes.includes(type)
//                         ? "bg-blue-600 text-white border-blue-600"
//                         : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     {type}
//                   </button>
//                 ))}
//               </div>
//               {errors.jobTypes && (
//                 <p className="text-red-600 text-sm mt-1">{errors.jobTypes}</p>
//               )}
//             </div>

//             {/* Schedule */}
//             <div>
//               <label className="block text-sm font-semibold mb-4">
//                 Schedule
//               </label>
//               <div className="flex flex-wrap gap-3">
//                 {visibleSchedules.map((schedule) => (
//                   <button
//                     key={schedule}
//                     type="button"
//                     onClick={() => handleScheduleToggle(schedule)}
//                     className={`px-4 py-2 text-sm rounded-full border ${
//                       detailsFormData.schedules.includes(schedule)
//                         ? "bg-blue-600 text-white border-blue-600"
//                         : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
//                     }`}
//                   >
//                     {schedule}
//                   </button>
//                 ))}
//               </div>
//               {scheduleOptions.length > 4 && (
//                 <button
//                   type="button"
//                   onClick={() => setShowMoreSchedule(!showMoreSchedule)}
//                   className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
//                 >
//                   {showMoreSchedule ? "Show less" : "Show 5 more"}
//                   <ChevronDown
//                     className={`inline-block ml-1 w-4 h-4 transition-transform ${
//                       showMoreSchedule ? "rotate-180" : ""
//                     }`}
//                   />
//                 </button>
//               )}
//             </div>

//             {/* Number of People */}
//             <div>
//               <label className="block text-sm font-semibold mb-2">
//                 Number of people you wish to hire for this job *
//               </label>
//               <select
//                 name="numberOfPeople"
//                 value={detailsFormData.numberOfPeople}
//                 onChange={handleDetailsChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="1">1</option>
//                 <option value="2-5">2-5</option>
//                 <option value="6-10">6-10</option>
//                 <option value="11-25">11-25</option>
//                 <option value="26-50">26-50</option>
//                 <option value="50+">50+</option>
//               </select>
//               {errors.numberOfPeople && (
//                 <p className="text-red-600 text-sm mt-1">
//                   {errors.numberOfPeople}
//                 </p>
//               )}
//             </div>

//             {/* Recruitment Timeline */}
//             <div>
//               <label className="block text-sm font-semibold mb-2">
//                 Recruitment timeline for this job *
//               </label>
//               <select
//                 name="recruitmentTimeline"
//                 value={detailsFormData.recruitmentTimeline}
//                 onChange={handleDetailsChange}
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md"
//                 required
//               >
//                 <option value="">Select an option</option>
//                 <option value="urgent">Urgent (within 1 week)</option>
//                 <option value="1-2weeks">1-2 weeks</option>
//                 <option value="3-4weeks">3-4 weeks</option>
//                 <option value="1-2months">1-2 months</option>
//                 <option value="flexible">Flexible timeline</option>
//               </select>
//               {errors.recruitmentTimeline && (
//                 <p className="text-red-600 text-sm mt-1">
//                   {errors.recruitmentTimeline}
//                 </p>
//               )}
//             </div>

//             {/* Navigation Buttons */}
//             <div className="flex justify-between">
//               <button
//                 type="button"
//                 onClick={() => setActiveForm("job")}
//                 className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
//               >
//                 Back
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//               >
//                 Continue
//               </button>
//             </div>
//           </form>
//         )}

//         {/* Pay and Benefits Form */}
//         {activeForm === "payBenefits" && (
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <form
//               onSubmit={handlePayBenefitsSubmit}
//               className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
//             >
//               {/* Pay Section */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-8">
//                   Pay
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Amount
//                     </label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                         ₹
//                       </span>
//                       <input
//                         type="text"
//                         value={payBenefitsFormData.payRange.min}
//                         onChange={(e) => handlePayChange("min", e.target.value)}
//                         className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Minimum amount"
//                       />
//                     </div>
//                     <span className="text-sm text-gray-500 mt-1">
//                       per month to
//                     </span>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Amount
//                     </label>
//                     <div className="relative">
//                       <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
//                         ₹
//                       </span>
//                       <input
//                         type="text"
//                         value={payBenefitsFormData.payRange.max}
//                         onChange={(e) => handlePayChange("max", e.target.value)}
//                         className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                         placeholder="Maximum amount"
//                       />
//                     </div>
//                     <span className="text-sm text-gray-500 mt-1">
//                       per month
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Supplemental Pay Section */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                   Supplemental Pay
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {supplementalPayOptions.map((option) => (
//                     <button
//                       key={option}
//                       type="button"
//                       onClick={() => toggleSupplementalPay(option)}
//                       className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
//                         payBenefitsFormData.supplementalPay.includes(option)
//                           ? "bg-blue-50 border-blue-300 text-blue-700"
//                           : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       <span className="mr-2 text-lg font-light">
//                         {payBenefitsFormData.supplementalPay.includes(
//                           option
//                         ) ? (
//                           <Check className="w-4 h-4" />
//                         ) : (
//                           "+"
//                         )}
//                       </span>
//                       {option}
//                     </button>
//                   ))}
//                 </div>
//               </div>

//               {/* Benefits Section */}
//               <div className="mb-12">
//                 <h2 className="text-2xl font-semibold text-gray-900 mb-6">
//                   Benefits
//                 </h2>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {visibleBenefits.map((option) => (
//                     <button
//                       key={option}
//                       type="button"
//                       onClick={() => toggleBenefit(option)}
//                       className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
//                         payBenefitsFormData.benefits.includes(option)
//                           ? "bg-blue-50 border-blue-300 text-blue-700"
//                           : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
//                       }`}
//                     >
//                       <span className="mr-2 text-lg font-light">
//                         {payBenefitsFormData.benefits.includes(option) ? (
//                           <Check className="w-4 h-4" />
//                         ) : (
//                           "+"
//                         )}
//                       </span>
//                       {option}
//                     </button>
//                   ))}
//                 </div>

//                 {benefitOptions.length > 8 && (
//                   <div className="mt-4">
//                     <button
//                       type="button"
//                       onClick={() => setShowMoreBenefits(!showMoreBenefits)}
//                       className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
//                     >
//                       {showMoreBenefits
//                         ? "Show less"
//                         : `Show ${benefitOptions.length - 8} more`}
//                       <ChevronDown
//                         className={`w-4 h-4 ml-1 transition-transform ${
//                           showMoreBenefits ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                   </div>
//                 )}
//               </div>

//               {/* Action Buttons */}
//               <div className="flex justify-between items-center pt-8 border-t border-gray-200">
//                 <button
//                   type="button"
//                   onClick={() => setActiveForm("details")}
//                   className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
//                 >
//                   <span className="mr-2">←</span>
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                 >
//                   Continue
//                   <span className="ml-2">→</span>
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Preferences Form */}
//         {activeForm === "preferences" && (
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <form
//               onSubmit={handlePreferencesSubmit}
//               className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
//             >
//               {/* Communication preferences */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                   Communication preferences
//                 </h2>

//                 <div className="mb-6">
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Get application updates{" "}
//                     <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={preferencesFormData.email}
//                     onChange={handlePreferencesChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                     placeholder="Enter email address"
//                     required
//                   />
//                   {errors.email && (
//                     <p className="text-red-600 text-sm mt-1">{errors.email}</p>
//                   )}
//                 </div>

//                 {preferencesFormData.additionalEmails.map((email, index) => (
//                   <div key={index} className="mb-4">
//                     <input
//                       type="email"
//                       value={email}
//                       onChange={(e) =>
//                         handleAdditionalEmailChange(index, e.target.value)
//                       }
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
//                       placeholder="Additional email address"
//                     />
//                   </div>
//                 ))}

//                 <button
//                   type="button"
//                   onClick={addEmail}
//                   className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
//                 >
//                   <span className="text-xl mr-2">+</span>
//                   Add email
//                 </button>

//                 <div className="flex items-start">
//                   <input
//                     type="checkbox"
//                     id="individual-emails"
//                     name="individualEmails"
//                     checked={preferencesFormData.individualEmails}
//                     onChange={handlePreferencesChange}
//                     className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                   />
//                   <label
//                     htmlFor="individual-emails"
//                     className="ml-3 text-sm text-gray-700"
//                   >
//                     Send an individual email each time someone applies.
//                   </label>
//                 </div>
//               </div>

//               {/* Application preferences */}
//               <div className="mb-8">
//                 <h2 className="text-xl font-semibold text-gray-900 mb-6">
//                   Application preferences
//                 </h2>

//                 <div className="space-y-4">
//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="resume-required"
//                       name="resumeRequired"
//                       checked={preferencesFormData.resumeRequired}
//                       onChange={handlePreferencesChange}
//                       className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                     />
//                     <label
//                       htmlFor="resume-required"
//                       className="ml-3 text-sm text-gray-700"
//                     >
//                       Resume is required
//                     </label>
//                   </div>

//                   <div className="flex items-start">
//                     <input
//                       type="checkbox"
//                       id="contact-candidates"
//                       name="contactCandidates"
//                       checked={preferencesFormData.contactCandidates}
//                       onChange={handlePreferencesChange}
//                       className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
//                     />
//                     <label
//                       htmlFor="contact-candidates"
//                       className="ml-3 text-sm text-gray-700"
//                     >
//                       Let potential candidates contact you about this job by
//                       email to the address provided.
//                     </label>
//                   </div>
//                 </div>
//               </div>

//               {/* Navigation buttons */}
//               <div className="flex justify-between items-center pt-6 border-t border-gray-200">
//                 <button
//                   type="button"
//                   onClick={() => setActiveForm("payBenefits")}
//                   className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
//                 >
//                   <svg
//                     className="w-4 h-4 mr-2"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M15 19l-7-7 7-7"
//                     />
//                   </svg>
//                   Back
//                 </button>

//                 <div className="flex items-center space-x-4">
//                   <button
//                     type="button"
//                     onClick={() => setActiveForm("preview")}
//                     className="text-blue-600 hover:text-blue-700 font-medium"
//                   >
//                     Preview
//                   </button>
//                   <button
//                     type="submit"
//                     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center"
//                   >
//                     Continue
//                     <svg
//                       className="w-4 h-4 ml-2"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M9 5l7 7-7 7"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Preview Page */}
//         {activeForm === "preview" && (
//           <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//             <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//               <h1 className="text-2xl font-bold text-gray-900 mb-8">
//                 Job Post Preview
//               </h1>

//               <div className="space-y-10">
//                 {/* Account Information */}
//                 <div className="border-b pb-6">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                       Account Information
//                     </h2>
//                     <button
//                       onClick={() => setActiveForm("account")}
//                       className="text-blue-600 hover:text-blue-800 flex items-center"
//                     >
//                       <Edit className="w-4 h-4 mr-1" /> Edit
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Company Name</p>
//                       <p className="font-medium">
//                         {accountFormData.companyName || "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Contact Person</p>
//                       <p className="font-medium">
//                         {accountFormData.fullName || "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Referral Source</p>
//                       <p className="font-medium">
//                         {accountFormData.referralSource || "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Phone Number</p>
//                       <p className="font-medium">
//                         {accountFormData.phone || "Not specified"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Job Information */}
//                 <div className="border-b pb-6">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                       Job Information
//                     </h2>
//                     <button
//                       onClick={() => setActiveForm("job")}
//                       className="text-blue-600 hover:text-blue-800 flex items-center"
//                     >
//                       <Edit className="w-4 h-4 mr-1" /> Edit
//                     </button>
//                   </div>
//                   <div className="space-y-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Job Title</p>
//                       <p className="font-medium">
//                         {jobFormData.jobTitle || "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Job Description</p>
//                       <p className="whitespace-pre-line">
//                         {jobFormData.jobDescription || "Not specified"}
//                       </p>
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <p className="text-sm text-gray-500">Location Type</p>
//                         <p className="font-medium">
//                           {jobFormData.locationType || "Not specified"}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">City</p>
//                         <p className="font-medium">
//                           {jobFormData.city || "Not specified"}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Area</p>
//                         <p className="font-medium">
//                           {jobFormData.area || "Not specified"}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-sm text-gray-500">Pincode</p>
//                         <p className="font-medium">
//                           {jobFormData.pincode || "Not specified"}
//                         </p>
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Address</p>
//                       <p className="font-medium">
//                         {jobFormData.address || "Not specified"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Job Details */}
//                 <div className="border-b pb-6">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                       Job Details
//                     </h2>
//                     <button
//                       onClick={() => setActiveForm("details")}
//                       className="text-blue-600 hover:text-blue-800 flex items-center"
//                     >
//                       <Edit className="w-4 h-4 mr-1" /> Edit
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Job Types</p>
//                       <div className="font-medium">
//                         {detailsFormData.jobTypes.length > 0 ? (
//                           <ul className="list-disc list-inside">
//                             {detailsFormData.jobTypes.map((type, index) => (
//                               <li key={index}>{type}</li>
//                             ))}
//                           </ul>
//                         ) : (
//                           "Not specified"
//                         )}
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Schedules</p>
//                       <div className="font-medium">
//                         {detailsFormData.schedules.length > 0 ? (
//                           <ul className="list-disc list-inside">
//                             {detailsFormData.schedules.map(
//                               (schedule, index) => (
//                                 <li key={index}>{schedule}</li>
//                               )
//                             )}
//                           </ul>
//                         ) : (
//                           "Not specified"
//                         )}
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">
//                         Number of People to Hire
//                       </p>
//                       <p className="font-medium">
//                         {detailsFormData.numberOfPeople || "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">
//                         Recruitment Timeline
//                       </p>
//                       <p className="font-medium">
//                         {detailsFormData.recruitmentTimeline || "Not specified"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Pay & Benefits */}
//                 <div className="border-b pb-6">
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                       Pay & Benefits
//                     </h2>
//                     <button
//                       onClick={() => setActiveForm("payBenefits")}
//                       className="text-blue-600 hover:text-blue-800 flex items-center"
//                     >
//                       <Edit className="w-4 h-4 mr-1" /> Edit
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">Pay Range</p>
//                       <p className="font-medium">
//                         {payBenefitsFormData.payRange.min ||
//                         payBenefitsFormData.payRange.max
//                           ? `₹${payBenefitsFormData.payRange.min || "0"} - ₹${
//                               payBenefitsFormData.payRange.max || "0"
//                             } per month`
//                           : "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Supplemental Pay</p>
//                       <div className="font-medium">
//                         {renderListItems(payBenefitsFormData.supplementalPay)}
//                       </div>
//                     </div>
//                     <div className="md:col-span-2">
//                       <p className="text-sm text-gray-500">Benefits</p>
//                       <div className="font-medium">
//                         {renderListItems(payBenefitsFormData.benefits)}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Preferences */}
//                 <div>
//                   <div className="flex justify-between items-start">
//                     <h2 className="text-xl font-semibold text-gray-900 mb-4">
//                       Preferences
//                     </h2>
//                     <button
//                       onClick={() => setActiveForm("preferences")}
//                       className="text-blue-600 hover:text-blue-800 flex items-center"
//                     >
//                       <Edit className="w-4 h-4 mr-1" /> Edit
//                     </button>
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <p className="text-sm text-gray-500">
//                         Notification Email
//                       </p>
//                       <p className="font-medium">
//                         {preferencesFormData.email || "Not specified"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Additional Emails</p>
//                       <div className="font-medium">
//                         {preferencesFormData.additionalEmails.length > 0 ? (
//                           <ul className="list-disc list-inside">
//                             {preferencesFormData.additionalEmails.map(
//                               (email, index) => (
//                                 <li key={index}>{email || "Not specified"}</li>
//                               )
//                             )}
//                           </ul>
//                         ) : (
//                           "Not specified"
//                         )}
//                       </div>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Individual Emails</p>
//                       <p className="font-medium">
//                         {preferencesFormData.individualEmails ? "Yes" : "No"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">Resume Required</p>
//                       <p className="font-medium">
//                         {preferencesFormData.resumeRequired ? "Yes" : "No"}
//                       </p>
//                     </div>
//                     <div>
//                       <p className="text-sm text-gray-500">
//                         Contact Candidates
//                       </p>
//                       <p className="font-medium">
//                         {preferencesFormData.contactCandidates ? "Yes" : "No"}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Final Submission Buttons */}
//               <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
//                 <button
//                   type="button"
//                   onClick={() => setActiveForm("preferences")}
//                   className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
//                 >
//                   Back
//                 </button>
//                 <div className="space-x-4">
//                   <button
//                     type="button"
//                     onClick={() => navigate("/dashboard")}
//                     className="px-6 py-3 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition"
//                   >
//                     Save Draft
//                   </button>
//                   <button
//                     type="button"
//                     onClick={handleFinalSubmit}
//                     className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
//                   >
//                     Submit Job Post
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </main>

//       {/* Footer */}
//       <IndeedFooter />

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
import { useForm } from "react-hook-form";
import { ChevronDown, ExternalLink, LogOut, Check, Edit } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import jobpostImg from "../assets/jobpost.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const IndeedFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4 mb-8">
          <p className="text-sm text-gray-600">
            Have feedback?{" "}
            <Link
              to="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Tell us more.
            </Link>
          </p>
        </div>

        <div className="text-center text-xs text-gray-500 space-y-2">
          <p>©2025 Indeed</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
            <Link to="#" className="hover:text-gray-700">
              Cookies, privacy and terms
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Privacy Centre
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Security
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Billing
            </Link>
            <Link to="#" className="hover:text-gray-700">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function CombinedEmployerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [activeForm, setActiveForm] = useState("account");
  const [showMoreSchedule, setShowMoreSchedule] = useState(false);
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
    trigger,
  } = useForm({
    defaultValues: {
      // Account
      companyName: "",
      fullName: "",
      referralSource: "",
      phone: "",

      // Job
      jobTitle: "",
      locationType: "On-site",
      city: "",
      area: "",
      pincode: "",
      address: "",
      jobDescription: "",

      // Details
      jobTypes: [],
      schedules: [],
      numberOfPeople: "",
      recruitmentTimeline: "",

      // Pay & Benefits
      payRange: { min: "", max: "" },
      supplementalPay: [],
      benefits: [],

      // Preferences
      email: "",
      additionalEmails: [],
      individualEmails: false,
      resumeRequired: true,
      contactCandidates: true,
    },
  });

  const formData = watch();

  // Options for selectors
  const jobTypes = [
     "Full-time",
        "Permanent",
        "Fresher",
        "Part-time",
        "Internship",
    "Contractual / Temporary",
        "Freelance",
        "Volunteer",
  ];

  const scheduleOptions = [
    "Day shift",
        "Morning shift",
        "Rotational shift",
        "Night shift",
        "Monday to Friday",
        "Evening shift",
        "Weekend availability",
        "Fixed shift",
  ];

  const supplementalPayOptions = [
    "Performance bonus",
    "Yearly bonus",
    "Commission pay",
    "Overtime pay",
    "Quarterly bonus",
    "Shift allowance",
    "Joining bonus",
    "Other",
  ];

  const benefitOptions = [
    "Health insurance",
    "Provident Fund",
    "Cell phone reimbursement",
    "Paid sick time",
    "Work from home",
    "Paid time off",
    "Food provided",
    "Life insurance",
    "Dental insurance",
    "Flexible schedule",
    "Employee discount",
    "Retirement plan",
  ];

  const visibleSchedules = showMoreSchedule
    ? scheduleOptions
    : scheduleOptions.slice(0, 4);
  const visibleBenefits = showMoreBenefits
    ? benefitOptions
    : benefitOptions.slice(0, 8);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.email) {
      setUserEmail(user.email);
      setValue("email", user.email);
    }

    // Load saved form data if available
    const savedFormData = JSON.parse(localStorage.getItem("jobPostFormData"));
    if (savedFormData) {
      Object.entries(savedFormData).forEach(([key, value]) => {
        setValue(key, value);
      });
    }
  }, [setValue]);

  // Save form data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("jobPostFormData", JSON.stringify(formData));
  }, [formData]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleJobTypeToggle = (type) => {
    const currentTypes = getValues("jobTypes");
    const newTypes = currentTypes.includes(type)
      ? currentTypes.filter((t) => t !== type)
      : [...currentTypes, type];
    setValue("jobTypes", newTypes);
  };

  const handleScheduleToggle = (schedule) => {
    const currentSchedules = getValues("schedules");
    const newSchedules = currentSchedules.includes(schedule)
      ? currentSchedules.filter((s) => s !== schedule)
      : [...currentSchedules, schedule];
    setValue("schedules", newSchedules);
  };

  const toggleSupplementalPay = (item) => {
    const currentPay = getValues("supplementalPay");
    const newPay = currentPay.includes(item)
      ? currentPay.filter((i) => i !== item)
      : [...currentPay, item];
    setValue("supplementalPay", newPay);
  };

  const toggleBenefit = (item) => {
    const currentBenefits = getValues("benefits");
    const newBenefits = currentBenefits.includes(item)
      ? currentBenefits.filter((i) => i !== item)
      : [...currentBenefits, item];
    setValue("benefits", newBenefits);
  };

  const addEmail = () => {
    const currentEmails = getValues("additionalEmails");
    setValue("additionalEmails", [...currentEmails, ""]);
  };

  const handleAdditionalEmailChange = (index, value) => {
    const currentEmails = getValues("additionalEmails");
    const newEmails = [...currentEmails];
    newEmails[index] = value;
    setValue("additionalEmails", newEmails);
  };

  // Form submission handlers
  const onAccountSubmit = async () => {
    const isValid = await trigger(["companyName", "fullName"]);
    if (isValid) {
      setActiveForm("job");
      window.scrollTo(0, 0);
    }
  };

  const onJobSubmit = async () => {
    const isValid = await trigger(["jobTitle", "city", "jobDescription"]);
    if (isValid) {
      setActiveForm("details");
      window.scrollTo(0, 0);
    }
  };

  const onDetailsSubmit = async () => {
    const isValid = await trigger([
      "jobTypes",
      "numberOfPeople",
      "recruitmentTimeline",
    ]);
    if (isValid) {
      setActiveForm("payBenefits");
      window.scrollTo(0, 0);
    }
  };

  const onPayBenefitsSubmit = () => {
    setActiveForm("preferences");
    window.scrollTo(0, 0);
  };

  const onPreferencesSubmit = async () => {
    const isValid = await trigger(["email"]);
    if (isValid) {
      setActiveForm("preview");
      window.scrollTo(0, 0);
    }
  };

  const handleFinalSubmit = async () => {
    const jobPostData = {
      company: {
        name: formData.companyName,
        contactPerson: formData.fullName,
        phone: formData.phone,
        referralSource: formData.referralSource,
      },
      job: {
        title: formData.jobTitle,
        description: formData.jobDescription,
        location: {
          type: formData.locationType,
          city: formData.city,
          area: formData.area,
          pincode: formData.pincode,
          address: formData.address,
        },
      },
      details: {
        jobTypes: formData.jobTypes,
        schedules: formData.schedules,
        hiringCount: formData.numberOfPeople,
        timeline: formData.recruitmentTimeline,
      },
      payAndBenefits: {
        minSalary: formData.payRange.min,
        maxSalary: formData.payRange.max,
        supplementalPay: formData.supplementalPay,
        benefits: formData.benefits,
      },
      preferences: {
        email: formData.email,
        additionalEmails: formData.additionalEmails.filter((e) => e),
        individualEmails: formData.individualEmails,
        resumeRequired: formData.resumeRequired,
        contactCandidates: formData.contactCandidates,
      },
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:9999/api/job/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobPostData),
      });

      if (!response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const result = await response.json();
          throw new Error(result.message || "Failed to submit job post");
        } else {
          const htmlError = await response.text();
          console.error("Server returned HTML error:", htmlError);
          throw new Error("Unexpected error (HTML response)");
        }
      }

      const result = await response.json();
      localStorage.removeItem("jobPostFormData");
      navigate("/success");
    } catch (error) {
      console.error("Error details:", error);
      console.log("Failed request data:", jobPostData);
      alert(`Error: ${error.message}`);
    }
  };

  // Helper function to render list items
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
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
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <span className="mr-3">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <span className="flex-1">
                        Visit Indeed for jobseekers
                      </span>
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                    <a
                      href="#"
                      className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      <span>Sign out</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Header Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <img
          src={jobpostImg}
          alt="Job post"
          className="w-[800px] h-[200px] object-contain mx-auto"
        />
      </div>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 mb-8">
        <div className="flex items-center justify-center">
          {/* Step 1 - Account */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeForm === "account"
                  ? "bg-blue-600 text-white"
                  : [
                      "job",
                      "details",
                      "payBenefits",
                      "preferences",
                      "preview",
                    ].includes(activeForm)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {activeForm === "account" ? (
                "1"
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeForm === "account"
                  ? "font-semibold text-blue-600"
                  : [
                      "job",
                      "details",
                      "payBenefits",
                      "preferences",
                      "preview",
                    ].includes(activeForm)
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              Account
            </span>
          </div>

          <div
            className={`h-1 w-20 ${
              [
                "job",
                "details",
                "payBenefits",
                "preferences",
                "preview",
              ].includes(activeForm)
                ? "bg-green-500"
                : "bg-gray-200"
            }`}
          ></div>

          {/* Step 2 - Job Info */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeForm === "job"
                  ? "bg-blue-600 text-white"
                  : [
                      "details",
                      "payBenefits",
                      "preferences",
                      "preview",
                    ].includes(activeForm)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {activeForm === "job" ? (
                "2"
              ) : ["details", "payBenefits", "preferences", "preview"].includes(
                  activeForm
                ) ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                "2"
              )}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeForm === "job"
                  ? "font-semibold text-blue-600"
                  : [
                      "details",
                      "payBenefits",
                      "preferences",
                      "preview",
                    ].includes(activeForm)
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              Job Info
            </span>
          </div>

          <div
            className={`h-1 w-20 ${
              ["details", "payBenefits", "preferences", "preview"].includes(
                activeForm
              )
                ? "bg-green-500"
                : "bg-gray-200"
            }`}
          ></div>

          {/* Step 3 - Details */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeForm === "details"
                  ? "bg-blue-600 text-white"
                  : ["payBenefits", "preferences", "preview"].includes(
                      activeForm
                    )
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {activeForm === "details" ? (
                "3"
              ) : ["payBenefits", "preferences", "preview"].includes(
                  activeForm
                ) ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                "3"
              )}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeForm === "details"
                  ? "font-semibold text-blue-600"
                  : ["payBenefits", "preferences", "preview"].includes(
                      activeForm
                    )
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              Details
            </span>
          </div>

          <div
            className={`h-1 w-20 ${
              ["payBenefits", "preferences", "preview"].includes(activeForm)
                ? "bg-green-500"
                : "bg-gray-200"
            }`}
          ></div>

          {/* Step 4 - Pay & Benefits */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeForm === "payBenefits"
                  ? "bg-blue-600 text-white"
                  : ["preferences", "preview"].includes(activeForm)
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {activeForm === "payBenefits" ? (
                "4"
              ) : ["preferences", "preview"].includes(activeForm) ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                "4"
              )}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeForm === "payBenefits"
                  ? "font-semibold text-blue-600"
                  : ["preferences", "preview"].includes(activeForm)
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              Pay & Benefits
            </span>
          </div>

          <div
            className={`h-1 w-20 ${
              ["preferences", "preview"].includes(activeForm)
                ? "bg-green-500"
                : "bg-gray-200"
            }`}
          ></div>

          {/* Step 5 - Preferences */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeForm === "preferences"
                  ? "bg-blue-600 text-white"
                  : activeForm === "preview"
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              {activeForm === "preferences" ? (
                "5"
              ) : activeForm === "preview" ? (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                "5"
              )}
            </div>
            <span
              className={`text-xs mt-1 ${
                activeForm === "preferences"
                  ? "font-semibold text-blue-600"
                  : activeForm === "preview"
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
            >
              Preferences
            </span>
          </div>

          <div
            className={`h-1 w-20 ${
              activeForm === "preview" ? "bg-green-500" : "bg-gray-200"
            }`}
          ></div>

          {/* Step 6 - Preview */}
          <div className="flex flex-col items-center">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                activeForm === "preview"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              6
            </div>
            <span
              className={`text-xs mt-1 ${
                activeForm === "preview"
                  ? "font-semibold text-blue-600"
                  : "text-gray-600"
              }`}
            >
              Preview
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Account Form */}
        {activeForm === "account" && (
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-4 space-y-6">
  <h2 className="text-2xl font-semibold text-gray-900 mb-6">
    Create an employer account
  </h2>

  <form onSubmit={handleSubmit(onAccountSubmit)} className="space-y-6">
    {/* Company Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Company name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        {...register("companyName", { 
          required: "Company name is required" 
        })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        placeholder="Enter company name"
      />
      {errors.companyName && (
        <p className="text-red-600 text-sm mt-1">
          {errors.companyName.message}
        </p>
      )}
    </div>

    {/* Full Name */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        First and last name <span className="text-red-500">*</span>
      </label>
      <input
        type="text"
        {...register("fullName", { 
          required: "Full name is required" 
        })}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
        placeholder="Enter your full name"
      />
      {errors.fullName && (
        <p className="text-red-600 text-sm mt-1">
          {errors.fullName.message}
        </p>
      )}
    </div>

    {/* Referral Source */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        How did you hear about us?
      </label>
      <select
        {...register("referralSource")}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
      >
        <option value="">Select an option</option>
        <option value="online_video">Online video</option>
        <option value="mail">Mail</option>
        <option value="streaming_audio">
          Streaming audio (ex. Spotify, Pandora)
        </option>
        <option value="tv">TV</option>
        <option value="word_of_mouth">Word of mouth</option>
        <option value="search_engine">
          Search engine (ex. Google, Bing, Yahoo)
        </option>
        <option value="newspaper">Newspaper</option>
        <option value="radio">Radio (AM/FM/XM)</option>
        <option value="billboard">Billboard</option>
        <option value="podcast">Podcast</option>
        <option value="social_media">Social media</option>
        <option value="other">Other</option>
      </select>
    </div>

    {/* Phone Number */}
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        Phone number
      </label>
      <PhoneInput
        country={"in"}
        value={formData.phone}
        onChange={(value) => setValue("phone", value)}
        inputProps={{
          name: "phone",
          required: true,
        }}
        inputStyle={{
          width: "100%",
          height: "42px",
          borderRadius: "0.375rem",
          border: "1px solid #d1d5db",
          fontSize: "1rem",
          paddingLeft: "48px",
          boxSizing: "border-box",
          backgroundColor: "#fff",
        }}
        buttonStyle={{
          border: "none",
          backgroundColor: "#f3f4f6",
        }}
        containerStyle={{
          width: "100%",
        }}
      />
      <p className="text-xs text-gray-500 mt-1">
        For account management communication. Not visible to jobseekers.
      </p>
    </div>

    {/* Continue Button */}
    <div className="pt-4">
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center"
      >
        Continue
        <svg
          className="w-5 h-5 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </form>
</div>
        )}

        {/* Job Form */}
        {activeForm === "job" && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <form onSubmit={handleSubmit(onJobSubmit)}>
              {/* Job Title */}
              <label className="block font-semibold mb-1">Job title *</label>
              <input
                type="text"
                {...register("jobTitle", { required: "Job title is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
              />
              {errors.jobTitle && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.jobTitle.message}
                </p>
              )}

              {/* Job Description */}
              <label className="block font-semibold mb-1">
                Job description *
              </label>
              <textarea
                {...register("jobDescription", {
                  required: "Job description is required",
                })}
                rows={6}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
                placeholder="Describe the responsibilities, required skills, and qualifications for this position..."
              />
              {errors.jobDescription && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.jobDescription.message}
                </p>
              )}

              {/* Location Type */}
              <h3 className="text-lg font-bold mt-8 mb-2">
                Job posting location
              </h3>
              <label className="block font-medium mb-1">
                Which option best describes this job's location? *
              </label>
              <select
                {...register("locationType")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
              >
                <option value="On-site">On-site</option>
                <option value="Remote">Remote</option>
                <option value="Hybrid">Hybrid</option>
              </select>

              {/* City */}
              <label className="block font-medium mb-1">City *</label>
              <input
                type="text"
                {...register("city", { required: "City is required" })}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
              />
              {errors.city && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.city.message}
                </p>
              )}

              {/* Area + Pincode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block font-medium mb-1">Area</label>
                  <input
                    type="text"
                    {...register("area")}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block font-medium mb-1">Pincode</label>
                  <input
                    type="text"
                    {...register("pincode")}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              {/* Address */}
              <label className="block font-medium mb-1">Street address</label>
              <input
                type="text"
                {...register("address")}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
              />

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={() => setActiveForm("account")}
                  className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Job Details Form */}
        {activeForm === "details" && (
          <form
            onSubmit={handleSubmit(onDetailsSubmit)}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10"
          >
            {/* Job Type */}
            <div>
              <label className="block text-sm font-semibold mb-4">
                Job type *
              </label>
              <div className="flex flex-wrap gap-3">
                {jobTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handleJobTypeToggle(type)}
                    className={`px-4 py-2 text-sm rounded-full border ${
                      formData.jobTypes.includes(type)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
              {errors.jobTypes && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.jobTypes.message}
                </p>
              )}
            </div>

            {/* Schedule */}
            <div>
              <label className="block text-sm font-semibold mb-4">
                Schedule
              </label>
              <div className="flex flex-wrap gap-3">
                {visibleSchedules.map((schedule) => (
                  <button
                    key={schedule}
                    type="button"
                    onClick={() => handleScheduleToggle(schedule)}
                    className={`px-4 py-2 text-sm rounded-full border ${
                      formData.schedules.includes(schedule)
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {schedule}
                  </button>
                ))}
              </div>
              {scheduleOptions.length > 4 && (
                <button
                  type="button"
                  onClick={() => setShowMoreSchedule(!showMoreSchedule)}
                  className="mt-3 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  {showMoreSchedule ? "Show less" : "Show 5 more"}
                  <ChevronDown
                    className={`inline-block ml-1 w-4 h-4 transition-transform ${
                      showMoreSchedule ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Number of People */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Number of people you wish to hire for this job *
              </label>
              <select
                {...register("numberOfPeople", {
                  required: "Please select how many people you want to hire",
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select an option</option>
                <option value="1">1</option>
                <option value="2-5">2-5</option>
                <option value="6-10">6-10</option>
                <option value="11-25">11-25</option>
                <option value="26-50">26-50</option>
                <option value="50+">50+</option>
              </select>
              {errors.numberOfPeople && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.numberOfPeople.message}
                </p>
              )}
            </div>

            {/* Recruitment Timeline */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                Recruitment timeline for this job *
              </label>
              <select
                {...register("recruitmentTimeline", {
                  required: "Please select a recruitment timeline",
                })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              >
                <option value="">Select an option</option>
                <option value="urgent">Urgent (within 1 week)</option>
                <option value="1-2weeks">1-2 weeks</option>
                <option value="3-4weeks">3-4 weeks</option>
                <option value="1-2months">1-2 months</option>
                <option value="flexible">Flexible timeline</option>
              </select>
              {errors.recruitmentTimeline && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.recruitmentTimeline.message}
                </p>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={() => setActiveForm("job")}
                className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
              >
                Back
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </div>
          </form>
        )}

        {/* Pay and Benefits Form */}
        {activeForm === "payBenefits" && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <form
              onSubmit={handleSubmit(onPayBenefitsSubmit)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              {/* Pay Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8">
                  Pay
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        ₹
                      </span>
                      <input
                        type="text"
                        value={formData.payRange.min}
                        onChange={(e) =>
                          setValue("payRange.min", e.target.value)
                        }
                        className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Minimum amount"
                      />
                    </div>
                    <span className="text-sm text-gray-500 mt-1">
                      per month to
                    </span>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Amount
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                        ₹
                      </span>
                      <input
                        type="text"
                        value={formData.payRange.max}
                        onChange={(e) =>
                          setValue("payRange.max", e.target.value)
                        }
                        className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Maximum amount"
                      />
                    </div>
                    <span className="text-sm text-gray-500 mt-1">
                      per month
                    </span>
                  </div>
                </div>
              </div>

              {/* Supplemental Pay Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Supplemental Pay
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {supplementalPayOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleSupplementalPay(option)}
                      className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formData.supplementalPay.includes(option)
                          ? "bg-blue-50 border-blue-300 text-blue-700"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-2 text-lg font-light">
                        {formData.supplementalPay.includes(option) ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          "+"
                        )}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  Benefits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {visibleBenefits.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => toggleBenefit(option)}
                      className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                        formData.benefits.includes(option)
                          ? "bg-blue-50 border-blue-300 text-blue-700"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span className="mr-2 text-lg font-light">
                        {formData.benefits.includes(option) ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          "+"
                        )}
                      </span>
                      {option}
                    </button>
                  ))}
                </div>

                {benefitOptions.length > 8 && (
                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => setShowMoreBenefits(!showMoreBenefits)}
                      className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      {showMoreBenefits
                        ? "Show less"
                        : `Show ${benefitOptions.length - 8} more`}
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform ${
                          showMoreBenefits ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setActiveForm("details")}
                  className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <span className="mr-2">←</span>
                  Back
                </button>
                <button
                  type="submit"
                  className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Continue
                  <span className="ml-2">→</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Preferences Form */}
        {activeForm === "preferences" && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <form
              onSubmit={handleSubmit(onPreferencesSubmit)}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
            >
              {/* Communication preferences */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Communication preferences
                </h2>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Get application updates{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter email address"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {formData.additionalEmails.map((email, index) => (
                  <div key={index} className="mb-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) =>
                        handleAdditionalEmailChange(index, e.target.value)
                      }
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      placeholder="Additional email address"
                    />
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addEmail}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium mb-6"
                >
                  <span className="text-xl mr-2">+</span>
                  Add email
                </button>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="individual-emails"
                    {...register("individualEmails")}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor="individual-emails"
                    className="ml-3 text-sm text-gray-700"
                  >
                    Send an individual email each time someone applies.
                  </label>
                </div>
              </div>

              {/* Application preferences */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  Application preferences
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="resume-required"
                      {...register("resumeRequired")}
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="resume-required"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Resume is required
                    </label>
                  </div>

                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="contact-candidates"
                      {...register("contactCandidates")}
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label
                      htmlFor="contact-candidates"
                      className="ml-3 text-sm text-gray-700"
                    >
                      Let potential candidates contact you about this job by
                      email to the address provided.
                    </label>
                  </div>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => setActiveForm("payBenefits")}
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>

                <div className="flex items-center space-x-4">
                  <button
                    type="button"
                    onClick={() => setActiveForm("preview")}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Preview
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium flex items-center"
                  >
                    Continue
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Preview Page */}
        {activeForm === "preview" && (
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
                        {formData.jobTypes.length > 0 ? (
                          <ul className="list-disc list-inside">
                            {formData.jobTypes.map((type, index) => (
                              <li key={index}>{type}</li>
                            ))}
                          </ul>
                        ) : (
                          "Not specified"
                        )}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Schedules</p>
                      <div className="font-medium">
                        {formData.schedules.length > 0 ? (
                          <ul className="list-disc list-inside">
                            {formData.schedules.map((schedule, index) => (
                              <li key={index}>{schedule}</li>
                            ))}
                          </ul>
                        ) : (
                          "Not specified"
                        )}
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
                      <p className="text-sm text-gray-500">
                        Recruitment Timeline
                      </p>
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
                      <p className="text-sm text-gray-500">
                        Notification Email
                      </p>
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
                      <p className="text-sm text-gray-500">
                        Contact Candidates
                      </p>
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
        )}
      </main>

      {/* Footer */}
      <IndeedFooter />

      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </div>
  );
}
