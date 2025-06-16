import { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, LogOut, ArrowLeft, ArrowRight, Bold, Italic, List, HelpCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import jobpostImg5 from "../assets/jobpost5.png";
import "react-phone-input-2/lib/style.css";

export default function IndeedEmployerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [jobDescription, setJobDescription] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserEmail(user?.email || "user@example.com");
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleBack = () => {
    console.log("Go back to previous step");
    // implement navigation logic if needed
  };

  const handleContinue = () => {
    console.log("Continue to next step", jobDescription);
    // implement validation or navigation logic
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
          src={jobpostImg5}
          alt="Job post"
          className="w-[800px] h-[250px] object-contain mx-auto"
        />
      </div>

      {/* Job Description Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          {/* Job Description Label */}
          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-900 mb-2">
              Job description <span className="text-red-500">*</span>
            </label>

            {/* Formatting Toolbar */}
            <div className="flex items-center space-x-2 mb-0 p-2 bg-gray-50 border border-gray-300 rounded-t-md">
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Bold className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <Italic className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                <List className="w-4 h-4 text-gray-600" />
              </button>
              <div className="ml-auto">
                <button className="p-2 hover:bg-gray-200 rounded transition-colors">
                  <HelpCircle className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Text Area */}
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              className="w-full h-96 p-4 border border-gray-300 border-t-0 rounded-b-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none text-gray-900 placeholder-gray-400"
              placeholder="Describe the responsibilities and qualifications for this role..."
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </button>
              <Link to={'/addJobDetails6'}>
              <button
              onClick={handleContinue}
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium transition-colors"
            >
              <span>Continue</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            </Link>
            
          </div>

          {/* Feedback Text */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Have feedback? <a href="#" className="text-blue-600 hover:text-blue-700 underline">Tell us more.</a>
            </p>
          </div>
        </div>
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


