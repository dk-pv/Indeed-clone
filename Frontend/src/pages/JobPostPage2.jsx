import { useState, useEffect } from "react";
import { ChevronDown, ExternalLink, LogOut } from "lucide-react";
import {Link} from 'react-router-dom'
import jobpostImg2 from "../assets/jobpost2.png";
import "react-phone-input-2/lib/style.css";

export default function IndeedEmployerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("user@example.com");

  const [formData, setFormData] = useState({
    jobTitle: "",
    locationType: "On-site",
    city: "",
    area: "",
    pincode: "",
    address: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserEmail(user?.email || "user@example.com");
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
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
          src={jobpostImg2}
          alt="Job post"
          className="w-[800px] h-[250px] object-contain mx-auto"
        />
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <form onSubmit={handleSubmit}>
          {/* Job Title */}
          <label className="block font-semibold mb-1">Job title *</label>
          <input
            type="text"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
          />

          {/* Location Type */}
          <h3 className="text-lg font-bold mt-8 mb-2">Job posting location</h3>
          <label className="block font-medium mb-1">
            Which option best describes this job's location? *
          </label>
          <select
            name="locationType"
            value={formData.locationType}
            onChange={handleChange}
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
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4"
          />

          {/* Area + Pincode */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block font-medium mb-1">Area</label>
              <input
                type="text"
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
            </div>
          </div>

          {/* Address */}
          <label className="block font-medium mb-1">Street address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-6"
          />

          {/* Submit Button */}
          <Link to={'/addJobDetails3'}>
              <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center"
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
          </Link>
          
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
