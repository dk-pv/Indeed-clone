

import React, { useState, useEffect } from "react";
import { ChevronDown, ExternalLink,LogOut } from "lucide-react";
import {Link} from 'react-router-dom'
import jobpostImg from "../assets/jobpost.png";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function IndeedEmployerPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState("user@example.com");
  const [formData, setFormData] = useState({
    companyName: "",
    fullName: "",
    referralSource: "",
    phone: "",
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setUserEmail(user?.email || "user@example.com");
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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

      {/* Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <img
          src={jobpostImg}
          alt="Job post"
          className="w-[800px] h-[250px] object-contain mx-auto"
        />
      </div>

      {/* Form Section */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">Create an employer account</h2>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First and last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            How did you hear about us?
          </label>
          <select
            name="referralSource"
            value={formData.referralSource}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select an option</option>
            <option value="linkedin">LinkedIn</option>
            <option value="google">Google</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone number
          </label>
          <PhoneInput
            country={"in"}
            value={formData.phone}
            onChange={(value) => setFormData({ ...formData, phone: value })}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
            inputStyle={{
              width: "100%",
              height: "42px",
              borderRadius: "0.375rem",
              border: "1px solid #d1d5db",
              fontSize: "1rem",
              paddingLeft: "48px", // space for flag
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
          <p className="text-sm text-gray-500 mt-1">
            For account management communication. Not visible to jobseekers.
          </p>
        </div>

        <div className="pt-4">
          <Link to={'/addJobDetails2'}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 inline-flex items-center">
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
          </Link>
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
