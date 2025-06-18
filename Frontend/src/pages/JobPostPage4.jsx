


// import { useState, useEffect } from "react";
// import { ChevronDown, ExternalLink, LogOut, Check, Link } from "lucide-react";
// import jobpostImg4 from "../assets/jobpost4.png";
// import { useNavigate } from "react-router-dom";

// export default function IndeedEmployerPage() {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [userEmail, setUserEmail] = useState("user@example.com");
//   const [selectedSupplementalPay, setSelectedSupplementalPay] = useState([]);
//   const [selectedBenefits, setSelectedBenefits] = useState([]);
//   const [showMoreBenefits, setShowMoreBenefits] = useState(false);
//   const [payRange, setPayRange] = useState({ min: '', max: '' });
//   const navigate = useNavigate();

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));
//     setUserEmail(user?.email || "user@example.com");
//   }, []);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const toggleSupplementalPay = (item) => {
//     setSelectedSupplementalPay(prev =>
//       prev.includes(item)
//         ? prev.filter(i => i !== item)
//         : [...prev, item]
//     );
//   };

//   const toggleBenefit = (item) => {
//     setSelectedBenefits(prev =>
//       prev.includes(item)
//         ? prev.filter(i => i !== item)
//         : [...prev, item]
//     );
//   };

//   const handlePayChange = (field, value) => {
//     setPayRange(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = {
//       payRange,
//       selectedSupplementalPay,
//       selectedBenefits
//     };
//     console.log('Form Data:', formData);
//     navigate("/addJobDetails5");
//   };

//   const supplementalPayOptions = [
//     'Performance bonus',
//     'Yearly bonus',
//     'Commission pay',
//     'Overtime pay',
//     'Quarterly bonus',
//     'Shift allowance',
//     'Joining bonus',
//     'Other'
//   ];

//   const benefitOptions = [
//     'Health insurance',
//     'Provident Fund',
//     'Cell phone reimbursement',
//     'Paid sick time',
//     'Work from home',
//     'Paid time off',
//     'Food provided',
//     'Life insurance',
//     'Dental insurance',
//     'Flexible schedule',
//     'Employee discount',
//     'Retirement plan'
//   ];

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
//           src={jobpostImg4}
//           alt="Job post"
//           className="w-[800px] h-[250px] object-contain mx-auto"
//         />
//       </div>

//       {/* Form */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
//           {/* Pay Section */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-8">Pay</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
//                   <input
//                     type="text"
//                     value={payRange.min}
//                     onChange={(e) => handlePayChange('min', e.target.value)}
//                     className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Minimum amount"
//                   />
//                 </div>
//                 <span className="text-sm text-gray-500 mt-1">per month to</span>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Amount
//                 </label>
//                 <div className="relative">
//                   <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">₹</span>
//                   <input
//                     type="text"
//                     value={payRange.max}
//                     onChange={(e) => handlePayChange('max', e.target.value)}
//                     className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Maximum amount"
//                   />
//                 </div>
//                 <span className="text-sm text-gray-500 mt-1">per month</span>
//               </div>
//             </div>
//           </div>

//           {/* Supplemental Pay Section */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Supplemental Pay</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {supplementalPayOptions.map((option) => (
//                 <button
//                   key={option}
//                   type="button"
//                   onClick={() => toggleSupplementalPay(option)}
//                   className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
//                     selectedSupplementalPay.includes(option)
//                       ? 'bg-blue-50 border-blue-300 text-blue-700'
//                       : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   <span className="mr-2 text-lg font-light">
//                     {selectedSupplementalPay.includes(option) ? <Check className="w-4 h-4" /> : '+'}
//                   </span>
//                   {option}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Benefits Section */}
//           <div className="mb-12">
//             <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits</h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               {benefitOptions.slice(0, showMoreBenefits ? benefitOptions.length : 8).map((option) => (
//                 <button
//                   key={option}
//                   type="button"
//                   onClick={() => toggleBenefit(option)}
//                   className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
//                     selectedBenefits.includes(option)
//                       ? 'bg-blue-50 border-blue-300 text-blue-700'
//                       : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
//                   }`}
//                 >
//                   <span className="mr-2 text-lg font-light">
//                     {selectedBenefits.includes(option) ? <Check className="w-4 h-4" /> : '+'}
//                   </span>
//                   {option}
//                 </button>
//               ))}
//             </div>

//             {benefitOptions.length > 8 && (
//               <div className="mt-4">
//                 <button
//                   type="button"
//                   onClick={() => setShowMoreBenefits(!showMoreBenefits)}
//                   className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
//                 >
//                   {showMoreBenefits ? 'Show less' : `Show ${benefitOptions.length - 8} more`}
//                   <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showMoreBenefits ? 'rotate-180' : ''}`} />
//                 </button>
//               </div>
//             )}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex justify-between items-center pt-8 border-t border-gray-200">
//             <button
//               type="button"
//               className="flex items-center px-6 py-3 text-gray-700 hover:text-gray-900 focus:outline-none"
//             >
//               <span className="mr-2">←</span>
//               Back
//             </button>
//             <Link />
//             <button
//               type="submit"
//               className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//             >
//               Continue
//               <span className="ml-2">→</span>
//             </button>
//           </div>

//           {/* Feedback Link */}
//           <div className="text-center mt-8 pt-4 border-t border-gray-100">
//             <p className="text-sm text-gray-500">
//               Have feedback?{' '}
//               <a href="#" className="text-blue-600 hover:text-blue-800">
//                 Tell us more.
//               </a>
//             </p>
//           </div>
//         </form>
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
import { ChevronDown, ExternalLink, LogOut, Check } from "lucide-react";
import jobpostImg4 from "../assets/jobpost4.png";
import { useNavigate } from "react-router-dom";

export default function IndeedEmployerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [selectedSupplementalPay, setSelectedSupplementalPay] = useState([]);
  const [selectedBenefits, setSelectedBenefits] = useState([]);
  const [showMoreBenefits, setShowMoreBenefits] = useState(false);
  const [payRange, setPayRange] = useState({ min: "", max: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserEmail(user?.email || "user@example.com");
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSupplementalPay = (item) => {
    setSelectedSupplementalPay((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const toggleBenefit = (item) => {
    setSelectedBenefits((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handlePayChange = (field, value) => {
    setPayRange((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!payRange.min || !payRange.max) {
      alert("Please fill in both minimum and maximum amount.");
      return;
    }

    const formData = {
      payRange,
      selectedSupplementalPay,
      selectedBenefits,
    };

    localStorage.setItem("jobFormStep4", JSON.stringify(formData));

    console.log("Form Data:", formData);
    navigate("/addJobDetails5");
  };

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <img
          src={jobpostImg4}
          alt="Job post"
          className="w-[800px] h-[250px] object-contain mx-auto"
        />
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-8"
        >
          {/* Pay Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Pay</h2>

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
                    value={payRange.min}
                    onChange={(e) => handlePayChange("min", e.target.value)}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Minimum amount"
                  />
                </div>
                <span className="text-sm text-gray-500 mt-1">per month to</span>
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
                    value={payRange.max}
                    onChange={(e) => handlePayChange("max", e.target.value)}
                    className="w-full pl-8 pr-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Maximum amount"
                  />
                </div>
                <span className="text-sm text-gray-500 mt-1">per month</span>
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
                    selectedSupplementalPay.includes(option)
                      ? "bg-blue-50 border-blue-300 text-blue-700"
                      : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="mr-2 text-lg font-light">
                    {selectedSupplementalPay.includes(option) ? (
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
              {benefitOptions
                .slice(0, showMoreBenefits ? benefitOptions.length : 8)
                .map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => toggleBenefit(option)}
                    className={`flex items-center justify-center px-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      selectedBenefits.includes(option)
                        ? "bg-blue-50 border-blue-300 text-blue-700"
                        : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2 text-lg font-light">
                      {selectedBenefits.includes(option) ? (
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

          {/* Feedback Link */}
          <div className="text-center mt-8 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Have feedback?{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Tell us more.
              </a>
            </p>
          </div>
        </form>
      </div>

      {isDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsDropdownOpen(false)}
        ></div>
      )}
    </div>
  );
}
